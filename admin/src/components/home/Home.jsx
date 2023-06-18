import React, { useEffect, useState, useMemo } from "react";
import Featured from "./featured/Featured";
import Chart from "./chart/Chart";
import { Userdata } from "./chart/Dummy/Dummy";
import WidgetSm from "./widgets/WidgetSm";
import Widgetlg from "./widgets/Widgetlg";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

const Home = () => {
  const [userStats, setUserStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const getStats = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/users/stats", {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      const statsList = res.data.sort(function (a, b) {
        return a._id - b._id;
      });
      statsList.map((item) =>
        setUserStats((prev) => [
          ...prev,
          { name: MONTHS[item._id - 1], "New User": item.total },
        ])
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStats();
  }, [MONTHS]);

  console.log(userStats);

  // useEffect(() => {
  //   const getStats = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:8000/api/users/stats", {
  //         headers: {
  //           token:
  //             "Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWE0NTU2MWE1NmYwZTBlNGE0YmZjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjEyMzA2MCwiZXhwIjoxNjg2NTU1MDYwfQ.I-ZPWHxOUxF2MlEBAb9Wm1JQ60_K0QdJwxYvakkpvfM",
  //         },
  //       });
  //       console.log(res.data);
  //       const statsList = res.data.sort(function (a, b) {
  //         return a._id - b._id;
  //       });
  //       statsList.map((item) =>
  //         setUserStats((prev) => [
  //           ...prev,
  //           { name: MONTHS[item._id - 1], "New User": item.total },
  //         ])
  //       );
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getStats();
  // }, [MONTHS]);

  // console.log(userStats);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9">
          <Featured />
          <Chart
            data={userStats}
            title="User Analytics"
            grid
            dataKey="New User"
          />
          <div className="flex m-5">
            <WidgetSm />
            <Widgetlg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
