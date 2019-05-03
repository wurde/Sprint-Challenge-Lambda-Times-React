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

let TabActiveStyle = styled.span(() => `
  background-color: #fff;
  color: #333;
  border: 2px solid #333;
`)

/**
 * Export style component
 */

module.exports = TabActiveStyle
