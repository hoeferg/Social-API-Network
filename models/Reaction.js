const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dataFormat')
// Schema to create User model
const ReactionSchema = new Schema(
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


const Reaction = model('Reaction', reactionSchema)

module.exports = reactionSchema;
