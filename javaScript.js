let clickFooterArrow;
function load() 
{
    clickFooterArrow = document.getElementById("arrowAboutUs");
    clickFooterArrow.addEventListener("click", function() {displayContent("aboutUsContainer","arrowAboutUs")}, false);
    clickFooterArrow = document.getElementById("arrowCareers");
    clickFooterArrow.addEventListener("click", function() {displayContent("careersContainer","arrowCareers")}, false);
}
document.addEventListener("DOMContentLoaded", load, false);

function displayContent(currentlyHiddenValue, spinArrowValue){
  let currentlyHidden = document.getElementById(currentlyHiddenValue);
  let spinArrow = document.getElementById(spinArrowValue);
  console.log(currentlyHidden.style.display);
  if (currentlyHidden.style.display === "none") {   
      spinArrow.style.transform = "rotate(-180deg)";
      currentlyHidden.style.display = "block";
      currentlyHidden.style.height = "250px";
    } else {
      spinArrow.style.transform = "rotate(0deg)";
      currentlyHidden.style.display = "none";
    }
}