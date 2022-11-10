const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    thoughtText: {
      type: string,
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


const Thought = model('Thought', thoughtSchema);

module.exports = thoughtSchema;
