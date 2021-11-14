import React from 'react'
import data from "../components/Dummy_Data/dummy"
import {useRouter} from "next/router"
import MeetUpDetailsById from '../components/MeetUps/MeetUpDetails';
import Layout from '../components/layouts/Layout';
function MeetUpDetails(props) {
    // const {meetUpId} = useRouter().query;
    // console.log(meetUpId)
    return (
        <Layout>
      <MeetUpDetailsById image={data[0].image} title={data[0].title} description = {data[0].description} address={data[0].address}/>
      </Layout>
    )
}
export function getStaticPaths(){
  return {
    paths:[
      {
        params:{
          meetUpId:'m1'
        }
      },
      {
        params:{
          meetUpId:'m2'
        }
      }
    ],
    fallback:false
  }
}

export function getStaticProps(context){
 const meetupId =  context.params.meetUpId
 console.log(meetupId)
  return {
    props:{
      id:'m1',
      image:data[0].image,
      title:data[0].title,
      description:data[0].description,
      address:data[0].description
    }
  }
}

export default MeetUpDetails
