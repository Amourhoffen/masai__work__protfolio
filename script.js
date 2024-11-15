// Use the following to include this JavaScript file 
// <script src="script1.js"></script>
var i = 10;
document.getElementById("showContact").addEventListener("click", function () {
  const contactInfo = document.getElementById("contactInfo");
  contactInfo.classList.toggle("visible"); 
});


const skills = document.querySelectorAll(".skill");
skills.forEach((skill) => {
  skill.addEventListener("mouseover", function () {
    skill.style.backgroundColor = "#ffc107"; 
  });
  skill.addEventListener("mouseout", function () {
    skill.style.backgroundColor = "#007bff"; 
  });
});