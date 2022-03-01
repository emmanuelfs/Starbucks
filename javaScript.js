let clickFooterArrow;
function load() {
    clickFooterArrow = document.getElementById("arrowAboutUs");
    clickFooterArrow.addEventListener("click", unfoldArrowAboutUs, false);
    clickFooterArrow = document.getElementById("arrowCareers");
    clickFooterArrow.addEventListener("click", unfoldArrowCareers, false);
    clickFooterArrow = document.getElementById("arrowSocialImpact");
    clickFooterArrow.addEventListener("click", unfoldArrowSocialImpact, false);
    clickFooterArrow = document.getElementById("arrowForBusinessPartners");
    clickFooterArrow.addEventListener("click", unfoldForBusinessPartners, false);
    clickFooterArrow = document.getElementById("arrowOrderAndPickup");
    clickFooterArrow.addEventListener("click", unfoldOrderAndPickup, false);
  }
  function unfoldArrowAboutUs(){
    let currentlyHidden = document.getElementById("aboutUscontainer");
    let spinArrow = document.getElementById("arrowAboutUs");
    if (currentlyHidden.style.display === "none") {        
        spinArrow.style.transform = "rotate(-180deg)";
        currentlyHidden.style.display = "block";
      } else {
        spinArrow.style.transform = "rotate(0deg)";
        currentlyHidden.style.display = "none";
      }
  }
  function unfoldArrowCareers(){
    let currentlyHidden = document.getElementById("careersContainer");
    let spinArrow = document.getElementById("arrowCareers");
    if (currentlyHidden.style.display === "none") {        
        spinArrow.style.transform = "rotate(-180deg)";
        currentlyHidden.style.display = "block";
      } else {
        spinArrow.style.transform = "rotate(0deg)";
        currentlyHidden.style.display = "none";
      }
  }
  function unfoldArrowSocialImpact(){
    let currentlyHidden = document.getElementById("socialImpactContainer");
    let spinArrow = document.getElementById("arrowSocialImpact");
    if (currentlyHidden.style.display === "none") {        
        spinArrow.style.transform = "rotate(-180deg)";
        currentlyHidden.style.display = "block";
      } else {
        spinArrow.style.transform = "rotate(0deg)";
        currentlyHidden.style.display = "none";
      }
  }  
  function unfoldForBusinessPartners(){
    let currentlyHidden = document.getElementById("forBusinessPartnersContainer");
    let spinArrow = document.getElementById("arrowForBusinessPartners");
    if (currentlyHidden.style.display === "none") {        
        spinArrow.style.transform = "rotate(-180deg)";
        currentlyHidden.style.display = "block";
      } else {
        spinArrow.style.transform = "rotate(0deg)";
        currentlyHidden.style.display = "none";
      }
  }  
  function unfoldOrderAndPickup(){
    let currentlyHidden = document.getElementById("orderAndPickupContainer");
    let spinArrow = document.getElementById("arrowOrderAndPickup");
    if (currentlyHidden.style.display === "none") {        
        spinArrow.style.transform = "rotate(-180deg)";
        currentlyHidden.style.display = "block";
      } else {
        spinArrow.style.transform = "rotate(0deg)";
        currentlyHidden.style.display = "none";
      }
  }
  
  document.addEventListener("DOMContentLoaded", load, false);