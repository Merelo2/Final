(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n\n  \n  <div class=\"row\">\n    <div class=\"container-fluid\">\n        <div class=\" d-flex align-items-center color-overlay justify-content-center\">\n          <h1>Connect with Us</h1>\n        </div>\n    </div>\n  </div>\n  <div class=\"row jumbotron\">\n    <div class=\"container-fluid \">\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 align-self-center text-center\">\n        <p class=\"display-4\">Support SMEs and large groups wishing to accelerate their growth or transform their business model by integrating IoT and AI.</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"val container-fluid\">\n    <div class=\"row values text-center\">\n      \n    <div class=\"col-12\">\n      <h1 class=\"display-4 text-white\">Our Expertise</h1>\n      <hr>\n    </div>\n  </div>\n  <div class=\"container-fluid padding \">\n    <div class=\"row text-center padding\">\n      <div class=\"col-xs-12 col-sm-6 col-md-3 text\">\n        <i class=\"fas fa-space-shuttle\"></i>\n        <p class=\"text-white\">Design, development and deployment of complex real-time IoT applications</p>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 col-md-3 text\">\n        <i class=\"fas fa-code\"></i>\n        <p class=\"text-white\">Development and integration of APIs (Application Programming Interfaces)</p>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 col-md-3 text\">\n        <i class=\"fas fa-robot\"></i>\n        <p class=\"text-white\">Artificial intelligence, Machine learning and Deep learning (Embedded)</p>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 col-md-3 text\">\n        <i class=\"fas fa-lock\"></i>\n        <p class=\"text-white\">Cybersecurity of embedded systems & connected objects</p>\n      </div>\n    </div>\n  </div>\n    <hr class=\"my-4\">\n  </div>\n  <div class=\"row\">\n    <div class=\"container\">\n    <h1 class=\"text-center\">OUR PARTNERS</h1>\n  </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"container-fluid\">\n        <angular-image-slider\n        [images]=\"imagesUrl\"\n      ></angular-image-slider>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"container\">\n    <h1 class=\"text-center\">\n      Contact Us\n    </h1>\n  </div>\n    <div class=\"container contact\">\n        <div class=\"row\">\n          <div class=\"container align-items-center text-center\">\n            <form>\n              <div class=\"form-group\">\n                <label for=\"exampleInputEmail1\">Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"Name\" #Name placeholder=\"Enter name\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\">Email address</label>\n                <input type=\"email\" class=\"form-control\" id=\"Email\" #Email placeholder=\"Enter email\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"exampleInputPassword1\">Message</label>\n                <textarea class=\"form-control\" id=\"Message\" #Message rows=\"3\" placeholder=\"What's on your mind?\"></textarea>\n              </div>\n              <button type=\"submit\" class=\"btn btn-primary\" (click)=\"Submit(Name.value,Email.value,Message.value)\">Submit</button>\n            </form>\n      </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>\n    <div class=\"container-fluid clearfix\">\n      <div class=\"row text-center\">\n        <div class=\"col-md-3 d-none d-md-block align align-self-center\">\n          <img class=\"logo\" src=\"./assets/Images/VIATOILELOGO.png\">\n        </div>\n      <div class=\"col-md-9 col-sm-12 col-xs-12 \">\n        <div class=\"links align-self-center\">\n        <ul class=\"footer-links\">\n          <li><a [routerLink]=\"[ '/AboutUs' ]\" class=\"\">About Us</a></li>\n          <li><a [routerLink]=\"[ '/' ]\" class=\"\">Our Philosophy</a></li>\n          <li><a [routerLink]=\"[ '/AboutUs' ]\" class=\"\">Contact Us</a></li>\n        </ul>\n        <ul class=\"social-media\">\n          <li><a href=\"\" class=\"\"><i class=\"fab fa-facebook-square\"></i></a></li>\n          <li><a href=\"\" class=\"\"><i class=\"fab fa-youtube\"></i></a></li>\n          <li><a href=\"\" class=\"\"><i class=\"fab fa-twitter\"></i></a></li>\n        </ul>\n        <ul class=\"footer-secondary-links\">\n          <li>©ViaToile</li>\n        </ul>\n      </div>\n    </div>\n    </div>\n  </div>\n  </footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n <div class=\"row\">\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n          <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n              <ol class=\"carousel-indicators\">\n                <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n                <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n              </ol>\n              <div class=\"carousel-inner\">\n                <div class=\"carousel-item active\">\n                  <img src=\"./assets/Images/photo3.jpg\" class=\"d-block w-100 fit\" alt=\"...\">\n                  <div class=\"carousel-caption\">\n                      <img src=\"./assets/Images/SMART-ON-logo.png\" alt=\"smartOn\" class=\"smartOn\">\n                      <h2 style=\"font-family: 'Merriweather';\">Accelerate your optimization with our fully secure platform</h2>\n                      <button [routerLink]=\"[ '/smartOn' ]\" type=\"button\" class=\"btn btn-outline-primary btn-md\">Learn More</button>\n                    </div>\n                </div>\n                <div class=\"carousel-item\">\n                  <img src=\"./assets/Images/photo1.jpg\" class=\"d-block w-100 fit\" alt=\"...\">\n                  <div class=\"carousel-caption\">\n                    <img src=\"./assets/Images/trackAllLogo.png\" alt=\"trackAll\" class=\"smartOn\">\n                    <h2 style=\"font-family: 'Merriweather';\">Discover our new propriatary sensor</h2>\n                    <button [routerLink]=\"[ '/trackAll' ]\" type=\"button\" class=\"btn btn-outline-warning btn-md\">Learn More</button>\n                  </div>\n                </div>\n              </div>\n              \n            </div>\n      </div>\n  </div>\n  <div class=\"row jumbotron\">\n    <div class=\"container-fluid \">\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 align-self-center text-center\">\n        <p class=\"lead\" style=\"font-family: 'Merriweather';\">We launch new IoT solutions to enable the success of the digital transformation of your business</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"row desc-row\">\n    <div class=\" container justify-content-center align-self-center\">\n  <div class=\"media \">\n    <img class=\"justify-content-end d-none d-md-block logo\" src=\"./assets/Images/VIATOILELOGO.png\" alt=\"Company Logo\">\n    <div class=\"media-body align-self-center\">\n      <p class=\"text-white\">ViaToile is a Startup that believes in the Transformative power of IoT for Businesses in all sectors. Founded by IoT experts passionate about solving the most challenging problems for businesses, with our expertise in building sensors and connecting them to our IoT platform, we are able to make any IoT project a reality.\n\n        Our mission is to make businesses more profitable by launching new IoT Projects and making sure they succeed.\n        \n        Our approach mixes Innovation by Design thinking, Agile Project management, and our own methodology for taking the right decisions all through the life cycle of an IoT Project.</p>\n    </div>\n  </div>\n  </div>\n  </div>\n\n  <div class=\"val container-fluid\">\n    <div class=\"row values text-center\">\n    <div class=\"col-12\">\n      <h1 class=\"display-4 text-white\" style=\"font-family: 'Merriweather';\">Smarter World, Accessible to All</h1>\n      <hr>\n    </div>\n  </div>\n  <div class=\"container-fluid padding\">\n    <div class=\"row text-center padding\">\n      <div class=\"col-xs-12 col-sm-6 col-md-3\">\n        <i class=\"fab fa-creative-commons-by\"></i>\n        <h3 class=\"text-white\">Proximity</h3>\n        <p class=\"text-white\">We constantly stay close to our clients</p>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 col-md-3\">\n        <i class=\"far fa-handshake\"></i>\n        <h3 class=\"text-white\">Honesty</h3>\n        <p class=\"text-white\">We value Honesty and Commitment</p>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 col-md-3\">\n        <i class=\"far fa-lightbulb\"></i>\n        <h3 class=\"text-white\">Innovation</h3>\n        <p class=\"text-white\">Constant efforts to Innovate and Create</p>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 col-md-3\">\n        <i class=\"fas fa-crop-alt\"></i>\n        <h3 class=\"text-white\">Flexibility</h3>\n        <p class=\"text-white\">Times are changing, therefore we shall too</p>\n      </div>\n    </div>\n  </div>\n    <hr class=\"my-4\">\n  </div>\n  <div class=\"container-fluid padding\">\n    <div class=\"row padding\">\n      <div class=\" container col-md-12 col-lg-12 text-center align-self-center philosophy\">\n        <h2>Our Philosophy</h2>\n        <p>\n          <span style=\"font-weight: 400;\">We humans have been able to strive as a specie thanks to our 5 senses, they help us learn, grow, interact and get smarter everyday.</span>\n\n<span style=\"font-weight: 400;\">The objects around us today, can’t learn, grow and interact because they don’t have senses, </span><span style=\"color: #bf68a5; font-weight: 600;\">That’s Our Mission</span><span style=\"font-weight: 400;\">, we </span><span style=\"color: #bf68a5; font-weight: 600;\">give senses to objects</span><span style=\"font-weight: 400;\"> to make them smarter, and more efficient.</span>\n\n<span style=\"font-weight: 400;\">We believe that the future of Business will be shaped by the adoption of IoT solutions, with the power of IoT, we want to </span><span style=\"color: #bf68a5; font-weight: 600;\">make the world more efficient and sustainable.</span>\n        </p>\n        <a href=\"#\" class=\"btn btn-primary\"  [routerLink]=\"[ '/POC' ]\">Learn About our Services</a>\n      </div>\n    </div>\n  </div>\n</div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n<div class=\"fullscreen-video-wrap\">\n    <video src=\"./assets/Videos/Pexels Videos 4703.mp4\" autoplay=\"true\" loop=\"true\" priority=\"high\"></video>\n</div>\n<div class=\"header-overlay\"></div>\n<div class=\"header-content\">\n    <img class=\"Logo-first-page\" src=\"./assets/Images/VIATOILE LOGO.png\">\n    <ngx-typed-js [strings]=\"['Increase Revenue', 'Reduce Costs']\" [typeSpeed]=\"50\" [startDelay]=\"1000\" [loop]=\"true\" [backSpeed]=\"30\">\n        <h1> We build IoT Solutions to<br/> <span class=\"typing\"></span> </h1>\n      </ngx-typed-js>\n      <a href=\"#\" type=\"button\" class=\"btn btn-lg btn-outline-primary learn\">Learn More</a>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loading-screen/loading-screen.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loading-screen/loading-screen.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loading-screen-wrapper\" *ngIf=\"loading\">\n    <div class=\"loading-screen-icon\">\n        Loading...\n        <!-- <mat-spinner mode=\"indeterminate\"></mat-spinner> -->\n    </div>\n  </div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-dark bg-black fixed-top navbar-expand-md\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\" [routerLink]=\"[ '/' ]\">\n            <img class=\"logo\" id=\"logo\" src=\"./assets/Images/VIATOILELOGO.png\">\n        </a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n            <div class=\" ml-auto\">\n            <ul class=\"navbar-nav mx-auto\">\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                        Services\n                    </a>\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n                            <a class=\"dropdown-item\"  [routerLink]=\"[ '/POC' ]\">\n                                Proof of Concept</a>\n                        </div>\n                <li>\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        Platform\n                    </a>\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n                            <a class=\"dropdown-item\"  [routerLink]=\"[ '/smartOn' ]\">\n                                SmartOn</a>\n                        </div>\n                </li>\n                <li>\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        Products\n                    </a>\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n                            <a class=\"dropdown-item\"  [routerLink]=\"[ '/trackAll' ]\">\n                                TrackAll</a>\n                        </div>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link text-white\" [routerLink]=\"[ '/AboutUs' ]\">About Us</a>\n                </li>\n            </ul>\n            </div>\n        </div>\n    </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/poc/poc.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/poc/poc.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"wrapper\">\n    <div class=\" d-flex align-items-center color-overlay justify-content-center\">\n        <h1 class=\" text-center Heading\" id=\"#Heading\">\n            PROVE YOUR IoT CONCEPT\n        </h1>\n    </div>\n    <div class=\"row\">\n        <div class=\"container-fluid background\">\n            <div class=\"why-work-with-us text-white text-center padding\">\n                <h1>Why Work With ViaToile</h1>\n                    <div class=\"row padding\">\n                        <div class=\"container-fluid padding-alt\">\n                            <div class=\"row\">\n                            <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-3 inner-padding\">\n                                <img src=\"./assets/Images/toolbox.png\" alt=\"toolbox\" class=\"icons\">\n                                <p class=\"text-white text-center col-12\" >Provision of all the tools necessary for the realization of your IoT projects </p>\n                            </div>\n                            <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-3 inner-padding\">\n                                <img src=\"./assets/Images/skills.png\" alt=\"expertise\" class=\"icons \">\n                                <p class=\"text-white col-12\">Relevant and moderne expertise in IoT and AI </p>\n                            </div>\n                            <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-3 inner-padding\">\n                                <img src=\"./assets/Images/advisory.png\" alt=\"advisory\" class=\"icons \">\n                                <p class=\"text-white\">Advisory and support throughout the value chain </p>\n                            </div>\n                            <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-3 inner-padding\">\n                                <img src=\"./assets/Images/smoke-detector.png\" alt=\"sensors\" class=\"icons \">\n                                <p class=\"text-white\">An international network of qualified sensor suppliers </p>\n                            </div>\n                            </div>\n                            <div class=\"row\">\n                            <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-3 inner-padding\">\n                                <img src=\"./assets/Images/budget.png\" alt=\"budget\" class=\"icons \">\n                                <p class=\"text-white\">Optimization of R&D budgets </p>\n                            </div>\n                            <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-3 inner-padding\">\n                                <img src=\"./assets/Images/checklist.png\" alt=\"testing\" class=\"icons \">\n                                <p class=\"text-white\">Fast and thourough testing & bringing ideas to reality </p>\n                            </div>\n                            <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-3 inner-padding\">\n                                <img src=\"./assets/Images/decision-making.png\" alt=\"decision making\" class=\"icons \">\n                                <p class=\"text-white col-12\">Quick decisions with the help of clear visibility on opportunities and constraints </p>\n                            </div>\n                            <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-3 inner-padding\">\n                                <img src=\"./assets/Images/rocket.png\" alt=\"deployement\" class=\"icons \">\n                                <p class=\"text-white col-12\">Rapid deployment of complete IoT solutions</p>\n                            </div>\n                            </div>\n                        </div>\n                    </div>\n                    \n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"container-fluid\">\n        \n            <h1 class=\"text-center\">How it Works</h1>\n            <div class=\"container padding\">\n            <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n                <ng-template matStepperIcon=\"edit\">\n                    <mat-icon>check</mat-icon>\n                </ng-template>\n                <ng-template matStepperIcon=\"home\">\n                    <i class=\"far fa-lightbulb\"></i>\n                </ng-template>\n                <ng-template matStepperIcon=\"Solution\">\n                    <i class=\"fas fa-street-view\"></i>\n                </ng-template>\n                <ng-template matStepperIcon=\"Delivery\">\n                    <i class=\"fas fa-truck\"></i>\n                </ng-template>\n                <mat-step  label= \"Phase 1: Project Visualization\" state=\"home\">\n                    <ul class=\"flex-fill col-md-7 align-self-center\">\n                        <li>\n                            <p class=\" size \">Validating a need that requires an IoT solution</p>\n                        </li>\n                        <li>\n                            <p class=\" size \">Global study of the setting</p>\n                        </li>\n                        <li>\n                            <p class=\" size \">Validation of the project</p>\n                        </li>\n                        <li>\n                            <p class=\" size \">Description of the project</p>\n                        </li>\n                        \n                    </ul>\n                </mat-step>\n                <mat-step  label= \"Phase 2: Solution Conception\" state=\"Solution\">\n                    <ul class=\"flex-fill col-md-7\">\n                        <li>\n                            <p class=\" size \">Sourcing and selection of sensors and connectivity</p>\n                        </li>\n                        <li>\n                            <p class=\" size \">Creation of an adequate data structure for the requirements</p>\n                        </li>\n                        <li>\n                            <p class=\" size \">Choice of the most suitable IoT platform and configuration of the sensors</p>\n                        </li>\n                        <li>\n                            <p class=\" size \">Creation of an energy report detailing consumptions</p>\n                        </li>\n                        <li>\n                            <p class=\" size \">Techical architecture</p>\n                        </li>\n                    </ul>\n                </mat-step>\n                <mat-step label = \"Phase 3: Prototyping, Testing, and Delivery\" state = \"Delivery\">\n                    <ul class=\"flex-fill col-md-7 align-self-center\">\n                        <li>\n                            <p class=\" size \">Prototyping of the solution</p>\n                        </li>\n                        <li>\n                            <p class=\" size \">Rigorously testing the solution for all known problems</p>\n                        </li>\n                        <li>\n                            <p class=\" size \">Estimation of the budget required for large-scale IoT deployment</p>\n                        </li>\n                        <li>\n                            <p class=\" size \">Delivery of a finalized and functional proof of concept</p>\n                        </li>\n                    </ul>\n                \n                </mat-step>\n            </mat-vertical-stepper>\n            </div>\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/smart-on/smart-on.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/smart-on/smart-on.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n<div class=\"row\">\n  <div class=\"container-fluid\">\n      <div class=\" d-flex align-items-center color-overlay justify-content-center\">\n        <img src=\"./assets/Images/SMART-ON-logo.png\" alt=\"smartOn\" class=\"smartOn\">\n      </div>\n  </div>\n</div>\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h4 class=\" text-center\">Interoperable, Scalable, Secure and fully Configurable IoT platform without technical knowledge</h4>\n    <h6 class=\" text-center\">Discover our SmartOn Options</h6>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"container-fluid\">\n      <div class=\"card bg-dark text-white col-12\">\n        <img class=\"card-img\" src=\"./assets/Images/Actions.jpg\" alt=\"smartOn Actions\">\n        <div class=\"card-img-overlay d-flex align-items-center\">\n          <h5 class=\"card-title text-center\">SmartOn Actions</h5>\n          <p class=\"card-text text-center\">Visualization on real-time dashboards, Alerting and crossing of thresholds and intelligent process automation.</p>\n        </div>\n      </div>\n    </div>\n</div>\n<div class=\"row\">\n  <div class=\"container-fluid\">\n    <div class=\"card-group\">\n      <div class=\"card bg-dark text-white col-xs-12 col-sm-12 col-md-6\">\n        <img class=\"card-img\" src=\"./assets/Images/smartOn-Things.jpg\" alt=\"smartOn Things\">\n        <div class=\"card-img-overlay d-flex align-items-center\">\n          <h5 class=\"card-title text-center\">SmartOn Things</h5>\n          <p class=\"card-text text-center\">Integration, configuration, monitoring and control of the fleet of connected objects.</p>\n        </div>\n      </div>\n      <div class=\"card bg-dark text-white col-xs-12 col-sm-12 col-md-6\">\n        <img class=\"card-img\" src=\"./assets/Images/Data.jpg\" alt=\"SmartOn Data\">\n        <div class=\"card-img-overlay d-flex align-items-center\">\n          <h5 class=\"card-title text-center\">SmartOn Data</h5>\n          <p class=\"card-text text-center\">Collection, cleaning, structuring, aggregation, storage and real-time monitoring of data from connected objects and other information systems or business applications.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"container-fluid\">\n    <div class=\"card-group\">\n      <div class=\"card bg-dark text-white col-xs-12 col-sm-12\">\n        <img class=\"card-img\" src=\"./assets/Images/Analytics.jpg\" alt=\"SmartOn Analytics\">\n        <div class=\"card-img-overlay d-flex align-items-center\">\n          <h5 class=\"card-title text-center\">SmartOn Analytics</h5>\n          <p class=\"card-text text-center\">\n            Data analysis of connected objects and other IS and performance indicators in real time.</p>\n        </div>\n      </div>\n      <div class=\"card bg-dark text-white col-xs-12 col-sm-12\">\n        <img class=\"card-img\" src=\"./assets/Images/Connector.jpg\" alt=\"SmartOn Connectors\">\n        <div class=\"card-img-overlay d-flex align-items-center\">\n          <h5 class=\"card-title text-center\">SmartOn Connectors</h5>\n          <p class=\"card-text text-center\">\n            Interfacing with other IS, (CMMS, CRM, SCM for supply chain management, human resources management (GRH), Technical data management system (SGDT) or PDM for product data management, product lifecycle management ( or PLM for product lifecycle management, BIM modeling of building data), GTB and GTC, Supervisory Control And Data Acquisition, KNX, Lonworks and BACnet. etc.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/track-all/track-all.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/track-all/track-all.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n<div class=\"row\">\n  <div class=\"container-fluid\">\n      <div class=\" d-flex align-items-center color-overlay justify-content-center\">\n        <img src=\"./assets/Images/trackAllLogo.png\" alt=\"trackAll\" class=\"smartOn\">\n      </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"container-fluid background\">\n      <div class=\"why-work-with-us text-white text-center padding\">\n              <div class=\"row padding\">\n                  <div class=\"container-fluid padding-alt\">\n                      <div class=\"row\">\n                      <div class=\"col-sm-6 col-lg-3 inner-padding\">\n                          <img src=\"./assets/Images/checklist.png\" alt=\"checklist\" class=\"icons\">\n                          <p class=\"text-white text-center col-12\" >Real-Time Counting</p>\n                      </div>\n                      <div class=\"col-sm-6 col-lg-3 inner-padding\">\n                          <img src=\"./assets/Images/fingerprint.png\" alt=\"fingerprint\" class=\"icons \">\n                          <p class=\"text-white col-12\">Real-Time Detection and Tracking & Analysis of hotspots and usage in spaces </p>\n                      </div>\n                      <div class=\" col-sm-6 col-lg-3 inner-padding\">\n                          <img src=\"./assets/Images/warning.png\" alt=\"warning\" class=\"icons \">\n                          <p class=\"text-white\">Trespassing Alerts for dangerous or restricted areas </p>\n                      </div>\n                      <div class=\"col-md-6 col-lg-3 inner-padding\">\n                          <img src=\"./assets/Images/evacuate.png\" alt=\"evacuate\" class=\"icons \">\n                          <p class=\"text-white\">Assistance in the Evacuation of people in emergency cases </p>\n                      </div>\n                      </div>\n                  </div>\n              </div>\n              \n      </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"container-fluid\">\n    <img src=\"./assets/Images/TrackAll.png\" alt=\"TrackaAll usecase\" class=\"trackall-use-case\">\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"container\">\n  <h1 class=\"text-center explain\">EXPLANATORY VIDEO</h1>\n</div>\n  <div class=\"container iframe-container\">\n    <iframe src=\"https://www.youtube.com/embed/ZcYH3p3rQKw\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>\n</div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  width: 100vw;\n  overflow-x: hidden;\n  position: relative;\n}\n\n.color-overlay {\n  background: linear-gradient(0deg, #2a2a72 6%, rgba(0, 159, 253, 0.2) 74%), url(/assets/Images/photo3.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100vw;\n  height: 100vh;\n}\n\n.color-overlay h1 {\n  font-size: 600%;\n  color: #fbfcff;\n  font-family: \"Lato\";\n  font-weight: normal;\n}\n\n#map {\n  height: 500px;\n  width: 100%;\n}\n\n.jumbotron {\n  padding: 0.5rem;\n  border-radius: 0;\n  margin-bottom: 0 !important;\n}\n\n.jumbotron p {\n  margin-top: 30px;\n  margin-bottom: 30px;\n  font-size: 2.5rem;\n}\n\n.val {\n  background-color: #25283d;\n}\n\n.val .values {\n  width: 75%;\n  margin: 0 auto;\n  padding-top: 2rem;\n}\n\n.val .values hr {\n  border-top: 2px solid #fbfcff;\n  width: 95%;\n  margin-top: 0.8rem;\n  margin-bottom: 2rem;\n}\n\n.fa-space-shuttle, .fa-code, .fa-robot, .fa-lock {\n  color: #ffffff;\n  font-size: 4rem;\n  margin: 1rem;\n}\n\n.text p {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n/* Slider */\n\n.slick-slide {\n  margin: 0px 20px;\n}\n\n.slick-slide img {\n  width: 100%;\n}\n\n.slick-slider {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -khtml-user-select: none;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.slick-list {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n}\n\n.slick-list:focus {\n  outline: none;\n}\n\n.slick-list.dragging {\n  cursor: pointer;\n  cursor: hand;\n}\n\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n  transform: translate3d(0, 0, 0);\n}\n\n.contact .container {\n  display: inline-block;\n}\n\n.fa-phone, .fa-envelope {\n  font-size: 2rem;\n}\n\nform {\n  margin: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXFVzZXJzXFxnYWltZVxcRG9jdW1lbnRzXFxWaWFUb2lsZVxcQW5ndWxhclxcVmlhVG9pbGVXZWJzaXRlL3NyY1xcYXBwXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLHlHQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNFSjs7QURESTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0dSOztBREFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNHSjs7QUREQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FDSUE7O0FESEE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNLSjs7QURGQTtFQUNBLHlCQUFBO0FDS0E7O0FESkE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDTUo7O0FESkk7RUFDSSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDTVI7O0FERkE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNLQTs7QURGSTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNLUjs7QURGQSxXQUFBOztBQUNBO0VBQ0ksZ0JBQUE7QUNLSjs7QURGQTtFQUNJLFdBQUE7QUNLSjs7QURGQTtFQUVJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ1EsaUJBQUE7RUFDUiwyQkFBQTtFQUNBLHdCQUFBO0VBRUksbUJBQUE7RUFDSix3Q0FBQTtBQ0lKOztBRERBO0VBRUksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0dKOztBRERBO0VBRUksYUFBQTtBQ0dKOztBRERBO0VBRUksZUFBQTtFQUNBLFlBQUE7QUNHSjs7QURBQTs7RUFPWSwrQkFBQTtBQ0VaOztBREVJO0VBQ0kscUJBQUE7QUNDUjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNvbG9yLW92ZXJsYXl7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg0Miw0MiwxMTQsMSkgNiUsIHJnYmEoMCwxNTksMjUzLDAuMikgNzQlKSx1cmwoL2Fzc2V0cy9JbWFnZXMvcGhvdG8zLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiA2MDAlO1xyXG4gICAgICAgIGNvbG9yOiNmYmZjZmY7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJztcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG59XHJcbiNtYXAge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICB9XHJcbi5qdW1ib3Ryb257XHJcbnBhZGRpbmc6IC41cmVtO1xyXG5ib3JkZXItcmFkaXVzOiAwO1xyXG5tYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbnB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG59XHJcbn1cclxuLnZhbHtcclxuYmFja2dyb3VuZC1jb2xvcjogIzI1MjgzZDtcclxuLnZhbHVlc3tcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgXHJcbiAgICBocntcclxuICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2ZiZmNmZjtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC44cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcbn1cclxufVxyXG4uZmEtc3BhY2Utc2h1dHRsZSwgLmZhLWNvZGUsIC5mYS1yb2JvdCwgLmZhLWxvY2t7XHJcbmNvbG9yOiAjZmZmZmZmO1xyXG5mb250LXNpemU6IDRyZW07XHJcbm1hcmdpbjogMXJlbTtcclxufVxyXG4udGV4dHtcclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuLyogU2xpZGVyICovXHJcbi5zbGljay1zbGlkZSB7XHJcbiAgICBtYXJnaW46IDBweCAyMHB4O1xyXG59XHJcblxyXG4uc2xpY2stc2xpZGUgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2xpY2stc2xpZGVyXHJcbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy10b3VjaC1hY3Rpb246IHBhbi15O1xyXG4gICAgICAgIHRvdWNoLWFjdGlvbjogcGFuLXk7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uc2xpY2stbGlzdFxyXG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5zbGljay1saXN0OmZvY3VzXHJcbntcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLnNsaWNrLWxpc3QuZHJhZ2dpbmdcclxue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY3Vyc29yOiBoYW5kO1xyXG59XHJcblxyXG4uc2xpY2stc2xpZGVyIC5zbGljay10cmFjayxcclxuLnNsaWNrLXNsaWRlciAuc2xpY2stbGlzdFxyXG57XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbn1cclxuXHJcbi5jb250YWN0e1xyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuLmZhLXBob25lLC5mYS1lbnZlbG9wZXtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuZm9ybXtcclxuICAgIG1hcmdpbjogMTVweDtcclxufSIsIi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbG9yLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzJhMmE3MiA2JSwgcmdiYSgwLCAxNTksIDI1MywgMC4yKSA3NCUpLCB1cmwoL2Fzc2V0cy9JbWFnZXMvcGhvdG8zLmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5jb2xvci1vdmVybGF5IGgxIHtcbiAgZm9udC1zaXplOiA2MDAlO1xuICBjb2xvcjogI2ZiZmNmZjtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4jbWFwIHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5qdW1ib3Ryb24ge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbi5qdW1ib3Ryb24gcCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4udmFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjgzZDtcbn1cbi52YWwgLnZhbHVlcyB7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbn1cbi52YWwgLnZhbHVlcyBociB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZmJmY2ZmO1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW4tdG9wOiAwLjhyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5mYS1zcGFjZS1zaHV0dGxlLCAuZmEtY29kZSwgLmZhLXJvYm90LCAuZmEtbG9jayB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDRyZW07XG4gIG1hcmdpbjogMXJlbTtcbn1cblxuLnRleHQgcCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyogU2xpZGVyICovXG4uc2xpY2stc2xpZGUge1xuICBtYXJnaW46IDBweCAyMHB4O1xufVxuXG4uc2xpY2stc2xpZGUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zbGljay1zbGlkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXRvdWNoLWFjdGlvbjogcGFuLXk7XG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zbGljay1saXN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc2xpY2stbGlzdDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zbGljay1saXN0LmRyYWdnaW5nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjdXJzb3I6IGhhbmQ7XG59XG5cbi5zbGljay1zbGlkZXIgLnNsaWNrLXRyYWNrLFxuLnNsaWNrLXNsaWRlciAuc2xpY2stbGlzdCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuLmNvbnRhY3QgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmZhLXBob25lLCAuZmEtZW52ZWxvcGUge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbmZvcm0ge1xuICBtYXJnaW46IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
        this.imagesUrl = ['./assets/Images/PSA.png', './assets/Images/vinci.png', './assets/Images/Exprom.jpg'];
    }
    ngAfterViewInit() {
        // this.mapInitializer();
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'ViaToileWebsite';
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-typed-js */ "./node_modules/ngx-typed-js/fesm2015/ngx-typed-js.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _poc_poc_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./poc/poc.component */ "./src/app/poc/poc.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _smart_on_smart_on_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./smart-on/smart-on.component */ "./src/app/smart-on/smart-on.component.ts");
/* harmony import */ var _track_all_track_all_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./track-all/track-all.component */ "./src/app/track-all/track-all.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var angular_image_slider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular-image-slider */ "./node_modules/angular-image-slider/fesm2015/angular-image-slider.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./loading-screen/loading-screen.component */ "./src/app/loading-screen/loading-screen.component.ts");
/* harmony import */ var _loading_screen_loading_screen_interceptor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./loading-screen/loading-screen.interceptor */ "./src/app/loading-screen/loading-screen.interceptor.ts");




























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
            _index_index_component__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _poc_poc_component__WEBPACK_IMPORTED_MODULE_12__["POCComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
            _smart_on_smart_on_component__WEBPACK_IMPORTED_MODULE_14__["SmartOnComponent"],
            _track_all_track_all_component__WEBPACK_IMPORTED_MODULE_15__["TrackAllComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"],
            _loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_26__["LoadingScreenComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ngx_embed_video__WEBPACK_IMPORTED_MODULE_23__["EmbedVideo"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            ngx_typed_js__WEBPACK_IMPORTED_MODULE_10__["NgxTypedJsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
                { path: 'POC', component: _poc_poc_component__WEBPACK_IMPORTED_MODULE_12__["POCComponent"] },
                { path: 'smartOn', component: _smart_on_smart_on_component__WEBPACK_IMPORTED_MODULE_14__["SmartOnComponent"] },
                { path: 'trackAll', component: _track_all_track_all_component__WEBPACK_IMPORTED_MODULE_15__["TrackAllComponent"] },
                { path: 'AboutUs', component: _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"] }
            ]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
            angular_image_slider__WEBPACK_IMPORTED_MODULE_24__["SliderModule"]
        ],
        providers: [{
                provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_19__["MAT_STEPPER_GLOBAL_OPTIONS"], useValue: { displayDefaultIndicatorType: false }
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HTTP_INTERCEPTORS"],
                useClass: _loading_screen_loading_screen_interceptor__WEBPACK_IMPORTED_MODULE_27__["LoadingScreenInterceptor"],
                multi: true
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer {\n  background-color: #25283d;\n  display: flex;\n  flex-direction: column;\n}\nfooter .logo {\n  width: 60%;\n  padding: 10px;\n}\nfooter .links {\n  border-left: 1px solid #fbfcff;\n  height: 75%;\n  margin-top: 10px;\n  flex-direction: column;\n}\nfooter .footer-links {\n  flex-direction: row;\n  text-decoration: none;\n  list-style: none;\n  display: inline-flex;\n  padding-top: 10px;\n  padding-left: 0;\n}\nfooter .footer-links li a {\n  margin-right: 20px;\n  color: #fbfcff;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  text-decoration: none;\n}\nfooter .social-media {\n  text-decoration: none;\n  list-style: none;\n  padding-top: 10px;\n  padding-left: 0;\n  display: inline-flex;\n}\nfooter .social-media li a {\n  margin-right: 20px;\n  color: #fbfcff;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  text-decoration: none;\n}\nfooter .fab {\n  font-size: 1.5rem;\n}\nfooter .footer-secondary-links {\n  text-decoration: none;\n  list-style: none;\n  margin: 0;\n  padding-top: 10px;\n  padding-left: 0;\n}\nfooter .footer-secondary-links li {\n  margin-right: 20px;\n  color: #fbfcff;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  text-decoration: none;\n}\n@media (max-width: 768px) {\n  footer .links {\n    border-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcZ2FpbWVcXERvY3VtZW50c1xcVmlhVG9pbGVcXEFuZ3VsYXJcXFZpYVRvaWxlV2Vic2l0ZS9zcmNcXGFwcFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0NKO0FEQUk7RUFDSSxVQUFBO0VBQ0EsYUFBQTtBQ0VSO0FEQUk7RUFDSSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDRVI7QURBSTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRVI7QURBWTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0VoQjtBREVJO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDQVI7QURFWTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0FoQjtBRElJO0VBQ0ksaUJBQUE7QUNGUjtBRElJO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNGUjtBREdRO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDRFo7QURNQTtFQUVRO0lBQ0ksZ0JBQUE7RUNKVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTI4M2Q7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC5sb2dve1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICAgIC5saW5rc3tcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmYmZjZmY7XHJcbiAgICAgICAgaGVpZ2h0OiA3NSU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlci1saW5rc3tcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmJmY2ZmO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc29jaWFsLW1lZGlhe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmJmY2ZmO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZmFie1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlci1zZWNvbmRhcnktbGlua3N7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZiZmNmZjtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgIGZvb3RlcntcclxuICAgICAgICAubGlua3N7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAwcHg7XHJcbiAgICAgICAgfVxyXG59XHJcbn0iLCJmb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyODNkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuZm9vdGVyIC5sb2dvIHtcbiAgd2lkdGg6IDYwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cbmZvb3RlciAubGlua3Mge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmYmZjZmY7XG4gIGhlaWdodDogNzUlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuZm9vdGVyIC5mb290ZXItbGlua3Mge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuZm9vdGVyIC5mb290ZXItbGlua3MgbGkgYSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgY29sb3I6ICNmYmZjZmY7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmZvb3RlciAuc29jaWFsLW1lZGlhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbmZvb3RlciAuc29jaWFsLW1lZGlhIGxpIGEge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjZmJmY2ZmO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5mb290ZXIgLmZhYiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuZm9vdGVyIC5mb290ZXItc2Vjb25kYXJ5LWxpbmtzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5mb290ZXIgLmZvb3Rlci1zZWNvbmRhcnktbGlua3MgbGkge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjZmJmY2ZmO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICBmb290ZXIgLmxpbmtzIHtcbiAgICBib3JkZXItbGVmdDogMHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  width: 100vw;\n  overflow-x: hidden;\n  position: relative;\n}\n\n.carousel {\n  display: flex;\n  width: 100vw;\n  background: #000000;\n}\n\n.carousel .carousel-inner .fit {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  opacity: 0.3;\n}\n\n.carousel .carousel-item {\n  height: 100vh;\n}\n\n.carousel .carousel-item .carousel-caption {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.carousel .carousel-item .carousel-caption h2 {\n  font-size: 300%;\n  font-weight: 500;\n  font-size: \"Merriweather\";\n  text-transform: uppercase;\n  padding-bottom: 0.8rem;\n}\n\n.btn-primary {\n  background-color: #234c9b;\n  border: 1px solid #25283d;\n}\n\n.btn-primary:hover {\n  background-color: #234c9b;\n  border: 1px solid #234c9b;\n}\n\n.jumbotron {\n  padding: 0.5rem;\n  border-radius: 0;\n  margin-bottom: 0 !important;\n}\n\n.jumbotron p {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-size: 2rem;\n}\n\n.padding {\n  padding-bottom: 2rem;\n}\n\n.val {\n  background-color: #25283d;\n}\n\n.val .values {\n  width: 75%;\n  margin: 0 auto;\n  padding-top: 2rem;\n}\n\n.val .values hr {\n  border-top: 2px solid #fbfcff;\n  width: 95%;\n  margin-top: 0.8rem;\n  margin-bottom: 2rem;\n}\n\n.fa-creative-commons-by, .fa-handshake, .fa-lightbulb, .fa-crop-alt {\n  color: #ffffff;\n  font-size: 4rem;\n  margin: 1rem;\n}\n\n.smartOn {\n  z-index: 2;\n  width: 30%;\n  margin-bottom: 10px;\n}\n\n.image {\n  z-index: 0;\n}\n\n.desc-row {\n  background-color: #25283d;\n  border-bottom: 3px solid #fbfcff;\n}\n\n.logo {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  padding-left: 3rem;\n  width: 20%;\n}\n\n.media {\n  margin: 10px auto;\n}\n\n.media-body p {\n  font-size: 1.3rem;\n  padding: 2rem;\n}\n\nfooter {\n  background-color: #25283d;\n  display: flex;\n}\n\nfooter .logo {\n  width: 60%;\n  padding: 10px;\n}\n\nfooter .links {\n  border-left: 1px solid #fbfcff;\n  height: 75%;\n  margin-top: 10px;\n}\n\nfooter .footer-links {\n  flex-direction: row;\n  text-decoration: none;\n  list-style: none;\n  display: inline-flex;\n  padding-top: 10px;\n  padding-left: 0;\n}\n\nfooter .footer-links li a {\n  margin-right: 20px;\n  color: #fbfcff;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  text-decoration: none;\n}\n\nfooter .social-media {\n  text-decoration: none;\n  list-style: none;\n  padding-top: 10px;\n  padding-left: 0;\n}\n\nfooter .social-media li a {\n  margin-right: 20px;\n  color: #fbfcff;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  text-decoration: none;\n}\n\nfooter .footer-secondary-links {\n  text-decoration: none;\n  list-style: none;\n  padding-top: 10px;\n  padding-left: 0;\n}\n\nfooter .footer-secondary-links li {\n  margin-right: 20px;\n  color: #fbfcff;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  text-decoration: none;\n}\n\n.philosophy {\n  padding-right: 25px;\n  padding-left: 25px;\n}\n\n.philosophy p {\n  font-size: 1.5rem;\n}\n\n.description {\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n@media (max-width: 768px) {\n  .carousel {\n    display: flex;\n    width: 100vw;\n  }\n  .carousel .carousel-item {\n    height: 100vh;\n  }\n  .carousel .carousel-item .carousel-caption {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n  .carousel .carousel-item .carousel-caption h2 {\n    font-size: 150%;\n    font-weight: 400;\n    text-transform: uppercase;\n    padding-bottom: 0.8rem;\n  }\n\n  .smartOn {\n    z-index: 2;\n    width: 70%;\n    margin-bottom: 10px;\n  }\n\n  .logo {\n    width: 30%;\n    padding-left: 10px;\n  }\n\n  .media-body p {\n    font-size: 1rem;\n    padding: 20px;\n  }\n\n  .philosophy p {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGdhaW1lXFxEb2N1bWVudHNcXFZpYVRvaWxlXFxBbmd1bGFyXFxWaWFUb2lsZVdlYnNpdGUvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxZQUFBO0FDQ1o7O0FERUk7RUFDSSxhQUFBO0FDQVI7O0FEQ1E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0NaOztBREFZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDRWhCOztBREdBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBQ0FKOztBREVBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURBSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDRVI7O0FEQ0E7RUFDSSxvQkFBQTtBQ0VKOztBREFBO0VBQ0kseUJBQUE7QUNHSjs7QURGSTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNJUjs7QURGUTtFQUNJLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNJWjs7QURBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0ksVUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0lKOztBRGNBO0VBQ0ksVUFBQTtBQ1hKOztBRGFBO0VBQ0kseUJBQUE7RUFDQSxnQ0FBQTtBQ1ZKOztBRFlBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ1RKOztBRFdBO0VBQ0ksaUJBQUE7QUNSSjs7QURXUTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtBQ1JaOztBRFdBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0FDUko7O0FEU0k7RUFDSSxVQUFBO0VBQ0EsYUFBQTtBQ1BSOztBRFNJO0VBQ0ksOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNQUjs7QURTSTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDUFI7O0FEU1k7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNQaEI7O0FEV0k7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDVFI7O0FEV1k7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNUaEI7O0FEYUk7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDWFI7O0FEWVE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNWWjs7QURlQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUNaSjs7QURhSTtFQUNJLGlCQUFBO0FDWFI7O0FEZUE7RUFDSSxtQkFBQTtFQUNBLDZCQUFBO0FDWko7O0FEZ0JBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsWUFBQTtFQ2JOO0VEY007SUFDSSxhQUFBO0VDWlY7RURhVTtJQUNJLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0VDWGQ7RURZYztJQUNJLGVBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0lBQ0Esc0JBQUE7RUNWbEI7O0VEZUU7SUFDUSxVQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0VDWlY7O0VEY0U7SUFDSSxVQUFBO0lBQ0Esa0JBQUE7RUNYTjs7RURjTTtJQUNJLGVBQUE7SUFDQSxhQUFBO0VDWFY7O0VEZU07SUFDSSxlQUFBO0VDWlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbn1cclxuLmNhcm91c2Vse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDB2dyA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgLmNhcm91c2VsLWlubmVye1xyXG4gICAgICAgIC5maXR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2Fyb3VzZWwtaXRlbXtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIC5jYXJvdXNlbC1jYXB0aW9ue1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMDAlO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJ01lcnJpd2VhdGhlcic7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuOHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYnRuLXByaW1hcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM0YzliO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI1MjgzZDtcclxufVxyXG4uYnRuLXByaW1hcnk6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM0YzliO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIzNGM5YjtcclxufVxyXG5cclxuLmp1bWJvdHJvbntcclxuICAgIHBhZGRpbmc6IC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxufVxyXG4ucGFkZGluZ3tcclxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG59XHJcbi52YWx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyODNkO1xyXG4gICAgLnZhbHVlc3tcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGhye1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2ZiZmNmZjtcclxuICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLjhyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5mYS1jcmVhdGl2ZS1jb21tb25zLWJ5LCAuZmEtaGFuZHNoYWtlLCAuZmEtbGlnaHRidWxiLCAuZmEtY3JvcC1hbHR7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIG1hcmdpbjogMXJlbTtcclxufVxyXG4uc21hcnRPbntcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4vLyBAbWVkaWEobWF4LXdpZHRoOjQyNnB4KXtcclxuLy8gICAgIC5jYXJvdXNlbHtcclxuLy8gICAgICAgICBoZWlnaHQ6IDE5cmVtO1xyXG4vLyAgICAgICAgIC5jYXJvdXNlbC1jYXB0aW9ue1xyXG4vLyAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICBib3R0b206IDMwJSAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAgICAgICBoMntcclxuLy8gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4vLyAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuXHJcbi5pbWFnZXtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuLmRlc2Mtcm93e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjgzZDtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmJmY2ZmO1xyXG59XHJcbi5sb2dve1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuLm1lZGlhe1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuLm1lZGlhLWJvZHl7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgfVxyXG59XHJcbmZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTI4M2Q7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLmxvZ297XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmxpbmtze1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZiZmNmZjtcclxuICAgICAgICBoZWlnaHQ6IDc1JTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlci1saW5rc3tcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmJmY2ZmO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc29jaWFsLW1lZGlhe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmJmY2ZmO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLXNlY29uZGFyeS1saW5rc3tcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmYmZjZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4ucGhpbG9zb3BoeXtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGVzY3JpcHRpb257XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICAgLmNhcm91c2Vse1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3IDtcclxuICAgICAgICAuY2Fyb3VzZWwtaXRlbXtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgLmNhcm91c2VsLWNhcHRpb257XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTUwJTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zbWFydE9ue1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ297XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubWVkaWEtYm9keXtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBoaWxvc29waHl7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcm91c2VsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xufVxuLmNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciAuZml0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9wYWNpdHk6IDAuMztcbn1cbi5jYXJvdXNlbCAuY2Fyb3VzZWwtaXRlbSB7XG4gIGhlaWdodDogMTAwdmg7XG59XG4uY2Fyb3VzZWwgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4uY2Fyb3VzZWwgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24gaDIge1xuICBmb250LXNpemU6IDMwMCU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogXCJNZXJyaXdlYXRoZXJcIjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZy1ib3R0b206IDAuOHJlbTtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzNGM5YjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI1MjgzZDtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzNGM5YjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzIzNGM5Yjtcbn1cblxuLmp1bWJvdHJvbiB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuLmp1bWJvdHJvbiBwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuXG4udmFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjgzZDtcbn1cbi52YWwgLnZhbHVlcyB7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbn1cbi52YWwgLnZhbHVlcyBociB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZmJmY2ZmO1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW4tdG9wOiAwLjhyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5mYS1jcmVhdGl2ZS1jb21tb25zLWJ5LCAuZmEtaGFuZHNoYWtlLCAuZmEtbGlnaHRidWxiLCAuZmEtY3JvcC1hbHQge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBtYXJnaW46IDFyZW07XG59XG5cbi5zbWFydE9uIHtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmltYWdlIHtcbiAgei1pbmRleDogMDtcbn1cblxuLmRlc2Mtcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjgzZDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmYmZjZmY7XG59XG5cbi5sb2dvIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5tZWRpYSB7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xufVxuXG4ubWVkaWEtYm9keSBwIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTI4M2Q7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5mb290ZXIgLmxvZ28ge1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuZm9vdGVyIC5saW5rcyB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZiZmNmZjtcbiAgaGVpZ2h0OiA3NSU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5mb290ZXIgLmZvb3Rlci1saW5rcyB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5mb290ZXIgLmZvb3Rlci1saW5rcyBsaSBhIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBjb2xvcjogI2ZiZmNmZjtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuZm9vdGVyIC5zb2NpYWwtbWVkaWEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5mb290ZXIgLnNvY2lhbC1tZWRpYSBsaSBhIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBjb2xvcjogI2ZiZmNmZjtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuZm9vdGVyIC5mb290ZXItc2Vjb25kYXJ5LWxpbmtzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuZm9vdGVyIC5mb290ZXItc2Vjb25kYXJ5LWxpbmtzIGxpIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBjb2xvcjogI2ZiZmNmZjtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucGhpbG9zb3BoeSB7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbn1cbi5waGlsb3NvcGh5IHAge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2Fyb3VzZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICB9XG4gIC5jYXJvdXNlbCAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICAuY2Fyb3VzZWwgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgLmNhcm91c2VsIC5jYXJvdXNlbC1pdGVtIC5jYXJvdXNlbC1jYXB0aW9uIGgyIHtcbiAgICBmb250LXNpemU6IDE1MCU7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjhyZW07XG4gIH1cblxuICAuc21hcnRPbiB7XG4gICAgei1pbmRleDogMjtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAubG9nbyB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cblxuICAubWVkaWEtYm9keSBwIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuXG4gIC5waGlsb3NvcGh5IHAge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




let HomeComponent = class HomeComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_3__('.carousel').carousel({
            interval: 15000
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/index/index.component.scss":
/*!********************************************!*\
  !*** ./src/app/index/index.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n}\n\n.fullscreen-video-wrap {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100%;\n  overflow: hidden;\n}\n\n.fullscreen-video-wrap video {\n  min-width: 100%;\n  min-height: 100%;\n}\n\n.header-overlay {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #000000;\n  z-index: 1;\n  opacity: 0.5;\n}\n\n@media (max-width: 960px) {\n  .video-wrapper {\n    padding-right: 3rem;\n    padding-left: 3rem;\n  }\n}\n\n.header-content {\n  z-index: 2;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  padding: 0;\n  text-align: center;\n  color: #ffffff;\n}\n\n.header-content h1 {\n  font-size: 2rem;\n  margin-bottom: 0;\n}\n\n.header-content .typing {\n  color: #bf68a5;\n  font-size: 2.5rem;\n}\n\n.Logo-first-page {\n  width: 40%;\n}\n\n.learn {\n  margin-top: 15px;\n}\n\n@media (min-width: 960px) {\n  .header-content h1 {\n    font-size: 4.1rem;\n    margin-bottom: 0;\n  }\n\n  .header-content .typing {\n    color: #bf68a5;\n    font-size: 5rem;\n  }\n\n  .Logo-first-page {\n    width: 40%;\n  }\n}\n\n.test {\n  position: absolute;\n  top: 2000px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvQzpcXFVzZXJzXFxnYWltZVxcRG9jdW1lbnRzXFxWaWFUb2lsZVxcQW5ndWxhclxcVmlhVG9pbGVXZWJzaXRlL3NyY1xcYXBwXFxpbmRleFxcaW5kZXguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNJSjs7QURBQTtFQUNJO0lBQ0ksbUJBQUE7SUFDQSxrQkFBQTtFQ0dOO0FBQ0Y7O0FEQUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QUREQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0lKOztBREZBO0VBQ0ksVUFBQTtBQ0tKOztBREhBO0VBQ0ksZ0JBQUE7QUNNSjs7QURKQTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSxnQkFBQTtFQ09OOztFRExFO0lBQ0ksY0FBQTtJQUNBLGVBQUE7RUNRTjs7RURORTtJQUNJLFVBQUE7RUNTTjtBQUNGOztBRFBBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDU0oiLCJmaWxlIjoic3JjL2FwcC9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5mdWxsc2NyZWVuLXZpZGVvLXdyYXB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5mdWxsc2NyZWVuLXZpZGVvLXdyYXAgdmlkZW97XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5oZWFkZXItb3ZlcmxheXtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo5NjBweCl7XHJcbiAgICAudmlkZW8td3JhcHBlcntcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIH1cclxufVxyXG5cclxuLmhlYWRlci1jb250ZW50e1xyXG4gICAgei1pbmRleDoyO1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjojZmZmZmZmO1xyXG59XHJcbi5oZWFkZXItY29udGVudCBoMXtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLmhlYWRlci1jb250ZW50IC50eXBpbmd7XHJcbiAgICBjb2xvcjogI2JmNjhhNTtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG59XHJcbi5Mb2dvLWZpcnN0LXBhZ2V7XHJcbiAgICB3aWR0aDogNDAlO1xyXG59XHJcbi5sZWFybntcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6OTYwcHgpe1xyXG4gICAgLmhlYWRlci1jb250ZW50IGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNC4xcmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLWNvbnRlbnQgLnR5cGluZ3tcclxuICAgICAgICBjb2xvcjogI2JmNjhhNTtcclxuICAgICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICB9XHJcbiAgICAuTG9nby1maXJzdC1wYWdle1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcbn1cclxuLnRlc3R7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwMDBweDtcclxufSIsIi53cmFwcGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZ1bGxzY3JlZW4tdmlkZW8td3JhcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZ1bGxzY3JlZW4tdmlkZW8td3JhcCB2aWRlbyB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLmhlYWRlci1vdmVybGF5IHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgei1pbmRleDogMTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLnZpZGVvLXdyYXBwZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICB9XG59XG4uaGVhZGVyLWNvbnRlbnQge1xuICB6LWluZGV4OiAyO1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaGVhZGVyLWNvbnRlbnQgaDEge1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5oZWFkZXItY29udGVudCAudHlwaW5nIHtcbiAgY29sb3I6ICNiZjY4YTU7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4uTG9nby1maXJzdC1wYWdlIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmxlYXJuIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gIC5oZWFkZXItY29udGVudCBoMSB7XG4gICAgZm9udC1zaXplOiA0LjFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5oZWFkZXItY29udGVudCAudHlwaW5nIHtcbiAgICBjb2xvcjogI2JmNjhhNTtcbiAgICBmb250LXNpemU6IDVyZW07XG4gIH1cblxuICAuTG9nby1maXJzdC1wYWdlIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG59XG4udGVzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMDAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IndexComponent = class IndexComponent {
    constructor() { }
    ngOnInit() {
    }
};
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./index.component.scss */ "./src/app/index/index.component.scss")).default]
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/loading-screen/loading-screen.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/loading-screen/loading-screen.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loading-screen-wrapper {\n  z-index: 100000;\n  position: absolute;\n  background-color: rgba(255, 255, 255, 0.6);\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n.loading-screen-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy1zY3JlZW4vQzpcXFVzZXJzXFxnYWltZVxcRG9jdW1lbnRzXFxWaWFUb2lsZVxcQW5ndWxhclxcVmlhVG9pbGVXZWJzaXRlL3NyY1xcYXBwXFxsb2FkaW5nLXNjcmVlblxcbG9hZGluZy1zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvYWRpbmctc2NyZWVuL2xvYWRpbmctc2NyZWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbG9hZGluZy1zY3JlZW4vbG9hZGluZy1zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZy1zY3JlZW4td3JhcHBlciB7XHJcbiAgICB6LWluZGV4OiAxMDAwMDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAubG9hZGluZy1zY3JlZW4taWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH0iLCIubG9hZGluZy1zY3JlZW4td3JhcHBlciB7XG4gIHotaW5kZXg6IDEwMDAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9hZGluZy1zY3JlZW4taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/loading-screen/loading-screen.component.ts":
/*!************************************************************!*\
  !*** ./src/app/loading-screen/loading-screen.component.ts ***!
  \************************************************************/
/*! exports provided: LoadingScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingScreenComponent", function() { return LoadingScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_loading_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loading-screen.service */ "./src/app/services/loading-screen.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let LoadingScreenComponent = class LoadingScreenComponent {
    constructor(loadingScreenService) {
        this.loadingScreenService = loadingScreenService;
        this.loading = false;
    }
    ngOnInit() {
        this.loadingSubscription = this.loadingScreenService.loadingStatus.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200)).subscribe((value) => {
            this.loading = value;
        });
    }
    ngOnDestroy() {
        this.loadingSubscription.unsubscribe();
    }
};
LoadingScreenComponent.ctorParameters = () => [
    { type: _services_loading_screen_service__WEBPACK_IMPORTED_MODULE_2__["LoadingScreenService"] }
];
LoadingScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loading-screen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loading-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loading-screen/loading-screen.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loading-screen.component.scss */ "./src/app/loading-screen/loading-screen.component.scss")).default]
    })
], LoadingScreenComponent);



