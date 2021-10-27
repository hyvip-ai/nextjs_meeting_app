import React,{ useRef } from 'react'
import classes from "./meetupform.module.css"
import Card from "../Ui_Module/Card"
function MeetUpForm({meetUpdata}) {
    const nameref = useRef();
    const imageref = useRef();
    const addref = useRef();
    const desref = useRef();
   const formSubmithandler = (e)=>{
        e.preventDefault()
        const title = nameref.current.value;
        const image = imageref.current.value;
        const address = addref.current.value;
        const description = desref.current.value;
        const meetUpData={
            title,
            image,
            address,
            description
        }
        meetUpdata(meetUpData)
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={formSubmithandler}>
                <div className={classes.control}>
                    <label htmlFor="text">Meet Up Title</label>
                    <input type="text" required id="title" ref={nameref} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meet Up Image</label>
                    <input type="url" required id="image" ref={imageref}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meet Up Address</label>
                    <input type="text" required id="Address" ref={addref} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meet Up Description</label>
                    <textarea required id="description" rows="5" ref={desref}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add MeetUp</button>
                </div>
            </form>
        </Card>
    )
}

export default MeetUpForm
