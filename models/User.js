const { Schema, model, Types } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: 
      {
        type: string,
        unique: 'true',
        required: true,
        trim: true,
      },
        email:{
          type: String,
          required: true,
          unique: true,
          match: [
            // ^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.a[a-zA-Z]{2,}$,
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
      ] ,
  },
  {
    toJSON: {
      virtual: true,
      getters:true,
    },
    id: false
  }
);

// Create a virtual property `fullName` that gets and sets the user's full name
userSchema.virtual("friend").get(function () {
  return this.friends.length;
})

const User = model('User', userSchema);

module.exports = User;
