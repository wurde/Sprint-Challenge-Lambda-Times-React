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

let CarouselStyle = styled.div(() => `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;

  img {
    width: 100%;
    display: none;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }
`)

/**
 * Export style component
 */

module.exports = CarouselStyle
