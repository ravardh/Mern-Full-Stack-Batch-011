import Job from "../models/jobModel.js";

export const GetAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("recruiterID");
    const availableJobs = jobs.filter(
      (job) => job.lastDateToApply >= new Date()
    );

    res
      .status(200)
      .json({ message: "Jobs retrieved successfully", data: availableJobs });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving jobs", error });
  }
};


