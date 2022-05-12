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

