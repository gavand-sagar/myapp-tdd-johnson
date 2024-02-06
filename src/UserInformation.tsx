import React from 'react'
import { getDataFromAPI } from './SomeAnotherFile'
export default function UserInformation() {
  return (
    <div>
      <label>{getDataFromAPI()}</label>
    </div>
  )
}
