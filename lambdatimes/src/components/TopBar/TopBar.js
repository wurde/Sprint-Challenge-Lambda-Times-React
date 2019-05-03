'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')

/**
 * Define component
 */

const TopBar = () => {
  return (
    <styles.TopBarStyle>
      <styles.TopBarContainerStyle>
        <styles.TopBarContainerLeftStyle>
          <span>TOPICS</span><span>SEARCH</span>
        </styles.TopBarContainerLeftStyle>
        <styles.TopBarContainerCenterStyle>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </styles.TopBarContainerCenterStyle>
        <styles.TopBarContainerRightStyle>
          <span>LOG IN</span>
        </styles.TopBarContainerRightStyle>
      </styles.TopBarContainerStyle>
    </styles.TopBarStyle>
  )
}

/**
 * Export component
 */

module.exports = TopBar
