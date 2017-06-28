PHOTO
has_many :likes
has_many :comments

belongs_to :user

Like
belongs_to :user
belongs_to :photo

USER
has_many :followers, through: follows
has_many :followees, through: follows
has_many :follows

has_many :photos

COMMENT
belong_to :user
belong_to :photo

FOLLOWS
belongs_to :follower, class: User
belongs_to :followee, class: User


User model

def is_following?(other_user)
  self.followers.ids.include? other_user.id
end

photos

def newsfeed
  @photos = @current_user.followers.photos.order_by(created_at: :desc).first(10)
end

Jbuilder

@currentUser

json.array! @photos.each |photo|
  json.user do
    id: photo.user.id
    username: photo.user.username
  end
  json.isFollowingUser currentUser.is_following?(photo.user)
  json.photo do
    ...
  end
end


{
  session: {
    currentUser: {
      id: 1,
      username: "yan._.ding"
    }
  },
  photoCards: [
    user: {
      id: 1,
      username: "yan._>ding",
      avatarUrL: "...",
    },
    isFollowingUser: true,
    photo: {
        id: 1,
        images: {
            smallUrl: ...,
            medUrl: ...,
            largeUrl: ...,
        },

      },
      likes: {
        users: [
          {
            id: 1,
            username: "yan._.ding"
          },
          {
            id: 2,
            username: "smushyz"
          }
        ]
      },

      likesCount: 12
    },
    comments: [
      {
        id: 12356,
        user: {
          username: "yan._.ding"
        },
        text: "Not my order but it was nice :D"
      },
      { ... }
    ]
  ]
}



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
    name: 'Eric Cartman',
    bio: 'i am a robot, i swear.',
    website: 'https://en.wikipedia.org/wiki/Awesom-O',
    avatar: File.open("app/assets/images/awesomoAVATAR.png")
  },
  {
    username: "robocop",
    password: "password",
    name: 'Robocop',
    bio: 'My friends call me Murphy. You call me... Robocop',
    website: 'https://en.wikipedia.org/wiki/RoboCop',
    avatar: File.open("app/assets/images/robocopAVATAR.jpg")
  },
  {
    username: "walle",
    password: "password",
    name: 'WALL-E',
    bio: 'Wa... WwALL-E.',
    website: 'https://en.wikipedia.org/wiki/WALL-E',
    avatar: File.open("app/assets/images/walleAVATAR.jpg")
  },
  {
    username: "megatron",
    password: "password",
    name: 'Megatron',
    bio: 'I am... MEGATRON!',
    website: 'https://en.wikipedia.org/wiki/Megatron',
    avatar: File.open("app/assets/images/megatronAVATAR.jpg")
  },
  {
    username: "optimusprime",
    password: "password",
    name: 'Optimus Prime',
    bio: 'Autobots, roll out!',
    website: 'https://en.wikipedia.org/wiki/Optimus_Prime',
    avatar: File.open("app/assets/images/optimusAVATAR.jpeg")
  },
  {
    username: "r2d2",
    password: "password",
    name: 'R2D2',
    bio: '*BEEP*',
    website: 'https://en.wikipedia.org/wiki/R2-D2',
    avatar: File.open("app/assets/images/r2d2AVATAR.png")
  },
  {
    username: "bender",
    password: "password",
    name: 'Bender',
    bio: 'I’m going to build my own theme park with blackjack and hookers',
    website: "https://en.wikipedia.org/wiki/Bender",
    avatar: File.open("app/assets/images/benderAVATAR.jpg")
  },
])

photos = Photo.create(
[
  { user_id: User.find_by_username('awesomo'),
    caption: 'ice cream with my human friend!',
    image: File.open("app/assets/images/awesomo1.jpg")
  },
  {
    user_id: User.find_by_username('awesomo'),
    caption: 'stackin benjamins all day err day!',
    image: File.open("app/assets/images/awesomo2.jpg")
  },
  {
    user_id: User.find_by_username('awesomo'),
    caption: 'after a full day of activities',
    image: File.open("app/assets/images/awesomo3.jpg")
  },
  {
    user_id: User.find_by_username('awesomo'),
    caption: 'great movie! could use more robots doe..',
    image: File.open("app/assets/images/awesomo4.jpg")
  },
  {
    user_id: User.find_by_username('robocop'),
    caption: 'My new dark look',
    image: File.open("app/assets/images/robocop1.jpg")
  },
  {
    user_id: User.find_by_username('robocop'),
    caption: "This wall can't hold me.",
    image: File.open("app/assets/images/robocop2.jpeg")
  },
  {
    user_id: User.find_by_username('robocop'),
    caption: 'Like my new look?',
    image: File.open("app/assets/images/robocop3.jpg")
  },
  {
    user_id: User.find_by_username('walle'),
    caption: 'my best friend and i',
    image: File.open("app/assets/images/walle1.jpg")
  },
  {
    user_id: User.find_by_username('walle'),
    caption: 'werk werk werk werk werk',
    image: File.open("app/assets/images/walle2.jpeg")
  },
  {
    user_id: User.find_by_username('megatron'),
    caption: 'My tank mode. Impressed?',
    image: File.open("app/assets/images/megatron1.jpg")
  },
  {
    user_id: User.find_by_username('megatron'),
    caption: 'FEAR ME',
    image: File.open("app/assets/images/megatron2.jpeg")
  },
  {
    user_id: User.find_by_username('megatron'),
    caption: 'Call me if you see this guy.',
    image: File.open("app/assets/images/megatron3.jpg")
  },
  {
    user_id: User.find_by_username('megatron'),
    caption: 'Silly autobots.',
    image: File.open("app/assets/images/megatron4.jpg")
  },
  {
    user_id: User.find_by_username('optimusprime'),
    caption: 'Freedom is the right of all sentient beings',
    image: File.open("app/assets/images/optimus1.jpg")
  },
  {
    user_id: User.find_by_username('optimusprime'),
    caption: 'My ride.',
    image: File.open("app/assets/images/optimus2.jpg")
  },
  {
    user_id: User.find_by_username('optimusprime'),
    caption: 'My best friend',
    image: File.open("app/assets/images/optimus3.jpg")
  },
  {
    user_id: User.find_by_username('optimusprime'),
    caption: 'optimus prime? more like DESERT PRIME LOL',
    image: File.open("app/assets/images/optimus4.jpg")
  },
  {
    user_id: User.find_by_username('r2d2'),
    caption: '*beep*',
    image: File.open("app/assets/images/r2d21.jpg")
  },
  {
    user_id: User.find_by_username('r2d2'),
    caption: '*beep*',
    image: File.open("app/assets/images/r2d22.jpg")
  },
  {
    user_id: User.find_by_username('bender'),
    caption: 'just chillin',
    image: File.open("app/assets/images/bender1.jpg")
  },
  {
    user_id: User.find_by_username('bender'),
    caption: 'Kneel before me!',
    image: File.open("app/assets/images/bender2.jpg")
  },
  {
    user_id: User.find_by_username('bender'),
    caption: 'w..what?',
    image: File.open("app/assets/images/bender3.jpg")
  },
  {
    user_id: User.find_by_username('bender'),
    caption: "blackjack n' g rated things",
    image: File.open("app/assets/images/bender4.jpg")
  },
])
