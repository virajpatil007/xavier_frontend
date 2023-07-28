import React from 'react'
import { useNavigate } from 'react-router-dom';

function Userindex() {
    const navigate = useNavigate();
    const fun = () => 
    {
        console.log('nav1')
        navigate("/userindex/mainarea");
        console.log('nav2');

     }
  return (
    <div
    style={{
        marginTop: "9.8%",
        width: 255,
        background: "white",
        borderRight: "none",
        height: "90%",
        maxHeight: "100%",
        backgroundColor:'blue'
    }}
    >Userindex
        <button onClick={fun}>Click</button>
    </div>
  )
}

export default Userindex