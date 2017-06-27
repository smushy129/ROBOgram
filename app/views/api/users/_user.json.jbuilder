json.extract! user, :id, :username, :bio, :website, :name
json.avatar_url asset_path(user.avatar.url)

json.followers do
  user.followers.each do |follower|
    json.set! follower.id do
      json.id follower.id
      json.username follower.username
      json.avatar_url asset_path(follower.avatar.url)
    end
  end
end

json.followees do
  user.followees.each do |followee|
    json.set! followee.id do
      json.id followee.id
      json.username followee.username
      json.avatar_url asset_path(followee.avatar.url)
    end
  end
end

json.photos do
  user.photos.each do |photo|
    json.set! photo.id do
      json.id photo.id
      json.image_url asset_path(photo.image.url)
    end
  end
end
