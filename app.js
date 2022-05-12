//CONTACT MODAL IMPORTS
const conactMeBtn = document.getElementById("conactMeBtn");
const contactModalContainer = document.getElementById("contactModalContainer");
const closeContactModal = document.getElementById("closeContactModal");
//RESUME MODAL IMPORTS
const resumeBtn = document.getElementById("resumeBtn");
const resumeModalContainer = document.getElementById("resumeModalContainer");
const closeResumeModal = document.getElementById("closeResumeModal");
//HOME PAGE IMPORTS
const contentContainer = document.getElementById("contentContainer");
const homeBtn = document.getElementById("homeBtn");
//PROJECTS IMPORTS
const projectsContainer = document.getElementById("projectsContainer");
const projectsBtn = document.getElementById("projectsBtn");
//FORM IMPORTS
// const sumbitMessage = document.getElementById("sumbitMessage");


//CONTACT MODAL
conactMeBtn.addEventListener("click", () => {
    contactModalContainer.classList.add("show");
});

closeContactModal.addEventListener("click", () => {
    contactModalContainer.classList.remove("show")
})
//RESUME MODAL
resumeBtn.addEventListener("click", () => {
    resumeModalContainer.classList.add("show");
});

closeResumeModal.addEventListener("click", () => {
    resumeModalContainer.classList.remove("show")
})

//Show||Hide Content Functions//
const hide = (i)=>{
	i.style.display = "none";
}

const show = (i)=>{
	i.style.display = "block";
}
// HIDE
hide(projectsContainer)

//HOME BUTTON
homeBtn.addEventListener("click", () => {
    show(contentContainer);
    hide(projectsContainer);
})

//PROJECTS BUTTON
projectsBtn.addEventListener("click", () =>{
    show(projectsContainer);
    hide(contentContainer);
})

// sumbitMessage.addEventListener("click", (e) =>{
//     e.preventDefault()
//     const name = document.getElementById("name");
//     const subject = document.getElementById("subject");
//     const email = document.getElementById("email");
//     const phone = document.getElementById("phone");
//     const message = document.getElementById("message");
//     var body = "name: " +name + "<br/>subject: " +subject +"<br/> email:" 
//     + email + "<br/> phone:" +phone + "<br/> message:" +message;

    
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "robin.jessica.little.95@gmail.com",
//         Password : "wxjhzfkmhtacomdn",
//         To : "robin.jessica.little.95@gmail.com",
//         From : email,
//         Subject : subject,
//         Body : body
//     }).then(
//       message => alert(message)
//     );
// })
