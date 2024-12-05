import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import EditUserModal from "./EditUserModal";

const UserCard = ({ users, setUsers, user }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const avatar =
    "https://avatars.dicebear.com/v2/avataaars/%7B%7Busername%7D%7D.svg?options[mood][]=happy";

  const handleRemove = () => {
    setUsers(users.filter((u) => u.id !== user.id));
  };

  const handleEdit = (updateUser) => {
    setUsers(users.map((u) => (u.id === updateUser.id ? updateUser : u)));
    setIsEditing(false);
  };

  return (
    <>
      <div className="max-w-[390px] max-h-[480px] border  border-[#E8E8E8] max-md:mx-auto max-md:w-full">
        <div className="h-[49%] bg-[#F5F5F5] flex justify-center">
          <img src={avatar} className="h-full" />
        </div>
        <div className="h-[39%] flex flex-col gap-2 p-7 justify-evenly">
          <div className="font-medium">{user.name}</div>
          <div className="flex items-center gap-3">
          <MdOutlineEmail className="h-5 w-5 text-gray-400"/>
            <div className="font-light text-sm">{user.email}</div>
            </div>
            <div className="flex items-center gap-3">
          <MdOutlinePhone className="h-5 w-5 text-gray-400"/>
            <div className="font-light text-sm">{user.phone}</div>
            </div>
            <div className="flex items-center gap-3">
          <CiGlobe className="h-5 w-5 text-gray-400"/>
            <div className="font-light text-sm">{user.website}</div>
            </div>
        </div>
        <div
          className="h-[12%] bg-[#FAFAFA] flex"
          onClick={() => setIsLiked(!isLiked)}
        >
          {isLiked ? (
            <div className="flex w-[33.33%] justify-center items-center text-red-600 text-2xl cursor-pointer border-r">
              <FaHeart />
            </div>
          ) : (
            <div className="flex w-[33.33%] justify-center items-center text-red-600 text-2xl cursor-pointer border-r">
              <FaRegHeart />
            </div>
          )}
          <div
            className="flex w-[33.33%] justify-center items-center text-gray-400 text-2xl cursor-pointer hover:text-sky-600 border-r"
            onClick={() => setIsEditing(true)}
          >
            <FaRegEdit />
          </div>
          <div
            className="flex w-[33.33%] justify-center items-center text-gray-400 text-2xl cursor-pointer hover:text-sky-600"
            onClick={handleRemove}
          >
            <MdDelete />
          </div>

          {isEditing && (
            <EditUserModal
              user={user}
              onClose={() => setIsEditing(false)}
              onSave={handleEdit}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default UserCard;
