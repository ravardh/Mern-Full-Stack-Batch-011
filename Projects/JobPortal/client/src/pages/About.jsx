import React from "react";

const points = [
  "Wide range of job listings",
  "User-friendly interface ",
  "Advanced search and filter",
  "Verified employers and job ",
  "Instant job alerts and notifications",
  "Secure application process",
  "Personalized job recommendations",
  "24/7 customer support",
];

const About = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">About Our Job Portal</h2>
      <p className="mb-6 text-gray-700">
        Our Job Portal is designed to connect job seekers with their dream
        opportunities. Here’s why we are your first choice:
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-3">
        {points.map((element, index) => (
          <div className="rounded border shadow p-3 "  key={index}>{element}</div>
        ))}
      </div>
    </div>
  );
};

export default About;
