import React from 'react'

export default function Card({username="John Doe"}) {
  
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://th.bing.com/th/id/OIP.UVwOYZgB82XxFtM52g9uSAHaFj?w=205&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
        
          <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
  )
}
