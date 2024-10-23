import { useState } from "react";
import { FcBriefcase } from "react-icons/fc";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdWork } from "react-icons/md";

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
  deleteExperience,
}) {
  const [jobs, setJobs] = useState([]);

  return (
    <>
      <div
        className={`flex flex-col gap-5 ${
          darkMode ? "bg-neutral-700" : " border-slate-800"
        } p-5 rounded-xl shadow-lg`}
      >
        {/* Top label/icons */}
        <div className="flex flex-col gap-3 sm:flex-row print:flex-col justify-between items-center">
          <div className="flex flex-row items-center gap-2">
            <MdWork className="icons fill-orange-500"></MdWork>
            <h5>Work Experience</h5>
          </div>
          <div>
            <button
              className={`rounded-md min-w-16 text-xs py-0.5 sm:py-1 bg-emerald-800 ${
                submitMode === 1 && "bg-yellow-700"
              } ${
                !darkMode && "text-neutral-200"
              } shadow-xl font-semibold transition-colors duration-200 border border-transparent border- hover:scale-105 hover:border-neutral-200`}
              onClick={
                submitMode !== 1
                  ? () => setSubmitMode(1)
                  : () => setSubmitMode(0)
              }
            >
              {submitMode === 1 ? "Cancel" : "Add ..."}
            </button>
          </div>
        </div>
        {jobs.length > 0 &&
          jobs.map((job) =>
            job.id !== editMode.id ? (
              <div key={job.id} className="flex flex-col gap-0">
                {/* First line - job and location */}
                <div className="flex flex-row justify-between">
                  {/* Jobname and edit/delete buttons */}
                  <div className="flex flex-row gap-1">
                    <h4>{job.title}</h4>
                  </div>
                  <h2>{job.location}</h2>
                </div>
                {/* Second line - Position and start/end date */}
                <div className="flex flex-row justify-between">
                  <h3>{job.positionDegree}</h3>
                  <div>
                    <div className="flex gap-1 text-xs">
                      <p>{job.startdate}</p>
                      <p>-</p>
                      <p> {job.enddate}</p>
                    </div>
                  </div>
                </div>
                {/* Third line - Job description */}
                <div className="flex justify-between">
                  {" "}
                  <div className="max-w-96 sm:max-w-xs text-sm">
                    {job.description}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        toggleEditMode(jobs, job.id);
                      }}
                    >
                      <CiEdit
                        size={15}
                        className="icons transition-all duration-200 hover:scale-125"
                      ></CiEdit>
                    </button>
                    <button>
                      <MdDelete
                        size={20}
                        onClick={() => {
                          deleteExperience(job.id, jobs, setJobs);
                        }}
                        className="fill-red-700 transition-all duration-200 hover:scale-125 icons"
                      ></MdDelete>
                    </button>
                  </div>
                </div>
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
                  </div>
                  <h2>
                    <input
                      className="bg-transparent text-right"
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
                  <div className="flex flex-col text-xs">
                    <input
                      className="bg-transparent text-right"
                      type="text"
                      name="startdate"
                      value={experienceToEdit.startdate}
                      onChange={handleInput}
                    />{" "}
                    <input
                      className="bg-transparent text-right"
                      type="text"
                      name="enddate"
                      value={experienceToEdit.enddate}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                {/* Third line - Job description */}
                <div className="text-sm flex justify-between">
                  <input
                    className="bg-transparent"
                    type="text"
                    name="description"
                    value={experienceToEdit.description}
                    onChange={handleInput}
                  />
                  <button
                    onClick={() => {
                      handleEdit(jobs, setJobs);
                    }}
                  >
                    <FaCheck
                      size={15}
                      className="transition-all duration-200 hover:scale-125 hover:fill-emerald-700"
                    ></FaCheck>
                  </button>
                </div>
              </div>
            )
          )}
        {/* Submit mode */}
        {submitMode === 1 && (
          <div className="flex flex-col gap-2">
            {/* First line - job and location */}
            <div className="flex flex-row justify-between flex-wrap">
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
              </div>
              <h2 className="text-xs">
                <input
                  className="bg-transparent text-right"
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
              <div className="flex flex-col text-xs">
                <input
                  className="bg-transparent text-right"
                  type="text"
                  name="startdate"
                  value={newExperience.startdate}
                  onChange={handleInput}
                  placeholder="Start Date"
                />
                <input
                  className="bg-transparent text-right"
                  type="text"
                  name="enddate"
                  value={newExperience.enddate}
                  onChange={handleInput}
                  placeholder="End Date"
                />
              </div>
            </div>
            {/* Third line - Job description */}
            <div className="text-sm flex justify-between">
              <input
                className="bg-transparent"
                type="text"
                name="description"
                placeholder="Description"
                value={newExperience.description}
                onChange={handleInput}
              />
              <button
                onClick={() => {
                  addExperience(jobs, setJobs);
                }}
              >
                <FaCheck
                  size={15}
                  className="transition-all duration-200 hover:scale-125 hover:fill-emerald-700"
                ></FaCheck>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
