import mongoose from 'mongoose';

export const interventionSchema = mongoose.Schema(
  {
    technician: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    comment: {
      type: String,
      required: true,
      default: '',
    },
    type: {
      type: String,
      required: true,
      default: '',
    },
    new_intervention: {
      type: Boolean,
      required: false,
    },
    nav_service_order_number: {
      type: String,
      required: true,
      default: '',
    },
    instrument: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Piano',
    },
    academy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Academy',
    },
    duration: {
      type: Number,
      required: true,
      default: 90,
    },
  },
  {
    timestamps: true,
  }
);

const Intervention = mongoose.model('Intervention', interventionSchema);

export default Intervention;