/***/ }),

/***/ "./src/app/loading-screen/loading-screen.interceptor.ts":
/*!**************************************************************!*\
  !*** ./src/app/loading-screen/loading-screen.interceptor.ts ***!
  \**************************************************************/
/*! exports provided: LoadingScreenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingScreenInterceptor", function() { return LoadingScreenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_loading_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loading-screen.service */ "./src/app/services/loading-screen.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let LoadingScreenInterceptor = class LoadingScreenInterceptor {
    constructor(loadingScreenService) {
        this.loadingScreenService = loadingScreenService;
        this.activeRequests = 0;
        /**
         * URLs for which the loading screen should not be enabled
         */
        this.skippUrls = [
            '/authrefresh',
        ];
    }
    intercept(request, next) {
        let displayLoadingScreen = true;
        for (const skippUrl of this.skippUrls) {
            if (new RegExp(skippUrl).test(request.url)) {
                displayLoadingScreen = false;
                break;
            }
        }
        if (displayLoadingScreen) {
            if (this.activeRequests === 0) {
                this.loadingScreenService.startLoading();
            }
            this.activeRequests++;
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => {
                this.activeRequests--;
                if (this.activeRequests === 0) {
                    this.loadingScreenService.stopLoading();
                }
            }));
        }
        else {
            return next.handle(request);
        }
    }
    ;
};
LoadingScreenInterceptor.ctorParameters = () => [
    { type: _services_loading_screen_service__WEBPACK_IMPORTED_MODULE_2__["LoadingScreenService"] }
];
LoadingScreenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoadingScreenInterceptor);



