let clickFooterArrow;
function load() 
{
    clickFooterArrow = document.getElementById("arrowAboutUs");
    clickFooterArrow.addEventListener("click", function() {displayContent("aboutUsContainer","arrowAboutUs")}, false);
    clickFooterArrow = document.getElementById("arrowCareers");
    clickFooterArrow.addEventListener("click", function() {displayContent("careersContainer","arrowCareers")}, false);
    clickFooterArrow = document.getElementById("arrowSocialImpact");
    clickFooterArrow.addEventListener("click", function() {displayContent("socialImpactContainer","arrowSocialImpact")}, false);
    clickFooterArrow = document.getElementById("arrowForBusinessPartners");
    clickFooterArrow.addEventListener("click", function() {displayContent("forBusinessPartnersContainer","arrowForBusinessPartners")}, false);
    clickFooterArrow = document.getElementById("arrowOrderAndPickup");
    clickFooterArrow.addEventListener("click", function() {displayContent("orderAndPickupContainer","arrowOrderAndPickup")}, false);
}
document.addEventListener("DOMContentLoaded", load, false);

function displayContent(currentlyHiddenValue, spinArrowValue){
  let currentlyHidden = document.getElementById(currentlyHiddenValue);
  let spinArrow = document.getElementById(spinArrowValue);
  if (currentlyHidden.style.display === "none") {   
      spinArrow.style.transform = "rotate(-180deg)";
      currentlyHidden.style.display = "block";
      currentlyHidden.style.height = "250px";
    } else {
      spinArrow.style.transform = "rotate(0deg)";
      currentlyHidden.style.display = "none";
    }
}