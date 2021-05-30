// class Cateogires {
//     constructor() {
//         this.cateogires = []
//         this.adapter = new CategoriesAdapter()
//         // this.bindingAndEventListeners()
//         this.fetchCategories()
//     }

//     fetchCategories() {
//         this.adapter
//             .getCategories()
//             .then(categories => {
//                 const t = categories.data
//                 t.forEach(category => this.categories.push(new Category(category, category.attributes)))
//             })
//             console.log(categories)
//             .then(() => {
//                 this.render()
//             })
//     }
// }