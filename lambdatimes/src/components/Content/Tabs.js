'use strict'

/**
 * Dependencies
 */

const React = require('react')
const PropTypes = require('prop-types')
const uuidv1 = require('uuid/v1')
const Tab = require('./Tab')
const styles = require('./styles/index')

/**
 * Define component
 */

const Tabs = props => {
  return (
    <styles.TabsStyle>
      <styles.TabsTopicsStyle>
        <styles.TabsTopcsTitleStyle>TRENDING TOPICS:</styles.TabsTopcsTitleStyle>
        {props.tabs.map(tab => <Tab key={uuidv1()} tab={tab} selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler} />)}
      </styles.TabsTopicsStyle>
    </styles.TabsStyle>
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
