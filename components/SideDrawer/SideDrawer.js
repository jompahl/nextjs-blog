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
          <Link href='/grabbar'>Grabbar</Link>
        </li>
        <li>
          <Link href='/grabbliga'>GrabbLiga</Link>
        </li>
        <li>
          <Link href='/settings'>Tic Tac Toe</Link>
        </li>
        <li>
          <Link href='/riddle'>GrabbGåta</Link>
        </li>
        <li>
          <Link href='/SettingsGrabberMind'>Grabbermind</Link>
        </li>
      </ul>
    </nav>
  )
}

export default sideDrawer
