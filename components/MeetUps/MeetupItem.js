import React from 'react'
import classes from "./MeetUpitem.module.css"
import Card from '../Ui_Module/Card'
import Link from 'next/link'
function MeetupItem(props) {
    return (
        <li className={classes.MeetupItem}>
            <Card>
            <div className={classes.image}>
            <img src={props.image} alt="" />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button>
                    <Link href={`/${props.meetid}`}>
                        Show Details
                    </Link>
                </button>
            </div>
            </Card>
        </li>
    )
}

export default MeetupItem
