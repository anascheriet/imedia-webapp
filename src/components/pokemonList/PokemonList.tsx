import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPokemonList } from '../../redux/slices/PokemonSlice';
import { RootState } from '../../redux/storestate';
import pokemonsEndpoint from './../../api/api';
import appApi from './../../api/axios';
import { IPokemonList, IState } from './types';
import { PokemonItem } from './pokemonItem';
import { AnimateSharedLayout, AnimatePresence, motion } from 'framer-motion';
import "../../styles/home.scss"
import { fadeIn } from './../../animation';
import git from "../../img/github.svg"
import InfiniteScroll from 'react-infinite-scroll-component';


export const PokemonList: React.FC = () => {

  const pokemons: IPokemonList = useSelector((state: IState) => state.pokemons)

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {

    loadPokemons(pokemonsEndpoint);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const dispatch = useDispatch();


  const loadPokemons = async (url: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await appApi.get(url);
      dispatch(setPokemonList(response.data));
      setPage(prevPage => prevPage + 1);
      setHasMore(response.data.next !== null)
      setOffset(offset + 20)
    }
    catch (error) {
      setError(error);

    } finally {
      setIsLoading(false);
    }

  }
  return (
    <div>
      <div className="sticky-container">
        <div className="button-container  ">
          <a title="Source code" href="https://github.com/anascheriet/imedia-webapp" target="_blank" rel="noreferrer"><img src={git} alt="github" /></a>
        </div>
      </div>
      <motion.div className="PokemonList" /* variants={fadeIn} initial="hidden" animate="show" */>
        {/* <AnimateSharedLayout type="crossfade"> */}

          <InfiniteScroll
            dataLength={offset}
            next={() => { loadPokemons(pokemons.next) }}
            hasMore={hasMore}
            loader={<p>Loading...</p>}
          >
            <div className="Pokemons"> {pokemons?.results?.map(pok => (
              <PokemonItem key={pok.url} name={pok.name} url={pok.url} />
            ))}</div>


          </InfiniteScroll>

          {/*  <div className="Pokemons">
            {pokemons.results.map(pok => (
              <PokemonItem key={pok.name} name={pok.name} url={pok.url} />
            ))}
          </div> */}
       {/*  </AnimateSharedLayout> */}
      </motion.div>
    </div>
  )
}
