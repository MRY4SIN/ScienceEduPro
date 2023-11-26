function handleSidebar() {
  
    var sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("collapse")) {
      document.getElementById("sidebar").classList.remove("collapse");
    } else {
    document.getElementById("sidebar").classList.add("collapse");
   }
  }
   
   var acc = document.getElementsByClassName("accordion");
   
   for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
       this.classList.toggle("active");
       var panel = this.nextElementSibling;
       if (panel.style.maxHeight){
         panel.style.maxHeight = null;
       } else {
         panel.style.maxHeight = panel.scrollHeight + "px";
         panel.classList.add("show")
       } 
    });
   }