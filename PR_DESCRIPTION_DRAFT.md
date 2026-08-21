# Title
fix(dashboard): enable browser and password manager autofill on self-hosted auth forms (#12267)

## Description
- Updates `InputEl` primitive to honor explicit `autoComplete` attributes instead of unconditionally injecting `AUTOCOMPLETE_PASSWORD_MANAGERS_OFF`.
- Adds standard autofill attributes (`name`, `autoComplete="email"`, `autoComplete="current-password"`, `autoComplete="new-password"`) to self-hosted sign-in and sign-up form fields.
- Allows password managers and browsers to offer autofill suggestions and credential saving upon successful authentication.

Closes #12267
