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

