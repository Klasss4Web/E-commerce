import mongoose from "mongoose";
import bcrypt from "bcrypt"

const companyProfileSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    image: {
      type: String,
      required: false,
      default:
        "https://media.istockphoto.com/photos/girl-with-headphones-and-neon-lighting-stylized-3d-character-picture-id1330874201?b=1&k=20&m=1330874201&s=170667a&w=0&h=GL7X6kheNB4ip-Mw8B0aI3KbUfWCzRthJqCNv5qq2jg=",
    },
    color: {
      type: String,
      required: false,
    }
  
  },
  {
    timestamps: true,
  }
);




const CompanyProfile = mongoose.model("CompanyProfile", companyProfileSchema);

export default CompanyProfile;
