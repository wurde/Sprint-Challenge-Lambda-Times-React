'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Define component
 */

const Tab = props => {
  return (
    <div
      className={(props.tab === props.selectedTab) ? 'tab active-tab' : 'tab'}
      onClick={() => {
        props.selectTabHandler(this.props.tab)
        /* Replace this dummy click handler function with your selectTabHandler function from props
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.

/**
 * Export component
 */

module.exports = Tab
