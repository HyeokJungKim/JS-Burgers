Adaptor.getAllCategories()
.then(categories => {
  categories.forEach(category => {
    new Category(category)
  })
  Category.all[0].handleClick()
})


pastOrderForm.addEventListener("submit", handlePastOrderForm)
newOrderForm.addEventListener("submit", handleNewOrderForm)
newBurgerForm.addEventListener("submit", handleCreateBurger)


function handlePastOrderForm(evt){
  evt.preventDefault()
  let name = evt.target.past_name.value

  console.log(name);
}



function handleNewOrderForm(evt){
  evt.preventDefault()
  let name = evt.target.new_name.value

  console.log(name, ordersArray);
}


function handleCreateBurger(evt){
  evt.preventDefault()
  let name = evt.target.name.value
  let description = evt.target.description.value
  let image = evt.target.image.value
  let price = evt.target.price.value
  let category_id = evt.target.category_id.value

  let newBurgerObj = {
    name,
    description,
    image,
    price,
    category_id
  }

  Adaptor.postNewBurger(newBurgerObj)
  .then((newBurger) => {
    let foundCategory = Category.all.find(category => category.id === newBurger.category_id)
    foundCategory.burgers.push(newBurger)
    new Burger(newBurger)
    evt.target.reset()
  })



}