/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar {\n  padding: 0.8rem;\n}\n.navbar .navbar-nav li {\n  padding-right: 20px;\n}\n.navbar .nav-link {\n  font-weight: 600;\n  font-size: 1.1rem !important;\n  color: #ffffff;\n}\n@media (min-width: 426px) {\n  .navbar .navbar-nav .dropdown-menu {\n    position: absolute;\n    right: auto;\n    overflow: hidden;\n  }\n}\n.navbar .nav-link:hover {\n  transition: 750ms ease;\n  color: #d0ccd0 !important;\n}\n.navbar .navbar-brand {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.navbar .navbar-brand .logo {\n  display: inline;\n  width: 7rem;\n}\n.bg-black {\n  background: transparent !important;\n}\n.bg-black.scrolled {\n  transition: 750ms ease;\n  background: #090E20 !important;\n}\n.logo.scrolled-logo {\n  transition: 750ms ease;\n  width: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcZ2FpbWVcXERvY3VtZW50c1xcVmlhVG9pbGVcXEFuZ3VsYXJcXFZpYVRvaWxlV2Vic2l0ZS9zcmNcXGFwcFxcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxlQUFBO0FDQ0E7QURDSTtFQUNJLG1CQUFBO0FDQ1I7QURDSTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FDQ1I7QURDSTtFQUVRO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUNBZDtBQUNGO0FER0k7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0FDRFI7QURHSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0RSO0FERVE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ0FaO0FESUE7RUFFSSxrQ0FBQTtBQ0ZKO0FESUE7RUFDSSxzQkFBQTtFQUNBLDhCQUFBO0FDREo7QURHQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbnBhZGRpbmc6IDAuOHJlbTtcclxuXHJcbiAgICAubmF2YmFyLW5hdiBsaXtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLm5hdi1saW5re1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOjQyNnB4KSB7XHJcbiAgICAgICAgLm5hdmJhci1uYXZ7XHJcbiAgICAgICAgICAgIC5kcm9wZG93bi1tZW51e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2LWxpbms6aG92ZXJ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogNzUwbXMgZWFzZTtcclxuICAgICAgICBjb2xvcjojZDBjY2QwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWJyYW5ke1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIC5sb2dve1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3cmVtO1xyXG59XHJcbn1cclxufVxyXG4uYmctYmxhY2t7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJnLWJsYWNrLnNjcm9sbGVke1xyXG4gICAgdHJhbnNpdGlvbjogNzUwbXMgZWFzZTtcclxuICAgIGJhY2tncm91bmQ6ICMwOTBFMjAgIWltcG9ydGFudDtcclxufVxyXG4ubG9nby5zY3JvbGxlZC1sb2dve1xyXG4gICAgdHJhbnNpdGlvbjogNzUwbXMgZWFzZTtcclxuICAgIHdpZHRoOiAxMHJlbTtcclxufSIsIi5uYXZiYXIge1xuICBwYWRkaW5nOiAwLjhyZW07XG59XG4ubmF2YmFyIC5uYXZiYXItbmF2IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi5uYXZiYXIgLm5hdi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDI2cHgpIHtcbiAgLm5hdmJhciAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbn1cbi5uYXZiYXIgLm5hdi1saW5rOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogNzUwbXMgZWFzZTtcbiAgY29sb3I6ICNkMGNjZDAgIWltcG9ydGFudDtcbn1cbi5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5uYXZiYXIgLm5hdmJhci1icmFuZCAubG9nbyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2lkdGg6IDdyZW07XG59XG5cbi5iZy1ibGFjayB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1ibGFjay5zY3JvbGxlZCB7XG4gIHRyYW5zaXRpb246IDc1MG1zIGVhc2U7XG4gIGJhY2tncm91bmQ6ICMwOTBFMjAgIWltcG9ydGFudDtcbn1cblxuLmxvZ28uc2Nyb2xsZWQtbG9nbyB7XG4gIHRyYW5zaXRpb246IDc1MG1zIGVhc2U7XG4gIHdpZHRoOiAxMHJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_2__(window).scroll(function () {
            let logo = document.getElementById("logo");
            let navbar = document.getElementById("navbarResponsive");
            jquery__WEBPACK_IMPORTED_MODULE_2__('nav').toggleClass('scrolled', jquery__WEBPACK_IMPORTED_MODULE_2__(this).scrollTop() > 150);
            if (jquery__WEBPACK_IMPORTED_MODULE_2__(this).scrollTop() > 150) {
                logo.style.width = "10rem";
                navbar.style.background = "#ffffff !important";
            }
            else {
                logo.style.transition = "750ms ease";
                logo.style.width = "7rem";
            }
        });
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/poc/poc.component.scss":
/*!****************************************!*\
  !*** ./src/app/poc/poc.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  width: 100vw;\n  overflow-x: hidden;\n  position: relative;\n}\n\n.color-overlay {\n  background: linear-gradient(0deg, #2a2a72 6%, rgba(0, 159, 253, 0.2) 74%), url(/assets/Images/photo3.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100vw;\n  height: 100vh;\n}\n\n.color-overlay h1 {\n  font-size: 600%;\n  color: #fbfcff;\n  font-family: \"Lato\";\n  font-weight: normal;\n}\n\n.background {\n  background: #1d2124;\n}\n\n.background .icons {\n  margin-bottom: 0.8rem;\n}\n\n.padding-alt {\n  margin-right: 1.5rem;\n  margin-left: 1.5rem;\n}\n\n.inner-padding {\n  padding: 10px;\n}\n\n.how-it-works {\n  background: #1d2124;\n}\n\n.fa-lightbulb {\n  color: white;\n}\n\n.fa-street-view {\n  color: white;\n}\n\n.fa-truck {\n  color: white;\n  font-size: 90%;\n}\n\n.padding {\n  padding-top: 1rem;\n  padding-bottom: 2rem;\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.works {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n\n.works ul {\n  list-style: none;\n  margin: auto 0;\n}\n\n@media (max-width: 768px) {\n  .color-overlay {\n    background: linear-gradient(0deg, #2a2a72 6%, rgba(0, 159, 253, 0.5) 74%), url(/assets/Images/photo3.jpg);\n    background-size: cover;\n    background-position: center center;\n    width: 100vw;\n    height: 100vh;\n  }\n  .color-overlay h1 {\n    padding-right: 30px;\n    padding-left: 10px;\n    font-size: 300%;\n    color: #fbfcff;\n    font-family: \"Lato\";\n    font-weight: normal;\n  }\n\n  .background {\n    background: #1d2124;\n  }\n  .background p {\n    font-size: 1rem;\n  }\n  .background .icons {\n    width: 80px;\n    margin-bottom: 0.8rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9jL0M6XFxVc2Vyc1xcZ2FpbWVcXERvY3VtZW50c1xcVmlhVG9pbGVcXEFuZ3VsYXJcXFZpYVRvaWxlV2Vic2l0ZS9zcmNcXGFwcFxccG9jXFxwb2MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BvYy9wb2MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ1EseUdBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0VSOztBRERRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDR1o7O0FEQ0E7RUFDSSxtQkFBQTtBQ0VKOztBRERJO0VBQ0kscUJBQUE7QUNHUjs7QURDQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURDQTtFQUNJLGFBQUE7QUNFSjs7QURBQTtFQUNJLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0FDSUo7O0FERkE7RUFDSSxZQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQ01KOztBREpBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ09KOztBRExBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBQ1FKOztBRFBJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDU1I7O0FETkE7RUFDSTtJQUNJLHlHQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQ0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VDU047RURSTTtJQUNJLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUNVVjs7RURQRTtJQUNJLG1CQUFBO0VDVU47RURUTTtJQUNJLGVBQUE7RUNXVjtFRFRNO0lBQ0ksV0FBQTtJQUNBLHFCQUFBO0VDV1Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BvYy9wb2MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY29sb3Itb3ZlcmxheXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg0Miw0MiwxMTQsMSkgNiUsIHJnYmEoMCwxNTksMjUzLDAuMikgNzQlKSx1cmwoL2Fzc2V0cy9JbWFnZXMvcGhvdG8zLmpwZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjAwJTtcclxuICAgICAgICAgICAgY29sb3I6I2ZiZmNmZjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICB9XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZDogIzFkMjEyNDtcclxuICAgIC5pY29uc3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuOHJlbTtcclxuICAgIH1cclxuXHJcbn1cclxuLnBhZGRpbmctYWx0e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xyXG5cclxufVxyXG4uaW5uZXItcGFkZGluZ3tcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmhvdy1pdC13b3Jrc3tcclxuICAgIGJhY2tncm91bmQ6ICMxZDIxMjQ7XHJcbn1cclxuLmZhLWxpZ2h0YnVsYntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZmEtc3RyZWV0LXZpZXd7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmZhLXRydWNre1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA5MCU7XHJcbn1cclxuLnBhZGRpbmd7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG4ud29ya3N7XHJcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxuICAgIHVse1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICAgLmNvbG9yLW92ZXJsYXl7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoNDIsNDIsMTE0LDEpIDYlLCByZ2JhKDAsMTU5LDI1MywwLjUpIDc0JSksdXJsKC9hc3NldHMvSW1hZ2VzL3Bob3RvMy5qcGcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwMCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiNmYmZjZmY7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgfVxyXG59XHJcbiAgICAuYmFja2dyb3VuZHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMWQyMTI0O1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmljb25ze1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjhyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSIsIi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbG9yLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzJhMmE3MiA2JSwgcmdiYSgwLCAxNTksIDI1MywgMC4yKSA3NCUpLCB1cmwoL2Fzc2V0cy9JbWFnZXMvcGhvdG8zLmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5jb2xvci1vdmVybGF5IGgxIHtcbiAgZm9udC1zaXplOiA2MDAlO1xuICBjb2xvcjogI2ZiZmNmZjtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICMxZDIxMjQ7XG59XG4uYmFja2dyb3VuZCAuaWNvbnMge1xuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XG59XG5cbi5wYWRkaW5nLWFsdCB7XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICBtYXJnaW4tbGVmdDogMS41cmVtO1xufVxuXG4uaW5uZXItcGFkZGluZyB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5ob3ctaXQtd29ya3Mge1xuICBiYWNrZ3JvdW5kOiAjMWQyMTI0O1xufVxuXG4uZmEtbGlnaHRidWxiIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmEtc3RyZWV0LXZpZXcge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mYS10cnVjayB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA5MCU7XG59XG5cbi5wYWRkaW5nIHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi53b3JrcyB7XG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG59XG4ud29ya3MgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IGF1dG8gMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb2xvci1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzJhMmE3MiA2JSwgcmdiYSgwLCAxNTksIDI1MywgMC41KSA3NCUpLCB1cmwoL2Fzc2V0cy9JbWFnZXMvcGhvdG8zLmpwZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG4gIC5jb2xvci1vdmVybGF5IGgxIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBmb250LXNpemU6IDMwMCU7XG4gICAgY29sb3I6ICNmYmZjZmY7XG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cblxuICAuYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZDogIzFkMjEyNDtcbiAgfVxuICAuYmFja2dyb3VuZCBwIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgLmJhY2tncm91bmQgLmljb25zIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/poc/poc.component.ts":
/*!**************************************!*\
  !*** ./src/app/poc/poc.component.ts ***!
  \**************************************/
