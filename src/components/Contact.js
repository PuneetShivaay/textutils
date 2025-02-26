import React, { useRef } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";

export default function Contact(props) {
  const messageRef = useRef();
  const ref = collection(firestore, "otical contact message");

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);

    let data = {
      message: messageRef.current.value,
    };

    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
      <form className="form-control" onSubmit={handleSave} >
        <label >
          Enter Your Mail/ Message Here, this will be sent to the firebase
          Server
        </label>
        <br></br>
        <input type="text"  ref={messageRef} />
        <button className="btn btn-primary mx-1" type="submit">Save</button>
      </form>
    </div>
  );
}
