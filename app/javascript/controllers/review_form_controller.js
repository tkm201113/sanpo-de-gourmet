import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["form"]

  open(event) {
    event.preventDefault()
    this.formTarget.style.display = "flex"
  }

  close(event) {
    event.preventDefault()
    this.formTarget.style.display = "none"
  }
}