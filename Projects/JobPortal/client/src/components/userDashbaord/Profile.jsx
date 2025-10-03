import React, { useEffect, useState } from "react";
import { RxLinkedinLogo, RxGithubLogo, RxInstagramLogo } from "react-icons/rx";
import { RiTwitterXLine } from "react-icons/ri";
import UpdateProfileModal from "./UpdateProfileModal";
// Basic profile redesign (lightweight)
const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);

  useEffect(() => {
    try {
      const data = JSON.parse(sessionStorage.getItem("userData"));
      setUser(data || null);
    } catch (e) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-[90vh] flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md space-y-4 animate-pulse p-6">
          <div className="h-32 bg-gray-200 rounded-xl" />
          <div className="h-6 bg-gray-200 rounded w-2/3" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="h-4 bg-gray-200 rounded w-1/3" />
          <div className="grid grid-cols-2 gap-3 pt-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className=" flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-8 text-center max-w-md w-full">
          <h2 className="text-xl font-semibold text-[var(--primary)] mb-2">
            Please login first
          </h2>
          <p className="text-sm text-gray-500">
            Your session has no user data.
          </p>
        </div>
      </div>
    );
  }

  const statItems = [
    { label: "Gender", value: user.gender || "N/A" },
    { label: "DOB", value: user.dob || "N/A" },
    { label: "Experience", value: user.exp || "N/A" },
    { label: "Qualification", value: user.qualification || "N/A" },
  ];

  return (
    <>
      <div className="h-full bg-gray-50 py-8 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header Card */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32">
                {user.photo ? (
                  <img
                    src={user.photo}
                    alt={user.fullName}
                    className="w-32 h-32 object-cover rounded-2xl ring-4 ring-gray-100"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-4xl font-semibold text-gray-500">
                    {user.fullName?.[0] || "U"}
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-2xl md:text-3xl font-semibold text-[var(--primary)] tracking-tight">
                    {user.fullName}
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Job Seeker Profile
                  </p>
                </div>
                <div>
                  <button
                    className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg"
                    onClick={() => setUpdateModalOpen(true)}
                  >
                    Update Profile
                  </button>
                  <button className="px-4 py-2 bg-[var(--secondary)] text-white rounded-lg ml-2">
                    Reset Password
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {statItems.map((s) => (
                  <div
                    key={s.label}
                    className="bg-gray-100 rounded-lg px-3 py-3 text-center"
                  >
                    <div className="text-xs uppercase tracking-wide text-gray-500 font-medium">
                      {s.label}
                    </div>
                    <div className="text-sm font-semibold text-[var(--primary)] mt-1">
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-[var(--primary)] mb-4">
                  Bio
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {user.summary || "This user hasn't added a summary yet."}
                </p>
              </section>

              <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-[var(--primary)] mb-4">
                  Skills
                </h2>
                {user.skills ? (
                  <div className="flex flex-wrap gap-2">
                    {user.skills.split(",").map((sk) => (
                      <span
                        key={sk.trim()}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 text-[var(--primary)] rounded-full"
                      >
                        {sk.trim()}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No skills provided.</p>
                )}
              </section>
            </div>

            <div className="space-y-6">
              <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-[var(--primary)] mb-4">
                  Contact
                </h2>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <span className="font-medium text-[var(--primary)]">
                      Email:
                    </span>{" "}
                    {user.email}
                  </li>
                  <li>
                    <span className="font-medium text-[var(--primary)]">
                      Phone:
                    </span>{" "}
                    {user.phone || "N/A"}
                  </li>
                  <li>
                    <span className="font-medium text-[var(--primary)]">
                      Address:
                    </span>{" "}
                    {user.address || "N/A"}
                  </li>
                </ul>
              </section>
              <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-[var(--primary)] mb-4">
                  Socials
                </h2>
                <ul className="flex justify-around">
                  <li>
                    <a
                      href={user.linkedin || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 text-[var(--secondary)] text-lg"
                    >
                      <RxLinkedinLogo />
                    </a>
                  </li>
                  <li>
                    <a
                      href={user.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-black text-[var(--secondary)] text-lg"
                    >
                      <RxGithubLogo />
                    </a>
                  </li>
                  <li>
                    <a
                      href={user.insta || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pink-500 text-[var(--secondary)] text-lg"
                    >
                      <RxInstagramLogo />
                    </a>
                  </li>
                  <li>
                    <a
                      href={user.twitter || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-black text-[var(--secondary)] text-lg"
                    >
                      <RiTwitterXLine />
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>

      <UpdateProfileModal
        isOpen={isUpdateModalOpen}
        onClose={() => setUpdateModalOpen(false)}
      />
    </>
  );
};

export default Profile;
