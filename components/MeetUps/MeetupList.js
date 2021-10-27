import React from 'react'
import MeetupItem from './MeetupItem'
import classes from "./MeetUpList.module.css"
function MeetupList(props) {
    
    return (
      <>
      <ul className={classes.list}>
      {props.data.map((item,index)=>{
          return <MeetupItem key={item.id} meetid={item.id} image={item.image} title={item.title} address={item.address} description= {item.description}/>
      })}
      </ul>
      </>
    )
}

export default MeetupList
