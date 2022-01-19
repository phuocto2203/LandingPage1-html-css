const hamburgerIcon = $("#hamburger");
const hamburgerMenuList = $(".header__hamburger-menu");
let onClick = false;

hamburgerIcon.click(() => {
  onClick = !onClick;
  onClick? 
      hamburgerMenuList.slideDown() &&
      hamburgerIcon.removeClass("fas fa-bars").addClass("fas fa-times"): 
      hamburgerMenuList.slideUp() &&
      hamburgerIcon.removeClass("fas fa-times").addClass("fas fa-bars");
});
