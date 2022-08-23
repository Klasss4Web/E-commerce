import mongoose from 'mongoose'

const categoriesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  
  },

  {
    timestamps: true,
  }
);


const Categories = mongoose.model("Categories", categoriesSchema);

export default Categories