import { useEffect, useState } from "react";
import Featured from "../featured/Featured";
import List from "../list/List";
import Navbar from "../navbar/Navbar";
import axios from "axios";

const Home = ({ type }) => {
  const [Lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `/api/api/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWE0NTU2MWE1NmYwZTBlNGE0YmZjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjU1NjY5MywiZXhwIjoxNjk1MTk2NjkzfQ.MdOZ8UPa68XOse_LEBcnfoF_u3YEvMFz_xrh9GW_qAA",
            },
          }
        );
        const { data } = res;
        setLists(data);
        // console.log(data);
        // console.log(Lists);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  const [Loader, setLoader] = useState(true);
  console.log(Loader);

  return (
    <div className="bg-black font-[Sen]  w-[100%] h-[100%]">
      <Navbar />
      <div>
        <Featured type={type} setGenre={setGenre} />
      </div>
      {Lists.map((list) => {
        return <List list={list} />;
      })}
      <div className="h-[100px] w-full bg-black"></div>
    </div>
  );
};

export default Home;
