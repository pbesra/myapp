import { Button, Select, TextField } from "@mui/material";
import { useState } from "react";
import SelectItem from "../SelectItem/SelectItem";

const Example=()=>{

    const [name, setName]=useState(null);
    const [finalName, setFinalName]=useState(null);

    const handleChange=(event)=>{
        setName(event.target.value);
    }

    const handleClick=(event)=>{
        event.preventDefault();
        setFinalName(name);
    }

    const persons={
        'prakash besra':{
            id:1,
            age:21
        },
        'prakash b':{
            id:2,
            age:23
        },
        'prakash':{
            id:10,
            age:17
        },
        'reena':{
            id:19,
            age:28,
        },
        'reena tuddu':{
            id:3,
            age:20,
        },
        'reena t':{
            id:4,
            age:20
        },
        'abay':{
            id:5,
            age:29
        }
    }
    
    return(
        <>
            <SelectItem setName={setName}/>
            <TextField onChange={handleChange} value={name} placeholder="enter you name"/>
            <Button onClick={handleClick} sx={{border: '1px solid black'}}>
                submit
            </Button>
            <br/>
            <br/>
            {
                
                finalName && <div>{finalName}</div>
            }
            { persons[finalName] &&  <p>Id: {persons[finalName].id} | Age: {persons[finalName].age}</p>}
        </>
    );
}
export default Example;