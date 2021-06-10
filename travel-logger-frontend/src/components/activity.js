class Activity {
    constructor(activity, activityAtrributes){
        this.id = activity.id;
        this.title = activityAtrributes.title;
        this.city = activityAtrributes.city;
        this.state = activityAtrributes.state;
        this.description = activityAtrributes.description;
        this.rating = activityAtrributes.rating;
        this.min_age = activityAtrributes.min_age;
        this.image_url = activityAtrributes.image_url;
        this.category = activityAtrributes.category;
    }

    renderLi(){
       return `<li form-id=${this.id}><h2>${this.title}</h2></li> <img src=${this.image_url} width="300" height="190">
        <ul>
        <li><strong>City: </strong>${this.city}</li>
        <li><strong>State: </strong>${this.state}</li>
        <li><strong>Description: </strong>${this.description}</li>
        <li><strong>Rating: </strong>${this.rating}</li>
        <li><strong>Minimum Age: </strong>${this.min_age}</li>
        <li><strong>Category: </strong>${this.category.name}</li>
        </ul>
        <button class="delete-bttn" id="del" data-id=${this.id}>Delete Activity</button><br>`
    }
   
}