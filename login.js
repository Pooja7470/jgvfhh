let loginbtn = document.getElementsByClassName('logo-btn')
let loginform = document.querySelector('.container')
let cancelform = document.getElementById('cross_form')
console.log(cancelform)

console.log(loginbtn[0])
loginbtn[0].addEventListener('click',()=>{
    loginform.style.opacity="1"
    loginform.style.display="initial"
})
cancelform.addEventListener('click',()=>{
    loginform.style.opacity="0"
    loginform.style.display="none"
})
