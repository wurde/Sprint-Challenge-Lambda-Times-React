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
    <div className={(props.tab === props.selectedTab) ? 'tab active-tab' : 'tab'}
         onClick={() => { props.selectTabHandler(props.tab) }}>
      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.

/**
 * Export component
 */

module.exports = Tab
