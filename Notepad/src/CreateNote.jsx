import React, {useState} from 'react';
import './index.css'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';



const CreateNote = (props) => {

  const [ expand , setExpand ] = useState(false);

    const[note , setNote] = useState( {
       title :' ',
       content : ' ',
    });

    const InputEvent = (event) => {

      // const value = event.target.value;  
      // const name = event.target.name;
      //above 2 line could be written as 👇
      //object destructing
      const { name, value} = event.target;
      //jitne bhi note ka previously data hoga vo store hoga 
      setNote((prevData) =>{
        return {
          ...prevData,

          //name check hoga  ki name content k equal hai ya title k
          // agr equal ho jata hai toh us name s related jo bhi value hai vo paste ho jaega yahan pr
          [name] : value,

        }
      });

      console.log(note);
    };

    const addEvent =() =>{
   props.passNote(note);
   setNote({
    title: ' ',
    content : ' ',
   })
    }

    const expandIt = () => {
      setExpand(true);
    }

    const btoNormal = () => {
      setExpand(false);
    }
    

  return (
    <>
      <div className=' main_note'  onDoubleClick={btoNormal}>
      <form>
      {/* agr hota hai true toh yeh wala part dhikao else  na dhikao */}
      {expand ?

        <input 
        type = "text"  
        // value={note.title} 
        value={note.title !== ' ' ? note.title : ''}
        onChange={InputEvent} 
        name = "title" 
        placeholder="Title" 
        autoComplete = 'off'  
        />
        :null}
     
        <textarea 
        rows='' 
        column = '' 
        // value={ note.content} 
        value={note.content !== ' ' ? note.content : ''}
        onChange={InputEvent}
        name = 'content'
        placeholder='Write a note....'
        onClick = {expandIt}
       
        >
        </textarea>
         
        
    {expand?
        <Button onClick={addEvent}>
            <AddIcon  className =" plus_sign" />
        </Button>
        :null} 
       
      </form>

      </div>
    </>
  )
}
export default CreateNote;
