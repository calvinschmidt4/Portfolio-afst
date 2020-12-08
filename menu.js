// window.onresize = function(){ location.reload(); }
w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
var targetWidth = 900;

if ( w <= targetWidth) {     

  document.getElementById("togglemenu").onclick =
    function toggle_visibility() {
      var m = document.getElementById("hide");
      if(m.style.display == 'block')
          m.style.display = 'none';
      else
          m.style.display = 'block';

      var s = document.getElementById("hamburger");
      if(s.style.display == 'none')
          s.style.display = 'block';
      else
          s.style.display = 'none';  
      
      var d = document.getElementById("x");
      if(d.style.display == 'block')
          d.style.display = 'none';
      else
          d.style.display = 'block';
    }

  document.getElementById("toggle").onclick =
    function toggle_visibility(hide) {
      var l = document.getElementById("hide");
      if(l.style.display == 'block')
          l.style.display = 'none';
      else
          l.style.display = 'block';
          
      var s = document.getElementById("hamburger");
      if(s.style.display == 'none')
          s.style.display = 'block';
      else
          s.style.display = 'none';  
      
      var d = document.getElementById("x");
      if(d.style.display == 'block')
          d.style.display = 'none';
      else
          d.style.display = 'block';
    }    
    

  document.getElementById("toggletwee").onclick =
    function toggle_visibility(hide) {
      var l = document.getElementById("hide");
      if(l.style.display == 'block')
          l.style.display = 'none';
      else
          l.style.display = 'block';
          
      var s = document.getElementById("hamburger");
      if(s.style.display == 'none')
          s.style.display = 'block';
      else
          s.style.display = 'none';  
      
      var d = document.getElementById("x");
      if(d.style.display == 'block')
          d.style.display = 'none';
      else
          d.style.display = 'block';
    }    
   

  document.getElementById("toggledrie").onclick =
    function toggle_visibility(hide) {
      var l = document.getElementById("hide");
      if(l.style.display == 'block')
          l.style.display = 'none';
      else
          l.style.display = 'block';
          
      var s = document.getElementById("hamburger");
      if(s.style.display == 'none')
          s.style.display = 'block';
      else
          s.style.display = 'none';  
      
      var d = document.getElementById("x");
      if(d.style.display == 'block')
          d.style.display = 'none';
      else
          d.style.display = 'block';
    }    
}  



$( document ).ready(function() { // Tells the function to wait to preform until everything on the page has loaded.
    $(window).scroll(function() { // Says this function is preformed continuisly while scrolling.
        var Scroll = $(window).scrollTop() + 1, // This variable finds the distance you have scrolled from the top.
                    SectionOneOffset = $('#overmij').offset().top, // This variable finds the distance between #section-one and the top. Replace #section-one with the ID of your section.
                    SectionTwoOffset = $('#portfolio').offset().top; // This variable finds the distance between #section-two and the top. Replace #section-two with the ID of your section. You can duplicate this for as many sections as you want.
                    SectionThreeOffset = $('#contact').offset().top; // This variable finds the distance between #section-two and the top. Replace #section-two with the ID of your section. You can duplicate this for as many sections as you want.
        

        if (Scroll >= SectionOneOffset) { // If you have scrolled past section one do this.
            $(".menu-item-1").addClass("current-menu-item"); // Adds class of current-menu-item to the menu item with a class of menu-item-1
        } else { // If you have not scrolled section one do this.
            $(".menu-item-1").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
        }

        if (Scroll >= SectionTwoOffset) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
        $(".menu-item-2").addClass("current-menu-item"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
                $(".menu-item-1").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
        } else { // If you have not scrolled section two do this.
            $(".menu-item-2").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-2
        }

        if (Scroll >= SectionThreeOffset) { // If you have scrolled past section three do this. You can duplicate this for as many sections as you want.
        $(".menu-item-3").addClass("current-menu-item"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
                $(".menu-item-2").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
        } else { // If you have not scrolled section two do this.
            $(".menu-item-3").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-2
        }

    });
});


















// TweenMax.fromTo(slogan, 1.5, {css:{scale: 0.5, opacity:0}}, {css:{scale: 1, opacity:1}});

var slogan = document.getElementById("slogan");


TweenMax.fromTo(slogan, 1, {css:{y: "100px", opacity:0}}, {css:{y: "0px", opacity:1}});














// window.onresize = function(){ 
    
//  }

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   x[slideIndex-1].style.display = "block";  
// }