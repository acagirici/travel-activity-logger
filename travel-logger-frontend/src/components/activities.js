class Activities {
    constructor() {
        this.activities = []
        this.categories = []
        this.adapter = new ActivitiesAdapter()
        this.catadapter = new CategoriesAdapter()
        this.createActivityForm()
        this.fetchCategories()
        this.fetchActivities()
    }

    createActivityForm(){
        this.activityForm = document.getElementById('new-activity-form')
        this.activityForm.addEventListener('submit', this.createActivity.bind(this))
    }

    reset() {
        let form = document.getElementById("new-activity-form");
        form.reset()
    }

    fetchCategories(){
        this.catadapter
            .getCategories()
            .then(categories => {
            const cat = categories.data
            cat.forEach(category => this.categories.push(new Category(category, category.attributes)))
            
        })
    }  
//  get the activities from the adapter and log the data into the console. 
    fetchActivities() {
        this.adapter
            .getActivities()
            .then(activities => {
                const t = activities.data
                t.forEach(activity => this.activities.push(new Activity(activity, activity.attributes)))
            })
            .then(() => {
                this.render()
            })
    }
 
    createActivity(e) {
        e.preventDefault()
        const newActTitle = document.querySelector('#act-title').value
        const newActCity = document.querySelector('#act-city').value
        const newActState = document.querySelector('#act-state').value
        const newActDescription = document.querySelector('#act-description').value
        const newActRating = document.querySelector('#act-rating').value
        const newActMinAge = document.querySelector('#act-age').value
        const newActUrl = document.querySelector('#act-url').value
        const categoryId = parseInt(document.querySelector('#categories').value)
        this.adapter.activityCreate(newActTitle, newActCity, newActState, newActDescription, newActRating, newActMinAge, newActUrl, categoryId)
        // .then(activity => {
                // console.log(activity);
                // const activityData = activity.data
                // let newActivity = new Activity(activity, activity.attributes)
                // this.activities.push(new Activity(activityData, activityData.attributes))
                // this.reset()
                // this.render()
            
        // this.activityCreate(newActTitle, newActCity, newActState, newActDescription, newActRating, newActMinAge, newActUrl, categoryId)
    }
 //render function to display data to the DOM
    render() {
        this.activitiesContainer = document.getElementById('activities-container')
        this.activitiesContainer.innerHTML = this.activities.map(activity => 
            `<li><h2>${activity.title}</h2></li> <img src=${activity.image_url} width="300" height="190">
            <ul>
            <li><strong>City: </strong>${activity.city}</li>
            <li><strong>State: </strong>${activity.state}</li>
            <li><strong>Description: </strong>${activity.description}</li>
            <li><strong>Rating: </strong>${activity.rating}</li>
            <li><strong>Minimum Age: </strong>${activity.min_age}</li>
            <li><strong>Category: </strong>${activity.category}</li>
            </ul>`).join('')
    }
}