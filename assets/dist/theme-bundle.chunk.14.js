(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{358:function(t,e,o){"use strict";var n=o(0),r=o.n(n),c=o(5);e.a=function(t){var e,o=t.split(":");for(var n=1;n<o.length;n++)e=o[n],c.b.api.product.getById(e,{template:"f/blog/blog-product-card"},(function(t,e){if(t)throw new Error(t);r()(".relatedProducts").append(e)}));r()(".relatedProducts").show()}},435:function(t,e,o){"use strict";o.r(e);var n=o(51),r=o(358);function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var a=function(t){function e(){return c(this,e),i(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.onReady=function(){this.context.relatedProduct&&Object(r.a)(this.context.relatedProduct)},e}(n.a);e.default=a}}]);
