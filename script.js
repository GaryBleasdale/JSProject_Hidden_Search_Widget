let searchButton = document.getElementsByTagName('i')
let input = document.getElementsByTagName('input')

searchButton[0].addEventListener('click', function(){
  searchButton[0].classList.toggle('searchIcon-clicked')
  if (input[0].classList.contains('input-inactive')){
  input[0].classList.add('input-active')
  input[0].classList.remove('input-inactive')
  input[0].focus()
  } else {
    input[0].classList.remove('input-active')
    input[0].classList.add('input-inactive')
  }
})