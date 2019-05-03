'use strict'

/**
 * Dependencies
 */

const React = require('react')

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

/**
 * Define component
 */

const Header = () => {
  return (
    <div className="header">
      <span className="date">SMARCH 32, 2018</span>
      <h1>Lambda Times</h1>
      <span className="temp">98°</span>
    </div>
  )
}

/**
 * Export component
 */

module.exports = Header
