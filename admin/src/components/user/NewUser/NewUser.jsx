import React, { useContext, useState } from "react";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import { createUser } from "../../../context/userContext/Apicalls";
import { UserContext } from "../../../context/userContext/AuthContextUser";
import { storage } from "../../../firebase";
import { useNavigate } from "react-router-dom";

const NewUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const [img, setImg] = useState(null);
  const { dispatch } = useContext(UserContext);
  const [updated, setUpdated] = useState(null);
  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setUser((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUpdated((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([{ file: img, label: "profilePic" }]);
  };

  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(user, dispatch);
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
          <div className=" mt-9 ml-9 fixed w-[70%] shadow-lg h-[70%] ">
            <h1 className="text-4xl font-[Merriweather] ml-3 font-semibold">
              New User
            </h1>
            <form className="flex flex-wrap p-4 ml-8 mt-2">
              <div className="w-[400px] flex flex-col mt-2 mr-5">
                <label className="font-[Sen] text-slate-500 font-semibold text-lg">
                  {" "}
                  Username{" "}
                </label>
                <input
                  type="text"
                  placeholder="wick666"
                  name="username"
                  onChange={handleChange}
                  className="mt-1 border-b-2 font-[Sen] px-1 border-b-slate-700 outline-none text-lg"
                />
              </div>
              {/* <div className="w-[400px] flex flex-col mt-2 mr-5">
                <label className="font-[Sen] text-slate-500 font-semibold text-lg">
                  {" "}
                  Full Name{" "}
                </label>
                <input
                  type="text"
                  placeholder="John Wick"
                  className="mt-1 border-b-2 font-[Sen] px-1 border-b-slate-700 outline-none text-lg"
                />
              </div> */}
              <div className="w-[400px] flex flex-col mt-2 mr-5">
                <label className="font-[Sen] text-slate-500 font-semibold text-lg">
                  {" "}
                  Email{" "}
                </label>
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  placeholder="John@gmail.com"
                  className="mt-1 border-b-2 font-[Sen] px-1 border-b-slate-700 outline-none text-lg"
                />
              </div>
              <div className="w-[400px] flex flex-col mt-2 mr-5">
                <label className="font-[Sen] text-slate-500 font-semibold text-lg">
                  {" "}
                  Password{" "}
                </label>
                <input
                  type="text"
                  name="password"
                  onChange={handleChange}
                  placeholder="xxxxx"
                  className="mt-1 border-b-2 font-[Sen] px-1 border-b-slate-700 outline-none text-lg"
                />
              </div>
              <div className="w-[400px] flex flex-col mt-2 mr-5">
                <label className="font-[Sen] text-slate-500 font-semibold text-lg">
                  {" "}
                  Image{" "}
                </label>
                <input
                  onChange={(e) => setImg(e.target.files[0])}
                  type="file"
                  name="profilePic"
                />
              </div>
              {/* <div className="w-[400px] flex flex-col mt-2 mr-5">
                <label className="font-[Sen] text-slate-500 font-semibold text-lg">
                  {" "}
                  Address{" "}
                </label>
                <input
                  type="text"
                  placeholder="India, Mumbai 66/78..."
                  className="mt-1 border-b-2 font-[Sen] px-1 border-b-slate-700 outline-none text-lg"
                />
              </div>
              <div className="w-[400px] flex flex-col mt-5 mr-5">
                <label className="font-[Sen] text-slate-500 font-semibold text-lg">
                  {" "}
                  Gender{" "}
                </label>
                <div className="p-2">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    className="cursor-pointer"
                  />
                  <label
                    for="male"
                    className=" ml-2 font-[Sen] mr-2 text-lg text-[#555]"
                  >
                    Male
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    className="cursor-pointer"
                  />
                  <label
                    for="female"
                    className=" ml-2 font-[Sen] mr-2 text-lg text-[#555]"
                  >
                    Female
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    id="other"
                    value="other"
                    className="cursor-pointer"
                  />
                  <label
                    for="other"
                    className=" ml-2 font-[Sen]  text-lg text-[#555]"
                  >
                    Other
                  </label>
                </div>
              </div>
              <div className="w-[400px] flex flex-col mt-2 mr-5">
                <label className="font-[Sen] text-slate-500 font-semibold text-lg">
                  {" "}
                  Active{" "}
                </label>
                <select name="active" id="active" className="p-2">
                  <option value="yes" className="font-[Sen]">
                    Yes
                  </option>
                  <option value="No" className="font-[Sen]">
                    No
                  </option>
                </select>
              </div> */}
            </form>
            {updated === 1 ? (
              <>
                <button
                  onClick={handleSubmit}
                  className="w-[10%] rounded p-2 bg-slate-700 text-white font-semibold font-[Sen] ml-[49rem]"
                >
                  Create
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleUpload}
                  className="w-[10%] rounded p-2 bg-slate-700 text-white font-semibold font-[Sen] ml-[49rem]"
                >
                  Upload
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
