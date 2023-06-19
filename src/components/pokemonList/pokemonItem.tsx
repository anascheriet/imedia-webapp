import React from 'react'
import { motion } from 'framer-motion';
import { popup } from '../../animation';
import "../../styles/pokemon.scss"
import appApi from './../../api/axios';
import { useDispatch } from 'react-redux';
import { setSelectedPokemon } from '../../redux/slices/PokemonSlice';
import { Modal } from '@mui/material';
import { PokemonDetail } from '../pokemonDetail/PokemonDetail';
import { fadeIn } from './../../animation';
import { toast } from 'react-toastify';


type IProps = {
    name: string;
    url: string;
    index: string;
}
export const PokemonItem: React.FC<IProps> = ({ url, name, index }) => {

    const [open, setOpen] = React.useState(false);

    const handleClose = () => setOpen(false);
    const dispatch = useDispatch()

    const loadPokemonDetail = async () => {
        try {
            const response = await appApi.get(url);
            dispatch(setSelectedPokemon(response.data));
        }
        catch (error) {
            toast.error("Could not load Pokemon details, please check yout internet and try again.")
            handleClose();
        }
    }

    const handleOpen = async () => {
        setOpen(true);
        await loadPokemonDetail();
    }

    return (
        <div>
            <motion.div data-testid={`pokemon-item-${index}`} id={`pokemon-${index}`} onClick={handleOpen} layoutId={url.toString()} className="styledPokemon" variants={fadeIn} initial="hidden" animate="show">
                <motion.h3 layoutId={`h3 ${url.toString()}`}>{name}</motion.h3>

            </motion.div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <PokemonDetail url={url} handleClose={handleClose} />
            </Modal>
        </div>

    )
}
