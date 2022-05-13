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
// FOOTER
const footerContainer = document.getElementById("footerContainer");

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
    show(footerContainer)
    hide(projectsContainer);
})

//PROJECTS BUTTON
projectsBtn.addEventListener("click", () =>{
    show(projectsContainer);
    hide(contentContainer);
    hide(footerContainer)
})


// PROJECTS COLLAPSIBLE
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
