import React, { useEffect } from 'react'
import appApi from './../api/axios';
import pokemonsEndpoint from './../api/api';




export const Home = () => {
  useEffect(() => {

    initPokemons();

  }, [])


  const initPokemons = async () => {
    const response = await appApi.get(pokemonsEndpoint);
    console.log(response.data);
  }
  return (
    <div>Home</div>
  )
}
