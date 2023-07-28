import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { MyContext } from './MyContext';

function Userindexname({ name, path }) {

    const {apath,asetPath} = useContext(MyContext);
    console.log('path ',path)
    const navigate = useNavigate();
    const goto = (val) => { 
     
      asetPath(val);
      navigate("/userindex/workarea"); 
      console.log('------page1');
    }
  return (
    <div>Userindexname
        <button  onClick={(e) => goto(path)}>{name}</button>
    </div>
  )
}

export default Userindexname