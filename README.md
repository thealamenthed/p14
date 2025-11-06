# 📘 HRnet — React Conversion

**WealthHealth | HRnet** est l’application interne de gestion des employés d’une grande société financière.  
Cette version est une **refonte complète en React** de l’application jQuery d’origine.  
L’objectif est de **réduire la dette technique**, **améliorer les performances**, et **moderniser l’interface** tout en conservant les mêmes fonctionnalités.

---

## 🚀 Objectif du projet

Ce projet est réalisé dans le cadre du **Projet 14 — OpenClassrooms : “Faites passer une librairie jQuery vers React”**.

### 🎯 Missions :

- Convertir l’application HRnet de **jQuery vers React**
- Créer les pages **“Create Employee”** et **“Employee List”**
- Convertir l'un des **quatre plugins** jQuery actuels en React (DateTimePicker, SelectMenu, DataTables, Modal).
- Remplacer les **3 plugins** jQuery restants par des composants React ou importer depuis des libraires existantes.
- Effectuer une **analyse de performance avant/après** avec Lighthouse
- Documenter le composant React converti

---

## 🧱 Stack technique

| Technologie                | Rôle                              |
| -------------------------- | --------------------------------- |
| **React 18**               | Base de l’application             |
| **Vite**                   | Build moderne et rapide           |
| **Redux Toolkit**          | Gestion d’état globale            |
| **React Router DOM**       | Navigation entre les pages        |
| **Tailwind CSS v4**        | Stylisation moderne et responsive |
| **PostCSS / Autoprefixer** | Préprocesseurs CSS                |
| **Lighthouse**             | Analyse des performances          |

---

## 📂 Structure du projet

```
src/
├── app/
│   ├── store.js              # Configuration Redux
│   └── routes.jsx            # Routing principal
├── components/
│   └── Navbar.jsx            # Barre de navigation
├── data/
│   └── usStates.js           # Données des États US
├── features/
│   └── employees/
│       ├── employeeSlice.js  # Reducer + actions Redux
│       ├── CreateEmployee.jsx # Page de création d'employé
│       └── EmployeeList.jsx   # Page de liste des employés
├── style/
│   └── index.css             # Styles globaux avec Tailwind
├── assets/                   # Images et ressources statiques
├── App.jsx                   # Composant racine de l'application
├── main.jsx                  # Point d'entrée de l'application
└── index.css                 # Styles de base
```

---

## ⚙️ Installation

### 1️⃣ Cloner le dépôt

```bash
git clone https://github.com/thealamenthed/p14.git
cd p14/hrnet-react
```

### 2️⃣ Installer les dépendances

```bash
npm install
```

### 3️⃣ Lancer le serveur de développement

```bash
npm run dev
```

➡️ Ouvrir [http://localhost:5173](http://localhost:5173)

### 4️⃣ Créer le build de production

```bash
npm run build
npm run preview
```

---

## 📜 Auteur

- 👤 **Développeur** : Dalila Lé
- 🏫 **Formation** : OpenClassrooms — Développeur d'application - JavaScript React
- 📅 **Année** : 2025
