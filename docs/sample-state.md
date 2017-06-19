# Sample State

```js
{
  session: {
    currentUser: {
      id: 1,
      username: "Kingsley"
    },
    errors: []
  },
  photos: {
    3: {
      id: 3,
      username: "Kingsley",
      profilePic: "Kingsley_profilePic.png",
      url: "drone.png",
      caption: "stealthiest drone",
      createdAt: "2017-05-07T11:59:59:00",
      uploadedAt: "10 days ago",
      likesCount: 2,
      currentUserLiked: false,
      commentsCount: 2,
      comments: {
        4: {
          id: 4,
          username: "R2-D2",
          body: "WOW",
          createdAt: "2017-05-08T11:59:59:00"
        },
        5: {
          id: 5,
          username: "iRobot",
          body: "i could detect that with my lasers closed!",
          createdAt: "2017-05-09T11:59:59:00"
        }
      }
    },
    2: {
      id: 2,
      username: "wall-E",
      profilePic: "wall-E_profilePic.png",
      url: "trashRobot.png",
      caption: "Best friend forever",
      createdAt: "2017-05-05T10:30:05-07:00",
      uploadedAt: "12 days ago",
      likesCount: 3,
      currentUserLiked: true,
      commentsCount: 1,
      comments: {
        3: {
          id: 3,
          username: "Kingsley",
          body: "i thought i was your best friend??",
          createdAt: "2017-05-06T11:59:59:00"
        }
      }
    }
  },
  user: {
    id: 1,
    username: "Kingsley",
    name: "Kingsley",
    bio: "I am a robot. I swear.",
    isprofilePic: true,
    profilePic: "Kingsley_profilePic.png",
    followersCount: 3,
    followers: {
      2: {
        id: 2,
        username: 'wall-E',
        name: 'wall-E',
        profilePic: 'wall-E_profilePic.png',
        currentUserFollowed: true,
        createdAt: "2017-05-04T11:59:59:00"
      },
      3: {
        id: 3,
        username: 'roboCop',
        name: 'roboCop',
        profilePic: 'roboCop_profilePic.png',
        currentUserFollowed: false,
        createdAt: "2017-05-01T11:59:59:00"
      },
      4: {
        id: 4,
        username: 'R2-D2',
        name: 'R2-D2',
        profilePic: 'R2-D2_profilePic.png',
        currentUserFollowed: false,
        createdAt: "2017-05-03T11:59:59:00"
      }
    },
    followingsCount: 1,
    following: {
      2: {
        id: 2,
        username: 'wall-E',
        name: 'wall-E',
        profilePic: 'wall-E_profilePic.png',
        currentUserFollowed: true,
        createdAt: "2017-05-04T11:59:59:00"
      }
    },
    photos: {
      5: {
        id: 5,
        urlMedium: "selfRaisingSpoon.png",
        createdAt: "2017-05-21T11:59:59:00",
        likesCount: 5,
        commentsCount: 0
      },
      3: {
        id: 3,
        urlMedium: "warpDrive.png",
        createdAt: "2017-05-07T11:59:59:00",
        likesCount: 2,
        commentsCount: 2
      },
      1: {
        id: 1,
        urlMedium: "selfWalkingShoes.png",
        createdAt: "2017-05-01T11:59:59:00",
        likesCount: 2,
        commentsCount: 2
      }
    }
  },
  photoDetail: {
    id: 1,
    username: "Kingsley",
    profilePic: "Kingsley_profilePic.png",
    url: "selfWalkingShoes.png",
    urlMedium: "150/150/selfWalkingShoes.png",
    caption: "i don't need legs anymore",
    createdAt: "2017-03-27T09:00:00-07:00",
    uploadedAt: "51 days ago",
    likesCount: 2,
    currentUserLiked: true,
    commentsCount: 2,
    comments: {
      1: {
        id: 1,
        username: "roboCop",
        body: "i need to cop a pair!",
        createdAt: "2017-04-01T11:59:59:00"
      },
      2: {
        id: 2,
        username: "Kingsley",
        body: "roboCop.setHumorLevel(1);",
        createdAt: "2017-04-02T11:59:59:00"
      }
    }
  },
  errors: {
    photoUpload: [],
    profilePicUpload: [],
    accountEdit: ["Username can't be blank"],
    accountPassword: []
  },
  loading: false,
  search: {
    1: {
      id: 1,
      username: "Kingsley",
      usernameShort: "Kingsley",
      name: "Kingsley",
      profilePic: "Kingsley_profilePic.png"
    },
    2: {
      id: 2,
      username: "wall-E",
      usernameShort: "wall-E",
      name: "wall-E",
      profilePic: "wall-E_profilePic.png"
    },
    4: {
      id: 4,
      username: "R2-D2",
      usernameShort: "R2-D2",
      name: "R2-D2",
      profilePic: "R2-D2_profilePic.png"
    }
  },
  users: {
    1: {
      id: 1,
      username: "Kingsley",
      name: "Kingsley",
      profilePic: "Kingsley_profilePic.png",
      currentUserFollowed: false
    },
    3: {
      id: 3,
      username: 'roboCop',
      name: 'roboCop',
      profilePic: 'roboCop_profilePic.png',
      currentUserFollowed: false
    },
    2: {
      id: 2,
      username: "wall-E",
      name: "wall-E",
      profilePic: "wall-E_profilePic.png",
      currentUserFollowed: true
    },
    4: {
      id: 4,
      username: "R2-D2",
      name: "R2-D2",
      profilePic: "R2-D2_profilePic.png",
      currentUserFollowed: false
    },
    5: {
      id: 5,
      username: "iRobot",
      name: "iRobot",
      profilePic: "iRobot_profilePic.png",
      currentUserFollowed: false
    }
  }
}
```
