import mongoose from 'mongoose';

export const interventionSchema = mongoose.Schema(
  {
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
    hz: {
      type: Number,
      required: true,
      default: 440,
    },
    new_intervention: {
      type: Boolean,
      required: false,
    },
    necessary_workload: {
      type: Number,
      required: false,
    },
    nav_service_order_number: {
      type: String,
      required: true,
      unique: true,
    },
    piano_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Piano',
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
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
