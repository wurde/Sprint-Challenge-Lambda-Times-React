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

let TabsTopcsTitleStyle = styled.span(() => `
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`)

/**
 * Export style component
 */

module.exports = TabsTopcsTitleStyle
