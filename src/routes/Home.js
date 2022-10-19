import React, { useEffect, useState } from "react";
import { dbService } from "fbase";
import { getDocs, addDoc, collection } from "firebase/firestore";

const Home = () => {
  const [nweet, setNweet] = useState(""); //String
  const [nweets, setNweets] = useState([]);

  const getNweets = async () => {
    const dbNweets = await getDocs(collection(dbService, "nweets"));
    dbNweets.forEach((document) => {
      const nweetObject = {
        ...document.data(),
        id: document.id,
      };
      setNweets((prev) => [nweetObject, ...prev]);
    });
  };
  useEffect(() => {
    getNweets();
  }, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(dbService, "nweets"), {
      text: nweet,
      createdAt: Date.now(),
    });
    setNweet("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
    // console.log(nweet);
  };
  console.log(nweets);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="지금 무슨 생각해?"
          maxLength={120}
        ></input>
        <input type="submit" value="Nweet"></input>
      </form>
      <div>
        <ul>
          {nweets.map((nweet) => (
            <li key={nweet.id}>
              <h4>{nweet.nweet}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
