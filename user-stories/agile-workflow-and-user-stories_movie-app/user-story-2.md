# Movie Detail Page

## Value Proposition

**As a** `film enthusiast` <br>
**I want to** `view detailed information about a selected movie` <br>
**so that** `I can decide if I want to watch it.` <br>

## Description

![wireframe](./assets/scribble-movie-details-page.png)

## Acceptance Criteria

### 1. Navigation

- When I click on a movie in the list, I am navigated to the movie detail page.
- A back arrow is visible and navigates me back to the movie list.

### 2. Movie Information

- The movie detail page displays:
  - Movie title
  - Poster image
  - Release date
  - Short description (overview)

### 3. Layout

- The poster is displayed prominently on the right side.
- Title, release date, and description are shown on the left in a clear and readable layout.

### 4. Data Handling

- The correct movie details are displayed based on the selected movie.
- If the movie data cannot be loaded, an error message is displayed.

## Tasks

- Set up routing for movie detail page
- Implement navigation from movie list to detail page
- Fetch movie details by ID
- Create movie detail layout (title, poster, release date, description)
- Implement back navigation
- Add error handling for failed detail fetch
- Add basic tests for navigation and detail rendering
