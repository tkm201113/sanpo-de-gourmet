document.addEventListener("DOMContentLoaded", function() {
  window.openReviewForm = function() {
    document.getElementById('review-form').style.display = 'flex';
  }

  window.closeReviewForm = function() {
    document.getElementById('review-form').style.display = 'none';
  }
});