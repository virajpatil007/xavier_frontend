import React from 'react'
import { useNavigate } from 'react-router-dom';

function Userindexname({ name, path }) {

    console.log('path ',path)
    const navigate = useNavigate();
    const goto = (val) => { 
        if (val == "page1") {
            navigate("/userindex/workarea"); 
            console.log('------page1');
        } 
    }
  return (
    <div>Userindexname
        <button  onClick={(e) => goto(path)}>ON</button>
    </div>
  )
}

export default Userindexname