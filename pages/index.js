//ourdomain.com/
import React, { useEffect, useState } from "react";
import MeetupList from "../components/MeetUps/MeetupList";
import data from "../components/Dummy_Data/dummy";
import Layout from "../components/layouts/Layout";
function HomePage(props) {

  return (
    <>
      <Layout>
        <MeetupList data={props.meetups} />
      </Layout>
    </>
  );
}

export async function getStaticProps(){
  //fetch data from api
  //the  return an object specificly object
  return {
    props:{
      meetups:data
    },
    revalidate:10
  }
  //home page recevied the object which is the value of the key props
};

// export function getServerSideProps(context){
//   const req = context.req;
//   const res = context.res;

//   return { 
//     props:{
//       meetups:data
//     }
//   }
// }

export default HomePage;
