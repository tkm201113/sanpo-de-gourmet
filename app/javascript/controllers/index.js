import { Application } from "@hotwired/stimulus";
import { definitionsFromContext } from "@hotwired/stimulus-loading";
import ReviewFormController from "./review_form_controller";

window.Stimulus = Application.start();
const context = require.context("controllers", true, /\.js$/);
Stimulus.load(definitionsFromContext(context));
Stimulus.register("review-form", ReviewFormController);