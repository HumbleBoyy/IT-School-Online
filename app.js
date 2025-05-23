window.addEventListener("DOMContentLoaded", ()=> {
    const navLinks = document.querySelectorAll(".menu_link");

    navLinks.forEach(item => {
        item.addEventListener("click", function(e){
            navLinks.forEach(link => link.classList.remove('active'));
            e.target.classList.add('active')
        })
    })

//    Navigation menu
    const menuBtn = document.querySelector('.menu_btn')
    const navigation = document.querySelector('.navigation')
    const navigationItems = document.querySelectorAll('.menu_link')
  
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('faol')
      navigation.classList.toggle('faol')
    })
  
    navigationItems.forEach(item => {
      item.addEventListener('click', () => {
        menuBtn.classList.remove('faol')
        navigation.classList.remove('faol')
      })
    })
})


  