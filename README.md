# ROBOgram

[ROBOgram live][heroku]

[heroku]: https://robogramapp.herokuapp.com/


Robogram is a web application inspired by Instagram designed exclusively for robots. Users can see photos from robots that they follow and share their own photos to their own followers. It is a full-stack project built on Ruby on Rails, PostgreSQL, and React/Redux.

## Features & Implementation

### User Authentication

Users can sign up and log into ROBOgram. Passwords are secure and never saved into the database. User authentication is implemented using BCrypt to hash passwords into a session token
to be passed on every request.  

![Image of login-page](https://github.com/kingsleyliao/ROBOgram/blob/master/app/assets/images/login-page.png)

### Photo Feed

Photos uploaded by the user's followed robots are shown here. After logging in, an AJAX request is made to the backend server to send photos. Photos listed on the photo feed are interactive. A user can see comments and likes for a photo and can also like and comment right on the feed.

![Image of photo-feed](https://github.com/kingsleyliao/ROBOgram/blob/master/app/assets/images/photo-feed-page.png)

### User Profile

On this page, a user can view photos uploaded by any particular user. A clickable list of all the photos by that user is displayed. A clicked image will bring up a modal that displays a detailed view of that photo by generating an AJAX request for that photo, likes, and comments. Users can also interact with the image in this view by liking and commenting.

![Image of user-profile](https://github.com/kingsleyliao/ROBOgram/blob/master/app/assets/images/user-profile-page.png)

### Photo Uploading

Users can upload photos through button on the NAVBAR that persist throughout the entire app. The button brings up a modal that allows users to drag and drop an image into the upload zone. Before the image is uploaded, users a preview of their upload is generated. Only when the upload button is clicked will the image actually be uploaded.

![Image of upload-modal](https://github.com/kingsleyliao/ROBOgram/blob/master/app/assets/images/upload-photo-modal.png)

### Search
Users can conveniently find other users by typing into the search bar. Typing into the search bar sends an AJAX request for users that match the user's query.

![Image of searchbar](https://github.com/kingsleyliao/ROBOgram/blob/master/app/assets/images/searchbar.png)

### Discover
Users can discover other users to follow in a convenient list. The discover feature sends an AJAX request for users the current user is not following.

![Image of discover](https://github.com/kingsleyliao/ROBOgram/blob/master/app/assets/images/discover-page.png)

### Infinite Scrolling

The user's feed is optimized by loading images only when the user scrolls down to near the bottom of the page. This saves on loading unnecessary resources and decreases render times.

## Technologies

### Backend
[Ruby on Rails](https://http://rubyonrails.org/) a web application framework - is built at backend to provide RESTful API endpoints and progress data.

[PostgreSQL](https://www.postgresql.org/) is used to store and retrieve data.

- BCrypt library to encrypt password information.
- Protection from CSRF (Cross-site request forgery) attack with a one-time token.
- Paperclip and Amazon Web Service S3 to handle hosting of user generated images.
- Figaro to secure the configuration of API keys.
- Jbuilder to create JSON responses to RESTful requests.
- Hosted on Heroku.

### Frontend
React/Redux are JavaScript libraries built at frontend to make a single-page App with reuseable, modular code. They provide unidirectional dataflow, manage the application state.

- NPM (Node Package Manager) to manage dependencies.
- Webpack module bundler to bundle JS files.
- Babel compile JS files for compatible code.
- SCSS / CSS3 create a responsive user interface.

## Additional Resources
- [View Wireframes](https://github.com/kingsleyliao/ROBOgram/tree/master/docs/wireframes)
- [React Components](component-hierarchy.md)
- [API endpoints](api-endpoints.md)
- [DB schema](schema.md)
- [Sample State](sample-state.md)

## Future Improvements

Many features will be coming to Robogram in the future. See below for upcoming features.

### Hashtags

Users can tag photos with #hashtags that can be searched.

### Direct Messaging

Send live messages to other users

### Videos

Users can upload videos that can be played
