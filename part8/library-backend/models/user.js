const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3
  },
  favoriteGenre: {
    type: String,
    required: false
  }
//   friends: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Person'
//     }
//   ],
})

module.exports = mongoose.model('User', schema)

