class CategoriesAdapter {
    constructor() {
        this.baseURL = 'http://localhost:3000'
    }

    //get activities from the baseURL. Then parse out the json. Will console log json in activities component.
    getCategories() {
        return fetch(this.baseURL + '/categories').then(res => res.json()
        );
    }  
} 