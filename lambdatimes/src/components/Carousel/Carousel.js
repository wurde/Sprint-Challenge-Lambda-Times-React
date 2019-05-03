'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')
const data = require('../../data')

/**
 * Constants
 */

const Component = React.Component
const carouselData = data.carouselData

/**
 * Define component
 */

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slides: carouselData
    }
  }

  componentDidMount() {

  }

  leftClick = () => {

  }

  rightClick = () => {

  }

  selectedImage = () => {
    return <img src={} style={{display: 'block'}} />
  }

  render() {
    return (
      <styles.CarouselStyle>
        <styles.CarouselLeftButtonStyle onClick={this.leftClick}>{"<"}</styles.CarouselLeftButtonStyle>
        <styles.CarouselRightButtonStyle onClick={this.rightClick}>{">"}</styles.CarouselRightButtonStyle>
      </styles.CarouselStyle>
    )
  }
}

/**
 * Export component
 */

module.exports = Carousel
