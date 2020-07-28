import React from 'react'

import back from '../../styles/backdrop.module.css'

const backdrop = (props) => (
  <div className={back.backdrop} onClick={props.click} />
)

export default backdrop
