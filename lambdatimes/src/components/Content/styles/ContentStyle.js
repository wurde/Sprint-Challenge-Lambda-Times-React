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

let ContentStyle = styled.div(() => `
  display: flex;
  flex-direction: column;
  align-items: center;
`)

/**
 * Export style component
 */

module.exports = ContentStyle
