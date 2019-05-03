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

let HeaderStyle = styled.div(() => `
`)

/**
 * Export style component
 */

module.exports = HeaderStyle

// .header {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: row;
//   background-color: #fff;
//   border-bottom: 1px solid lightgrey;
//   width: 100%;
//   height: 120px;
//   margin-top: 44px;
//   padding-bottom: 15px;
// }
// @media (min-width: 1280px) {
//   .header {
//     width: 1280px;
//   }
// }
// .header h1 {
//   font-size: 60px;
//   font-family: Didot, serif;
//   font-weight: bold;
//   flex: 8;
//   text-align: center;
//   color: #000;
// }
// .header span {
//   align-self: flex-end;
//   font-size: 11px;
//   font-weight: bold;
//   letter-spacing: 1px;
// }
// .header .date {
//   margin-left: 25px;
//   flex: 1;
// }
// .header .temp {
//   text-align: right;
//   margin-right: 25px;
//   flex: 1;
// }
