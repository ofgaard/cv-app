import { useState } from "react";
import { FcBriefcase } from "react-icons/fc";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";

export default function Education({
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
  const [schools, setSchools] = useState([]);

  return (
    <>
      <div
        className={`flex flex-col gap-5 ${
          darkMode ? "bg-neutral-700" : " border-slate-800"
        } p-5 rounded-xl shadow-lg min-w-80`}
      >
        {/* Top label/icons */}
        <div className="flex flex-row print:flex-col justify-between items-center">
          <div className="flex flex-row items-center gap-2">
            <IoSchoolSharp className="icons fill-orange-500"></IoSchoolSharp>
            <h5>Education</h5>
          </div>
          <div>
            <button
              className={`rounded-md min-w-16 text-xs px-1.5 py-1 bg-emerald-800 ${
                submitMode === 2 && "bg-yellow-700"
              }  ${
                !darkMode && "text-neutral-200"
              } shadow-md font-semibold transition-colors duration-200 border border-transparent border- hover:scale-105 hover:border-neutral-200`}
              onClick={
                submitMode !== 2
                  ? () => setSubmitMode(2)
                  : () => setSubmitMode(0)
              }
            >
              {submitMode === 2 ? "Cancel" : "Add ..."}
            </button>
          </div>
        </div>
        {schools.map((school) =>
          school.id !== editMode.id ? (
            <div key={school.id} className="flex flex-col gap-1">
              {/* First line - school and location */}
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1">
                  <h4>{school.title}</h4>
                </div>
                <h2>{school.location}</h2>
              </div>
              {/* Second line - Degree and start/end date */}
              <div className="flex flex-row justify-between">
                <h3>{school.positionDegree}</h3>
                <div>
                  <div className="flex gap-1 text-xs">
                    <p>{school.startdate}</p>
                    <p>-</p>
                    <p> {school.enddate}</p>
                  </div>
                </div>
              </div>
              {/* Third line - Degree description */}
              <div className="flex justify-between">
                {" "}
                <div
                  className={`max-w-56 sm:max-w-xs text-sm ${
                    darkMode ? "text-neutral-300" : "text-neutral-800"
                  } `}
                >
                  {school.description}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      toggleEditMode(schools, school.id);
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
                        deleteExperience(school.id, schools, setSchools);
                      }}
                      className="fill-red-700 transition-all duration-200 hover:scale-125 icons"
                    ></MdDelete>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // Edit mode
            <div key={school.id} className="flex flex-col gap-2 text-sm">
              <input
                className="bg-transparent"
                type="text"
                name="title"
                value={experienceToEdit.title}
                onChange={handleInput}
              />
              <input
                className="bg-transparent"
                type="text"
                name="location"
                value={experienceToEdit.location}
                onChange={handleInput}
              />
              <input
                className="bg-transparent"
                type="text"
                name="positionDegree"
                value={experienceToEdit.positionDegree}
                onChange={handleInput}
              />
              <input
                className="bg-transparent"
                type="text"
                name="startdate"
                value={experienceToEdit.startdate}
                onChange={handleInput}
              />{" "}
              <input
                className="bg-transparent"
                type="text"
                name="enddate"
                value={experienceToEdit.enddate}
                onChange={handleInput}
              />
              <input
                className="bg-transparent"
                type="text"
                name="description"
                value={experienceToEdit.description}
                onChange={handleInput}
              />
              <button
                onClick={() => {
                  handleEdit(schools, setSchools);
                }}
              >
                <FaCheck
                  size={15}
                  className="transition-all ml-auto duration-200 hover:scale-125 hover:fill-emerald-700"
                ></FaCheck>
              </button>
            </div>
          )
        )}
        {/* Submit mode */}
        {submitMode === 2 && (
          <div className="flex flex-col gap-2 text-sm">
            <input
              className="bg-transparent"
              type="text"
              name="title"
              value={newExperience.title}
              onChange={handleInput}
              placeholder="School"
            />

            <input
              className="bg-transparent"
              type="text"
              name="location"
              value={newExperience.location}
              onChange={handleInput}
              placeholder="Location"
            />
            <input
              className="bg-transparent"
              type="text"
              name="positionDegree"
              value={newExperience.positionDegree}
              onChange={handleInput}
              placeholder="Degree"
            />
            <input
              className="bg-transparent"
              type="text"
              name="startdate"
              value={newExperience.startdate}
              onChange={handleInput}
              placeholder="Start Date"
            />
            <input
              className="bg-transparent"
              type="text"
              name="enddate"
              value={newExperience.enddate}
              onChange={handleInput}
              placeholder="End Date"
            />
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
                addExperience(schools, setSchools);
              }}
              className="ml-auto"
            >
              <FaCheck
                size={15}
                className="transition-all duration-200 hover:scale-125 hover:fill-emerald-700"
              ></FaCheck>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
