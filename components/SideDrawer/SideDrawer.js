import React from 'react'
import side from '../../styles/sideDrawer.module.css'
import Link from 'next/link'
import classNames from 'classnames/bind'

const sideDrawer = (props) => {
  let drawerClasses = side.sideDrawer

  console.log(side)

  if (props.show) {
    drawerClasses = side.sideDrawer + '' + side.open
    console.log(drawerClasses)
  }

  return (
    <nav className={classNames(side.sideDrawer, { [side.open]: props.show })}>
      <ul>
        <li>
          <Link href='/'>Start</Link>
        </li>
        <li>
          <Link href='/Grabbar'>Grabbar</Link>
        </li>
        <li>
          <Link href='/Grabbliga'>GrabbLiga</Link>
        </li>
        <li>
          <Link href='/Settings'>Tic Tac Toe</Link>
        </li>
        <li>
          <Link href='/Riddles'>Riddles</Link>
        </li>
        <li>
          <Link href='/SettingsGrabberMind'>Grabbermind</Link>
        </li>
      </ul>
    </nav>
  )
}

export default sideDrawer
