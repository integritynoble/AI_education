# Login System Plan — edu.platformai.org
## SSO Authentication (same method as CompareGPT-AIScientist)

---

## 1. Auth Flow Overview

Replicating the exact SSO pattern from `/home/spiritai/CompareGPT-AIScientist`:

```
User clicks "Login"
    ↓
Frontend redirects to comparegpt.io SSO URL
    ↓
User authenticates on comparegpt.io (existing account)
    ↓
SSO redirects back to edu.platformai.org/sso/callback?token=<sso_token>
    ↓
Frontend sends sso_token to backend POST /api/user/validate
    ↓
Backend exchanges sso_token with auth.comparegpt.io/sso/validate
    ↓
Backend creates JWT access_token (7-day expiry, HS256)
    ↓
Frontend stores access_token in localStorage
    ↓
Authorization: Bearer <token> on all subsequent requests
```

---

## 2. What Needs to Be Built

### 2.1 Frontend (Next.js additions)

| File | Purpose |
|------|---------|
| `src/lib/auth.ts` | Auth service — login redirect, token exchange, validate, logout (mirrors `services/user.ts`) |
| `src/lib/api.ts` | HTTP client with auto `Authorization: Bearer` header (mirrors `services/api.ts`) |
| `src/context/AuthContext.tsx` | React Context + Provider replacing Pinia store (mirrors `stores/auth.ts`) |
| `src/app/sso/callback/page.tsx` | SSO callback page (mirrors `SSOCallbackView.vue`) |
| `src/components/layout/UserMenu.tsx` | Login button / User dropdown in StickyNav |
| Update: `src/components/layout/StickyNav.tsx` | Add UserMenu to nav |

### 2.2 Backend (new FastAPI service)

| File | Purpose |
|------|---------|
| `backend/main.py` | FastAPI app with CORS, routes |
| `backend/routers/user.py` | `POST /api/user/validate`, `POST /api/user/logout` |
| `backend/services/auth_service.py` | SSO token exchange, JWT validation, user refresh (copy from AIScientist) |
| `backend/core/token_manager.py` | JWT create/verify (HS256, 7-day expiry) |
| `backend/core/config.py` | Settings (SSO_VALIDATE_URL, SECRET_KEY, DB) |
| `backend/db/models.py` | SQLAlchemy User model (SQLite) |
| `backend/db/repo.py` | User CRUD (upsert, get, clear) |
| `backend/db/schemas.py` | Pydantic request/response models |
| `backend/db/database.py` | SQLite session setup |
| `backend/requirements.txt` | Python deps |
| `backend/.env` | Environment config |

### 2.3 Infrastructure updates

| Item | Change |
|------|--------|
| PM2 | Add `edu-backend` process (FastAPI on port 3201) |
| Nginx | Add `/api/` proxy to localhost:3201 |

---

## 3. Frontend Details

### 3.1 `src/lib/auth.ts` — Auth Service

```typescript
// Constants
const ACCESS_TOKEN_KEY = 'edu_access_token'
const USER_PROFILE_KEY = 'edu_user_profile'

// SSO Config
const SSO_URL = 'https://comparegpt.io/sso-redirect?redirect=https://edu.platformai.org/sso/callback'
const LOGOUT_URL = 'https://edu.platformai.org'
const API_BASE = '/api'

// Methods:
// initiateLogin()       → window.location.href = SSO_URL
// handleOAuthCallback(ssoToken) → POST /api/user/validate {sso_token}
//                                 → store access_token + user in localStorage
// validateToken()       → POST /api/user/validate {} (token in header)
// logout()              → POST /api/user/logout → clear localStorage
// getAccessToken()      → localStorage.getItem(ACCESS_TOKEN_KEY)
// isAuthenticated()     → !!getAccessToken()
// getCachedUserProfile()→ JSON.parse(localStorage.getItem(USER_PROFILE_KEY))
```

### 3.2 `src/lib/api.ts` — HTTP Client

```typescript
// Thin fetch wrapper that:
// 1. Prepends API_BASE to URL
// 2. Adds Authorization: Bearer <token> from localStorage
// 3. Handles JSON serialization
// 4. Returns parsed response

async function apiPost<T>(path: string, body: object): Promise<T>
async function apiGet<T>(path: string): Promise<T>
```

### 3.3 `src/context/AuthContext.tsx` — React Auth Provider

```typescript
// State:
// - user: User | null
// - isAuthenticated: boolean
// - isLoading: boolean
// - error: string | null

// Actions:
// - initialize()           → check localStorage, validate token
// - handleOAuthCallback(t)  → exchange sso_token for access_token
// - login()                → redirect to SSO
// - logout()               → clear everything, redirect

// Wraps the app in layout.tsx
// Runs initialize() on mount
```

### 3.4 `src/app/sso/callback/page.tsx` — SSO Callback Page

```
1. Read ?token= or ?access_token= from URL search params
2. Show "Authenticating..." spinner
3. Call authContext.handleOAuthCallback(token)
4. On success → redirect to /
5. On error → show error message + "Try Again" button
6. 15-second safety timeout
```

### 3.5 `src/components/layout/UserMenu.tsx` — Nav Auth UI

