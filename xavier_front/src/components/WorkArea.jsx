import React from 'react'
import Page1 from './Page1';

function WorkArea() {
    console.log('--------------sss-----------------');
    const path = 'page1'
    const switchCheck = () => {
      console.log("IN SWITCH");
      switch (path) {
          case "page1":
              return <>{<Page1 />}</>;
          default:
              return <>ERROR</>;
      }
  };

  return (
    <div>WorkArea

{switchCheck()}
    </div>
  )
}

export default WorkArea