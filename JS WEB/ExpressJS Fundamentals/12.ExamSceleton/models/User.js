const mongoose = require('mongoose')
const encryption = require('../utilitites/encryption')
const propertyIsRequired = '{0} is required.'

let userSchema = mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.String,
    required: propertyIsRequired.replace('{0}', 'Username'),
    unique: true
  },
  password: {
    type: mongoose.Schema.Types.String,
    required: propertyIsRequired.replace('{0}', 'Password')
  },
  salt: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  roles: [{ type: mongoose.Schema.Types.String }],
 
  
})

userSchema.method({
    authenticate: function (password) {
      let hashedPassword = encryption.generateHashedPassword(this.salt, password)
  
      if (hashedPassword === this.password) {
        return true
      }
  
      return false
    }
  })
  
  const User = mongoose.model('User', userSchema)
  
  module.exports = User

  module.exports.seedAdminUser = () => {
    User.find({username: 'admin'}).then(users => {
      if (users.length === 0) {
        let salt = encryption.generateSalt()
        let hashedPass = encryption.generateHashedPassword(salt, 'Admin12')
  
        User.create({
          username: 'admin',
          salt: salt,
          password: hashedPass,
          roles: ['Admin']
        })
      }
    })
  }
  