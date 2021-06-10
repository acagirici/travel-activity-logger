class Activities {
    constructor() {
        this.activities = []
        this.categories = []
        this.adapter = new Adapter()
        this.bindingsAndEventListeners()
        this.fetchCategories()
        this.fetchActivities()
    }
    
    fetchCategories(){
        this.adapter
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
                const t = activities.data.sort((a, b) => a.title - b.title)
                t.forEach(activity => this.activities.push(new Activity(activity, activity.attributes)))
            })
            .then(() => {
                this.render()
            })
    }

    bindingsAndEventListeners(){
        this.activitiesContainer = document.getElementById('activities-container')
        this.activityForm = document.getElementById('new-activity-form')
        this.activityForm.addEventListener('submit', this.createActivity.bind(this))
        this.button = document.getElementById('activity-content')
        this.button.addEventListener('click', this.handleDeleteClick.bind(this))
    }

    reset() {
        this.activityForm.reset()
    }

    handleDeleteClick(){
        var clicked = event.target;
        let activityId = parseInt(event.target.dataset.id)
        if (clicked.id === 'del') {
        var r = confirm("Are you sure?");
        if (r == true) {
            this.adapter.deleteFetch(activityId)
            window.location.reload()
            alert("Deleted")
        }
        else {
            alert("Request canceled")
        }
    };
    }

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
        this.activitiesContainer.innerHTML = this.activities.map(activity => activity.renderLi()).join('')
    }
}