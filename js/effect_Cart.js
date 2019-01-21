//  Global Variable 
var Scroll_Header = document.getElementsByClassName('Header'),
  Menu_Moblile = document.getElementsByClassName('Menu-Mobile'),
  Navbar_Toggle = document.getElementById('Navbar_Toggle'),
  Off_Nav = document.getElementsByClassName('Cancel'),
  Background_Navbar = document.getElementsByClassName('Backgroud-Navbar'),
  ButtonScrollTop = document.getElementsByClassName('Button_Scroll_Top'),
  Sign_Up = document.getElementsByClassName('sign_up'),
  Modal_Login = document.getElementsByClassName('modal_login'),
  Close_Login = document.getElementsByClassName('Close_Login');
 
//  EventListener ,Scroll 

Menu_Moblile[0].addEventListener("click", Open_Nav);
Off_Nav[0].addEventListener("click", Close_Nav);
Background_Navbar[0].addEventListener("click", Off_Background_Navbar);
ButtonScrollTop[0].addEventListener("click", TopScrollTo);
Sign_Up[0].addEventListener("click", Show_Sign_Up);
Close_Login[0].addEventListener("click", Close_Sign_Up);

window.onscroll = function () { scroll_Header_Nagivation(), btnReveal() };


// make to effect "Scroll" for Header-nagivation 

function scroll_Header_Nagivation() {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    Scroll_Header[0].classList.add("Scroll_Header");
  }

  else {

    Scroll_Header[0].classList.remove("Scroll_Header");
  }
}



//Make Navbar-Toggle on Menu 

function Off_Background_Navbar() {
  document.body.style.overflow = "auto";
  Modal_Login[0].classList.remove('ActiveLogin');
  console.log(Modal_Login[0]);
  Background_Navbar[0].style.display = "none";
  Background_Navbar[0].style.visibility = "hidden";
  Background_Navbar[0].style.opacity = "0";
  Navbar_Toggle.style.display = "none";
  
  document.body.style.marginLeft = "0";



}
function Open_Nav() {

  Navbar_Toggle.style.display = "block";
  Background_Navbar[0].style.display = "block";
  Background_Navbar[0].style.visibility = "visible";
  Background_Navbar[0].style.opacity = "0.9";
  document.body.style.marginLeft = "300px";
}


function Close_Nav() {
  Background_Navbar[0].style.visibility = "hidden";
  Background_Navbar[0].style.opacity = "0";
  Background_Navbar[0].style.display = "none";
  Navbar_Toggle.style.display = "none";
  document.body.style.marginLeft = "0";

}
// Make Locate of Content

