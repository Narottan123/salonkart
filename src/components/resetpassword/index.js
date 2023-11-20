import React, { useState } from 'react'


export default function ResetPassword() {
    const [email,setEmail]=useState('')
  return (
    <div className="tbox">
    <input
      type="text"
      name="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}

    />
    {/* <span onClick={sendotp}>sendOtp</span> */}
  </div>
  )
}
