'use strict'

/**
 * Dependencies
 */

const React = require('react')
const Tabs = require('./Tabs')
const Cards = require('./Cards')
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
    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selcted

      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows:
        - if the selected tab is 'all' it should return all
          of the items from cardData.
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */
    return this.state.cards
  }

  render() {
    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selected} selectTabHandler={this.changeSelected} />
        <Cards cards={this.filterCards()} />
      </div>
    )
  }
}

/**
 * Export component
 */

module.exports = Content
