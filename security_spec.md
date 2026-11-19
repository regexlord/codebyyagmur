# Security Specification: Private Portfolio Analytics

## 1. Data Invariants
1. **Default-Deny Catch-All**: Any path not explicitly listed under `visitEvents`, `sectionClicks`, or `admins` denies all reads and writes.
2. **Owner-Only Analytics Read**: Only the verified portfolio owner (`kahramanyagmur178@gmail.com` with `email_verified == true`, or a UID registered in `/admins/{uid}`) may `get`, `list`, or `delete` documents in `visitEvents` or `sectionClicks`.
3. **Public Write-Once Telemetry**: Unauthenticated visitors may only `create` a strictly validated `visitEvents/{eventId}` or `sectionClicks/{clickId}` document. Updates are unconditionally denied (`allow update: if false`).
4. **No Shadow Fields & Strict Sizing**: Incoming documents on `create` must satisfy `keys().hasAll(...) && keys().hasOnly(...)` with explicit `.size()` and regex bounds matching `firebase-blueprint.json`.
5. **Server Timestamp Integrity**: `createdAt` must equal `request.time`.
6. **Zero PII**: Neither `visitEvents` nor `sectionClicks` permits `email`, `ip`, `name`, or user-agent strings.

## 2. Adversarial Payloads ("Dirty Dozen")
1. Unauthenticated `list` on `/visitEvents` -> **PERMISSION_DENIED**
2. Non-owner authenticated `get` on `/visitEvents/{id}` -> **PERMISSION_DENIED**
3. Spoofed owner email with `email_verified: false` reading `/sectionClicks` -> **PERMISSION_DENIED**
4. Public `update` attempt on `/visitEvents/{id}` -> **PERMISSION_DENIED**
5. Public `delete` attempt on `/sectionClicks/{id}` -> **PERMISSION_DENIED**
6. Oversized `eventId` (> 128 chars) or invalid characters (`../bad`) -> **PERMISSION_DENIED**
7. Shadow/ghost field injection (`isAdmin: true` or `ip: "1.2.3.4"`) on `visitEvents` create -> **PERMISSION_DENIED**
8. Client-forged `createdAt` timestamp (`!= request.time`) -> **PERMISSION_DENIED**
9. Invalid `dayKey` format (`"2026-13-1"` or arbitrary string) -> **PERMISSION_DENIED**
10. Invalid `country` format (`"Turkey"` > 7 chars or lowercase) -> **PERMISSION_DENIED**
11. Arbitrary huge `detail` string (> 80 chars) on `sectionClicks` -> **PERMISSION_DENIED**
12. Client `create` / `update` / `list` attempt on `/admins/{uid}` -> **PERMISSION_DENIED**
