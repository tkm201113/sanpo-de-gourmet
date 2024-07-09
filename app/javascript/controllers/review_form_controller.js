import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["overlay", "form"];

  open() {
    this.overlayTarget.classList.add("active");
    this.formTarget.classList.add("active");
  }

  close() {
    this.overlayTarget.classList.remove("active");
    this.formTarget.classList.remove("active");
  }
}