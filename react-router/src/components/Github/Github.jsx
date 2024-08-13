import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  // useEffect(()=>{
  //   fetch("https://api.github.com/users/Aliking314")
  //   .then((response)=> (response.json()))
  //   .then(data=>{
  //     setData(data)
  //   })
  // },[])
  return (
    <div className='text-center bg-gray-600 text-white p-4'>
      followers:{data.followers}
      <img src={data.avatar_url} alt="" style={{width:300, marginLeft:430}}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Aliking314')
  return response.json()
}
