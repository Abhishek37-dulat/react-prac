import React from 'react'
import './UserForm.css'
import { useState } from 'react'

const UserForm = () => {

  const [details, setDetails] = useState({name:'',email:'',phone:'',password:'',course:''});
  

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div className="UserForm">
      <div className="userform-details">
        <form onSubmit={handleSubmit}>
          <div className="user-name">
            <input type='text' name='name'/>
          </div>
          <div className="user-email">
            <input type='email' name='email'/>
          </div>
          <div className="user-phone">
            <input type='number' name='phone'/>
          </div>
          <div className="user-password">
            <input type='password' name='password'/>
          </div>
          <div className="user-course">
            <input type='text' name='course'/>
          </div>
          <div className="user-submit">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserForm
