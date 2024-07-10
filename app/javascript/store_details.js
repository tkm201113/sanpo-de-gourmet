import { Application } from "@hotwired/stimulus"
import { definitionsFromContext } from "stimulus-loading"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus = application

const context = require.context("controllers", true, /\.js$/)
application.load(definitionsFromContext(context))

export { application }