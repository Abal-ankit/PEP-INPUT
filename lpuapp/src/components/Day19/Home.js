import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Home() {

  const data = useLoaderData();
  const user = data.results[0];

  return (
    <div className='container'>
      <img src={user.picture.large} />
      <p>{user.name.first} { user.name.second}</p>
      <p>{user.email}</p>
    </div>
  )
}

export default Home;


export const randomUserLoader = async () => {
  const url = "https://randomuser.me/api/";
  const response = await fetch(url);
  return await response.json();
}
