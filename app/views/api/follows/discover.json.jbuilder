json.array!(@follows) do |follow|
  json.userId follow.followee.id
  json.name follow.followee.name
  json.username follow.followee.username
  json.avatar_url asset_path(follow.followee.avatar.url)
end
