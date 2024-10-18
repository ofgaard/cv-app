import { useState } from "react";

export default function Personal() {
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
      <div className="flex flex-col items-center">
        {/* Name and edit button */}
        <div className="flex flex-col">
          <button className="" onClick={toggleEditMode}>
            Edit
          </button>
          <h1 className="text-5xl sm:text-6xl font-semibold">
            {!editMode ? (
              contacts.Name
            ) : (
              <input
                className="bg-transparent border max-w-96 text-center"
                type="text"
                name="Name"
                value={contacts.Name}
                placeholder={contacts.Name}
                onChange={handleInput}
              />
            )}
          </h1>
        </div>
        {/* Contact info */}
        <div>
          {/* Phone */}
          <div></div>
          {/* Email */}
          <div></div>
          {/* Location */}
          <div></div>
        </div>
      </div>
    </>
  );
}
