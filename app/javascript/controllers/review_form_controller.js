import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["overlay", "form", "reviews", "rating"];

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
    this.ratingTarget.value = this.currentRating; // hidden_fieldに値を設定
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
    }
  }

  afterReviewSubmission(event) {
    if (event.detail.success) {
      const review = event.detail.data;
      const reviewHtml = `
        <div class="review">
          <p>ユーザー名: ${review.name}</p>
          <p class="review-text">テキスト: ${review.review}</p>
          <p>評価: ${review.rating}</p>
        </div>
      `;
      this.reviewsTarget.insertAdjacentHTML('beforeend', reviewHtml);
      this.close(event);
    }
  }
}