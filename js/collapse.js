window.onload = function() {
    var coll = document.getElementsByClassName("collapsible");
    var i = 0;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;

            if (content.style.maxHeight){
                content.style.maxHeight = null;
              } else {
                console.log(content.scrollHeight);
                content.style.maxHeight = content.scrollHeight + 18 + "px";
              } 
            });
    }
};