import React from 'react'

const Greeting = ({isLoggedIn, name}) => {
  let message
//   console.log("Message is", message)

//   if (isLoggedIn) {
//     message = <h1>Welcome back, {name}</h1>
//   } else {
//     message = <h1>Please login to continue</h1>
//   }
  return (
    <>
        {isLoggedIn ? (
            <h1>Welcome back, {name}</h1>
            ) : (<h1>Please login to continue</h1>)}
    </>
  )
}

export default Greeting