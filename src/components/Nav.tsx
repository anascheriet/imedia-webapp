import React from 'react'
import { motion } from 'framer-motion'
import "../styles/Nav.scss"
import { fadeIn } from './../animation';
import logo from "../img/logo.png"

export const Nav = () => {
  return (
    <div>
      <motion.div className="StyledNav" variants={fadeIn} initial="hidden" animate="show">

        <motion.div className="Logo">
          <img src={logo} alt="logo" />
        </motion.div>

      </motion.div>
    </div>
  )
}
