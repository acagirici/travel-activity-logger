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
 
    // static findCategoryById(id) {
    //     return this.categories.find(category => category.id === id);
    // }

    createActivity(e) {
        e.preventDefault()
        const newActTitle = document.getElementById('act-title').value
        const newActCity = document.getElementById('act-city').value
        const newActState = document.getElementById('act-state').value
        const newActDescription = document.getElementById('act-description').value
        const newActRating = document.getElementById('act-rating').value
        const newActMinAge = document.getElementById('act-age').value
        const newActUrl = document.getElementById('act-url').value
        const categoryId = parseInt(document.getElementById('categories').value)
        this.adapter.createActivity(newActTitle, newActCity, newActState, newActDescription, newActRating, newActMinAge, newActUrl, categoryId).then(activity => {
            this.activities.push(new Activity(activity.id, activity, activity.attributes))
                    this.reset()
                    window.location.reload()
            })
            
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
            <li><strong>Category: </strong>${activity.category.name}</li>
            </ul>
            <button class="delete-bttn" data-id=${activity.id}>Delete Activity</button> || <button class="edit-bttn" data-id=${activity.id}>Edit Activity</button>`).join('')
            
    }
}