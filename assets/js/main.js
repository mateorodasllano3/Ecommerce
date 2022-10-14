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
    const cartXCloser = document.getElementById('close-cart')
    cartXCloser.addEventListener('click' , () =>{
    
        if(cart.classList.contains("hide-cart")){
          cart.classList.remove("hide-cart")
        }else{
          cart.classList.add( "hide-cart" )
        }
      })


  const openCart = () => cart.classList.remove("hide-cart")

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


const contenedorCheckout = document.getElementById('contenedor-hidden')
const emptyCheckout = document.getElementById('section-empty')
const addBlack = document.getElementById('add-black-s')
const itemTwo = document.getElementsByClassName('item-number-2')
const plusRedButton = document.getElementById('add-red-s')
const plusBlackButton = document.getElementById('add-black-s')
const plusWhiteButton = document.getElementById('add-white-s')
const redCheckoutSection = document.getElementById('red-section-hidden')
const blackCheckoutSection = document.getElementById('black-section-hidden')
const whiteCheckoutSection = document.getElementById('white-section-hidden')
const cartNumber = document.getElementById('cart-counter')




const clickExisting = () =>{
  emptyCheckout.classList.add('empty-checkout')
  if(contenedorCheckout.id='contenedor-hidden'){
    contenedorCheckout.id='contenedor-visible'
  }
}

contadorCart = 0
const addCounter = ()=>{
  contadorCart ++
  cartNumber.innerText = `${contadorCart}`
}


plusRedButton.addEventListener("click",()=>{
  console.log('occurre un click red')
  clickExisting()
  addRedSection()
  addCounter()
  
})
const addRedSection = () =>{
  if(redCheckoutSection.id='red-section-hidden'){
    redCheckoutSection.id=''
  }

}


plusBlackButton.addEventListener("click",()=>{
  console.log('occurre un click black')
  clickExisting()
  addBlackSection()
  addCounter()
})
const addBlackSection = () =>{
  if(blackCheckoutSection.id='black-section-hidden'){
    blackCheckoutSection.id=''
  }

}


plusWhiteButton.addEventListener("click",()=>{
  console.log('occurre un click white')
  clickExisting()
  addWhiteSection()
  addCounter()
})
const addWhiteSection = () =>{
  if(whiteCheckoutSection.id='white-section-hidden'){
    whiteCheckoutSection.id=''
  }
}