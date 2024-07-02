import { Application } from "@hotwired/stimulus"
import ReviewFormController from "./review_form_controller"

const application = Application.start()
application.register("review-form", ReviewFormController)