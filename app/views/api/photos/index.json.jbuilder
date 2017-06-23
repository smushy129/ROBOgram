@photos.each do |photo|
  json.set! photo.id do
    json.partial! 'photo', photo: photo
  end
end
