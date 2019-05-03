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

let TabsTopicsStyle = styled.div(() => `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`)

/**
 * Export style component
 */

module.exports = TabsTopicsStyle
