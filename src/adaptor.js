const API = 'http://localhost:3000'

let getAllCategories = () => fetch(API+"/categories").then(r => r.json())


let Adaptor = {
  getAllCategories
}
