class Activity {
    constructor(activity, activityAtrributes){
        this.id = activity.id;
        this.title = activityAtrributes.title
        this.city = activityAtrributes.city
        this.state = activityAtrributes.state
        this.description = activityAtrributes.description
        this.rating = activityAtrributes.rating
        this.min_age = activityAtrributes.min_age
        this.image_url = activityAtrributes.image_url
        this.category = activityAtrributes.category.name
        // Activity.all.push(this)
        // console.log(this)
    }

}