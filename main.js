$(document).ready(() => {
   $('.collapsible').collapsible();
   $('.scrollspy').scrollSpy();
   // open timeline by default
   $('#timeline-collapsible').collapsible('open', 0);
 });