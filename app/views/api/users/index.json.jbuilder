json.array!(@users) do |user|
  json.userId user.id
  json.name user.name
  json.username user.username
  json.avatar_url asset_path(user.avatar.url)
end