/*! exports provided: POCComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POCComponent", function() { return POCComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");



let POCComponent = class POCComponent {
    constructor() {
        this.isLinear = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.animation = Object(animejs__WEBPACK_IMPORTED_MODULE_2__["default"])({
            targets: '.Heading',
            delay: 2000,
            opacity: [0, 1],
            translateY: -40,
            duration: 1000,
            easing: 'linear'
        });
    }
};
POCComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-poc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./poc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/poc/poc.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./poc.component.scss */ "./src/app/poc/poc.component.scss")).default]
    })
], POCComponent);



/***/ }),

/***/ "./src/app/services/loading-screen.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/loading-screen.service.ts ***!
  \****************************************************/
/*! exports provided: LoadingScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingScreenService", function() { return LoadingScreenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LoadingScreenService = class LoadingScreenService {
    constructor() {
        this._loading = false;
        this.loadingStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    get loading() {
        return this._loading;
    }
    set loading(value) {
        this._loading = value;
        this.loadingStatus.next(value);
    }
    startLoading() {
        this.loading = true;
    }
    stopLoading() {
        this.loading = false;
    }
};
LoadingScreenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoadingScreenService);



/***/ }),

/***/ "./src/app/smart-on/smart-on.component.scss":
/*!**************************************************!*\
  !*** ./src/app/smart-on/smart-on.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  background: #222;\n  padding-bottom: 50px;\n  width: 100vw;\n  overflow-x: hidden;\n  position: relative;\n}\n\n.color-overlay {\n  background: linear-gradient(0deg, rgba(134, 147, 171, 0.5) 0%, rgba(189, 212, 231, 0.8) 74%), url(/assets/Images/photo3.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100vw;\n  height: 100vh;\n}\n\n.color-overlay h1 {\n  font-size: 600%;\n  color: #fbfcff;\n  font-family: \"Lato\";\n  font-weight: normal;\n}\n\n.smartOn {\n  width: 50%;\n}\n\n.card {\n  width: 50vw;\n  height: 30vh;\n  padding: 0;\n}\n\n.card .card-img {\n  opacity: 0.5;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.card .card-img-overlay {\n  flex-direction: column;\n}\n\n.card .card-img-overlay .card-title {\n  font-size: 2rem;\n}\n\n.card:nth-child(1) {\n  width: 100vw;\n}\n\n@media (max-width: 768px) {\n  .card {\n    width: auto;\n    height: 30vh;\n    padding: 0;\n  }\n  .card .card-img {\n    opacity: 0.5;\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n  }\n  .card .card-img-overlay {\n    flex-direction: column;\n  }\n  .card .card-img-overlay .card-title {\n    font-size: 2rem;\n  }\n\n  .card:nth-child(1) {\n    width: 100vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc21hcnQtb24vQzpcXFVzZXJzXFxnYWltZVxcRG9jdW1lbnRzXFxWaWFUb2lsZVxcQW5ndWxhclxcVmlhVG9pbGVXZWJzaXRlL3NyY1xcYXBwXFxzbWFydC1vblxcc21hcnQtb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NtYXJ0LW9uL3NtYXJ0LW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSw0SEFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRUo7O0FEREk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNHUjs7QURBQTtFQUNJLFVBQUE7QUNHSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0VKOztBRERJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0dSOztBRERJO0VBQ0ksc0JBQUE7QUNHUjs7QURGUTtFQUNJLGVBQUE7QUNJWjs7QURBQTtFQUNJLFlBQUE7QUNHSjs7QURDQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VDRU47RURETTtJQUNJLFlBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO09BQUEsaUJBQUE7RUNHVjtFRERNO0lBQ0ksc0JBQUE7RUNHVjtFREZVO0lBQ0ksZUFBQTtFQ0lkOztFREFFO0lBQ0ksWUFBQTtFQ0dOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zbWFydC1vbi9zbWFydC1vbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG4gICAgYmFja2dyb3VuZDogIzIyMjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jb2xvci1vdmVybGF5e1xyXG4gICAgYmFja2dyb3VuZDogIGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDEzNCwxNDcsMTcxLDAuNSkgMCUsIHJnYmEoMTg5LDIxMiwyMzEsMC44KSA3NCUpLHVybCgvYXNzZXRzL0ltYWdlcy9waG90bzMuanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDYwMCU7XHJcbiAgICAgICAgY29sb3I6I2ZiZmNmZjtcclxuICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcbn1cclxuLnNtYXJ0T257XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5cclxuLmNhcmR7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIGhlaWdodDogMzB2aDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAuY2FyZC1pbWd7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICAgIC5jYXJkLWltZy1vdmVybGF5e1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLmNhcmQtdGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmNhcmQ6bnRoLWNoaWxkKDEpe1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY4cHgpe1xyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgLmNhcmQtaW1ne1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZC1pbWctb3ZlcmxheXtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgLmNhcmQtdGl0bGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZDpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgfVxyXG59IiwiLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbG9yLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxMzQsIDE0NywgMTcxLCAwLjUpIDAlLCByZ2JhKDE4OSwgMjEyLCAyMzEsIDAuOCkgNzQlKSwgdXJsKC9hc3NldHMvSW1hZ2VzL3Bob3RvMy5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG4uY29sb3Itb3ZlcmxheSBoMSB7XG4gIGZvbnQtc2l6ZTogNjAwJTtcbiAgY29sb3I6ICNmYmZjZmY7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnNtYXJ0T24ge1xuICB3aWR0aDogNTAlO1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiA1MHZ3O1xuICBoZWlnaHQ6IDMwdmg7XG4gIHBhZGRpbmc6IDA7XG59XG4uY2FyZCAuY2FyZC1pbWcge1xuICBvcGFjaXR5OiAwLjU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmNhcmQgLmNhcmQtaW1nLW92ZXJsYXkge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNhcmQgLmNhcmQtaW1nLW92ZXJsYXkgLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5jYXJkOm50aC1jaGlsZCgxKSB7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJkIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDMwdmg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAuY2FyZCAuY2FyZC1pbWcge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbiAgLmNhcmQgLmNhcmQtaW1nLW92ZXJsYXkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmNhcmQgLmNhcmQtaW1nLW92ZXJsYXkgLmNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuXG4gIC5jYXJkOm50aC1jaGlsZCgxKSB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/smart-on/smart-on.component.ts":
/*!************************************************!*\
  !*** ./src/app/smart-on/smart-on.component.ts ***!
  \************************************************/
