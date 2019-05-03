'use strict'

/**
 * Dependencies
 */

const path = require('path')
const express = require('express')

/**
 * Define app
 */

const app = express()

/**
 * Constants
 */

const port = process.env.PORT || 8080
const env = process.env.NODE_ENV || "development"
const base = path.join(__dirname)

/**
 * Locals
 */

app.locals.port = port
app.locals.env = env
app.locals.base = base

/**
 * Settings
 */

app.set("env", env)
app.disable("x-powered-by")
app.set("json spaces", 2)

/**
 * Mount static assets
 */

app.use("/", express.static(base + "/build"))

/**
 * Start server
 */

async function start_server() {
  /**
   * Set process title.
   */

  process.title = 'lambda-times'

  /**
   * Start listening for requests.
   */

  app.listen(port, () => {
    console.log(`Express app listening on port ${port}`)
  })
}

if (module === require.main) {
  start_server()
}

/**
 * Export app
 */

module.exports = app
