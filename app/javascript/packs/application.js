import { Application } from "@hotwired/stimulus"
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers"
import "controllers"
import 'menu_toggle';
import 'stylesheets/application';

const application = Application.start()
const context = require.context("controllers", true, /\.js$/)
application.load(definitionsFromContext(context))

document.addEventListener('DOMContentLoaded', () => {
});