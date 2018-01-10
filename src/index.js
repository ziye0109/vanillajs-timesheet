import getTimesheet from './app.js';
//import 'normalize.css';






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


    let darilyActivitiesHtml =  Object.keys(employeeTimesheets).reverse().map(activityDate => {

        let activities = employeeTimesheets[activityDate];


        let darilyActiviesTemplate = `
   
    <dl class="uk-description-list uk-description-list-divider"> 
     
      <div class="uk-grid">
          <div class="uk-width-3-4">
             <dt class=''>
                <span>${activityDate}</span>
             </dt>
          </div>
          <div class="uk-width-1-4">
             <div class=''>
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
                 <dt>
                    <span class="" uk-icon="icon: clock"></span>
                    <span class='activities-time'>${time}</span>                                
                 </dt>
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

    getTimesheet(DELAY)()
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





