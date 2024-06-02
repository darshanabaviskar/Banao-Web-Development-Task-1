var loginHeader = document.querySelector('#login-modal-header-html');
var signinButton = document.querySelector('#signin-btn');
var btnFollow = document.querySelectorAll('#btn-follow');
var joinGroupButton = document.querySelector('#join-group-btn');
var locationInputContainer = document.querySelector('.location-input-container');
var locationInput = document.querySelector('#location-input');
var signInButton = document.querySelectorAll('#sign-in-button');
var locationInputClose = document.querySelector('#input-close-btn');
var signupContainer = document.querySelector('.signup-container');
var loginContainer = document.querySelector('.loggedIn-container');



let joinGroupButtonHtml = '<i class="bi bi-people-fill"></i><span class="ms-2">Join Group</span>'
let leaveGroupButtonHtml = '<i class="bi bi-box-arrow-right"></i><span class="ms-2">Leave Group</span>'
let locationInputContainerHTML = `<button><i class="bi bi-geo-alt"></i></button><input id="location-input" type="search" placeholder="Noida, India"><button><i class="bi bi-pencil-fill"></i></button>`
let locationInputContainerHTMLnew = `<button><i class="bi bi-geo-alt"></i></button><input id="location-input" type="search" placeholder="Enter your location"><button id="input-close-btn"><i class="bi bi-x-lg"></i></button>`

btnFollow.forEach((element)=>{
    element.addEventListener('click',()=>{
    element.classList.toggle('btn-connect');
    element.classList.toggle('btn-connect-active')
     if(element.innerHTML === "Follow"){
        element.innerHTML = "Followed"      
     } 
     else if(element.innerHTML === "Followed"){
        element.innerHTML = "Follow"      
     } 
    })
})

joinGroupButton.addEventListener('click',()=>{
 
    if(joinGroupButton.innerHTML === joinGroupButtonHtml ){
    joinGroupButton.innerHTML = leaveGroupButtonHtml;
    joinGroupButton.classList.remove('btn-primary');
    joinGroupButton.classList.add('btn-outline-secondary');
    }
    else if(joinGroupButton.innerHTML === leaveGroupButtonHtml){
        joinGroupButton.innerHTML = joinGroupButtonHtml;
        joinGroupButton.classList.remove('btn-outline-secondary');
        joinGroupButton.classList.add('btn-primary');
    }
})

locationInputContainer.addEventListener('click',()=>{

        locationInputContainer.innerHTML = locationInputContainerHTMLnew;
})

signInButton.forEach((element)=>{
    element.addEventListener('click',()=>{
      signupContainer.classList.add('display-off');
      loginContainer.classList.remove('display-off');
    })
})