import { Controller } from "@hotwired/stimulus";
import Rails from "@rails/ujs";

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

    this.formTarget.addEventListener('submit', (event) => this.handleSubmit(event));
  }

  setRating(event) {
    this.currentRating = event.currentTarget.dataset.value;
    this.ratingTarget.value = this.currentRating;
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

  open(event) {
    this.overlayTarget.classList.add("active");
    this.formTarget.classList.add("active");
  }

  close(event) {
    if (event.target === this.overlayTarget || (event.currentTarget && event.currentTarget.tagName === "BUTTON")) {
      this.overlayTarget.classList.remove("active");
      this.formTarget.classList.remove("active");
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const submitButton = this.formTarget.querySelector('input[type="submit"], button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true; // 送信ボタンを無効にする
    } else {
      console.error('Submit button not found.');
    }

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    fetch('/store_details/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': Rails.csrfToken(),
      },
      body: JSON.stringify({ review: data })
    })
    .then(response => {
      if (!response.ok) {
        return response.json().then(error => { throw new Error(error) });
      }
      return response.json();
    })
    .then(data => {
      this.afterReviewSubmission({ detail: { success: true, data: data } });
    })
    .catch((error) => {
      this.afterReviewSubmission({ detail: { success: false, errors: error.message } });
    });
  }

  afterReviewSubmission(event) {
    if (event.detail.success) {
      const review = event.detail.data;
      const reviewHtml = `
        <div class="review">
          <p>ユーザー名: ${review.name}</p>
          <p class="review-text">テキスト: ${review.review}</p>
          <p>評価: ${review.rating}</p>
          <p>サービス: ${review.service}</p>
          <p>価格: ${review.price}</p>
          <p>雰囲気: ${review.atmosphere}</p>
        </div>
      `;
      this.reviewsTarget.insertAdjacentHTML('beforeend', reviewHtml);
      this.close(event);
    } else {
      console.error("Review submission failed:", event.detail.errors);
    }

    const submitButton = this.formTarget.querySelector('input[type="submit"], button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = false; // 送信ボタンを有効に戻す
    }
  }
}
