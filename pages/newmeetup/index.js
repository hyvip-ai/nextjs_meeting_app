import React from 'react'
import MeetUpForm from '../../components/MeetUps/MeetUpForm'
import Layout from '../../components/layouts/Layout'

function NewMeetUp() {
   function getMeetupDataHandles(data){
        console.log(data)
    }
    return (
        <>
        
            <Layout>
            <h1>Add New Meetup</h1>
            <section>
                <MeetUpForm meetUpdata={getMeetupDataHandles}/>
            </section>
            </Layout>
        </>
    )
}

export default NewMeetUp
