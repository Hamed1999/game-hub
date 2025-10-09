
# 🎮 GameHub

This repository contains my **GameHub** project — developed as part of the **[Ultimate React Course (Part 1)](https://codewithmosh.com/p/ultimate-react-part1)** by *Code with Mosh*.

> A modern web application built with **React 18+**, **TypeScript**, and **Chakra UI**, designed to explore and filter video games by genre, platform, and rating using the **RAWG API**.

---

## 🚀 Project Setup

### 1️⃣ Create Vite + React + TypeScript App

```bash
npm create vite@4.1.0
npm install
git init
git add .
git commit -m "Initial Commit"
```

### 2️⃣ Install Chakra UI

Follow [Chakra UI’s official Vite setup guide](https://chakra-ui.com/docs/get-started/frameworks/vite):

```bash
npm i @chakra-ui/react @emotion/react
npx @chakra-ui/cli snippet add
npm i -D vite-tsconfig-paths
```

### 3️⃣ Install Axios (for API requests)

```bash
npm i axios
```

### 4️⃣ Install React Icons

```bash
npm i react-icons@4.7.1
```

### 5️⃣ Build the Application

```bash
npm run build
npm i -g vercel
```

---

## 🧩 Project Structure

```
src/
├── components/
│   ├── ui/
│   │   └── ColorModeSwitch.tsx
│   ├── CriticScore.tsx
│   ├── Emoji.tsx
│   ├── Footer.tsx
│   ├── GameCard.tsx
│   ├── GameCardContainer.tsx
│   ├── GameCardSkeleton.tsx
│   ├── GameGrid.tsx
│   ├── GameHeading.tsx
│   ├── GenreList.tsx
│   ├── GenreListSkeleton.tsx
│   ├── NavBar.tsx
│   ├── PlatformIconList.tsx
│   ├── PlatformSelector.tsx
│   ├── SearchInput.tsx
│   └── SortSelector.tsx
│
├── data/
│
├── hooks/
│   ├── useData.ts
│   ├── useGames.ts
│   ├── useGenres.ts
│   └── usePlatforms.tsx
│
├── services/
│   ├── api-client.ts
│   └── image-url.ts
│
├── theme/
├── App.tsx
```

---

## 🧠 Key Features

* **Dynamic Game Browsing:** Browse games by genre, platform, and rating.
* **Chakra UI Integration:** Modern, responsive UI with light/dark mode support.
* **Custom Hooks:** Fetch and manage game, genre, and platform data using TypeScript hooks.
* **Axios API Client:** Simplified communication with the RAWG API.
* **Reusable Components:** Modular design with maintainable UI logic.
* **Optimized Build:** Powered by **Vite** for blazing-fast development and deployment.

---

## 🛠️ Tech Stack

* **Frontend:** React 18+, TypeScript
* **UI Library:** Chakra UI
* **HTTP Client:** Axios
* **Icons:** React Icons
* **Build Tool:** Vite
* **Deployment:** Vercel

---

## 🎯 Purpose

This project demonstrates my understanding of **React architecture**, **TypeScript integration**, **API handling**, and **UI design** using Chakra UI.
It serves as both a **portfolio project** and a **reference for modern React best practices**.

---

## 🔗 Course Link

👉 [Ultimate React Course (Part 1)](https://codewithmosh.com/p/ultimate-react-part1)

👉 [GitHub Repository](https://github.com/Hamed1999/game-hub)


