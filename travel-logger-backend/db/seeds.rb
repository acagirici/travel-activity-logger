# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

scenic = Category.create(name: "Scenic")
outdoors = Category.create(name: "Outdoors")
sports = Category.create(name: "Sports")
farm = Category.create(name: "Farm")


Activity.create(title: "Demarest Farms",
    city: "Hillsdale",
    state: "NJ",
    description: "Offering a variety of activities, including peach picking, apple picking, and pumpkin picking, the farm is the perfect spot for family-fun. ",  
    rating: "9",
    min_age: "4",
    image_url: "https://demarestfarms.com/wp-content/uploads/2021/05/iStock-612242240-e1620143898849.jpg", 
    category_id: farm.id)

Activity.create(title: "BounceU",
    city: "Paramus",
    state: "NJ",
    description: "Fun activities for kids. Sort of like an indoor playground",  
    rating: "10",
    min_age: "4",
    image_url: "https://cdn.bounceu.com/images/library/15/about-us-bounceu.jpg", 
    category_id: sports.id)

Activity.create(title: "High Point State Park",
    city: "High POint",
    state: "NJ",
    description: "Wonderful views and hiking trails",  
    rating: "9",
    min_age: "5",
    image_url: "https://www.njhiking.com/wp-content/uploads/2014/10/high-point-2014-1200x630-1.jpg", 
    category_id: scenic.id)