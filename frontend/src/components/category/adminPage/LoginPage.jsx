import React from 'react'
import { useState } from 'react'
import Login from './Login'
import { Registration } from './registration/Registration'

export default function LoginPage({setIsLogged}) {
const [registration, setRegistration] = useState(true)  

  return (
    <div>

{!registration ? <Registration /> : <Login setIsLogged={setIsLogged}/>}

    </div>
  )
}
