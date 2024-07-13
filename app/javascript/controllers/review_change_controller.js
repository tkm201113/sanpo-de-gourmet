import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["overlay", "form", "deleteConfirm"];

  connect() {
    this.stars = this.formTarget.querySelectorAll('.star');
    this.stars.forEach(star => {
      star.addEventListener('click', (event) => this.setRating(event));
      star.addEventListener('mouseover', (event) => this.highlightStars(event.currentTarget.dataset.value));
      star.addEventListener('mouseout', () => this.resetStars());
    });
    this.currentRating = 0;
  }

  setRating(event) {
    this.currentRating = event.currentTarget.dataset.value;
    this.highlightStars(this.currentRating);
  }

  highlightStars(rating) {
    this.stars.forEach(star => {
      star.classList.toggle('highlighted', star.dataset.value <= rating);
    });
  }

  resetStars() {
    this.stars.forEach(star => {
      star.classList.toggle('highlighted', star.dataset.value <= this.currentRating);
      star.style.color = star.dataset.value <= this.currentRating ? '#FBBC04' : '#FFFFFF';
    });
  }

  open() {
    this.overlayTarget.classList.add("active");
    this.formTarget.classList.add("active");
  }

  close(event) {
    if (event.target === this.overlayTarget || event.currentTarget.tagName === "BUTTON") {
      this.overlayTarget.classList.remove("active");
      this.formTarget.classList.remove("active");
      this.deleteConfirmTarget.classList.remove("active");
    }
  }

  confirmDelete() {
    this.overlayTarget.classList.add("active");
    this.deleteConfirmTarget.classList.add("active");
  }
}