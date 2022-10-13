/*const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20
    }
  ]
  */
 

  document.addEventListener("DOMContentLoaded", () =>{
    console.log("DOM CARGADO")
  })
  const themeIcon = document.getElementById("theme-btn")
  themeIcon.addEventListener( "click" , ()=> {
    document.body.classList.toggle("dark")
    if(themeIcon.classList.contains("bxs-moon")){
      themeIcon.classList.replace("bxs-moon", "bxs-sun")
    }else{
      themeIcon.classList.replace( "bxs-sun","bxs-moon")

    }
  })

  const loadComponent = () => {
    const loader = document.getElementById( "loader" )}

  const cart = document.getElementById("cart-container")
  const openCart = () => cart.classList.remove("hide")

  const closeCart =() => cart.classList.add ("hide")

  const shopIcon = document.getElementById("cart-shop")

  const shopCloseIcon = document.getElementById("close-cart")


  document.addEventListener("DOMContentLoaded", () =>{
    loadComponent()
  })

  shopIcon.addEventListener("click", () => {
    openCart()
  })
  shopCloseIcon.addEventListener("click",() => {
    closeCart()  
  })
 
  const menu = document.getElementById("menu-bar")
  const openMenu = () => menu.classList.add("show")

  const closeMenu = () => menu.classList.remove("show")

  const menuIcon = document.getElementById("menu-btn")

  const menuCloseIcon = document.getElementById("close-menu")

menuIcon.addEventListener("click", () =>{
  openMenu()
  console.log("abrir")
})

menuCloseIcon.addEventListener ("click",() =>{
  closeMenu()
  console.log("cerrar")
})

