import mongoose from "mongoose";

const notificationSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Products",
    },

    image: {
      type: String,
      required: false,
    },

    category: {
      type: String,
      required: false,
    },

    description: {
      type: String,
      required: true,
    },

    sender: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    status: {
      type: String,
      required: true,
    },

    // reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

const Notifications = mongoose.model("Notifications", notificationSchema);

export default Notifications;
