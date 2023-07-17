const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, defaut: "" },
    isAdmin: { type: Boolean, default: false },
    status: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// mongoose.connection
//   .collection("users")
//   .dropIndex("phone_1", function (err, result) {
//     if (err) {
//       console.log("Error dropping index:", err);
//     } else {
//       console.log("Index dropped successfully:", result);
//     }
//   });

module.exports = mongoose.model("User", UserSchema);
