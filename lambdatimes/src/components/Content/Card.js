'use strict'

/**
 * Dependencies
 */

const React = require('react')
const PropTypes = require('prop-types')

/**
 * Define component
 */

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.img} />
        </div>
        <span>By {props.author}</span>
      </div>
    </div>
  )
}

/**
 * Validate prop types
 */

Card.propTypes = {
  headline: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

/**
 * Export component
 */

module.exports = Card
