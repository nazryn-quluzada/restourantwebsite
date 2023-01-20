// Scroll
ScrollReveal().reveal('.images');
ScrollReveal().reveal('.one', { duration: 700 });
ScrollReveal().reveal('.two', { duration: 1200 });
ScrollReveal().reveal('.three', { duration: 1700 });
ScrollReveal().reveal('.four', { duration: 2000 });



ScrollReveal().reveal('.left-side');
ScrollReveal().reveal('.first-img', { duration: 700 });
ScrollReveal().reveal('.second-img', { duration: 1200 });
ScrollReveal().reveal('.third-img', { duration: 1700 });

ScrollReveal().reveal('.right-side');
ScrollReveal().reveal('.first-img2', { duration: 700 });
ScrollReveal().reveal('.second-img2', { duration: 1200 });
ScrollReveal().reveal('.third-img2', { duration: 1700 });

ScrollReveal().reveal('.reservation-section');
ScrollReveal().reveal('.reservation-section', { duration: 1200 });


// In reservation section date

let currentDateTime = new Date();
let year = currentDateTime.getFullYear();
let month = (currentDateTime.getMonth() + 1);
let date = (currentDateTime.getDate() + 1);

if(date < 10) {
    date = '0' + date;
  }
  if(month < 10) {
    month = '0' + month;
  }
  
  let dateTomorrow = year + "-" + month + "-" + date;
  let checkinElem = document.querySelector("#checkin-date");

  checkinElem.setAttribute("min", dateTomorrow);

  function myFunction() {
    document.getElementById("myForm").submit();
  }




  
  








