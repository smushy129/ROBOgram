# InstagramClone

# FUTUREgram

[FUTUREgram live][heroku]

[heroku]: http://www.herokuapp.com/futuregram

## Minimum Viable Product

FUTUREgram is a full-stack web application inspired by Instagram.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

- Hosting on Heroku
- New Account Creation
- Login, Logout
- User Profiles with User Images
- Image Upload & Delete
- Image Feed & Follow
- Image Likes
- Image Comments
- User Search

### BONUSES
- Videos
- Hashtags
- Collapsing Comments
- Direct Messaging
- Infinite Scrolling of Images

## Design Docs
- [View Wireframes](/wireframes)
- [React Components](component-hierarchy.md)
- [API endpoints](api-endpoints.md)
- [DB schema](schema.md)
- [Sample State](sample-state.md)

## Implementation Timeline

### Phase 1: Backend Setup, Front-End User Authentication (2 days)
**Objective:** Functioning Rails project with Front-End Authentication.

### Phase 2: Images Model, API, and components (2 days)
**Objective:** Images can be created and destroyed through the API. Display images on the home page/user profile

### Phase 3: Likes (1 day)
**Objective**: Likes can be created (liked) and destroyed (un-liked) with a count of likes shown on each image.

### Phase 4: Comments (1 day)
**Objective**: Comments can be created and destroyed with all comments shown on each image.

### Phase 5: Followers/Following (1/2 day)
**Objective**: Users can follow other users and show followers and following users' count on user profile.

### Phase 6: Photo Feed and Infinite Scroll (1 day)
**Objective**: Display following users' photos with infinite scroll on the home page.
