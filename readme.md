# 🎮 NKP's Arcade – Online Game Arcade

A simple but stylish arcade hub showcasing a list of playable games.

---

## 🔗 Live Site

👉 [https://gamez-1cgq.onrender.com/](https://gamez-1cgq.onrender.com/)

- Please allow 1-2 minutes for render to start the back-end server

---

## 📂 GitHub Repos

- Frontend: [https://github.com/nkp521/Gamez](https://github.com/nkp521/Gamez)
- Backend: [https://github.com/nkp521/games-api](https://github.com/nkp521/games-api)

---

## ⚛️ Deployment

Both frontend and backend are hosted on **Render**:

- Frontend: [https://gamez-1cgq.onrender.com/](https://gamez-1cgq.onrender.com/)
- Backend (API): [https://games-api-2wkh.onrender.com/](https://games-api-2wkh.onrender.com/)

---

## ⚙️ Features

- Home Page which initially loads all games
- Header with Navagation Links to other pages
- Styled game cards with play, description, and favorite toggle
- Favorite Page, where all of the favorited games live
- Search filter by title
- Submit Game Form where you can submit a HTML5 ready game

---

## 👨🏽‍💻 Run It Locally

```bash
# Clone the repo
git clone https://github.com/nkp521/Gamez
cd Gamez

# Start local JSON server
json-server --watch db.json --port 3001

# In a new terminal, start the frontend
npm install
npm start
```

### 🚨 Update URLs

Make sure to update the URLs in `App.js` if you run it locally:

```js
const gameUrl = "http://localhost:3001/games/";
const favoriteUrl = "http://localhost:3001/favorites/";
```
