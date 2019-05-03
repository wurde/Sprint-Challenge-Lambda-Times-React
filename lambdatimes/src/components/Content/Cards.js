'use strict'

/**
 * Dependencies
 */

const React = require('react')
const PropTypes = require('prop-types')
const uuidv1 = require('uuid/v1')
const Card = require('./Card')
const styles = require('./styles/index')

/**
 * Define component
 */

const Cards = props => {
  return (
    <styles.CardsContainerStyle>
      {props.cards.map(card => <Card key={uuidv1()} {...card} />)}
    </styles.CardsContainerStyle>
  )
}

/**
 * Validate prop types
 */

Cards.propTypes = {
  cards: PropTypes.array.isRequired,
}

/**
 * Export component
 */

module.exports = Cards