var locateActive = 0;
var Lenght_Adress_And_Area_Content;
for (let index = 0; index < document.getElementsByClassName("Adress_And_Area_Content").length; index++) {

  document.getElementsByClassName("Adress_And_Area_Content")[index].addEventListener('click', function (event) {
    event.preventDefault();
    var Locate = document.getElementsByClassName("Adress_And_Area_Content")[index].getAttribute("data-locate");

    if (Locate === "HCM") {
      document.getElementsByClassName("Adress_And_Area_Content")[locateActive].classList.remove("Active");
      document.getElementsByClassName("Adress_And_Area_Content")[index].classList.add("Active");
      Lenght_Adress_And_Area_Content = document.getElementsByClassName('Content-Address_' + index).length;

      for (let index2 = 0; index2 < Lenght_Adress_And_Area_Content; index2++) {
        document.getElementsByClassName('Content-Address_' + index)[index2].style.display = "block";
        document.getElementsByClassName('Content-Address_' + index)[index2].style.opacity = "1";
        if (document.getElementsByClassName("Content-Address_" + locateActive).length < 4) {
          document.getElementsByClassName("Content-Address_" + locateActive)[index2].style.display = "none";
          document.getElementsByClassName("Content-Address_" + locateActive)[index2].style.opacity = "0";
        }
      }
      if (document.getElementsByClassName("Content-Address_" + locateActive).length === 4) {

        for (let index2 = 0; index2 < document.getElementsByClassName("Content-Address_" + locateActive).length; index2++) {

          document.getElementsByClassName("Content-Address_" + locateActive)[index2].style.display = "none";
          document.getElementsByClassName("Content-Address_" + locateActive)[index2].style.opacity = "0";
        }


      }

      locateActive = index;

    }
    else if (Locate === "HN") {
      document.getElementsByClassName("Adress_And_Area_Content")[locateActive].classList.remove("Active");
      document.getElementsByClassName("Adress_And_Area_Content")[index].classList.add("Active");
      Lenght_Adress_And_Area_Content = document.getElementsByClassName('Content-Address_' + index).length;

      for (let index2 = 0; index2 < Lenght_Adress_And_Area_Content; index2++) {
        document.getElementsByClassName('Content-Address_' + index)[index2].style.display = "block";
        document.getElementsByClassName('Content-Address_' + index)[index2].style.opacity = "1";
        if (document.getElementsByClassName("Content-Address_" + locateActive).length < 4) {
          console.log(document.getElementsByClassName("Content-Address_" + locateActive)[index2]);
          document.getElementsByClassName("Content-Address_" + locateActive)[index2].style.display = "none";
          document.getElementsByClassName("Content-Address_" + locateActive)[index2].style.opacity = "0";
        }
      }
      if (document.getElementsByClassName("Content-Address_" + locateActive).length === 4) {

        for (let index2 = 0; index2 < document.getElementsByClassName("Content-Address_" + locateActive).length; index2++) {

          document.getElementsByClassName("Content-Address_" + locateActive)[index2].style.display = "none";
          document.getElementsByClassName("Content-Address_" + locateActive)[index2].style.opacity = "0";
        }


      }

      locateActive = index;
    }
    else {
      document.getElementsByClassName("Adress_And_Area_Content")[locateActive].classList.remove("Active");
      document.getElementsByClassName("Adress_And_Area_Content")[index].classList.add("Active");
      Lenght_Adress_And_Area_Content = document.getElementsByClassName('Content-Address_' + index).length;

      for (let index2 = 0; index2 < Lenght_Adress_And_Area_Content; index2++) {
        document.getElementsByClassName('Content-Address_' + index)[index2].style.display = "block";
        document.getElementsByClassName('Content-Address_' + index)[index2].style.opacity = "1";
        if (document.getElementsByClassName("Content-Address_" + locateActive).length < 4) {
          if (index2 < 3) {
            document.getElementsByClassName("Content-Address_" + locateActive)[index2].style.display = "none";
            document.getElementsByClassName("Content-Address_" + locateActive)[index2].style.opacity = "0";
          }
        }
      }
      locateActive = index;
    }

  });
}
// Make Scroll Top 
function TopScrollTo() {
  if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
    

    setTimeout(function () {
      window.scrollTo(0, document.documentElement.scrollTop - 10);
      TopScrollTo();
    }, 10);

  }
}
function btnReveal() {

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    ButtonScrollTop[0].classList.add("is-visible");
  }

  else {

    ButtonScrollTop[0].classList.remove("is-visible");
  }


}
// Make Sign Up

// Open Sigin Up
function Show_Sign_Up() {
  console.log("OK");

  Modal_Login[0].classList.add('ActiveLogin');
  Background_Navbar[0].style.display = "block";
  Background_Navbar[0].style.visibility = "visible";
  Background_Navbar[0].style.opacity = "0.9";
  document.body.style.overflow = "hidden";

}
// Close Sign Up
function Close_Sign_Up() {
  Background_Navbar[0].style.visibility = "hidden";
  Background_Navbar[0].style.opacity = "0";
  Background_Navbar[0].style.display = "none";
  Modal_Login[0].classList.remove('ActiveLogin');
  document.body.style.overflow = "auto";

}