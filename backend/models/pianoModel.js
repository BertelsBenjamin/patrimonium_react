import mongoose from 'mongoose';

export const pianoSchema = mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
      default: '',
    },
    model_number: {
      type: String,
      required: false,
    },
    serial_number: {
      type: String,
      required: false,
    },
    finish: {
      type: String,
      required: false,
    },
    room: {
      type: String,
      required: true,
      default: '',
    },
    type: {
      type: String,
      required: false,
    },
    academy_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Academy',
    },
    interventions: [
      {
        technician: { type: String, required: true },
        type: { type: String, required: true },
        last_intervention: { type: Date, required: false },
        intervention: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Intervention',
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Piano = mongoose.model('Piano', pianoSchema);

export default Piano;
