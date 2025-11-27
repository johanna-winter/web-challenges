# Watchlist

## Value Proposition

**As a** `film enthusiast` <br>
**I want to** `save movies to a personal watchlist` <br>
**so that** `I can keep track of what I want to watch later` <br>

## Description

![wireframe](./assets/scribble-watchlist.png)

## Acceptance Criteria

### 1. Add to Watchlist

- On the movie detail page, I can click an “Add to Watchlist” button.
- When I click the button, the movie is added to my watchlist.

### 2. Watchlist View

- I can view my watchlist by tapping the “Watchlist” tab.
- The watchlist displays all saved movies in a grid layout similar to the main list.
- Each item shows:
  - Movie poster
  - Movie title
  - Movie rating

### 3. Empty State

- If my watchlist is empty, I see a message:
  > "Your watchlist is currently empty. Start adding movies you want to watch by clicking 'Add to Watchlist' on the movie details page. Your selected movies will appear here."

### 4. Persistence

- Movies added to the watchlist persist when I leave and return to the app.

### 5. Data Consistency

- Movies added to the watchlist appear only once (no duplicates).

## Tasks

- Add bottom navigation with "Home" and "Watchlist" tabs
- Update app routing to support tab-based navigation
- Implement active tab state styling
- Add navigation logic between Home and Watchlist views

- Add “Add to Watchlist” button on movie detail page
- Implement watchlist state management (local storage or global store)
- Prevent duplicate watchlist entries
- Create watchlist page and layout
- Display empty watchlist message when list is empty
- Render movies in watchlist using MovieCard component
- Write basic tests for add/remove functionality and navigation
