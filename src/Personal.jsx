import { useState } from "react";
import { FcPhone } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { CiEdit } from "react-icons/ci";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";

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
      <div className="flex flex-col items-center gap-3 sm:gap-7">
        {/* Name */}
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-center">
            {!editContacts ? (
              contacts.Name
            ) : (
              <input
                className={`bg-transparent p-2 text-center text-base`}
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
        <div className="flex flex-col md:flex-row print:flex-row print:gap-5 gap-3 md:gap-10 items-center text-sm">
          {/* Phone */}
          <div className="flex flex-row items-center gap-2">
            {!editContacts && <FiPhone className="icons"></FiPhone>}
            <h2>
              {!editContacts ? (
                contacts.Phone
              ) : (
                <input
                  className={`bg-transparent sm:text-xs max-w-96 text-center max-h-7 p-2`}
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
            {!editContacts && (
              <MdAlternateEmail className="icons"></MdAlternateEmail>
            )}
            <h2>
              {!editContacts ? (
                contacts.Email
              ) : (
                <input
                  className={`bg-transparent sm:text-xs max-w-96 text-center max-h-7 p-2`}
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
            {!editContacts && (
              <CiLocationArrow1 className="icons"></CiLocationArrow1>
            )}
            <h2>
              {!editContacts ? (
                contacts.Email
              ) : (
                <input
                  className={`bg-transparent  max-w-96 text-center max-h-7  p-2 sm:text-xs`}
                  type="text"
                  name="Location"
                  value={contacts.Location}
                  placeholder="Location"
                  onChange={handleInput}
                />
              )}
            </h2>
          </div>
          {/* Finish button */}
          {editContacts && (
            <button onClick={() => setEditContacts((prev) => !prev)}>
              <FaCheck
                size={15}
                className="transition-all duration-200 hover:scale-125 hover:fill-emerald-700"
              ></FaCheck>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
