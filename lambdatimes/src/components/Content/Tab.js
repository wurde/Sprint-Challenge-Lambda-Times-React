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
  if (props.tab === props.selectedTab) {
    return (
      <styles.TabActiveStyle onClick={() => { props.selectTabHandler(props.tab) }}>
        {props.tab.toUpperCase()}
      </styles.TabActiveStyle>
    )
  } else {
    return (
      <styles.TabStyle onClick={() => { props.selectTabHandler(props.tab) }}>
        {props.tab.toUpperCase()}
      </styles.TabStyle>
    )
  }
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
