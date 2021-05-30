class ActivitiesAdapter {
    constructor() {
        this.baseURL = 'http://localhost:3000' 
    }

    //get activities from the baseURL. Then parse out the json. Will console log json in activities component.
    getActivities() {
        return fetch(this.baseURL + '/activities').then(res => res.json()
        );
    }   

    activityCreate(title, city, state, description, rating, min_age, image_url, category_id) {
        const bodyData = {title, city, state, description, rating, min_age, image_url, category_id}
            // id: activity.id,
            // title: title, 
            // city: city, 
            // state: state, 
            // description: description, 
            // rating: rating, 
            // min_age: min_age, 
            // image_url: image_url, 
            // category_id: category_id,
            // category: activity.attributes.category.name,
        // }
       
         fetch(this.baseURL + '/activities', {
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(bodyData)
            })
            .then(res => res.json())
            .then(activity => {
                console.log(activity);
                // const activityData = activity.data
                let newActivity = new Activity(activity, activity.attributes)
                newActivity.Activities.render()
            })
    }
}
//adapter's only job is to communicate with the backend api. Talks to API and hands info to the frontend. 