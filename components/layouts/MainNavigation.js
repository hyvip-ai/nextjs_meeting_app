import React from 'react'
import Link from "next/link"
import classes from "./MainNavigation.module.css"
function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>NextJs Meetup App</div>
            <nav>
                <ul>
                    <li>
                       <Link href="/">
                            Home
                       </Link>
                    </li>
                    <li>
                        <Link href="/newmeetup">
                           Create New MeetUps
                        </Link>
                    </li>
                   
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
