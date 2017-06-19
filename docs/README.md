# ROBOgram

[ROBOgram live][heroku]

[heroku]: http://www.herokuapp.com/ROBOgram

## Minimum Viable Product

ROBOgram is a full-stack web application inspired by Instagram.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

- Hosting on Heroku
- New Account Creation
- Login & Logout
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
- [View Wireframes](/https://github.com/kingsleyliao/ROBOgram/tree/master/docs/wireframes)
- [React Components](component-hierarchy.md)
- [API endpoints](api-endpoints.md)
- [DB schema](schema.md)
- [Sample State](sample-state.md)

## Implementation Timeline

### Phase 1: Backend Setup, Front-End User Authentication (2 days)
**Objective:** Functioning Rails project with Front-End Authentication.

### Phase 2: Backend Setup for Images. Build Frontend Components for Images (2 days)
**Objective:** Photos can be created and destroyed through a Photos API. Images are rendered on the main and user profile pages

### Phase 3: Implement Followers/Following feature (1 day)
**Objective**: Users can follow and unfollow other users. Followers/Following count rendered on user profile page

### Phase 4: Photo Feed and Search (1 day)
**Objective**: Display following users' photos. Users can be searched by the search bar.

### Phase 5: Comments (1 day)
**Objective**: A users's own comments can be created and destroyed on an image. Users cannot remove comments by other users.

### Phase 6: Likes (1 day)
**Objective**: Images can be liked and unliked. A count of number of likes are shown on each image.
