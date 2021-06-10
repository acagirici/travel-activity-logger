class Adapter {
    constructor() {
        this.baseURL = 'http://localhost:3000';
        this.headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        };
    }

    //get categories from the baseURL. Then parse out the json. Will console log json in categories component.
    getCategories() {
        return fetch(this.baseURL + '/categories').then(res => res.json()
        );
    }  
    
    //get activities from the baseURL. Then parse out the json. Will console log json in activities component.
    getActivities() {
        return fetch(this.baseURL + '/activities').then(res => res.json()
        );
    }   

    createActivity(title, city, state, description, rating, min_age, image_url, category_id, category) {
        const bodyData = {title, city, state, description, rating, min_age, image_url, category_id, category}
         return fetch(this.baseURL + '/activities', {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(bodyData),
            }).then(res => res.json())
           
    }

    deleteFetch(activityId){
        return fetch(`${this.baseURL}/activities/${activityId}`, {
            method: 'DELETE'
        })
    }
   
}
//adapter's only job is to communicate with the backend api. Talks to API and hands info to the frontend. 