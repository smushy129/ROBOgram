# API Endpoints

## HTML API
### Root
| Method | URI | Description         |
|--------|-----|---------------------|
| `GET`  | `/` | Loads React Web App |

## JSON API
### Users
| Method | URI                 | Description               |
|--------|---------------------|---------------------------|
| `GET`  | `/`                 | Loads React Web App       |
| `POST` | `/api/users`        | Create new user           |
| `GET`  | `/api/users/:id`    | Get user by id or username|
| `PATCH`| `/api/users/:id`    | Update user data          |
| `GET`  | `/api/users/search` | Search user by keyword    |

### Session
| Method   | URI                 | Description               |
|----------|---------------------|---------------------------|
| `POST`   | `/api/session`      | Log in                    |
| `DELETE` | `/api/session`      | Log out                   |

### Photos
| Method | URI                            | Description               |
|----------|------------------------------|---------------------------|
| `GET`    | `/api/images`                | Get all images            |
| `POST`   | `/api/images`                | Create new image          |
| `GET`    | `/api/images/:id`            | Get image by id           |
| `DELETE` | `/api/images/:id`            | Delete image by id        |
| `GET`    | `/api/users/:user_id/images` | Get all images by user id |

### Likes
| Method   | URI                                | Description               |
|----------|------------------------------------|---------------------------|
| `POST`   | `/api/images/:image_id/likes`      | Likes a image             |
| `DELETE` | `/api/images/:image_id/likes`      | Unlikes a images          |

### Comments
| Method   | URI                                | Description               |
|----------|------------------------------------|---------------------------|
| `POST`   | `/api/comments`                    | Create comment for a image|
| `DELETE` | `/api/comments/:id`                | Delete comment by id      |

### Follows
| Method	  | URI	                            | Description                       |
|-----------|---------------------------------|-----------------------------------|
| `GET`	    | `/api/users/:user_id/following`	| Get all followings                |
| `GET`	    | `/api/users/:user_id/followers`	| Get all followers                 |
| `POST`	  | `/api/users/:user_id/follows`	  | Follow another user               |
| `DELETE`	| `/api/users/:user_id/follows`	  | Unfollow another user             |
