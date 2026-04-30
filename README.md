# 🔐 Formulaire d’authentification animé (React + Tailwind + Framer Motion)

Ce projet est un composant d’authentification moderne avec interface animée, comprenant la connexion et l’inscription avec une transition fluide entre les deux modes.

---

## ✨ Aperçu

Ce formulaire propose une expérience utilisateur moderne avec :

- Animation fluide entre connexion et inscription
- Panneau latéral dynamique avec transitions
- Inputs stylisés avec icônes
- Gestion des formulaires via hooks personnalisés
- Design glassmorphism

---

## 🧱 Stack technique

- React
- Tailwind CSS
- Framer Motion
- Lucide Icons
- TypeScript
- Hooks personnalisés (useChangeInput, useSubmit)

---

## 📁 Structure du projet

components/
├── Connexion.tsx
├── Inscription.tsx
├── Formulaire.tsx

hooks/
├── use-change-input.hook.ts
├── use-submit.hook.ts

types/
├── types.ts

---

## 🚀 Fonctionnalités

### 🔑 Connexion

- Email
- Mot de passe
- Gestion d’état contrôlée
- Reset automatique après succès

### 📝 Inscription

- Prénom
- Nom
- Email
- Mot de passe
- Upload d’image
- Gestion complète du formulaire

### 🎭 Animations UI

- Transition fluide login ↔ register
- Panneau latéral animé
- Entrées et sorties avec Framer Motion
- Effet moderne type SaaS

---

## 🎨 Design

- Glassmorphism (blur + transparence)
- Gradient bleu/violet moderne
- Inputs avec focus interactif
- Boutons animés hover
- UI propre et centrée

---

## ⚙️ Installation

```bash
git clone https://github.com/Alphaseny/interface-connexion-et-inscription.git
cd interface-connexion-et-inscription
npm install
npm run dev
```
