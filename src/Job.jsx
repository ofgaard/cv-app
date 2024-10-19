import { useState } from "react";
import { FcBriefcase } from "react-icons/fc";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";

export default function Job({
  darkMode,
  editMode,
  experienceToEdit,
  setExperienceToEdit,
  handleEdit,
  newExperience,
  setNewExperience,
  addExperience,
  toggleEditMode,
  handleInput,
  submitMode,
  setSubmitMode,
}) {
  const [jobs, setJobs] = useState([
    {
      id: "1",
      title: "John",
      positionDegree: "Journalist",
      location: "Copenhagen",
      startdate: "2000",
      enddate: "2004",
      description: "Working",
    },
  ]);

  return (
    <>
      <div
        className={`flex flex-col gap-3 ${
          darkMode ? "bg-neutral-700" : "bg-neutral-300"
        } p-5 rounded-md`}
      >
        {/* Top label/icons */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-2">
            <FcBriefcase></FcBriefcase>
            <h5>Work Experience</h5>
          </div>
          <div>
            <button onClick={() => setSubmitMode((prev) => !prev)}>
              <IoIosAdd></IoIosAdd>
            </button>
          </div>
        </div>
        {jobs.map((job) =>
          job.id !== editMode.id ? (
            <div key={job.id} className="flex flex-col gap-1">
              {/* First line - job and location */}
              <div className="flex flex-row justify-between">
                {/* Jobname and edit/delete buttons */}
                <div className="flex flex-row gap-1">
                  <h4>{job.title}</h4>
                  <button
                    onClick={() => {
                      toggleEditMode(jobs, job.id);
                    }}
                  >
                    Edit
                  </button>
                  <button>Delete</button>
                </div>
                <h2>{job.location}</h2>
              </div>
              {/* Second line - Position and start/end date */}
              <div className="flex flex-row justify-between">
                <h3>{job.positionDegree}</h3>
                <p>
                  {job.startdate} - {job.enddate}
                </p>
              </div>
              {/* Third line - Job description */}
              <div className="max-w-md text-sm">{job.description}</div>
            </div>
          ) : (
            // Edit mode
            <div key={job.id} className="flex flex-col gap-1">
              {/* First line - job and location */}
              <div className="flex flex-row justify-between">
                {/* Submit Edit button */}
                <div className="flex flex-row gap-1">
                  <h4>
                    <input
                      className="bg-transparent"
                      type="text"
                      name="title"
                      value={experienceToEdit.title}
                      onChange={handleInput}
                    />
                  </h4>
                  <button
                    onClick={() => {
                      handleEdit(jobs, setJobs);
                    }}
                  >
                    Submit
                  </button>
                </div>
                <h2>
                  <input
                    className="bg-transparent"
                    type="text"
                    name="location"
                    value={experienceToEdit.location}
                    onChange={handleInput}
                  />
                </h2>
              </div>
              {/* Second line - Position and start/end date */}
              <div className="flex flex-row justify-between">
                <h3>
                  <input
                    className="bg-transparent"
                    type="text"
                    name="positionDegree"
                    value={experienceToEdit.positionDegree}
                    onChange={handleInput}
                  />
                </h3>
                <p>
                  <input
                    className="bg-transparent"
                    type="text"
                    name="startdate"
                    value={experienceToEdit.startdate}
                    onChange={handleInput}
                  />{" "}
                  -{" "}
                  <input
                    className="bg-transparent"
                    type="text"
                    name="enddate"
                    value={experienceToEdit.enddate}
                    onChange={handleInput}
                  />
                </p>
              </div>
              {/* Third line - Job description */}
              <div className="max-w-md text-sm">
                <input
                  className="bg-transparent"
                  type="text"
                  name="description"
                  value={experienceToEdit.description}
                  onChange={handleInput}
                />
              </div>
            </div>
          )
        )}
        {/* Submit mode */}
        {submitMode && (
          <div className="flex flex-col gap-1">
            {/* First line - job and location */}
            <div className="flex flex-row justify-between">
              {/* Submit Edit button */}
              <div className="flex flex-row gap-1">
                <h4>
                  <input
                    className="bg-transparent"
                    type="text"
                    name="title"
                    value={newExperience.title}
                    onChange={handleInput}
                    placeholder="Company"
                  />
                </h4>
                <button
                  onClick={() => {
                    addExperience(jobs, setJobs);
                  }}
                >
                  Done
                </button>
              </div>
              <h2>
                <input
                  className="bg-transparent"
                  type="text"
                  name="location"
                  value={newExperience.location}
                  onChange={handleInput}
                  placeholder="Location"
                />
              </h2>
            </div>
            {/* Second line - Position and start/end date */}
            <div className="flex flex-row justify-between">
              <h3>
                <input
                  className="bg-transparent"
                  type="text"
                  name="positionDegree"
                  value={newExperience.positionDegree}
                  onChange={handleInput}
                  placeholder="Position"
                />
              </h3>
              <p>
                <input
                  className="bg-transparent"
                  type="text"
                  name="startdate"
                  value={newExperience.startdate}
                  onChange={handleInput}
                  placeholder="Start Date"
                />{" "}
                -{" "}
                <input
                  className="bg-transparent"
                  type="text"
                  name="enddate"
                  value={newExperience.enddate}
                  onChange={handleInput}
                  placeholder="End Date"
                />
              </p>
            </div>
            {/* Third line - Job description */}
            <div className="max-w-md text-sm">
              <input
                className="bg-transparent"
                type="text"
                name="description"
                placeholder="Description"
                value={newExperience.description}
                onChange={handleInput}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
