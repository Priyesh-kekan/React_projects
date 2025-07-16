import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Github() {
  // const [data,setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/priyesh-kekan')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data);
  //   })
  // }, [])
  const data = useLoaderData();

  return (
    <div className='text-center bg-gray-600 text-white m-4 text-3xl p-4 '>Github followers: {data.followers} 
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}



export const githubInfoLoader = async() => {
  const response = await fetch('https://api.github.com/users/priyesh-kekan')
  return response.json();
}
