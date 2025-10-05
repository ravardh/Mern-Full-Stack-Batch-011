import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    photoId: {
      type: String,
      default: "N/A"
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "other","N/A"],
      default: "N/A"
    },
    dob:{
      type: String,
      required: true,
      default: "N/A"
    },
    address: {
      type: String,
      required: true,
      default: "N/A"
    },
    exp: {
      type: String,
      required: true,
      default: "0"
    },
    qualification: {
      type: String,
      required: true,
      default: "N/A"
    },
    bio: {
      type: String,
      required: true,
      default: "N/A"
    },
    linkedin: {
      type: String,
      required: true,
      default: "N/A"
    },
    github: {
      type: String,
      required: true,
      default: "N/A"
    },
    insta: {
      type: String,
      required: true,
      default: "N/A"
    },
    twitter: {
      type: String,
      required: true,
      default: "N/A"    
    },
    status: {
      type: String,
      required: true,
      enum: ["active", "inactive", "banned"],
      default: "active"
    },
    skills: {
      type: String,
      required: true,
      default: "N/A"
    },

  },
  { timestamps: true }
);

const User = mongoose.model("User",userSchema)

export default User;