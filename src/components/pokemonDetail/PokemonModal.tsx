import { Box, Modal, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedPokemon } from '../../redux/slices/PokemonSlice';
import { IState, IPokemonDetails } from './types';
import appApi from './../../api/axios';

type IProps = {
    open: boolean;
    handleClose: () => void,
    url: string
}

export const PokemonModal: React.FC<IProps> = ({ open, handleClose, url }) => {

    const selectedPokemon: IPokemonDetails = useSelector((state: IState) => state.selectedPokemon)

    useEffect(() => {
        initSelectedPokemon();
    }, [])


    const dispatch = useDispatch();
    const initSelectedPokemon = async () => {
        const response = await appApi.get(url);
        dispatch(setSelectedPokemon(response.data));
    }


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </Modal>
    )
}
