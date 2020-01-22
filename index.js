Adaptor.getAllCategories()
.then(categories => {
  categories.forEach(category => {
    new Category(category)
  })
  Category.all[0].handleClick()
})
