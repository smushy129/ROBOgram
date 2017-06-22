json.extract! user, :id, :username, :bio, :website, :name
json.avatar_url asset_path(user.avatar.url)
