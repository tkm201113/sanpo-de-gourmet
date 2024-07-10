import React from 'react';
import ReactDOM from 'react-dom/client';
import './geolocation';
import './map';
import { Application } from "@hotwired/stimulus";
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers";

const application = Application.start();
const context = require.context("controllers", true, /\.js$/);
application.load(definitionsFromContext(context));

document.addEventListener('DOMContentLoaded', () => {
});