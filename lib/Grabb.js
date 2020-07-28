import React, { Component } from 'react'
//import Layout from '../components/Layout'
import grabbStyle from '../styles/grabbar.module.css'

export class Grabb extends Component {
  render() {
    const name = this.props.name
    const attributes = this.props.attributes
    const total = this.props.total

    const attributeDivs = attributes.map((attribute) => (
      <div className={grabbStyle.attribute}>
        <div className={grabbStyle.value}>{attribute.value}</div>
        <div className={grabbStyle.shortName} title={attribute.name}>
          {attribute.shortName}
        </div>
      </div>
    ))

    return (
      <div className={grabbStyle.card}>
        <div className={grabbStyle.total}>{total}</div>
        <div className={grabbStyle.TotalText}>TOT</div>
        <div className={grabbStyle.Name}>{name}</div>
        <div className={grabbStyle.score}>{attributeDivs}</div>
        <div className={grabbStyle.DownText}>GK19</div>
      </div>
    )
  }
}
