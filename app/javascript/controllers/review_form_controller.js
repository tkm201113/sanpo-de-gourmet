import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["form"]

  open() {
    document.body.style.backgroundColor = "gray"
    this.formTarget.style.display = "block"
  }

  close() {
    document.body.style.backgroundColor = ""
    this.formTarget.style.display = "none"
  }
}