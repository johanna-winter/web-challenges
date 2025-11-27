# Visual Movie List

## Value Proposition

**As a** `film enthusiast` <br>
**I want to** `view a visual list of all available movies with their ratings` <br>
**so that** `I can make an informed choice about what to watch.` <br>

## Description

![wireframe](./assets/scribble-movie-list.png)

## Acceptance Criteria

### 1. Movie List Display

- When the app loads successfully, a list of movies is displayed in a grid layout (2 columns, multiple rows).
- Each movie card shows:
  - A poster image
  - The movie title
  - A rating badge in the top-right corner of the poster

### 2. Error State

- If the movie data cannot be retrieved, an error screen is shown instead of the movie list.
- The error screen displays the following message:
  > “Sorry, we couldn't retrieve the latest movie data at the moment. Please try again later.”

### 3. Consistency

- All movie cards have the same size and layout.
- Titles are clearly readable and placed below the movie poster.

### 4. Responsiveness

- The layout adapts to different screen sizes while maintaining the two-column structure (where possible).

### 5. Usability

- The user can visually scan a list of all currently available movies without needing extra interaction (no clicks required to simply view them).

## Tasks

- Set up project and base layout
- Implement movie API fetch (with error handling)
- Create `MovieCard` component (poster, title, rating)
- Create responsive 2-column `MovieList` component
- Ensure consistent styling and accessibility
- Add basic tests for success and error cases
