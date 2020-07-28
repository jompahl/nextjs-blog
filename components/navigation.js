import React, { Component } from 'react'
//import './App.css'

/*import Grabbar from './pages/Grabbar'
import Settings from './pages/Settings'
import GrabbLiga from './pages/GrabbLiga'
import Riddle from './pages/Riddle'
import Grabbermind from './pages/Grabbermind'
import SettingsGrabberMind from './pages/SettingsGrabberMind'*/
import DrawerToggleButton from './SideDrawer/DrawerToggleButton'
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop'

import navStyle from '../styles/navigation.module.css'

import Link from 'next/link'
//import { Component } from 'react'

class Navigation extends Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let sideDrawer
    let backdrop
    console.log('heeeej')
    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className={navStyle.navigation}>
        <div className={navStyle.hamburger}>
          <DrawerToggleButton
            drawerClickHandler={this.drawerToggleClickHandler}
          />
        </div>

        <div className={navStyle.navigationButtons}>
          <Link href='/'>Start</Link>
          <Link href='/Grabbar'>Grabbar</Link>
          <Link href='/GrabbLiga'>GrabbLiga</Link>
          <Link href='/Settings'>Tic Tac Toe</Link>
          <Link href='/Riddle'>GrabbGåta</Link>
          <Link href='/SettingsGrabberMind'>Grabbermind</Link>
        </div>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
    )
  }
}

/* Navigation {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    /*let sideDrawer
    let backdrop

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }*/

// const Navigation = () => (
//   <div className={navStyle.navigation}>
//     <div className={navStyle.hamburger}></div>
//     {/*<DrawerToggleButton
//               drawerClickHandler={this.drawerToggleClickHandler}
//             />
//           </div>*/}
//     <div className={navStyle.navigationButtons}>
//       <Link href='/'>Start</Link>
//       <Link href='/grabbar'>Grabbar</Link>
//       <Link href='/grabbliga'>GrabbLiga</Link>
//       <Link href='/settings'>Tic Tac Toe</Link>
//       <Link href='/riddle'>GrabbGåta</Link>
//       <Link href='/SettingsGrabberMind'>Grabbermind</Link>
//     </div>
//     {/*<SideDrawer show={this.state.sideDrawerOpen} />
//         {backdrop}*/}
//   </div>
// )

export default Navigation
