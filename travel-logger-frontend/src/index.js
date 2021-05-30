const app = new App() // creates a new instance of app
// app.getActivities()

// const endPoint = "http://localhost:3000/activities";

// document.addEventListener('DOMContentLoaded',() => {
//     getActivities()  
    
//       })

// function getActivities() {
//     fetch(endPoint)
//       .then(response => response.json())
//       .then(activity => {
//           const t = activity.data
//         // .sort(function(a, b) {
//         //       let titleA = a.attributes.name.toUpperCase();
//         //       let titleB = b.attributes.name.toUpperCase();
//         //       if(titleA < titleB){
//         //           return -1
//         //       }
//         //       if(titleA > titleB){
//         //           return 1
//         //       }
//         //       return 0;
//         //   })
//           //debugger
//           t.forEach(activity => {
//            const newActivity = new Activity(activity, activity.attributes)
//            document.querySelector('#activities-container').innerHTML += newActivity.renderActivityCard();
//           })
//       })
//   }