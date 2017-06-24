# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
users = User.create(
[
  {
    username: "awesomo",
    password: "password",
    name: 'eric cartman',
    bio: 'i am a robot i swear.',
    website: 'iAmAwesomo.com',
    avatar: File.open("app/assets/images/awesomoAVATAR.png")
  },
  {
    username: "robocop",
    password: "password",
    name: 'copper',
    bio: 'i shoot things',
    website: 'robocop.com',
  }
]
)

photos = Photo.create(
[
  { user_id: 1,
    caption: 'ice cream with my human friend!',
    image: File.open("app/assets/images/awesomo1.jpg")
  },
  {
    user_id: 1,
    caption: 'stackin benjamins all day err day!',
    image: File.open("app/assets/images/awesomo2.jpg")
  },
  {
    user_id: 1,
    caption: 'after a full day of activities',
    image: File.open("app/assets/images/awesomo3.jpg")
  },
  {
    user_id: 1,
    caption: 'great movie! could use more robots doe..',
    image: File.open("app/assets/images/awesomo4.jpg")
  }
]
)
