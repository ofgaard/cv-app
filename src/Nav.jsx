import { useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import { CiEdit } from "react-icons/ci";
import { FaRegFilePdf } from "react-icons/fa6";

export default function Nav({ darkMode, toggleDarkMode }) {
  return (
    <div className="flex w-full border border-neutral-700 items-center justify-between p-3">
      <CgDarkMode
        className="transition-transform duration-200 hover:scale-125"
        onClick={toggleDarkMode}
        size={20}
      ></CgDarkMode>

      <div className="flex gap-2">
        <button>
          <CiEdit size={25}></CiEdit>
        </button>
      </div>
    </div>
  );
}
