//script files

//toggle

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  // menu.classList.toggle('bx-x');
  navbar.classList.toggle("active");
});

//scroll section

let sections = document.querySelectorAll("section");
let navlink = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY; // cirrent distance from top
    let offset = sec.offsetTop - 100; // homesection ki height
    let height = sec.offsetHeight; //section height
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlink.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });

      //active sections for animation

      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //remove toggle icon

  // menu.classList.remove('bx-x');
  navbar.classList.remove("active");

  //animation footer

  let footer = document.querySelector("footer");

  footer.classList.toggle(
    "show-animate",
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  );
};

//read more and read less

//read more and read less

//read more and read less

let read = document.querySelector(".read-more-btn");
let moretxt = document.querySelector(".read-more-txt");
let a = 1;
read.addEventListener("click", () => {
  if (a === 1) {
    moretxt.style.display = "block";
    read.textContent = "Read Less";
    a = 0;
  } else {
    moretxt.style.display = "none";
    read.textContent = "Read More";
    a = 1;
  }
});

//contact section

const form = document.querySelector("form");
function sent() {
  // e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var subject = document.getElementById("email-subject").value;
  var msg = document.getElementById("message").value;

  // console.log('Name:', name);
  // console.log('Email:', email);
  // console.log('Phone:', phone);
  // console.log('Subject:', subject);
  // console.log('Message:', msg);

  var body =
    "Name: " +
    name +
    "<br/> Email:" +
    email +
    "<br/> Contact Number:" +
    phone +
    "<br/> Message:" +
    msg;
  // console.log(body);

  Email.send({
    // SecureToken:"ae1f02ff-c53c-4b8b-8c52-eb0ec7f9b31",
    Host: "smtp.elasticemail.com",
    Username: "amitmee3838@gmail.com",
    Password: "26F58CAD793F13929A6356BA53315258F717",
    To: "amitmee3838@gmail.com",
    From: "amitmee3838@gmail.com",
    Subject: subject,
    Body: body,
  }).then((message) => {
    if (message == "OK") {
      swal("Successful!", "Your message successfully send!", "success");
      // name.value="";
    } else {
      swal("Something Wrong!", "Something went wrong!", "error");
    }
    // console.log(err);
    // alert(message);
  });
}

//mix it up

var mixer = mixitup(".portfolio-gal");

// let form = document.querySelector("form");

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var subject = document.getElementById("email-subject").value;
var msg = document.getElementById("message").value;

function checkInput() {
  const items = document.querySelectorAll(".item");
  let hasErrors = false;

  for (const item of items) {
    const parentField = item.closest(".field"); // Get the closest ancestor with the class 'field'

    if (item.value.trim() === "") {
      item.classList.add("error");
      if (parentField) {
        parentField.classList.add("error");
      }
      hasErrors = true;
    } else {
      item.classList.remove("error");
      if (parentField) {
        parentField.classList.remove("error");
      }
    }
  }

  if (!hasErrors) {
    checkEmail();
  }
}

function checkEmail() {
  const email = document.getElementById("email");
  const emailReg = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const parentField = email.closest(".field");
  const errorEmail = document.querySelector(".err-txt.email");

  if (!email.value.match(emailReg)) {
    email.classList.add("error");
    if (parentField) {
      parentField.classList.add("error");
    }

    if (email.value.trim() !== "") {
      errorEmail.innerText = "Enter a valid email address";
    } else {
      errorEmail.innerText = "Email can't be blank";
    }
  } else {
    email.classList.remove("error");
    if (parentField) {
      parentField.classList.remove("error");
    }
  }
  // if (!hasErrors) {
  //   reset();
  // }
}

//reset from

function resetForm() {
  const items = document.querySelectorAll(".item");
  const num = document.querySelector(".num");

  // Reset input values and remove error classes
  items.forEach((item) => {
    item.value = "";
    item.classList.remove("error");

    const parentField = item.closest(".field");
    if (parentField) {
      parentField.classList.remove("error");
    }
  });
  num.value = "";

  // Reset email error message
  const errorEmail = document.querySelector(".err-txt.email");
  if (errorEmail) {
    errorEmail.innerText = "";
  }

  // Reset hasErrors
  hasErrors = false;
}

// Add keyup event listeners for immediate feedback

const inputFields = document.querySelectorAll(".item");
inputFields.forEach((item) => {
  item.addEventListener("keyup", () => {
    checkInput();
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();

  sent();
  resetForm();
});
