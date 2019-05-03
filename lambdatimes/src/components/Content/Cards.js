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
      {/* Using the cards prop, map over the list creating a
          new Card component for each passing the card as the only prop*/}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

/**
 * Export component
 */

module.exports = Cards
