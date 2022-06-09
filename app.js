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
//about
const meAbout = document.getElementById("meAbout");
const meAbout2 = document.getElementById("meAbout2");
const meAbout3 = document.getElementById("meAbout3");
const Hobbies = document.getElementById("Hobbies");
const Background = document.getElementById("Background");
const aboutBtn = document.getElementById("aboutBtn");
const hobbiesBtn = document.getElementById("HobbiesBtn");
const backgroundBtn = document.getElementById("background");

//PROJECTS IMPORTS
const projectsContainer = document.getElementById("projectsContainer");
const projectsBtn = document.getElementById("projectsBtn");
// FOOTER IMPORTS
const footerContainer = document.getElementById("footerContainer");
const newfooterContainer = document.getElementById("newfooterContainer");
//PORTRAIT IMPORTS
const meImage = document.getElementById("meImage");
//COLOR CHANGE IMPORTS
//homepage
const colorChangeBtn = document.getElementById("colorChangeBtn");
const colorChangeDark = document.getElementById("colorChangeDark");

const titleChangeBtn = document.getElementById("titleChangeBtn");
const experienceTitle = document.getElementById("experienceTitle")
const experienceList = document.getElementById("experienceList");
//projects page
const projectsTitle1 = document.getElementById("projectsTitle1");
const projectsText1 = document.getElementById("projectsText1");
const projectsLanguages1 = document.getElementById("projectsLanguages1");
const projectsTitle2 = document.getElementById("projectsTitle2");
const projectsText2 = document.getElementById("projectsText2");
const projectsLanguages2 = document.getElementById("projectsLanguages2");
const projectsTitle3 = document.getElementById("projectsTitle3");
const projectsText3 = document.getElementById("projectsText3");
const projectsLanguages3 = document.getElementById("projectsLanguages3");
const projectsTitle4 = document.getElementById("projectsTitle4");
const projectsText4 = document.getElementById("projectsText4");
const projectsLanguages4 = document.getElementById("projectsLanguages4");
const projectsTitle5 = document.getElementById("projectsTitle5");
const projectsText5 = document.getElementById("projectsText5");
const projectsLanguages5 = document.getElementById("projectsLanguages5");
const projectsTitle6 = document.getElementById("projectsTitle6");
const projectsText6 = document.getElementById("projectsText6");
const projectsLanguages6 = document.getElementById("projectsLanguages6");
const projectsTitle7 = document.getElementById("projectsTitle7");
const projectsText7 = document.getElementById("projectsText7");
const projectsLanguages7 = document.getElementById("projectsLanguages7");

const project1 = document.getElementById("project1");
const project2 = document.getElementById("project2");
const project3 = document.getElementById("project3")
const project4 = document.getElementById("project4");
const project5 = document.getElementById("project5");
const project6 = document.getElementById("project6");
const project7 = document.getElementById("project7");

const collapsible1 = document.getElementById("collapsible1");
const collapsible2 = document.getElementById("collapsible2");
const collapsible3 = document.getElementById("collapsible3");
//resume
const resumeModal = document.getElementById("resumeModal");
//contacr
const contactModal = document.getElementById("contactModal");


//CONTACT MODAL
conactMeBtn.addEventListener("click", () => {
    contactModalContainer.classList.add("show");
    meImage.classList.add("show");

});

closeContactModal.addEventListener("click", () => {
    contactModalContainer.classList.remove("show")
    meImage.classList.remove("show");
    
})
//RESUME MODAL
resumeBtn.addEventListener("click", () => {
    resumeModalContainer.classList.add("show");
    meImage.classList.add("show");

});

