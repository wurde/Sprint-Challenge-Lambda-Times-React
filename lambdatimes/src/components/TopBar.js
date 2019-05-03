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

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="container-left">
          <span>TOPICS</span><span>SEARCH</span>
        </div>
        <div className="container-center">
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </div>
        <div className="container-right">
          <span>LOG IN</span>
        </div>
      </div>
    </div>
  )
}

/**
 * Export component
 */

module.exports = TopBar
