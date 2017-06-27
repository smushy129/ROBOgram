json.set! @follow.follower_id do
  json.id @follow.id
  json.follower_id @follow.follower_id
  json.followee_id @follow.followee_id
end
