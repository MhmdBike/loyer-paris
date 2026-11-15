<div align="center">

# 🏛️ LoyerLégal Paris

**A civic-tech platform for Paris rent cap compliance audits & tenant advocacy (Loi ÉLAN)**

[![Website](https://img.shields.io/badge/Live_Demo-loyerparis.app-2563eb?style=for-the-badge&logo=googlechrome&logoColor=white)](https://loyerparis.app)
[![Tech](https://img.shields.io/badge/Vanilla_JS-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Deployment](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](#)

<br />

<img width="950" height="449" alt="Screenshot 2026-11-15 061849" src="https://github.com/user-attachments/assets/58c649c4-3adb-47df-a403-eea86678d2a1" />

</div>

---

## 📌 Project Overview

**LoyerLégal Paris** is a zero-dependency civic-tech web platform designed to empower tenants in Paris to verify whether their rent complies with legal caps established under the French **Loi ÉLAN**.

With a significant percentage of Parisian leases exceeding the reference rent ceiling (*loyer de référence majoré*) or applying abusive surcharges (*compléments de loyer*), this platform enables users to audit their contract in under a minute, calculate unlawful overpayments, and generate a legally structured formal notice (*mise en demeure*).

### ✨ Key Features

- **⚡ Interactive Audit Calculator:** Instantly evaluates legal limits based on the specific district, construction era, room count, and furnishing status.
- **🗺️ Programmatic SEO Architecture:** 20 statically optimized, high-performance pages covering all Paris municipal districts (arrondissements 1 through 20).
- **🌓 Native Dark / Light Mode:** Fully responsive UI engineered with dynamic CSS variables and zero flicker on page load.
- **📄 Legal Notice Generator:** Auto-generates structured contestation notices citing relevant articles of the French housing code.
- **📬 Serverless Contact System:** Lightweight API integration via Web3Forms for secure, backend-less client messaging.

---

## 🛠️ Tech Stack

- **Frontend:** Semantic HTML5, Modern CSS3 (Variables, Grid, Flexbox), Vanilla JavaScript (ES6+).
- **Performance:** Zero external runtime dependencies, sub-second load times, 95+ Google Lighthouse audit scores.
- **Integrations:** Web3Forms REST API for form handling.
- **Hosting & Infrastructure:** Deployed on Vercel Edge Network with automated CI/CD and custom SSL/DNS routing.

---

## 📂 Repository Structure

```text
loyerparis.app/
├── index.html              # Main application landing page & calculator
├── style.css               # Design system, responsive layout & theme variables
├── script.js               # Calculation engine, theme toggle & API integration
├── sitemap.xml             # Search engine indexing map
├── robots.txt              # Crawler access directives
└── districts/              # Programmatic SEO pages (Arrondissements 1-20)
    ├── paris-1.html
    ├── paris-2.html
    └── ... (through paris-20.html)
```
---

## 🚀 Local Setup & Installation

To run or inspect this project locally:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/MohammedTahar/loyer-paris.git](https://github.com/MohammedTahar/loyer-paris.git)
   cd loyer-paris
   ```

2. **Run the application:**
   Open `index.html` directly in any modern browser, or launch it with a local server extension (such as *Live Server* in VS Code).

---

## 👤 Author

- **Developer:** Mohammed Tahar
- **Live Platform:** [https://loyerparis.app](https://loyerparis.app)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
