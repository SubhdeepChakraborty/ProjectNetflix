import React, { useContext, useState } from "react";
import { Userrows } from "../UserDummy/UserDummy";
import { useLocation } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PhoneAndroidSharp,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import { UpdateUser } from "../../../context/userContext/Apicalls";
import { UserContext } from "../../../context/userContext/AuthContextUser";
import { useNavigate } from "react-router-dom";
import { storage } from "../../../firebase";

const UserPage = () => {
  const path = useLocation();
  const user = path.state.user;
  const id = user._id;
  const [data, setdata] = useState(Userrows);
  console.log(data);
  const navigate = useNavigate();
  const [Users, setUsers] = useState(null);
  const [img, setImg] = useState(null);
  const [Upload, setUploaded] = useState(null);
  const { dispatch } = useContext(UserContext);

  const upload = (items) => {
    items.forEach((item) => {
      //So we can upload duplicate photos or videos in firebase
      const fileName = new Date().getTime() + item.label + item.file.name;
      const UploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      UploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is" + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          UploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setUsers((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([{ file: img, label: "profilePic" }]);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setUsers({ ...Users, [e.target.name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    UpdateUser(id, Users, dispatch);
    navigate("/users");
  };

  return (
    <div className="h-[100vh] overflow-hidden">
      <div>
        <Navbar />
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9">
          <div className="flex flex-col w-[90%] mt-5 ml-7">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-4xl font-[Merriweather] ml-3 font-semibold">
                  Edit User
                </span>
              </div>
              <div>
                <>
                  <Link to="/newuser">
                    <button className="rounded py-1 px-2 font-[Sen] mr-7 text-white bg-slate-500">
                      Create
                    </button>
                  </Link>
                </>
              </div>
            </div>
            <div className="flex mt-5 gap-2">
              <div className="flex-[4] ml-2 shadow-xl">
                <div className="flex items-center justify-between p-5">
                  <img
                    className="h-[60px] w-[60px] object-cover rounded-full mr-2"
                    src={user.profilePic}
                    alt="Photo"
                  />
                  <div className="flex flex-col items-start">
                    {/* <span className="font-[Sen] font-semibold">
                      Simran Talwar
                    </span>
                    <span className="font-[Sen] font-semibold">
                      Software Engineer
                    </span> */}
                  </div>
                </div>
                <div className="ml-2">
                  <span className="font-[Merriweather] text-lg text-gray-600 font-semibold ml-1 ">
                    Account Details{" "}
                  </span>
                  <div className="mt-5 mb-5">
                    <PermIdentityIcon />
                    <span className="ml-2 font-[Sen] text-lg font-semibold">
                      {user.username}
                    </span>
                  </div>
                  {/* <div className="mt-5 mb-5">
                    <CalendarToday />
                    <span className="ml-2 font-[Sen] text-lg font-semibold">
                      21-4-2023
                    </span>
                  </div> */}
                  <span className="font-[Merriweather] text-lg text-gray-600 font-semibold ml-1 ">
                    Contact Details{" "}
                  </span>
                  {/* <div className="mt-5 mb-5">
                    <PhoneAndroidSharp />
                    <span className="ml-2 font-[Sen] text-lg font-semibold">
                      +91123457867
                    </span>
                  </div> */}
                  <div className="mt-5 mb-5">
                    <MailOutline />
                    <span className="ml-2 font-[Sen] text-lg font-semibold">
                      {user.email}
                    </span>
                  </div>
                  {/* <div className="mt-5 mb-5">
                    <LocationSearching />
                    <span className="ml-2 font-[Sen] text-lg font-semibold">
                      India, Mumbai 66/78...
                    </span>
                  </div> */}
                </div>
              </div>
              <div className="flex-[6] shadow-xl">
                <div className="flex">
                  <div className="flex-4 w-full relative">
                    <div className="mt-5 mb-5">
                      <span className="font-[Merriweather] text-lg text-gray-600 font-semibold ml-2">
                        Edit
                      </span>
                    </div>
                    <form>
                      <div>
                        <div className="flex flex-col">
                          <label className="text-sm font-[Sen] font-semibold ml-1">
                            Username
                          </label>
                          <input
                            type="text"
                            name="username"
                            placeholder="subhuu333"
                            onChange={handleChange}
                            className="ml-1 mt-1 border-b-2 font-[Sen] px-1 border-b-slate-700 outline-none h-[30px]"
                          />
                        </div>
                        {/* <div className="flex flex-col mt-5">
                          <label className="text-sm font-[Sen] font-semibold ml-1">
                            Fullname
                          </label>
                          <input
                            type="text"
                            placeholder="Subhdeeep Chakraborty"
                            className="ml-1 mt-1 border-b-2 font-[Sen] px-1 border-b-slate-700 outline-none h-[30px]"
                          />
                        </div> */}
                        <div className="flex flex-col  mt-5">
                          <label className="text-sm font-[Sen] font-semibold ml-1">
                            Email
                          </label>
                          <input
                            type="text"
                            name="email"
                            placeholder="abc67@gmail.com"
                            onChange={handleChange}
                            className="ml-1 mt-1 border-b-2 font-[Sen] px-1 border-b-slate-700 outline-none h-[30px]"
                          />
                        </div>
                        <div className="flex flex-col  mt-5">
                          <label className="text-sm font-[Sen] font-semibold ml-1">
                            image
                          </label>
                          <input
                            type="file"
                            name="profilePic"
                            onChange={(e) => setImg(e.target.files[0])}
                          />
                        </div>
                        {/* <div className="flex flex-col  mt-5">
                          <label className="text-sm font-[Sen] font-semibold ml-1">
                            Address
                          </label>
                          <input
                            type="text"
                            placeholder="India, Mumbai 66/78..."
                            className="ml-1 mt-1 border-b-2 font-[Sen] px-1 border-b-slate-700 outline-none h-[30px]"
                          />
                        </div> */}
                      </div>
                    </form>
                  </div>
                  <div className="flex-4 w-full">
                    <img
                      className=" h-[200px] w-[200px] object-cover ml-8 rounded"
                      src={user.profilePic}
                      alt="Photo"
                    />
                    {/* <label
                      htmlFor="file"
                      className="cursor-pointer ml-60 mb-9 absolute"
                    >
                      <Publish />
                    </label> */}
                    <input type="file" id="file" className="hidden" />
                    {Upload === 1 ? (
                      <>
                        <button
                          onClick={handlesubmit}
                          className="w-[60%] rounded p-2 bg-slate-700 text-white font-semibold font-[Sen] ml-24 mt-44"
                        >
                          Update
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={handleUpload}
                          className="w-[60%] rounded p-2 bg-slate-700 text-white font-semibold font-[Sen] ml-24 mt-44"
                        >
                          Upload
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
