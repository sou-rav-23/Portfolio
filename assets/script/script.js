// Preloader
window.addEventListener("load",function(){
  document.querySelector(".preloader").classList.add("opacity-0");
  setTimeout(function(){
    document.querySelector(".preloader").style.display="none";
  },1000)
})
// Aside Navbar
const nav=document.querySelector(".nav"),
navList=nav.querySelectorAll("li"),
totalNavList=navList.length,
allSection=document.querySelectorAll(".section"),
totalSection=allSection.length;
for(let i=0;i<totalNavList;i++){
  const a=navList[i].querySelector("a");
  a.addEventListener("click",function(){
    for(let i=0;i<totalSection;i++){
      allSection[i].classList.remove("back-section");
    }
    for(let j=0; j<totalNavList;j++){
      if(navList[j].querySelector("a").classList.contains("active")){
        allSection[j].classList.add("back-section")
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if(window.innerWidth<1200){
      asideSectionTogglerBtn();
    }
  })
}
function showSection(element){
  for(let i=0;i<totalSection;i++){
    allSection[i].classList.remove("active");
  }
  const target=element.getAttribute("href").split("#")[1];
  document.querySelector("#"+target).classList.add("active")
}
const navTogglerBtn=document.querySelector(".nav-toggler"),
aside=document.querySelector(".aside");
navTogglerBtn.addEventListener("click",()=>{
  asideSectionTogglerBtn();
})
function asideSectionTogglerBtn(){
  aside.classList.toggle("open")
  navTogglerBtn.classList.toggle("open");
  for(let i=0;i<totalSection;i++){
    allSection[i].classList.toggle("open");
  }
}


// $(document).ready(function () {
//   var typed = new Typed(".typing", {
//     strings: ["an Algorithm Developer Intern", "a Competitive Coder", "a Web Developer"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true,
//   });
// });






// Method 2 : 3 color


document.addEventListener("DOMContentLoaded", function () {
  const textContainer = document.getElementById("text");
  const sentences = ["a Full-Stack Web Developer", "an Algorithm Developer", "a Competitive Coder"];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeNextChar() {
    const currentSentence = sentences[index];

    if (isDeleting) {
      if (charIndex > 0) {
        textContainer.textContent = currentSentence.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeNextChar, 50); // Adjust the speed of deleting characters if needed
      } else {
        isDeleting = false;
        index = (index + 1) % sentences.length;
        setTimeout(typeNextChar, 50); // Adjust the delay before typing the next sentence if needed
      }
    } else {
      if (charIndex < currentSentence.length) {
        const nextChar = currentSentence[charIndex];
        
        textContainer.innerHTML += `<span class="rest-letters">${nextChar}</span>`;
        
        charIndex++;
        setTimeout(typeNextChar, 50); // Adjust the speed of typing characters if needed
      } else {
        isDeleting = true;
        setTimeout(typeNextChar, 3000); // Wait for 3 seconds before deleting
      }
    }
  }

  typeNextChar();
});