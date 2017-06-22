json.id = photo.id
json.username = photo.user.username
json.avatar = asset_path(photo.user.avatar.url)
json.image_url = asset_path(photo.image.url)
json.created_at = photo.created_at
json.caption = photo.caption
