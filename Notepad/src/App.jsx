import React, { useState } from 'react';
import './index.css'
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';


const App = () => {
  //yeh fun k andar nhi likhte top pr likhte hai hamesha 👇
  const [addItem,setAdditem] = useState([]);
  const addNote = (note) => {
    // alert("i am clicked");
    setAdditem((prevData) => {
      return [...prevData,note];
    })
    console.log(note);
  };

  const onDelete = (id) =>{
 setAdditem((oldData) => 
 oldData.filter((currdata,index) => {
  //un sbhi note ko show kro jo is id s equal nhi h 
  return index !== id;
 })
 );
  }
 

  return (
    <>
      <Header />
      <CreateNote
        passNote = {addNote}
       />
       {/* map k through render kra skten hai */}
       {addItem.map((val,index) => {
        return ( <Note 
          key = {index}
          id ={index}
          title = {val.title}
          content = {val.content}
          deleteItem  = {onDelete}
        />
        );
       })}
    
      <Footer />
    </>
  )
}
export default App;
