import { useState } from "react";
import Personal from "./Personal";
import Job from "./Job";
import Education from "./Education";
import { CgDarkMode } from "react-icons/cg";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Shared logic for Job and Education
  const [editMode, setEditMode] = useState({ id: "" });
  const [experienceToEdit, setExperienceToEdit] = useState({
    id: "",
    title: "",
    location: "",
    positionDegree: "",
    startdate: "",
    enddate: "",
    description: "",
  });
  const [newExperience, setNewExperience] = useState({
    id: "",
    title: "",
    location: "",
    positionDegree: "",
    startdate: "",
    enddate: "",
    description: "",
  });

  const [submitMode, setSubmitMode] = useState(0);

  const toggleEditMode = (list, id) => {
    let itemToEdit = list.find((item) => item.id === id);
    setExperienceToEdit(itemToEdit);
    setEditMode({ id });
  };

  const handleEdit = (list, setList) => {
    let itemToUpdate = list.findIndex((item) => item.id === editMode.id);
    const updatedList = list.map((item, index) => {
      if (index === itemToUpdate) {
        return {
          ...item,
          title: experienceToEdit.title,
          location: experienceToEdit.location,
          positionDegree: experienceToEdit.positionDegree,
          startdate: experienceToEdit.startdate,
          enddate: experienceToEdit.enddate,
          description: experienceToEdit.description,
        };
      }
      return item;
    });
    setList(updatedList);
    setEditMode({ id: "" });
  };

  const addExperience = (list, setList) => {
    let newObject = {
      id: crypto.randomUUID(),
      title: newExperience.title,
      location: newExperience.location,
      positionDegree: newExperience.positionDegree,
      startdate: newExperience.startdate,
      enddate: newExperience.enddate,
      description: newExperience.description,
    };
    setList([...list, newObject]);
    setNewExperience({
      id: "",
      title: "",
      location: "",
      positionDegree: "",
      startdate: "",
      enddate: "",
      description: "",
    });
    setSubmitMode(false);
  };

  const deleteExperience = (id, list, setList) => {
    let revisedList = list.filter((item) => item.id !== id);
    setList(revisedList);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (editMode.id === "") {
      setNewExperience((prevState) => ({ ...prevState, [name]: value }));
    } else {
      setExperienceToEdit((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  return (
    <>
      <div
        className={`${
          darkMode
            ? "bg-neutral-800 text-neutral-200"
            : "bg-neutral-200 text-slate-800"
        } overflow-auto`}
      >
        {" "}
        <div
          className={`${
            darkMode ? "bg-neutral-800" : "bg-neutral-200"
          } h-screen flex flex-col overflow-auto print:text-black min-w-96 max-w-3xl mx-auto gap-4 p-5`}
        >
          {/* Contact header */}
          <div className="mb-16">
            <Personal darkMode={darkMode}></Personal>
          </div>
          {/* Job section */}
          <div>
            <Job
              darkMode={darkMode}
              editMode={editMode}
              experienceToEdit={experienceToEdit}
              setExperienceToEdit={setExperienceToEdit}
              toggleEditMode={toggleEditMode}
              handleEdit={handleEdit}
              newExperience={newExperience}
              setNewExperience={setNewExperience}
              addExperience={addExperience}
              handleInput={handleInput}
              submitMode={submitMode}
              setSubmitMode={setSubmitMode}
              deleteExperience={deleteExperience}
            ></Job>
          </div>
          {/* Education section */}
          <div>
            <Education
              darkMode={darkMode}
              editMode={editMode}
              experienceToEdit={experienceToEdit}
              setExperienceToEdit={setExperienceToEdit}
              toggleEditMode={toggleEditMode}
              handleEdit={handleEdit}
              newExperience={newExperience}
              setNewExperience={setNewExperience}
              addExperience={addExperience}
              handleInput={handleInput}
              submitMode={submitMode}
              setSubmitMode={setSubmitMode}
              deleteExperience={deleteExperience}
            ></Education>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
