import { Application } from "@hotwired/stimulus"
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers"
import "controllers"

const application = Application.start()
const context = require.context("controllers", true, /\.js$/)
application.load(definitionsFromContext(context))

document.addEventListener('DOMContentLoaded', () => {
  // 必要に応じて初期化コードを追加
});