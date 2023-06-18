import React from "react";
import { useState, useEffect } from "react";
import { VisibilityOutlined } from "@mui/icons-material";
import axios from "axios";

const WidgetSm = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get(
          "https://server-sf9z.onrender.com/api/users?new=true",
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);

  // console.log(user);

  return (
    <div className="flex-[1] shadow-lg p-5 mr-5">
      <span className="font-bold font-[Sen] text-xl p-1">New Join Members</span>
      <ul className="py-3">
        {/* <li className="list-none flex items-center justify-between p-1 py-2">
          <img
            className="h-[40px] w-[40px]  rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4nRj7LkgNF5dxllJnnDy0EgQYQPLJJClNeg&usqp=CAU"
            alt="Photo"
          />
          <div className="flex flex-col">
            <span className="font-bold text-[Sen]">Simran Talwar</span>
          </div>
          <button className="p-1 px-2 rounded font-semibold bg-[#eeeef7] text-[#555] cursor-pointer text-sm">
            <VisibilityOutlined /> Display
          </button>
        </li> */}
        {user.map((users) => (
          <li className="list-none flex items-center justify-between p-1 py-2">
            <img
              className="h-[40px] w-[40px] object-cover rounded-full"
              src={
                users.profilePic ||
                "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              }
              alt="Photo"
            />
            <div className="flex flex-col">
              <span className="font-bold text-[Sen]">{users.username}</span>
            </div>
            <button className="p-1 px-2 rounded font-semibold bg-[#eeeef7] text-[#555] cursor-pointer text-sm">
              <VisibilityOutlined /> Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
