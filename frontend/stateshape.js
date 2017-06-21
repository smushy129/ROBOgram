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
