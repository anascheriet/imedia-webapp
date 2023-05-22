import React from 'react'
import { motion } from 'framer-motion'
import "../styles/Nav.scss"
import { fadeIn } from './../animation';

export const Nav = () => {
  return (
    <div>
            <motion.div className="StyledNav" variants={fadeIn}  initial="hidden" animate="show">

                
                    <motion.div /* onClick={clearSearched}  */className="Logo">
                       {/*  <img src={logo} alt="logo" /> */}
                        <h1>Pokemons</h1>
                    </motion.div> 

                <form className="search"/*  onSubmit={(e) => searchGameHandler(e)} */>
                    {/* <input type="text" onChange={inputChangeHandler} value={textInput} />
                    <button type="submit">Search</button> */}
                </form>

            </motion.div>
        </div>
  )
}
