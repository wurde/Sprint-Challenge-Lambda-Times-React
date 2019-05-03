'use strict'

/**
 * Dependencies
 */

const React = require('react')
const PropTypes = require('prop-types')
const styles = require('./styles/index')

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

/**
 * Validate prop types
 */

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
}

/**
 * Export component
 */

module.exports = Tab
