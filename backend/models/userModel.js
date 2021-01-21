import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      default: '',
    },
    first_name: {
      type: String,
      required: true,
      default: '',
    },
    initials: {
      type: String,
      required: false,
      default: '',
    },
    department: {
      type: String,
      required: false,
      default: '',
    },
    role: {
      type: String,
      required: false,
      default: '',
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    isManager: {
      type: Boolean,
      required: true,
      default: false,
    },
    isDispatcher: {
      type: Boolean,
      required: true,
      default: false,
    },
    isTechnician: {
      type: Boolean,
      required: true,
      default: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone_int: {
      type: String,
      required: false,
    },
    phone_mobile: {
      type: String,
      required: false,
    },
    street: {
      type: String,
      required: false,
      default: '',
    },
    house_number: {
      type: String,
      required: false,
    },
    pc: {
      type: Number,
      required: false,
    },
    place: {
      type: String,
      required: false,
      default: '',
    },
    born_at: {
      type: String,
      required: false,
    },
    phone_private: {
      type: String,
      required: false,
    },
    mobile_private: {
      type: String,
      required: false,
    },
    private_email: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  // only execute if password was modified (update profile)
  // isModified() is a mongoose function since it is applied to this, which is the userSchema (mongoose object)
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
