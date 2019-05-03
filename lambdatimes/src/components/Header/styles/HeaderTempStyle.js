'use strict'

/**
 * Dependencies
 */

const styled_components = require('styled-components')

/**
 * Constants
 */

const styled = styled_components.default

/**
 * Define style component
 */

let HeaderTempStyle = styled.span(() => `
  text-align: right;
  margin-right: 25px;
  flex: 1;
`)

/**
 * Export style component
 */

module.exports = HeaderTempStyle
