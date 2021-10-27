import React from 'react'
import data from "../components/Dummy_Data/dummy"
import {useRouter} from "next/router"
import MeetUpDetailsById from '../components/MeetUps/MeetUpDetails';
import Layout from '../components/layouts/Layout';
function MeetUpDetails() {
    const {image,title,description,address} = data[0];
    const {meetUpId} = useRouter().query;
    console.log(meetUpId)
    return (
        <Layout>
      <MeetUpDetailsById image={image} title={title} description = {description} address={address}/>
      </Layout>
    )
}

export default MeetUpDetails
