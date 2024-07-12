import React, { useEffect, useState } from 'react';

export default function Message({isUserLoggedIn}) {

  useEffect(() => {
    console.log('User is Logged in')
    return () => console.log('Bye')
  })

  return <h1>User is logged in</h1>;

}
