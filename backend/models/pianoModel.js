import mongoose from 'mongoose';

export const pianoSchema = mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
      default: '',
    },
    model: {
      type: String,
      required: false,
    },
    serial_number: {
      type: String,
      required: false,
    },
    year_of_construction: {
      type: String,
      required: false,
    },
    room: {
      type: String,
      required: false,
      default: '',
    },
    type: {
      type: String,
      required: false,
    },
    category: {
      type: Number,
      required: false,
    },
    advisory_tuning_frequency: {
      type: Number,
      required: false,
    },
    small_revision_needed: {
      type: Date,
      required: false,
    },
    large_revision_needed: {
      type: Date,
      required: false,
    },
    academy_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Academy',
    },
    interventions: [
      {
        technician: { type: mongoose.Schema.Types.ObjectId, required: true },
        type: { type: String, required: true },
        date: { type: Date, required: false },
        text: { type: String, required: false },
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
