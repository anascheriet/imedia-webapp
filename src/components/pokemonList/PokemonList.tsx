import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cleanState, fetchPokemonList, initialState, setPokemonList, setSelectedPokemon } from '../../redux/slices/PokemonSlice';
import { RootState } from '../../redux/storestate';
import pokemonsEndpoint from './../../api/api';
import appApi from './../../api/axios';
import { IPokemonList, IPokemonListResults, IState } from './types';
import { PokemonItem } from './pokemonItem';
import { AnimateSharedLayout, AnimatePresence, motion } from 'framer-motion';
import "../../styles/home.scss"
import { fadeIn } from './../../animation';
import git from "../../img/github.svg"
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader } from './../Loader';
import store from './../../redux/store';
import { IPokemonState } from './../../redux/slices/PokemonSlice';


export const PokemonList: React.FC = () => {

  const pokemons: IPokemonList = useSelector((state: IPokemonState) => state.pokemons)

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [next, setNext] = useState<string>("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    console.log("pokemons next ===========> ", pokemons);

    loadPokemons(pokemonsEndpoint);

    console.log("pokemons next ===========> ", pokemons);

  }, [])

  const dispatch = useDispatch();


  const loadPokemons = (url: string) => {
    console.log("url ===========> ", url);
    console.log("pokemons next ===========> ", pokemons);
    setIsLoading(true);
    setError(null);

    dispatch(fetchPokemonList(url))

    const unsubscribe = store.subscribe(() => {
      const updatedPokemons = store.getState().pokemon.pokemons;
      console.log("updatedPokemons ===========> ", updatedPokemons);

      setPage(prevPage => prevPage + 1);
      setNext(updatedPokemons.next)

      setHasMore(updatedPokemons.next !== null)
      setOffset(offset + 20)
      unsubscribe();
    });
    /* try {
      //const response = await appApi.get(url);
      //dispatch(setPokemonList(response.data));
      await console.log("pokemons before ========> ", pokemons);

      dispatch(fetchPokemonList(url));
      await console.log("pokemons after  ========> ", pokemons);
      setPage(prevPage => prevPage + 1);

      await setHasMore(pokemons.next !== null)
      setOffset(offset + 20)
    }
    catch (error) {
      setError(error);

    } finally {
      setIsLoading(false);
    } */
    console.log("pokemons next ===========> ", pokemons);


  }
  return (
    <div data-testid="pokemon-list">
      <div className="sticky-container">
        <div className="button-container  ">
          <a title="Source code" href="https://github.com/anascheriet/imedia-webapp" target="_blank" rel="noreferrer"><img src={git} alt="github" /></a>
        </div>
      </div>
      <motion.div className="PokemonList" /* variants={fadeIn} initial="hidden" animate="show" */>
        {/* <AnimateSharedLayout type="crossfade"> */}
        <InfiniteScroll
          dataLength={offset}
          next={() => { loadPokemons(next) }}
          hasMore={false}
          loader={<Loader />}
          scrollThreshold={0.9}
        >
          <div className="Pokemons"> {pokemons?.results?.map((pok, index) => (
            <PokemonItem index={index.toString()} key={pok.url} name={pok.name} url={pok.url} />
          ))}</div>
        </InfiniteScroll>
      </motion.div>
    </div>
  )
}
