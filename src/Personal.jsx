import { useState } from "react";
import { FcPhone } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { CiEdit } from "react-icons/ci";

export default function Personal(darkMode) {
  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  const [contacts, setContacts] = useState({
    Name: "John Doe",
    Phone: "123 456 78",
    Email: "Johndoe@gmail.com",
    Location: "Copenhagen",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContacts((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        {/* Name and edit button */}
        <div className="flex flex-col items-center gap-1">
          <button className="" onClick={toggleEditMode}>
            {!editMode ? <CiEdit></CiEdit> : "done"}
          </button>
          <h1 className="text-5xl sm:text-6xl font-semibold">
            {!editMode ? (
              contacts.Name
            ) : (
              <input
                className="bg-neutral-700 rounded-md p-2 max-w-96 text-center"
                type="text"
                name="Name"
                value={contacts.Name}
                placeholder="Name"
                onChange={handleInput}
              />
            )}
          </h1>
        </div>
        {/* Contact info */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-10 items-center text-sm">
          {/* Phone */}
          <div className="flex flex-row items-center gap-2">
            {!editMode && <FcPhone></FcPhone>}
            <h2>
              {!editMode ? (
                contacts.Phone
              ) : (
                <input
                  className={`bg-transparent max-w-96 text-center ${
                    darkMode ? "bg-neutral-700" : "bg-neutral-400"
                  } max-h-7 rounded-md p-2`}
                  type="text"
                  name="Phone"
                  value={contacts.Phone}
                  placeholder="Phone number"
                  onChange={handleInput}
                />
              )}
            </h2>
          </div>
          {/* Email */}
          <div className="flex flex-row items-center gap-2">
            {!editMode && <FcContacts></FcContacts>}
            <h2>
              {!editMode ? (
                contacts.Email
              ) : (
                <input
                  className={`bg-transparent max-w-96 text-center ${
                    darkMode ? "bg-neutral-700" : "bg-neutral-400"
                  } max-h-7 rounded-md p-2`}
                  type="text"
                  name="Email"
                  value={contacts.Email}
                  placeholder="Email"
                  onChange={handleInput}
                />
              )}
            </h2>
          </div>
          {/* Location */}
          <div className="flex flex-row items-center gap-2">
            {!editMode && <FcGlobe></FcGlobe>}
            <h2>
              {!editMode ? (
                contacts.Email
              ) : (
                <input
                  className={`bg-transparent max-w-96 text-center ${
                    darkMode ? "bg-neutral-700" : "bg-neutral-400"
                  } max-h-7 rounded-md p-2`}
                  type="text"
                  name="Location"
                  value={contacts.Location}
                  placeholder="Location"
                  onChange={handleInput}
                />
              )}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
