json.id photo.id
json.username photo.user.username
json.user_id photo.user.id
json.avatar_url asset_path(photo.user.avatar.url)
json.image_url asset_path(photo.image.url)
json.caption photo.caption
json.created_at photo.created_at
json.timestamp time_ago_in_words(photo.created_at)
