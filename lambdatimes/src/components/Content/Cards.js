'use strict'

/**
 * Dependencies
 */

const React = require('react')
const Card = require('./Card')

/**
 * Constants
 */

const Component = React.Component

/**
 * Define component
 */

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => <Card {...card} />)}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

/**
 * Export component
 */

module.exports = Cards
