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

let CardImgContainerStyle = styled.div(() => `
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;

  img {
    width: 40px;
  }
`)

/**
 * Export style component
 */

module.exports = CardImgContainerStyle
