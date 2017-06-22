json.extract! user, :id, :username, :bio, :website, :name
json.avatar_url asset_path(user.avatar.url)

json.photos do
  user.photos.each do |photo|
    json.set! photo.id do
      json.id photo.id
      json.image_url asset_path(photo.image.url)
    end
  end
end
