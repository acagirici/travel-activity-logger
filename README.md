# User Story
1) A family application for parents to document activities with children.
2) Users will be able to categorize activities, rate them, upload an image, etc. 
# Models
#### Activity model
- [x] attributes: name, city, state, description, rating, min_age, image_url
- [x] association: belongs_to category 
#### Category Model
- [x] attributes: name
- [x] association: has_many activities

# Frontend Classes