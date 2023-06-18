import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import "../../styles/pokemonDetails.scss"
import { useSelector, useDispatch } from 'react-redux';
import { IPokemonDetails, IState, IStatsList } from './types';
import { preparePokemonStatList, calculatePokemonRatingOutOf5, capitalizeFirstLetter } from './utilsFunctions';
import fullStar from "../../img/star-full.svg";
import emptyStar from "../../img/star-empty.svg";
import { unsetPokemon } from '../../redux/slices/PokemonSlice';
import { Loader } from './../Loader';
type IProps = {
    url: string,
    handleClose: () => void
}
export const PokemonDetail: React.FC<IProps> = ({ url, handleClose }) => {

    useEffect(() => {
        return () => {
            dispatch(unsetPokemon(null))
        };
    }, [])

    const dispatch = useDispatch();

    const selectedPokemon: IPokemonDetails = useSelector((state: IState) => state.selectedPokemon)

    const statsList: IStatsList[] = preparePokemonStatList(selectedPokemon);

    const getRating = () => {
        return calculatePokemonRatingOutOf5(statsList);
    }
    const getStars = () => {
        const stars = []
        const rating = Math.floor(parseFloat(getRating()))
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img key={i} alt="star" src={fullStar}></img>)
            }
            else {
                stars.push(<motion.img key={i} alt="star" src={emptyStar}></motion.img>)
            }
        }
        return stars;
    }

    const exitCardHandlr = (e: any) => {
        const element = e.target;
        if (element.classList.contains('card-shadow')) {
            document.body.style.overflow = "auto";
        };
        handleClose()
    }

    return (

        <div>{selectedPokemon === null ? <Loader /> : <motion.div
            className="card-shadow" onClick={exitCardHandlr}>
            <motion.div
                layoutId={url} className="detail">
                <motion.div className="stats">
                    <motion.div className="rating">
                        <motion.h3 layoutId={`h3 ${url}`}>{capitalizeFirstLetter(selectedPokemon.name)}</motion.h3>
                        <p>Rating: {getRating()}</p >
                        {getStars()}
                    </motion.div>
                </motion.div>
                <motion.div className="media">
                    <motion.img layoutId={`image ${url}`} src={selectedPokemon?.sprites?.other['official-artwork'].front_default} alt="pokemon logo" />
                </motion.div>
            </motion.div>
        </motion.div>}</div>
    )
}
