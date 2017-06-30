# ROBOgram

[ROBOgram live][heroku]

[heroku]: http://robogramapp.herokuapp.com


Robogram is a web application inspired by Instagram designed exclusively for robots. Users can see photos from robots that they follow and share their own photos to robots that follow them. It is a full-stack project which is built using Ruby on Rails, PostgreSQL, and React/Redux.

## Features

The homepage will show pictures for all the robots that the user is following. Users can like or comment on any photo right on their feed. Users can also view photos from a particular user by navigating to a user's profile page. On profile pages, a user can follow the user of that profile.

## Technologies

### Backend
[Ruby on Rails](https://http://rubyonrails.org/) a web application framework - is built at backend to provide RESTful API endpoints and progress data.

[PostgreSQL](https://www.postgresql.org/) database system is used to store and retrieve data.

Use BCrypt library to encrypt password for best security.
Prevent CSRF (Cross-site request forgery) attack by one-time token.
Paperclip and Amazon Web Service S3 store photos, files on AWS to speed up page loading time.
Figaro to secure configuration of API keys
Jbuilder to response JSON data for RESTful request.
Assets pipeline to pack resources will reduce request times.
Hosted on Heroku platform.

### Frontend
React/Redux are JavaScript libraries built at frontend to make a single-page App with reuseable, modular code. They provide unidirectional dataflow, manage the application state.

Install and manage dependencies packages by NPM (Node Package Manager) .
Webpack module bundler is used to bundle all files.
Babel compile JS files for compatible code.
SCSS / CSS3 create a simple but great design.

## Additional Resources
- [View Wireframes](https://github.com/kingsleyliao/ROBOgram/tree/master/docs/wireframes)
- [React Components](component-hierarchy.md)
- [API endpoints](api-endpoints.md)
- [DB schema](schema.md)
- [Sample State](sample-state.md)

## Future Improvements

Robogram was a project built and designed in two weeks. There are many more features that can be added.

### Hashtags

Users can tag photos with #hashtags that can be searched.

### Search

Users can search users or photos

### Direct Messaging

Send live messages to other users

### Videos

Users can upload videos that can be played

### Infinite Scrolling

Infinite scrolling of images for faster page load
