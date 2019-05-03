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

let CardsContainerStyle = styled.div(() => `
`)

/**
 * Export style component
 */

module.exports = CardsContainerStyle

// .cards-container {
//   display: flex;
//   justify-content: space-evenly;
//   align-items: none;
//   flex-direction: row;
//   width: 100%;
//   margin-top: 16px;
//   flex-wrap: wrap;
// }
// @media (min-width: 1200px) {
//   .cards-container {
//     width: 1200px;
//   }
// }
// .cards-container .card {
//   border-bottom: 1px solid lightgrey;
//   display: flex;
//   justify-content: space-between;
//   align-items: none;
//   flex-direction: column;
//   background-color: #fff;
//   width: 380px;
//   margin-bottom: 16px;
//   padding: 24px;
// }
// .cards-container .card .headline {
//   font-size: 25px;
//   font-family: Didot, serif;
// }
// .cards-container .card .author {
//   display: flex;
//   justify-content: none;
//   align-items: center;
//   flex-direction: row;
//   margin-top: 15px;
// }
// .cards-container .card .author .img-container {
//   padding-right: 10px;
//   border-right: 1px solid lightgrey;
//   height: 40px;
// }
// .cards-container .card .author .img-container img {
//   width: 40px;
// }
// .cards-container .card .author span {
//   padding-left: 10px;
//   font-size: 12px;
//   letter-spacing: 1px;
//   font-weight: bold;
// }
