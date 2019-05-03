'use strict'

/**
 * Dependencies
 */

const React = require('react')
const { carouselData } = require('../../data')

/**
 * Constants
 */

const Component = React.Component

/**
 * Define component
 */

class Carousel extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  componentDidMount(){

  }

  leftClick = () => {

  }

  rightClick = () => {

  }

  selectedImage = () => {
    return <img src={} style={{display: 'block'}} />
  }

  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}

/**
 * Export component
 */

module.exports = Carousel
