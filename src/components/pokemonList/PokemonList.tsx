import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPokemonList } from '../../redux/slices/PokemonSlice';
import pokemonsEndpoint from './../../api/api';
import appApi from './../../api/axios';
import { IPokemonList, IState } from './types';
import { PokemonItem } from './pokemonItem';
import { motion } from 'framer-motion';
import "../../styles/home.scss"
import git from "../../img/github.svg"
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader } from './../Loader';
import { toast } from 'react-toastify';


export const PokemonList: React.FC = () => {

  const pokemons: IPokemonList = useSelector((state: IState) => state.pokemons)

  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    loadPokemons(pokemonsEndpoint);
  }, [])

  const dispatch = useDispatch();


  const loadPokemons = async (url: string) => {
    try {
      const response = await appApi.get(url);

      dispatch(setPokemonList(response.data));
      setHasMore(response.data.next !== null)
      setOffset(offset + 20)
    }
    catch (error) {
      toast.error("Could not get pokemons list :( ")
    }

  }
  return (
    <div data-testid="pokemon-list">
      <div className="sticky-container">
        <div className="button-container  ">
          <a title="Source code" href="https://github.com/anascheriet/imedia-webapp" target="_blank" rel="noreferrer"><img src={git} alt="github" /></a>
        </div>
      </div>
      <motion.div className="PokemonList">
        <InfiniteScroll
          dataLength={offset}
          next={() => { loadPokemons(pokemons.next) }}
          hasMore={hasMore}
          loader={<Loader colors={['#FFCC01', '#365EAB', '#365EAB', '#365EAB', '#365EAB']} />}
          scrollThreshold={0.9}
        >
          <div className="Pokemons"> {pokemons?.results?.map((pok, index) => (
            <PokemonItem index={index.toString()} key={index} name={pok.name} url={pok.url} />
          ))}</div>
        </InfiniteScroll>
      </motion.div>
    </div>
  )
}
