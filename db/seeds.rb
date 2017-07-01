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
      website: '',
      avatar: File.open("app/assets/images/awesomoAVATAR.png")
    },
    {
      username: "robocop",
      password: "password",
      name: 'Robocop',
      bio: 'My friends call me Murphy. You call me... Robocop',
      website: '',
      avatar: File.open("app/assets/images/robocopAVATAR.jpg")
    },
    {
      username: "walle",
      password: "password",
      name: 'WALL-E',
      bio: 'Wa... WwALL-E.',
      website: '',
      avatar: File.open("app/assets/images/walleAVATAR.jpg")
    },
    {
      username: "megatron",
      password: "password",
      name: 'Megatron',
      bio: 'I am... MEGATRON!',
      website: '',
      avatar: File.open("app/assets/images/megatronAVATAR.jpg")
    },
    {
      username: "optimusprime",
      password: "password",
      name: 'Optimus Prime',
      bio: 'Autobots, roll out!',
      website: '',
      avatar: File.open("app/assets/images/optimusAVATAR.jpeg")
    },
    {
      username: "r2d2",
      password: "password",
      name: 'R2D2',
      bio: '*BEEP*',
      website: '',
      avatar: File.open("app/assets/images/r2d2AVATAR.png")
    },
    {
      username: "bender",
      password: "password",
      name: 'Bender',
      bio: 'I bend things',
      website: "",
      avatar: File.open("app/assets/images/benderAVATAR.jpg")
    }
  ]
)

photos = Photo.create(
  [
    { user_id: User.find_by_username('awesomo').id,
      caption: 'ice cream with my human friend!',
      image: File.open("app/assets/images/awesomo1.jpg")
    },
    {
      user_id: User.find_by_username('awesomo').id,
      caption: 'after a full day of activities',
      image: File.open("app/assets/images/awesomo3.jpg")
    },
    {
      user_id: User.find_by_username('robocop').id,
      caption: 'Your move, creep',
      image: File.open("app/assets/images/robocop4.jpg")
    },
    {
      user_id: User.find_by_username('awesomo').id,
      caption: 'great movie! could use more robots doe..',
      image: File.open("app/assets/images/awesomo4.jpg")
    },
    {
      user_id: User.find_by_username('robocop').id,
      caption: 'My new dark look',
      image: File.open("app/assets/images/robocop1.jpg")
    },
    {
      user_id: User.find_by_username('robocop').id,
      caption: "This wall can't hold me.",
      image: File.open("app/assets/images/robocop2.jpeg")
    },
    {
      user_id: User.find_by_username('bender').id,
      caption: "blackjack n' g rated things",
      image: File.open("app/assets/images/bender4.jpg")
    },
    {
      user_id: User.find_by_username('megatron').id,
      caption: 'Silly autobots.',
      image: File.open("app/assets/images/megatron4.jpg")
    },
    {
      user_id: User.find_by_username('robocop').id,
      caption: 'Like my new look?',
      image: File.open("app/assets/images/robocop3.jpg")
    },
    {
      user_id: User.find_by_username('bender').id,
      caption: 'just chillin',
      image: File.open("app/assets/images/bender1.jpg")
    },
    {
      user_id: User.find_by_username('awesomo').id,
      caption: 'stackin benjamins all day err day!',
      image: File.open("app/assets/images/awesomo2.jpg")
    },
    {
      user_id: User.find_by_username('bender').id,
      caption: 'w..what?',
      image: File.open("app/assets/images/bender3.jpg")
    },
    {
      user_id: User.find_by_username('walle').id,
      caption: 'werk werk werk werk werk',
      image: File.open("app/assets/images/walle2.jpg")
    },
    {
      user_id: User.find_by_username('optimusprime').id,
      caption: 'My ride.',
      image: File.open("app/assets/images/optimus2.jpg")
    },
    {
      user_id: User.find_by_username('megatron').id,
      caption: 'FEAR ME',
      image: File.open("app/assets/images/megatron2.jpeg")
    },
    {
      user_id: User.find_by_username('megatron').id,
      caption: 'Call me if you see this guy.',
      image: File.open("app/assets/images/megatron3.jpg")
    },
    {
      user_id: User.find_by_username('optimusprime').id,
      caption: 'The last knight',
      image: File.open("app/assets/images/optimus6.jpg")
    },
    {
      user_id: User.find_by_username('optimusprime').id,
      caption: 'Freedom is the right of all sentient beings',
      image: File.open("app/assets/images/optimus1.jpg")
    },
    {
      user_id: User.find_by_username('megatron').id,
      caption: 'My tank mode. Impressed?',
      image: File.open("app/assets/images/megatron1.jpg")
    },
    {
      user_id: User.find_by_username('optimusprime').id,
      caption: 'optimus prime? more like DESERT PRIME LOL',
      image: File.open("app/assets/images/optimus4.jpg")
    },
    {
      user_id: User.find_by_username('optimusprime').id,
      caption: 'I am Optimus Prime, leader of the autobots.',
      image: File.open("app/assets/images/optimus5.jpg")
    },
    {
      user_id: User.find_by_username('bender').id,
      caption: 'Kneel before me!',
      image: File.open("app/assets/images/bender2.jpg")
    },
    {
      user_id: User.find_by_username('optimusprime').id,
      caption: "BUMBLE!",
      image: File.open("app/assets/images/optimus8.jpg")
    },
    {
      user_id: User.find_by_username('r2d2').id,
      caption: '*beep*',
      image: File.open("app/assets/images/r2d21.jpeg")
    },
    {
      user_id: User.find_by_username('r2d2').id,
      caption: '*beep*',
      image: File.open("app/assets/images/r2d22.jpg")
    },
    {
      user_id: User.find_by_username('megatron').id,
      caption: 'My life motto.',
      image: File.open("app/assets/images/megatron5.jpg")
    },
    {
      user_id: User.find_by_username('optimusprime').id,
      caption: 'My best friend',
      image: File.open("app/assets/images/optimus3.jpg")
    },
    {
      user_id: User.find_by_username('walle').id,
      caption: 'my best friend and i',
      image: File.open("app/assets/images/walle1.jpg")
    },
    {
      user_id: User.find_by_username('optimusprime').id,
      caption: 'We hunt for what remains our decepticon foes hiding in different countries around the globe.',
      image: File.open("app/assets/images/optimus6.jpg")
    },
    {
      user_id: User.find_by_username('optimusprime').id,
      caption: "There's a thin line between being a hero and being a memory",
      image: File.open("app/assets/images/optimus7.jpg")
    }
  ]
)

