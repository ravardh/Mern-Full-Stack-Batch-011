export const UpdateProfile = async (req, res, next) => {
  try {
    const {
      fullName,
      skills,
      qualification,
      dob,
      phone,
      exp,
      address,
      bio,
      linkedin,
      github,
      insta,
      twitter,
      gender,
    } = req.body;

    const currentUser = req.user;

    if (
      !fullName ||
      !phone ||
      !gender ||
      !dob ||
      !qualification ||
      !exp ||
      !address ||
      !bio ||
      !linkedin ||
      !github ||
      !insta ||
      !twitter ||
      !skills
    ) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      return next(error);
    }

    currentUser.fullName = fullName;
    currentUser.phone = phone;
    currentUser.gender = gender;
    currentUser.dob = dob;
    currentUser.qualification = qualification;
    currentUser.exp = exp;
    currentUser.address = address;
    currentUser.bio = bio;
    currentUser.linkedin = linkedin;
    currentUser.github = github;
    currentUser.insta = insta;
    currentUser.twitter = twitter;
    currentUser.skills = skills;

    const updatedUser = await currentUser.save();

    res.status(200).json({
      message: "Profile updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};
