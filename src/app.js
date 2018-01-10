import timesheet from '../public/timesheet.json'

let getTimesheet = delay => ()=> {


    return new Promise(resolve=>{

        setTimeout(()=>resolve(timesheet),delay);
     
    
    })

}




export default getTimesheet;