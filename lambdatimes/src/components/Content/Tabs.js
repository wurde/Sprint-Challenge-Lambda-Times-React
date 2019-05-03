'use strict'

/**
 * Dependencies
 */

const React = require('react')
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

// Make sure to use PropTypes to validate your types!

/**
 * Export component
 */

module.exports = Tabs
