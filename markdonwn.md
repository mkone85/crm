# Projekt: Modular CRM/Hosting SaaS & Self-Hosting

## Ziel
Entwicklung einer **modularen CRM/Hosting Software**, die:
- Als SaaS auf unserem Server betrieben wird
- Oder Self-Hosting auf Kundenservern installiert werden kann
- Module per Abo freischaltet oder lokal aktiviert
- Admin-Bereich für Mitarbeiter/Reseller enthält
- CRM, Billing, Hosting, Tickets, Monitoring, Security umfasst

---

## Architektur
- Frontend: React + Tailwind CSS (Responsive & Mobile)
- Backend: Node.js + Express/Koa (Windsurf Server)
- Datenbank: PostgreSQL (Multi-Tenant oder pro Kunde)
- Auth: JWT + Role-Based Access Control (Admin, Mitarbeiter, Kunde, Reseller)
- API: REST/GraphQL für Core + Integrationen (Proxmox, Plesk, cPanel)
- Installer: Node.js Script / GUI (Electron optional)
- Update-System: Automatisch für SaaS, Paketbasiert für Self-Hosting

---

## Projektstruktur
/project-root
├─ /apps
│ ├─ /frontend # React App (Kunden & Admin Dashboard)
│ └─ /backend # Windsurf Server
├─ /modules # Dynamische Module (Billing, Hosting, Tickets, etc.)
├─ /installer # Self-Hosting Installer + Onboarding Wizard
├─ /db # Datenbank-Migrationen & Seed
└─ windsurf.config.js # Windsurf Config


---

## Datenbankstruktur
- Users: id, name, email, role, password_hash, created_at
- Customers: id, company_name, contact_person, email, phone, address
- Modules: id, name, description, price, active
- Subscriptions: id, customer_id, module_id, status, start_date, end_date, billing_cycle
- Servers: id, customer_id, type(Proxmox/Plesk/cPanel), config(JSONB), status
- Tickets: id, customer_id, module_id, status, priority, messages(JSONB)
- AuditLogs: id, user_id, action, timestamp
- Invoices: id, customer_id, module_id, amount, status, due_date
- Settings: key, value (global oder customer-spezifisch)

---

## Modul-Framework
- Dynamisch ladbare Module per Subscription freischaltbar
- Hooks & Jobs: Module registrieren eigene API-Endpunkte, Hintergrundjobs oder UI-Komponenten
- Abhängigkeiten prüfen automatisch
- Freischaltung: Abo → Modul aktiv; Self-Hosting → Lizenz lokal geprüft

**Beispielmodule:**
- Hosting & Server Management (VMs, Ressourcen, Backups)
- Billing & Abrechnung (Rechnungen, Aboverwaltung, Zahlungen)
- Support / Tickets (Ticketverwaltung, SLA, Chat)
- Domain & SSL (Domains, DNS, Zertifikate)
- Monitoring & Alerts (Server-Dashboards, Warnungen)
- Security / Audit Logs (MFA, IP-Whitelist, Logs)

---

## Backend (API)
- Core Endpoints:
  - POST /api/login
  - GET /api/users
  - GET /api/customers
  - GET /api/modules
  - POST /api/subscriptions/:activate
  - GET /api/servers/:id/status
  - POST /api/tickets
  - GET /api/invoices
- Integration Endpoints: Proxmox, Plesk, cPanel
- Installer Endpoints: Lizenzprüfung, Modulstatus, Updates
- Webhooks: Payment-Gateway, externe Tools

---

## Frontend (React)
- Dashboard: Kunden & Admins sehen alle Module, Abos, SLA, Tickets, Monitoring
- Admin-Bereich: Userverwaltung, Modulverwaltung, Billing-Reports, SLA-Management
- Dynamische Module: Nur sichtbar, wenn freigeschaltet
- Live-Updates: WebSockets für Serverstatus, Tickets & Monitoring
- Responsive & Mobile: Tailwind CSS

---

## Installer & Onboarding
- Self-Hosting Installer:
  - Datenbank erstellen / Verbindung prüfen
  - Admin-User anlegen
  - Grundkonfiguration (SMTP, Module, Lizenz)
  - Testlauf Dashboard
- GUI optional (Electron)
- SaaS Onboarding Wizard:
  - Registrierung → Kunde anlegen
  - Module auswählen → Freischaltung & Abo
  - Server/Service konfigurieren
  - Dashboard bereitstellen

---

## SaaS & Self-Hosting
- SaaS: Multi-Tenant DB, automatische Updates, Modul-Aktivierung per Abo
- Self-Hosting: Installer lokal, Lizenzprüfung online/offline, Module aktiv, Updates per Paket

---

## Schritt-für-Schritt Entwicklungsplan
1. Core Backend & Auth aufsetzen
2. Core Frontend Dashboard erstellen
3. Modul-Framework implementieren
4. Billing Modul + Zahlungsanbindung entwickeln
5. Hosting Modul + Proxmox/Plesk/cPanel Integration
6. Tickets / SLA Modul implementieren
7. Monitoring Modul (Server & Performance)
8. Security Modul (Audit, MFA, IP-Whitelist)
9. Installer + Onboarding Wizard entwickeln
10. Tests & Launch SaaS + Self-Hosting Pakete
