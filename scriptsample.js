/*const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

console.log(toggle)

toggle.addEventListener('click', () => {
  console.log(1)
  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
})
*/
art_container = document.querySelectorAll('.art-container')
//close_icon = document.querySelectorAll('.close-icon')
//art_images = document.querySelectorAll('.art-image')
closing_tab = document.querySelectorAll('.close-icon')
art_description = document.querySelectorAll('.art-description')
//console.log(art_description)

art_container.forEach(container => {
  container.addEventListener('click', () => {
    removeActiveClasses()
    container.classList.add('active')
    container.setAttribute("id", "selected")
    close_icon = document.querySelector('.close-icon')
    close_icon.classList.add('active2')
    
    art_image = document.getElementById('selected').querySelector('.art-image')
    art_image.classList.add('active1')

    art_description = document.getElementById('selected').querySelector('.art-description')
    art_description.classList.add('active3')
    
    art_title = document.getElementById('selected').querySelector('h3')
    art_title.classList.add('active3')

    art_matter = document.getElementById('selected').querySelector('p')
    art_matter.classList.add('active3')

    art_price = document.getElementById('selected').querySelector('h2')
    art_price.classList.add('active3')
  })
})

closing_tab.forEach(closing_tab => {
  closing_tab.addEventListener('click', () => {
    art_container.forEach(container => {
      container.classList.remove('active')
      container.classList.remove('inactive')
      art_image.classList.remove('active1')
      art_description.classList.remove('active3')
      art_title.classList.remove('active3')
      art_matter.classList.remove('active3')
      art_price.classList.remove('active3')
      container.removeAttribute("id")
    })
    closing_tab.classList.remove('active2')
    
  })    
  
})

function removeActiveClasses() {
  art_container.forEach(container => {
    container.classList.remove('active')
    container.classList.add('inactive')
  })
}

