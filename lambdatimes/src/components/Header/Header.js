'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')

/**
 * Define component
 */

const Header = () => {
  return (
    <styles.HeaderStyle>
      <styles.HeaderDateStyle>SMARCH 32, 2018</styles.HeaderDateStyle>
      <h1>Lambda Times</h1>
      <styles.HeaderTempStyle>98°</styles.HeaderTempStyle>
    </styles.HeaderStyle>
  )
}

/**
 * Export component
 */

module.exports = Header
