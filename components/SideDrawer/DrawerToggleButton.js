import React from 'react'

import toggle from '../../styles/drawerToggleButton.module.css'

const drawerToggleButton = (props) => (
  <button className={toggle.toggleButton} onClick={props.drawerClickHandler}>
    <div className={toggle.toggleButtonLine} />
    <div className={toggle.toggleButtonLine} />
    <div className={toggle.toggleButtonLine} />
  </button>
)

export default drawerToggleButton
