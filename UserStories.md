# Gamez App

## Feature 1: View All Games

**User Story**  
As a user, I want to see a list of games I can play on the site.

**Details**  
Games will be loaded from a local `db.json`, each with a thumbnail and title. Clicking on a game opens a popup to play it.

---

## Feature 2: Play Game in Popup

**User Story**  
As a user, I want to click a game and have it open up in a popup window so I can start playing right away.

**Details**  
The popup shows the title and an embedded game iframe. It should be easy to close.

---

## Feature 3: Favorites Tab

**User Story**  
As a user, I want to save games I like into a favorites list so I can come back to them later.

**Details**  
Favorites are stored in a local json-server. Users can click a "favorite" button to add. The Favorites tab shows all saved games.

---

## Feature 4: Submit Your Own Game

**User Story**  
As a user, I want to add a game by providing a title and embed link so I can play games that aren't already listed.

**Details**  
A simple form will collect the game title and iframe link. Submitted games get added to `db.json` and show up like all other games.

---

## Feature 5: Navigation Bar

**User Story**  
As a user, I want to switch between All Games, Favorites, and Submit Game pages easily.

**Details**  
A nav bar allows routing to Home, Favorites, and Submit tabs using React Router.
