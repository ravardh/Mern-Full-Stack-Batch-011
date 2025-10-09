import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: function() { return this.role === 'applicant'; },
      unique: true,
    },
    phone: {
      type: String,
      required: function() { return this.role === 'applicant'; },
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
      required: function() { return this.role === 'applicant'; },
      default: "0"
    },
    qualification: {
      type: String,
      required: function() { return this.role === 'applicant'; },
      default: "N/A"
    },
    bio: {
      type: String,
      required: function() { return this.role === 'applicant'; },
      default: "N/A"
    },
    linkedin: {
      type: String,
      required: true,
      default: "N/A"
    },
    github: {
      type: String,
      required: function() { return this.role === 'applicant'; },
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
      required: function() { return this.role === 'applicant'; }, 
      default: "N/A"
    },
    role:{
      type: String,
      required: true,
      enum: ["applicant", "recruiter", "admin"],
      default: "applicant"
    },
    companyName: {
      type: String,
      required: function() { return this.role === 'recruiter'; }, 
      default: "N/A",
    },
    companyAddress: {
      type: String,
      required: function() { return this.role === 'recruiter'; }, 
      default: "N/A",
    },
    companyEmail: {
      type: String,
      required: function() { return this.role === 'recruiter'; }, 
      default: "N/A",
    },
    companyPhone: {
      type: String,
      required: function() { return this.role === 'recruiter'; },
      default: "N/A",
    },
    companyWebsite: {
      type: String,
      required: function() { return this.role === 'recruiter'; },
      default: "N/A",
    },
    companyDescription: {
      type: String,
      required: function() { return this.role === 'recruiter'; },
      default: "N/A",
    },
    companyDetail:{
      type: String,
      required: function() { return this.role === 'recruiter'; },
      default: "N/A",
    },
    companySince:{
      type: String,
      required: function() { return this.role === 'recruiter'; },
      default: "N/A",
    },
    companyEmployees:{
      type: String,
      required: function() { return this.role === 'recruiter'; },
      default: "N/A",
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User",userSchema)

export default User;