follows = Follow.create(
  [
    {
      follower_id: User.find_by_username('awesomo').id,
      followee_id: User.find_by_username('robocop').id
    },
    {
      follower_id: User.find_by_username('awesomo').id,
      followee_id: User.find_by_username('walle').id
    },
    {
      follower_id: User.find_by_username('awesomo').id,
      followee_id: User.find_by_username('megatron').id
    },
    {
      follower_id: User.find_by_username('awesomo').id,
      followee_id: User.find_by_username('optimusprime').id
    },
    {
      follower_id: User.find_by_username('awesomo').id,
      followee_id: User.find_by_username('r2d2').id
    },
    {
      follower_id: User.find_by_username('awesomo').id,
      followee_id: User.find_by_username('bender').id
    },
    {
      follower_id: User.find_by_username('walle').id,
      followee_id: User.find_by_username('r2d2').id
    },
    {
      follower_id: User.find_by_username('megatron').id,
      followee_id: User.find_by_username('optimusprime').id
    },
    {
      follower_id: User.find_by_username('r2d2').id,
      followee_id: User.find_by_username('walle').id
    },
    {
      follower_id: User.find_by_username('optimusprime').id,
      followee_id: User.find_by_username('megatron').id
    },
    {
      follower_id: User.find_by_username('robocop').id,
      followee_id: User.find_by_username('megatron').id
    },
    {
      follower_id: User.find_by_username('bender').id,
      followee_id: User.find_by_username('awesomo').id
    },
    {
      follower_id: User.find_by_username('megatron').id,
      followee_id: User.find_by_username('awesomo').id
    },
    {
      follower_id: User.find_by_username('robocop').id,
      followee_id: User.find_by_username('optimusprime').id
    },
  ]
)
