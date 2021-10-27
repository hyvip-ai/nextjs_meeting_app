//ourdomain.com/
import React, { useEffect, useState } from "react";
import MeetupList from "../components/MeetUps/MeetupList";
import data from "../components/Dummy_Data/dummy";
import Layout from "../components/layouts/Layout";
function HomePage() {
  const [meetups, setmeetups] = useState([]);
  useEffect(() => {
    setmeetups(data);
  }, []);
  return (
    <>
      <Layout>
        <MeetupList data={meetups} />
      </Layout>
    </>
  );
}

export default HomePage;
