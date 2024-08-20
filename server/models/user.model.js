const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure email is unique
    },
    password: {
      type: String,
      required: true,
    },
    MobileNo: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    profilePicture: {
      type: String,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
    },
    pinCode: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// Virtual field for confirmPassword
userSchema.virtual('confirmPassword')
  .get(function () {
    return this._confirmPassword; // Use an internal variable
  })
  .set(function (value) {
    this._confirmPassword = value; // Store the value in an internal variable
  });

// Middleware to check password confirmation
userSchema.pre('validate', function (next) {
  if (this.isModified('password') && this._confirmPassword !== undefined && this.password !== this._confirmPassword) {
    this.invalidate('confirmPassword', 'Passwords do not match');
  }
  next();
});

// Pre-save hook to hash the password before saving
userSchema.pre('save', async function (next) {
  const user = this;

  // Hash the password if it’s new or has been modified
  if (user.isModified('password')) {
    try {
      user.password = await bcrypt.hash(user.password, 10);
    } catch (error) {
      return next(error); // Pass error to next middleware or save
    }
  }

  next(); // Ensure next() is called only once
});

// Method to compare passwords during login
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
