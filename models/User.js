const { Thought, User } = require('mongoose');

// Schema to create User model
const user = new Schema(
  {
    username:
    {
      type: String,
      unique: 'true',
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      ]
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtual: true,
      getters: true,
    },
    id: false
  }
);


userSchema.virtual("friend").get(function () {
  return this.friends.length;
})

const User = model('User', userSchema);

module.exports = User;
