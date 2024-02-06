import React from 'react'
import { getDataFromAPI } from './SomeAnotherFile'
export default function UserInformation() {

  

  return (
    <div>
      <button onClick={()=>getDataFromAPI()}>CLICK ME</button>
      <label>{getDataFromAPI()}</label>
    </div>
  )
}
