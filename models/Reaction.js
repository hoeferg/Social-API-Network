const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dataFormat')
// Schema to create User model
const userSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createAtVal => dateFormat(createAtVal)
        },
        toJSON:
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        id: false
    },
);

// Create a virtual property `fullName` that gets and sets the user's full name
const Reaction = model('Reaction', reactionSchema)

module.exports = reactionSchema;
