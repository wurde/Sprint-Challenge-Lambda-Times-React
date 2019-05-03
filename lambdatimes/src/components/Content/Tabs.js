'use strict'

/**
 * Dependencies
 */

const React = require('react')
const PropTypes = require('prop-types')
const uuidv1 = require('uuid/v1')
const Tab = require('./Tab')

/**
 * Define component
 */

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab => <Tab key={uuidv1()} tab={tab} selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler} />)}
      </div>
    </div>
  )
}

/**
 * Validate prop types
 */

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
}

/**
 * Export component
 */

module.exports = Tabs
