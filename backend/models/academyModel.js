import mongoose from 'mongoose';
import { pianoSchema } from './pianoModel.js';

const academySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    hq: {
      type: Boolean,
      required: false,
    },
    street: {
      type: String,
      required: false,
    },
    house_number: {
      type: Number,
      required: false,
    },
    bus_number: {
      type: String,
      required: false,
    },
    postal_code: {
      type: Number,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    fax: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
    director_last_name: {
      type: String,
      required: false,
    },
    director_first_name: {
      type: String,
      required: false,
    },
    instruments: [pianoSchema],
    created_by_user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Academy = mongoose.model('Academy', academySchema);

export default Academy;
