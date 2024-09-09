import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // const [data, setData] = useState(0)
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Shobhitjain123')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data)
    //     });
    // }, [])
    const data = useLoaderData()
    return (
        <>
            <div className='bg-gray-500 p-4 text-white font-bold text-3xl'>Github Followers: {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={300}/>
            </div>
            
        </>
        
    )
}

export default Github

export const githubInfoLoader = async () => {
  const res = await fetch('https://api.github.com/users/Shobhitjain123')
  return res.json()
}
