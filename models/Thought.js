const { Schema, model } = require('mongoose');

// Schema to create User model
const Thought = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true,
      },
    toJSON: 
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      id:false
  },
);




module.exports = Thought;
