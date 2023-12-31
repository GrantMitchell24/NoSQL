const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create a Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1, 
      max_length: 280,
    },
    username: {
      type: String,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
