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

let CarouselLeftButtonStyle = styled.div(() => `
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  top: 50%;
  left: 25px;
  transform: translate(0, -50%);

  &:hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`)

/**
 * Export style component
 */

module.exports = CarouselLeftButtonStyle
