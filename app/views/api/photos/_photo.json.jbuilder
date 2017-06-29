json.id photo.id
json.username photo.user.username
json.user_id photo.user.id
json.avatar_url asset_path(photo.user.avatar.url)
json.image_url asset_path(photo.image.url)
json.caption photo.caption
json.created_at photo.created_at
json.timestamp time_ago_in_words(photo.created_at)
json.liked_by_current_user current_user.isLiked(photo.id)
json.num_likes photo.likes.length
json.comments photo.comments

json.likes do
  photo.likes.each do |like|
    json.set! like.user_id do
      json.user_id like.user_id
      json.photo_id like.photo_id
    end
  end
end
