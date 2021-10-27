import React from 'react'
import classes from "./MeetUpDetails.module.css"
function MeetUpDetailsById(props) {
    return (
        <section className={classes.detail}>
        <img src={props.image} alt="" />
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
    </section>
    )
}

export default MeetUpDetailsById
