class ActivitiesAdapter {
    constructor() {
        this.baseURL = 'http://localhost:3000' 
    }

    //get activities from the baseURL. Then parse out the json. Will console log json in activities component.
    getActivities() {
        return fetch(this.baseURL + '/activities').then(res => res.json()
        );
    }   

    createActivity(title, city, state, description, rating, min_age, image_url, category_id, category) {
        const bodyData = {title, city, state, description, rating, min_age, image_url, category_id, category}
        // const foundActivitiy = Activities.findCategoryById(category_id.toString())
         return fetch(this.baseURL + '/activities', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify(bodyData),
            }).then(res => res.json())
           
    }


}
//adapter's only job is to communicate with the backend api. Talks to API and hands info to the frontend. 