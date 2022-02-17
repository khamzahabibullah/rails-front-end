// app/javascript/controllers/typed_js_controller.js
import {Controller} from '@hotwired/stimulus';
// Don't forget to import the NPM package
import Typed from 'typed.js';

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ['Hello to Batch 792!!', 'Change your life', 'Learn to code'],
      typeSpeed: 50,
      loop: true,
    });
  }
}
