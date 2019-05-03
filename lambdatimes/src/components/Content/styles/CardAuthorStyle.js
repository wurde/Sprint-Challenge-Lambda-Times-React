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

let CardAuthorStyle = styled.div(() => `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;


  span {
    padding-left: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
`)

/**
 * Export style component
 */

module.exports = CardAuthorStyle
