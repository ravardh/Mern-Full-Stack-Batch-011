import React from "react";

const points = [
  "Wide range of job listings",
  "User-friendly interface",
  "Advanced search and filter",
  "Verified employers and jobs",
  "Instant job alerts and notifications",
  "Secure application process",
  "Personalized job recommendations",
  "24/7 customer support",
];

const FeatureIcon = ({ className = "h-6 w-6 text-white" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const About = () => {
  return (
    <div className="px-4 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <header className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">About Our Job Portal</h1>
            <p className="mt-3 text-gray-600 max-w-2xl">
              Our Job Portal connects job seekers with meaningful opportunities.
              We focus on quality listings, verified employers and a great
              user experience so you can find the right role faster.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-center text-center px-4 py-3 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100">
              <div className="text-2xl font-bold text-indigo-700">100k+</div>
              <div className="text-sm text-indigo-600">Jobs Listed</div>
            </div>
            <div className="hidden sm:flex flex-col items-center text-center px-4 py-3 rounded-xl bg-gradient-to-br from-green-50 to-green-100">
              <div className="text-2xl font-bold text-green-700">10k+</div>
              <div className="text-sm text-green-600">Verified Employers</div>
            </div>
          </div>
        </header>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Why choose us</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {points.map((text, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 p-5 shadow-sm hover:shadow-lg transition-shadow duration-150"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-400 flex items-center justify-center text-white">
                      <FeatureIcon className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">{text}</h3>
                    <p className="mt-1 text-xs text-gray-500">Trusted and optimized for your job search.</p>
                  </div>
                </div>

                <span className="absolute -right-10 -bottom-10 opacity-10 text-6xl font-bold text-indigo-600 pointer-events-none">{i + 1}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800">Our promise</h2>
          <p className="mt-3 text-gray-600">
            We prioritize relevant job recommendations, a secure application
            flow and reliable communication between candidates and recruiters.
            Our team is committed to improving the platform based on user
            feedback and analytics.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