/*! exports provided: SmartOnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartOnComponent", function() { return SmartOnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SmartOnComponent = class SmartOnComponent {
    constructor() { }
    ngOnInit() {
    }
};
SmartOnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-smart-on',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./smart-on.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/smart-on/smart-on.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./smart-on.component.scss */ "./src/app/smart-on/smart-on.component.scss")).default]
    })
], SmartOnComponent);



/***/ }),

/***/ "./src/app/track-all/track-all.component.scss":
/*!****************************************************!*\
  !*** ./src/app/track-all/track-all.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  width: 100vw;\n  overflow-x: hidden;\n  position: relative;\n}\n\n.color-overlay {\n  background: linear-gradient(180deg, rgba(134, 147, 171, 0.5) 0%, rgba(189, 212, 231, 0.8) 74%), url(/assets/Images/photo2.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100vw;\n  height: 100vh;\n}\n\n.background {\n  background: #1d2124;\n}\n\n.background .icons {\n  margin-bottom: 0.8rem;\n}\n\n.inner-padding {\n  padding: 10px;\n}\n\n.how-it-works {\n  background: #1d2124;\n}\n\n.trackall-use-case {\n  width: 100%;\n  height: auto;\n}\n\n.iframe-container {\n  position: relative;\n  margin: 10%;\n  width: 100%;\n  padding-bottom: 56.25%;\n  height: 0;\n}\n\n.iframe-container iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n@media (max-width: 768px) {\n  .background {\n    background: #1d2124;\n  }\n  .background p {\n    font-size: 1rem;\n  }\n  .background .icons {\n    width: 80px;\n    margin-bottom: 0.8rem;\n  }\n\n  .explain {\n    margin-top: 20px;\n    font-size: 200%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhY2stYWxsL0M6XFxVc2Vyc1xcZ2FpbWVcXERvY3VtZW50c1xcVmlhVG9pbGVcXEFuZ3VsYXJcXFZpYVRvaWxlV2Vic2l0ZS9zcmNcXGFwcFxcdHJhY2stYWxsXFx0cmFjay1hbGwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RyYWNrLWFsbC90cmFjay1hbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksOEhBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7QUNFSjs7QURESTtFQUNJLHFCQUFBO0FDR1I7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNJSjs7QURGQTtFQUNRLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNLUjs7QURKUTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ01SOztBREhBO0VBQ0k7SUFDSSxtQkFBQTtFQ01OO0VETE07SUFDSSxlQUFBO0VDT1Y7RURMTTtJQUNJLFdBQUE7SUFDQSxxQkFBQTtFQ09WOztFREpFO0lBQ0ksZ0JBQUE7SUFDQSxlQUFBO0VDT047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RyYWNrLWFsbC90cmFjay1hbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY29sb3Itb3ZlcmxheXtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMTM0LDE0NywxNzEsMC41KSAwJSwgcmdiYSgxODksMjEyLDIzMSwwLjgpIDc0JSksdXJsKC9hc3NldHMvSW1hZ2VzL3Bob3RvMi5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZDogIzFkMjEyNDtcclxuICAgIC5pY29uc3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuOHJlbTtcclxuICAgIH1cclxuXHJcbn1cclxuLmlubmVyLXBhZGRpbmd7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5ob3ctaXQtd29ya3N7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWQyMTI0O1xyXG59XHJcbi50cmFja2FsbC11c2UtY2FzZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5pZnJhbWUtY29udGFpbmVye1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW46IDEwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlOyBcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgaWZyYW1le1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6MDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxufVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgIC5iYWNrZ3JvdW5ke1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxZDIxMjQ7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaWNvbnN7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuOHJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZXhwbGFpbntcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjAwJTtcclxuICAgIH1cclxufSIsIi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbG9yLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDEzNCwgMTQ3LCAxNzEsIDAuNSkgMCUsIHJnYmEoMTg5LCAyMTIsIDIzMSwgMC44KSA3NCUpLCB1cmwoL2Fzc2V0cy9JbWFnZXMvcGhvdG8yLmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjMWQyMTI0O1xufVxuLmJhY2tncm91bmQgLmljb25zIHtcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xufVxuXG4uaW5uZXItcGFkZGluZyB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5ob3ctaXQtd29ya3Mge1xuICBiYWNrZ3JvdW5kOiAjMWQyMTI0O1xufVxuXG4udHJhY2thbGwtdXNlLWNhc2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaWZyYW1lLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xuICBoZWlnaHQ6IDA7XG59XG4uaWZyYW1lLWNvbnRhaW5lciBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kOiAjMWQyMTI0O1xuICB9XG4gIC5iYWNrZ3JvdW5kIHAge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICAuYmFja2dyb3VuZCAuaWNvbnMge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbiAgfVxuXG4gIC5leHBsYWluIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjAwJTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/track-all/track-all.component.ts":
/*!**************************************************!*\
  !*** ./src/app/track-all/track-all.component.ts ***!
  \**************************************************/
/*! exports provided: TrackAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackAllComponent", function() { return TrackAllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__);



let TrackAllComponent = class TrackAllComponent {
    constructor(embedService) {
        this.embedService = embedService;
        this.youtubeId = 'ZcYH3p3rQKw';
        this.yt_iframe_html = this.embedService.embed_youtube(this.youtubeId);
    }
    ngOnInit() {
    }
};
TrackAllComponent.ctorParameters = () => [
    { type: ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__["EmbedVideoService"] }
];
TrackAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-track-all',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./track-all.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/track-all/track-all.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./track-all.component.scss */ "./src/app/track-all/track-all.component.scss")).default]
    })
], TrackAllComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gaime\Documents\ViaToile\Angular\ViaToileWebsite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);