```
If not authenticated:
  → Show "Login" button (calls auth.login())

If authenticated:
  → Show user avatar/name + dropdown:
     - Username + Role
     - Credits: X.XX
     - Logout button
```

### 3.6 StickyNav Update

Add `<UserMenu />` to the right side of the nav, next to the "Get Started" button.

---

## 4. Backend Details

### 4.1 Endpoints

```
POST /api/user/validate
  Body: { "sso_token": "xxx" }  → Exchange SSO token for JWT
  OR
  Header: Authorization: Bearer <jwt>  → Validate existing JWT
  Body: {}

POST /api/user/logout
  Header: Authorization: Bearer <jwt>
  Response: { "success": true, "message": "Logged out" }
```

### 4.2 Auth Service Logic (copied from AIScientist)

**exchange_sso_token(sso_token):**
1. POST to `https://auth.comparegpt.io/sso/validate` with `Authorization: Bearer <sso_token>`
2. Verify response: `data.valid == true`, `data.user_info` exists
3. Extract `api_key` from response
4. Upsert user in SQLite (user_id, user_name, role, credit, token, sso_token, api_key)
5. Create JWT with user_id (HS256, 7-day expiry)
6. Return `{ success, access_token, user }`

**validate_access_token(authorization):**
1. Extract JWT from `Bearer <token>`
2. Verify JWT signature + expiration → get user_id
3. Fetch user from SQLite
4. Optionally refresh user data from SSO (with stored sso_token)
5. Return `{ success, valid, user }`

### 4.3 Database (SQLite)

```python
# Table: users
# user_id      INTEGER PRIMARY KEY
# user_name    TEXT
# role         TEXT
# credit       REAL DEFAULT 0
# token        REAL DEFAULT 0
# sso_token    TEXT
# api_key      TEXT
# updated_at   DATETIME
```

### 4.4 Configuration

```python
# backend/.env
APP_PORT=3201
SECRET_KEY="edu-platform-secret-change-in-production"
ACCESS_TOKEN_EXPIRE_DAYS=7
SSO_VALIDATE_URL=https://auth.comparegpt.io/sso/validate
CORS_ORIGINS=["https://edu.platformai.org","http://localhost:3200"]
```

---

## 5. Nginx Update

Add API proxy block to existing edu.platformai.org config:

```nginx
# Inside the server { ... } block, BEFORE the location / block:

location /api/ {
    proxy_pass         http://localhost:3201/api/;
    proxy_http_version 1.1;
    proxy_set_header   Host $host;
    proxy_set_header   X-Real-IP $remote_addr;
    proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header   X-Forwarded-Proto $scheme;
}
```

---

## 6. File Structure (additions)

```
/home/spiritai/edu/edu_comp/
├── src/
│   ├── lib/
│   │   ├── auth.ts              ← NEW: Auth service (SSO login, token mgmt)
│   │   ├── api.ts               ← NEW: HTTP client with auto Bearer header
│   │   └── glossary.ts          (existing)
│   ├── context/
│   │   └── AuthContext.tsx       ← NEW: React auth provider
│   ├── app/
│   │   ├── sso/
│   │   │   └── callback/
│   │   │       └── page.tsx     ← NEW: SSO callback handler
│   │   └── ...                  (existing pages)
│   └── components/
│       └── layout/
│           ├── UserMenu.tsx     ← NEW: Login/user dropdown
│           └── StickyNav.tsx    (UPDATE: add UserMenu)
├── backend/
│   ├── main.py                  ← NEW: FastAPI app
│   ├── requirements.txt         ← NEW: Python deps
│   ├── .env                     ← NEW: Backend config
│   ├── routers/
│   │   └── user.py              ← NEW: /api/user/* endpoints
│   ├── services/
│   │   └── auth_service.py      ← NEW: SSO exchange + JWT validation
│   ├── core/
│   │   ├── config.py            ← NEW: Pydantic settings
│   │   └── token_manager.py     ← NEW: JWT create/verify
│   └── db/
│       ├── database.py          ← NEW: SQLite session
│       ├── models.py            ← NEW: User model
│       ├── repo.py              ← NEW: User CRUD
│       └── schemas.py           ← NEW: Request/response schemas
└── nginx/
    └── edu.platformai.org.conf  (UPDATE: add /api/ proxy)
```

---

## 7. Implementation Order

1. **Backend first** — create FastAPI service, test SSO exchange manually
2. **Frontend auth lib** — auth.ts, api.ts
3. **AuthContext** — wrap app, initialize on mount
4. **SSO callback page** — handle redirect
5. **UserMenu** — add to StickyNav
6. **Nginx update** — add /api/ proxy
7. **PM2** — start backend process
8. **Test end-to-end** — login via comparegpt.io → callback → authenticated state

---

## 8. Security Notes

- JWT secret must be changed in production (not the default)
- Access tokens stored in localStorage (same as AIScientist — acceptable for this use case)
- CORS restricted to edu.platformai.org only
- SSO validation timeout: 10s for exchange, 5s for refresh
- 15-second safety timeout on callback page
- Token replay prevention via JWT ID (jti)
