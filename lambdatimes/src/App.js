'use strict'

/**
 * Dependencies
 */

const React = require('react')
const components = require('./components/index')

/**
 * Import component styles
 */

require('./App.scss')

/**
 * Define component
 */

const App = () => {
  return (
    <div className="App">
      <components.TopBar />
      <components.Header />
      <components.Content />
    </div>
  )
}

/**
 * Export component
 */

module.exports = App