closeResumeModal.addEventListener("click", () => {
    resumeModalContainer.classList.remove("show");
    meImage.classList.remove("show");
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
hide(colorChangeDark)
// hide(Hobbies)
// hide(Background)
// hide(meAbout)

//ABOUT BUTTON
// aboutBtn.addEventListener("click", () => {
//   show(meAbout);
//   hide(Hobbies);
//   hide(Background);
//   console.log("test")
// })
// //HOBBIES BUTTON
// hobbiesBtn.addEventListener("click", () => {
//   show(Hobbies);
//   hide(meAbout);
//   hide(Background);
//   console.log("test2")
// })
// //BACKGROUD BUTTON
// backgroundBtn.addEventListener("click", () => {
//   show(Background);
//   hide(meAbout);
//   hide(Background);
// })

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

//COLOR CHANGE BUTTON DARK MODE

colorChangeBtn.addEventListener("click", () => {
  show(colorChangeDark)
  hide(colorChangeBtn)
  //body
    document.body.classList.add("dark");
  //homepage
    title.classList.add("dark");
    meAbout.classList.add("dark");
    meAbout2.classList.add("dark");
    meAbout3.classList.add("dark");
    experienceTitle.classList.add("dark");
    experienceList.classList.add("dark");
    //navbar
    homeBtn.classList.add("dark");
    projectsBtn.classList.add("dark");
    resumeBtn.classList.add("dark");
    conactMeBtn.classList.add("dark");
    //projects
    projectsTitle1.classList.add("dark");
    projectsText1.classList.add("dark");
    projectsLanguages1.classList.add("dark");
    projectsTitle2.classList.add("dark");
    projectsText2.classList.add("dark");
    projectsLanguages2.classList.add("dark");
    projectsTitle3.classList.add("dark");
    projectsText3.classList.add("dark");
    projectsLanguages3.classList.add("dark");
    projectsTitle4.classList.add("dark");
    projectsText4.classList.add("dark");
    projectsLanguages4.classList.add("dark");
    projectsTitle5.classList.add("dark");
    projectsText5.classList.add("dark");
    projectsLanguages5.classList.add("dark");
    projectsTitle6.classList.add("dark");
    projectsText6.classList.add("dark");
    projectsLanguages6.classList.add("dark");
    projectsTitle7.classList.add("dark");
    projectsText7.classList.add("dark");
    projectsLanguages7.classList.add("dark");

    project1.classList.add("dark");
    project2.classList.add("dark");
    project3.classList.add("dark");
    project4.classList.add("dark");
    project5.classList.add("dark");
    project6.classList.add("dark");
    project7.classList.add("dark");

    collapsible1.classList.add("dark");
    collapsible2.classList.add("dark");
    collapsible3.classList.add("dark");
    //contact
    contactModal.classList.add("dark");
    //resume 
    resumeModal.classList.add("dark");
    //footer
    footerContainer.classList.add("dark");

});

colorChangeDark.addEventListener("click", () => {
  hide(colorChangeDark)
  show(colorChangeBtn)
  //body
    document.body.classList.remove("dark");
  //home
    title.classList.remove("dark");
    meAbout.classList.remove("dark");
    meAbout2.classList.remove("dark");
    meAbout3.classList.remove("dark");
    experienceTitle.classList.remove("dark");
    experienceList.classList.remove("dark");
  //navbar
    homeBtn.classList.remove("dark");
    projectsBtn.classList.remove("dark");
    resumeBtn.classList.remove("dark");
    conactMeBtn.classList.remove("dark");
  //projects
    projectsTitle1.classList.remove("dark");
    projectsText1.classList.remove("dark");
    projectsLanguages1.classList.remove("dark");
    projectsTitle2.classList.remove("dark");
    projectsText2.classList.remove("dark");
    projectsLanguages2.classList.remove("dark");
    projectsTitle3.classList.remove("dark");
    projectsText3.classList.remove("dark");
    projectsLanguages3.classList.remove("dark");
    projectsTitle4.classList.remove("dark");
    projectsText4.classList.remove("dark");
    projectsLanguages4.classList.remove("dark");
    projectsTitle5.classList.remove("dark");
    projectsText5.classList.remove("dark");
    projectsLanguages5.classList.remove("dark");
    projectsTitle6.classList.remove("dark");
    projectsText6.classList.remove("dark");
    projectsLanguages6.classList.remove("dark");
    projectsTitle7.classList.remove("dark");
    projectsText7.classList.remove("dark");
    projectsLanguages7.classList.remove("dark");

    project1.classList.remove("dark");
    project2.classList.remove("dark");
    project3.classList.remove("dark");
    project4.classList.remove("dark");
    project5.classList.remove("dark");
    project6.classList.remove("dark");
    project7.classList.remove("dark");

    collapsible1.classList.remove("dark");
    collapsible2.classList.remove("dark");
    collapsible3.classList.remove("dark");
    //resume 
    resumeModal.classList.remove("dark");
    //contact
    contactModal.classList.remove("dark");
    //footer
    footerContainer.classList.remove("dark");
    
});