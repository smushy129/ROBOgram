json.extract! @comment, :id, :body
json.userId @comment.user_id
json.photoId @comment.photo_id
json.username @comment.user.username
json.createdAt @comment.created_at
