import mongoose from 'mongoose';

const { Schema } = mongoose;
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.model('project', ProjectSchema);
