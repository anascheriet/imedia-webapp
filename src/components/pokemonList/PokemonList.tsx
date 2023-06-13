import React, { useEffect } from 'react'
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


export const PokemonList: React.FC = () => {

  const pokemons: IPokemonList = useSelector((state: IState) => state.pokemons)

  useEffect(() => {

    initPokemons();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const dispatch = useDispatch();


  const initPokemons = async () => {
    const response = await appApi.get(pokemonsEndpoint);
    dispatch(setPokemonList(response.data));
  }
  return (
    <div>
      <div className="sticky-container">
        <div className="button-container  ">
          <a title="Source code" href="https://github.com/anascheriet/imedia-webapp" target="_blank" rel="noreferrer"><img src={git} alt="github" /></a>
        </div>
      </div>
      <motion.div className="PokemonList" variants={fadeIn} initial="hidden" animate="show">
        <AnimateSharedLayout type="crossfade">
          {/* wrap all the components that will be transitioning*/}
          {/*         <AnimatePresence>
 */}          <div className="Pokemons">
            {pokemons.results.map(pok => (
              <PokemonItem key={pok.name} name={pok.name} url={pok.url} />
            ))}

          </div>
          {/*         </AnimatePresence>
 */}      </AnimateSharedLayout>
      </motion.div>
    </div>
  )
}
