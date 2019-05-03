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

let CardHeadlineStyle = styled.div(() => `
  font-size: 25px;
  font-family: Didot, serif;
`)

/**
 * Export style component
 */

module.exports = CardHeadlineStyle
