window.onscroll = function() {scrollFunction()};

let arrowDelete = document.getElementById("arrow");

        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navbar").style.top = "0";
            arrowDelete.classList.add("fade");
          } else {
            document.getElementById("navbar").style.top = "-120px";
            arrowDelete.classList.remove("fade");
          }
        }
      
