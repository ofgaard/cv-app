import { useState } from "react";
import { FcPhone } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { CiEdit } from "react-icons/ci";

export default function Personal({
  darkMode,
  contacts,
  setContacts,
  editContacts,
  setEditContacts,
}) {
  const handleInput = (e) => {
    const { name, value } = e.target;
    setContacts((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="flex flex-col items-center gap-7">
        {/* Name and edit button */}
        <div className="flex flex-col items-center gap-1 relative">
          {/* <button className="" onClick={toggleEditMode}>
            {!editMode ? <CiEdit size={30}></CiEdit> : "done"}
          </button> */}
          <h1 className="text-5xl sm:text-6xl font-extrabold">
            {!editContacts ? (
              contacts.Name
            ) : (
              <input
                className="bg-transparent rounded-md p-2 max-w-96 text-center"
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
            {!editContacts && <FcPhone></FcPhone>}
            <h2>
              {!editContacts ? (
                contacts.Phone
              ) : (
                <input
                  className={`bg-transparent max-w-96 text-center  max-h-7 rounded-md p-2`}
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
            {!editContacts && <FcContacts></FcContacts>}
            <h2>
              {!editContacts ? (
                contacts.Email
              ) : (
                <input
                  className={`bg-transparent max-w-96 text-center max-h-7 rounded-md p-2`}
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
            {!editContacts && <FcGlobe></FcGlobe>}
            <h2>
              {!editContacts ? (
                contacts.Email
              ) : (
                <input
                  className={`bg-transparent max-w-96 text-center max-h-7 rounded-md p-2`}
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
