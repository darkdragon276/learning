/* Show-more button clicked-on event */
function ShowmoreFunction() {
   let hiddenImage = document.getElementsByClassName("mecNavTabShow");
   console.log(hiddenImage);
   for (let i = 0; i < hiddenImage.length; i++) {
      hiddenImage[i].style.display = "block";
   }

   // Will be implemented for each button
   let hiddenButton = document.getElementsByClassName("mecNavTab__ctnShowBt");
   for (let i = 0; i < hiddenButton.length; i++) {
      hiddenButton[i].style.display = "none";
   }
}