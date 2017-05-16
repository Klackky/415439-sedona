   var link = document.querySelector(".search-sedona");
   var popup = document.querySelector(".modal-form");

   link.addEventListener("click",function(evt){
    evt.preventDefault();
    popup.classList.toggle("modal-form-none");

   });
