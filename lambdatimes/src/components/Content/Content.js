'use strict'

/**
 * Dependencies
 */

const React = require('react')
const Tabs = require('./Tabs')
const Cards = require('./Cards')
const Carousel = require('../Carousel/Carousel')
const styles = require('./styles/index')
const data = require('../../data')

/**
 * Constants
 */

const Component = React.Component
const tabData = data.tabData
const cardData = data.cardData

/**
 * Define component
 */

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    }
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    })
  }

  changeSelected = tab => {
    this.setState({ selected: tab })
  }

  filterCards = () => {
    if (this.state.selected === 'all') {
      return this.state.cards
    } else {
      return this.state.cards.filter(card => card.tab === this.state.selected)
    }
  }

  render() {
    return (
      <styles.ContentStyle>
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selected} selectTabHandler={this.changeSelected} />
        <Carousel />
        <Cards cards={this.filterCards()} />
      </styles.ContentStyle>
    )
  }
}

/**
 * Export component
 */

module.exports = Content
