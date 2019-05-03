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
      slides: [],
      selected: 0
    }
  }

  componentDidMount() {
    this.setState({
      slides: carouselData
    })
  }

  leftClick = () => {
    if (this.state.selected <= 0) {
      this.setState({ selected: this.state.slides.length - 1 })
    } else {
      this.setState({ selected: this.state.selected - 1 })
    }
  }

  rightClick = () => {
    if (this.state.selected >= this.state.slides.length - 1) {
      this.setState({ selected: 0 })
    } else {
      this.setState({ selected: this.state.selected + 1 })
    }
  }

  selectedImage = () => {
    return <img src={this.state.slides[this.state.selected]} style={{display: 'block'}} />
  }

  render() {
    return (
      <styles.CarouselStyle>
        <styles.CarouselLeftButtonStyle onClick={this.leftClick}>{"<"}</styles.CarouselLeftButtonStyle>
        <styles.CarouselRightButtonStyle onClick={this.rightClick}>{">"}</styles.CarouselRightButtonStyle>
        {this.selectedImage()}
      </styles.CarouselStyle>
    )
  }
}

/**
 * Export component
 */

module.exports = Carousel
