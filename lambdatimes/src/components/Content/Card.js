'use strict'

/**
 * Dependencies
 */

const React = require('react')
const PropTypes = require('prop-types')
const styles = require('./styles/index')

/**
 * Define component
 */

const Card = props => {
  return (
    <styles.CardStyle>
      <styles.CardHeadlineStyle>{props.headline}</styles.CardHeadlineStyle>
      <styles.CardAuthorStyle>
        <styles.CardImgContainerStyle>
          <img src={props.img} />
        </styles.CardImgContainerStyle>
        <span>By {props.author}</span>
      </styles.CardAuthorStyle>
    </styles.CardStyle>
  )
}

/**
 * Validate prop types
 */

Card.propTypes = {
  headline: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

/**
 * Export component
 */

module.exports = Card
