var count = 0;


function nextPage() {
  var pages = document.getElementsByClassName("page");
  var length = pages.length;
  console.log(pages);

  pages[count].style.display = "none";

  count += 1;

if (count == 1) {
     document.getElementById("begin").style.display = "none";
     document.getElementById("nextPage").style.display = "block";
   } else if (count == length + 1 ) {
     document.getElementById("begin").style.display = "none";
     document.getElementById("nextPage").style.display = "block";
   } else if ( count == length - 1 ){
     document.getElementById("begin").style.display = "none";
     document.getElementById("nextPage").style.display = "none";
   }
   pages[count].style.display = "block";
}



document.getElementById("begin").addEventListener("click", nextPage);
document.getElementById("nextPage").addEventListener("click", nextPage);
