import React, { useState } from "react";
import { dbService } from "fbase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Home = () => {
  const [nweet, setNweet] = useState(""); //String
  const onSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(dbService, "nweets"), {
      nweet,
      createdAt: serverTimestamp(),
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
    </div>
  );
};

export default Home;
