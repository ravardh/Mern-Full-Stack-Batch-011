import React from "react";
import AddNewJobModal from "./AddNewJobModal";
import api from "../../config/api";

const Jobs = () => {
  const [jobs, setJobs] = React.useState([]);

  const [isAddJobModalOpen, setIsAddJobModalOpen] = React.useState(false);

  const handleAddJob = () => {
    // Logic to handle adding a new job
    console.log("Add New Job button clicked");
    setIsAddJobModalOpen(true);
  };

  const fetchJobs = async () => {
    // Simulate an API call to fetch jobs
    const res = await api.get("/recruiter/get-posted-jobs");
    setJobs(res.data.data);
  };

  React.useEffect(() => {
    // Fetch jobs from API
    if (!isAddJobModalOpen) fetchJobs();
  }, [isAddJobModalOpen]);

  return (
    <>
      <div className="p-4">
        <div className="flex justify-between border-b-2 border-[var(--secondary)] pb-4 mb-4">
          <h1>All Posted Jobs</h1>

          <button
            className="bg-[var(--secondary)] text-[var(--tertiary)] py-2 px-4 rounded"
            onClick={handleAddJob}
          >
            Add New Job
          </button>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {jobs.length === 0 ? (
            <p>No jobs posted yet.</p>
          ) : (
            //Create a Card for each job
            jobs.map((job) => (
              <div key={job.id} className="border p-4 mb-4 rounded shadow-sm">
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <p className="text-gray-600">{job.company}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <AddNewJobModal
        isOpen={isAddJobModalOpen}
        onClose={() => setIsAddJobModalOpen(false)}
      />
    </>
  );
};

export default Jobs;
