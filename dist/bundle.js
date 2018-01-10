/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_js__ = __webpack_require__(1);







let renderTimesheets = (timelines) => {



    let timesheetHtml = Object.keys(timelines).map(name => {

        let employeeInfo = timelines[name];
        let employeeTimesheets = employeeInfo.timesheet;

        
        let timesheetTemplate = `
        <div class='timesheet-activity'>
    
          <div class="uk-flex-inline uk-flex-center">
                <div>
                    <img class="uk-border-circle" width="70" height="70" src="${employeeInfo.profilepic}">
                </div>
                <div class="uk-margin-left employ">
                    <div>${employeeInfo.name}</div>
                    <div>${employeeInfo.email}</div>
                </div>
          </div>
    
    
          ${renderDarilyActivies(employeeTimesheets)}

    
        </div>
        
    
        `

        return timesheetTemplate;

    })




    console.log(timesheetHtml.join(' '))

    return timesheetHtml.join(' ');


}



let renderDarilyActivies = (employeeTimesheets) => {


    let darilyActivitiesHtml =  Object.keys(employeeTimesheets).reverse().map(activityTime => {

        let activities = employeeTimesheets[activityTime];


        let darilyActiviesTemplate = `
   
    <dl class="uk-description-list uk-description-list-divider"> 
     
      <div class="uk-grid">
          <div class="uk-width-3-4">
             <dt>${activityTime}</dt>
          </div>
          <div class="uk-width-1-4">
             <div>
                 <a href="" class="uk-margin-small-right" uk-icon="icon: happy"></a>
                 <a href="" class="uk-margin-small-right" uk-icon="icon: heart"></a>
                 <a href="" class="uk-margin-small-right" uk-icon="icon: plus"></a>
             </div>
         </div>
     </div>
 
 
       ${renderActivities(activities)}
 
 
    </dl>
    
        
    <hr class="uk-divider-icon">

    
    `


        return darilyActiviesTemplate;

       


    })

    return darilyActivitiesHtml.join(' ');

}




let renderActivities = (activities) => {

    let darilyActivitiesHtml = Object.keys(activities).map(time => {

        /*
        "day1": {
            "time1": "orientation, paperwork",
            "time2": "computer setup, coding practise"
        }
        */

        let task = activities[time];

        let activitiesTemplate = `   
        <div class="uk-grid">
            <div class="uk-width-3-4">
                 <dt>${time}</dt>
                 <dd>${task}</dd>
            </div>
            <div class="uk-width-1-4">
                <div>
                    <span class="uk-label uk-label-success">Low</span>
                    <span class="uk-label uk-label-warning ">medium</span>
                    <span class="uk-label uk-label-danger ">High</span>
                </div>
            </div>
        </div>
        `
        return activitiesTemplate;

    })

  
    return darilyActivitiesHtml.join(' ');
}







document.addEventListener("DOMContentLoaded", function () {


    const DELAY = 2000;

    Object(__WEBPACK_IMPORTED_MODULE_0__app_js__["a" /* default */])(DELAY)()
        .then(timelines => {

            
            return timelines;
        })
        .then(timelines => {

            console.log(timelines);
    
            
        
            
            let timesheetDiv =  document.querySelector('.timesheet-activities');
            let timesheetHtmlString =  renderTimesheets(timelines);
            timesheetDiv.innerHTML = timesheetHtmlString;




        })








})







/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_timesheet_json__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_timesheet_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__public_timesheet_json__);


let getTimesheet = delay => ()=> {


    return new Promise(resolve=>{

        setTimeout(()=>resolve(__WEBPACK_IMPORTED_MODULE_0__public_timesheet_json___default.a),delay);
     
    
    })

}




/* harmony default export */ __webpack_exports__["a"] = (getTimesheet);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {"ziye":{"name":"ziye","email":"zwang@nexient.com","profilepic":"https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAYZAAAAJGUxNjc1Y2ZkLTVjZjItNDNlYy04ZjJlLWVmOGZhNzVmY2EyZQ.jpg","timesheet":{"01-05-2018":{"9:30AM":"orientation, paperwork","2:00PM":"computer setup, coding practise"},"01-08-2018":{"8:30AM":"research PWA, check on github download pwa project","1:30PM":"look webpack documentation related with optimization"},"01-09-2018":{"8;30AM":"start coding timesheet app with pwa","10:30AM":"coding timesheet app and learn new css framework"},"01-10-2018":{"8:40AM":"read pinrest and tinder pwa articles, how they improve performance","11:00AM":"learn webpack advanced plugin. commonchunckplugin","01:00PM":"examine nexient bamboohr site, found is devloped by using react, inspect site css and performance","02:00PM":"continue coding fo timesheet app, it will refactor by using react later.."}}}}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map