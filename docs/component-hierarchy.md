# Component Hierarchy

### SignUpContainer
- SignUpForm

### SignInContainer
- SignInForm

### HeaderContainer
- NavBar
- SearchBox

The SearchBar will allow the user to search for links to user profiles. Upon click, search bar background color will change from grey to white. The placeholder text will align left upon click.

###NavBarContainer
- User Links

The Navigation bar will contain links to the UserShowPage, ImageUploadModal,
and Logout link.

### MainContainer
- Header
- ImageIndex

### ImageIndexContainer
- ImageIndexItem

The ImageIndexContainer will house many ImageIndexItems in succession. The user will be able to interact with every ImageIndexItem on the main page. This component will fetch images in componentDidMount.

### ImageIndexItemContainer
- Profile Picture Thumbnail
- ImageIndexItem Username
- Image
- Like Button & Comment Button
- User Likes & Count
- Caption & Hashtags
- Timestamp
- Comments
- CommentBox & Report Link

The ImageIndexItemContainer will contain all the relevant data about a post. When a user submits a comment, it should dispatch a addCommentToImage action.
When a user likes a photo, it should dispatch a addLikeToImage action.

### UserProfileContainer
- NavBar
- UserDetails

The UserProfileContainer should have a UserDetails component and UserImagesIndex component.

### UserDetailsContainer
The UserDetailsContainer should dispatch a fetch UserDetails action. The fetch should include details with images associated with the user.

### EditProfileContainer
- NavBar
- Profile Picture Thumbnail

The EditProfileContainer will have a form that allows a user to edit their Name, Username, Website, and Bio information. When a user submits changes to their user profile, it should dispatch a updateProfile action.

### ImageDetailContainer(modal)
- Image
- Profile Picture Thumbnail
- ImageDetail Username
- Delete Button
- ImageDetail Username & Caption
- Hashtags
- Comments
- Like Button & Comment Button
- User Likes & Count
- Timestamp
- CommentBox

The ImageIndexItemContainer will contain all the relevant data about a post.
When a user clicks on an image to open the modal, it should dispatch a fetchSingleImage action. When a user submits a comment, it should dispatch a addCommentToImage action. When a user likes a photo, it should dispatch a addLikeToImage action.

### UploadImageContainer(modal)
The UploadImageContainer will have a modal form that allows a user to upload an image with a caption. It should dispatch a createImage action.

### LikesContainer
The LikesContainer should dispatch a addLikeToImage action or removeLikeFromImage action.

### CommentsContainer
The CommentsContainer should dispatch a addCommentToImage action or removeCommentFromImage action.

### FollowsContainer
The FollowsContainer should dispatch a followUser action or unfollowUser action.

| Path	           | Component              |
-------------------|------------------------|
| `/sign-up`       | `AuthFormContainer`    |
| `/sign-in`       | `AuthFormContainer`    |
| `/`	             | `MainContainer`        |
| `/:username`     | `UserProfileContainer` |
| `/account/edit/` | `EditProfileContainer` |
