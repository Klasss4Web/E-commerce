import mongoose from "mongoose";
import bcrypt from "bcrypt"

const merchantSchema = mongoose.Schema(
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

    password: {
      type: String,
      required: false,
      default: "12345",
    },
    status: {
      type: String,
      required: false,
      default: "Active",
    },

    image: {
      type: String,
      required: false,
      default: "https://www.imdb.com/title/tt0499549/",
    },

    isAdmin: {
      type: Boolean,
      required: false,
      default: false,
    },
    userType: {
      type: "String",
      required: false,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);


// //LOGIN
// merchantSchema.methods.matchPassword = async function (enterPassword) {
//   return await bcrypt.compare(enterPassword, this.password);
// };

// // REGISTER
// merchantSchema.pre("save", async function(next) {
//   if(!this.isModified("password")){
//     next()
//   }

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt)
// })

const Merchant = mongoose.model("Merchant", merchantSchema);

export default Merchant;
