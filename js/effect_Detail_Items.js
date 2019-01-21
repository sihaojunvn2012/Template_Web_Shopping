//  Global Variable 
var Scroll_Header = document.getElementsByClassName('Header'),
  Menu_Moblile = document.getElementsByClassName('Menu-Mobile'),
  Navbar_Toggle = document.getElementById('Navbar_Toggle'),
  Off_Nav = document.getElementsByClassName('Cancel'),
  Background_Navbar = document.getElementsByClassName('Backgroud-Navbar'),
  ButtonScrollTop = document.getElementsByClassName('Button_Scroll_Top'),
  Sign_Up = document.getElementsByClassName('sign_up'),
  Modal_Login = document.getElementsByClassName('modal_login'),
  Close_Login = document.getElementsByClassName('Close_Login'),
  Right = document.getElementsByClassName('fa-chevron-right right'),
  Button_Add_Cart = document.getElementsByClassName('Button_Add_Cart'),
  Notification_Cart = document.getElementsByClassName('Notification'),
  Colse_Notification_Cart = document.querySelector('.Notification i.fas.fa-times'),
  Slide_Thumb_Items = document.getElementsByClassName('Thumb_Items_Image'),
  Previous_Thumb_Items = document.querySelector('.Previous_Thumb_Items'),
  Next_Thumb_Items = document.querySelector('.Next_Thumb_Items'),
  thumb_items = document.querySelector('.thumb-items'),
  Zoom_Thumb_Items = document.querySelector('.Zoom_Thumb_Items'),
  Close_Zoom_Thumb_Items = document.getElementsByClassName('Close_Thumb_Items');


//  EventListener ,Scroll 
Close_Zoom_Thumb_Items[0].addEventListener("click",Close_Zoom);
thumb_items.addEventListener("click",Open_Thumb_Items);
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
  Notification_Cart[0].style.visibility = "hidden";
  Notification_Cart[0].style.opacity = "0";
  Notification_Cart[0].style.transform = "scale(0)";

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
    console.log(document.documentElement.scrollTop);
    console.log("OK");

    setTimeout(function () {
      window.scrollTo(0, document.documentElement.scrollTop - 50);
      TopScrollTo();
    }, 2);

  }
}
function btnReveal() {

  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
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

// Make Slideshow Gallery

var Small_Image = document.getElementsByClassName('Small-Image'),
  Lenght_Image = document.getElementsByClassName('Small-Image').length,
  MySlide = document.getElementsByClassName('mySlides'),
  Lenght_MySlide = document.getElementsByClassName('mySlides').length;
var slideIndex = 0;

MySlide[slideIndex].style.display = "block";

for (let index = 0; index < Lenght_Image; index++) {
  Small_Image[index].addEventListener("click", function () {

    for (let index2 = 0; index2 < Lenght_MySlide; index2++) {

      MySlide[index2].style.display = "none";
    }
    MySlide[index].style.display = "block";

  });
}
var Small_Image2 = document.getElementsByClassName('Small-Image2'),
  Lenght_Image2 = document.getElementsByClassName('Small-Image2').length,
  MySlide = document.getElementsByClassName('mySlides'),
  Lenght_MySlide = document.getElementsByClassName('mySlides').length,
  MyImage = document.getElementsByClassName('myimage');

var slideIndex = 0;

MySlide[slideIndex].style.display = "block";


for (let index = 0; index < Lenght_Image2; index++) {
  Small_Image2[index].addEventListener("click", function () {

    for (let index2 = 0; index2 < Lenght_MySlide; index2++) {

      MySlide[index2].style.display = "none";
    }
    MySlide[index].style.display = "block";



  });

}
// MyImage[0].addEventListener("mousemove", zoom);


// create background-image 
var image = ["https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/2-1000x1000.jpg", "https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/3-1000x1000.jpg", "https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/4-1000x1000.jpg", "https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/5-1000x1000.jpg", "https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/1-1000x1000.jpg"];

var Number_Zoom_Image = document.getElementsByClassName('numbertext'),
  Lenght_Zoom_Image = document.getElementsByClassName('numbertext').length;
for (let index = 0; index < Lenght_Zoom_Image; index++) {
  Number_Zoom_Image[index].style.backgroundImage = "url('" + image[index] + "')";
}


//Make Zoom Image
function zoom(e) {
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX;
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX;
  x = (offsetX / zoomer.offsetWidth) * 100;
  y = (offsetY / zoomer.offsetHeight) * 100;
  zoomer.style.backgroundPosition = x + "% " + y + "%";

}
// Make Show Distription Or Review 

var Array_Distription_Review = document.querySelectorAll(".Destription_Review ul.List_Menu li"),
  Sub_Content_Destription = document.getElementsByClassName('Sub_Content_Destription'),
  Sub_Content_Review = document.getElementsByClassName('Sub_Content_Review'),
  Button_Detription = document.querySelector('.List_Menu button.Detription'),
  Button_Review = document.querySelector('.List_Menu .Review');

var Lenght_Array_Distription_Review = Array_Distription_Review.length;
console.log(Button_Detription);

for (let index = 0; index < Lenght_Array_Distription_Review; index++) {
  Array_Distription_Review[index].addEventListener("click", function () {

    var description_Or_Review = Array_Distription_Review[index].getAttribute("data_description");
    if (description_Or_Review === "Description") {
      Sub_Content_Destription[0].style.display = "block";
      Sub_Content_Review[0].style.display = "none";
      console.log(Button_Detription);
      Button_Detription.classList.add("Active_Destription_Or_Review");
      Button_Review.classList.remove("Active_Destription_Or_Review");
    }
    else {
      Sub_Content_Review[0].style.display = "block";
      Sub_Content_Destription[0].style.display = "none";
      Button_Review.classList.add("Active_Destription_Or_Review");
      Button_Detription.classList.remove("Active_Destription_Or_Review");
    }
  })

}
// Make Video 
var Button_Watch_Video = document.getElementsByClassName('Button_Watch_Video'),
  Video_Tech = document.getElementById('Video_Tech'),
  Backgroud_Video = document.getElementsByClassName('Backgroud_Video');



Button_Watch_Video[0].addEventListener("click", Show_Video);
Backgroud_Video[0].addEventListener("click", Off_Background_Video);
function Show_Video() {
  Video_Tech.style.opacity = "1";
  Video_Tech.style.visibility = "visible";
  Video_Tech.style.transform = "scale(1)";
  // Video_Tech.style.display="block";
  Backgroud_Video[0].style.display = "block";

}
function Off_Background_Video() {
  // Video_Tech.style.display="none";
  Video_Tech.style.visibility = "hidden";
  Video_Tech.style.opacity = "0";
  Video_Tech.style.transform = "scale(0)";
  Backgroud_Video[0].style.display = "none";
}
// Make Notification Cart

var Lenght_Items = Button_Add_Cart.length;
for (let index = 0; index < Lenght_Items; index++) {
  Button_Add_Cart[index].addEventListener("click", function () {
    Notification_Cart[0].style.visibility = "visible";
    Notification_Cart[0].style.opacity = "1";
    Notification_Cart[0].style.transform = "scale(1)";
    Background_Navbar[0].style.display = "block";
    Background_Navbar[0].style.visibility = "visible";
    Background_Navbar[0].style.opacity = "1";


  })

}
Colse_Notification_Cart.addEventListener("click", function () {

  Notification_Cart[0].style.visibility = "hidden";
  Notification_Cart[0].style.opacity = "0";
  Notification_Cart[0].style.transform = "scale(0)";
  Background_Navbar[0].style.display = "none";
  Background_Navbar[0].style.visibility = "hidden";
  Background_Navbar[0].style.opacity = "0";
})

// Make Slide Thumb Items

function Open_Thumb_Items () {

  Zoom_Thumb_Items.style.display="block";
  document.body.style.overflow = "hidden";
  thumb_items.style.display="none";

}
function Close_Zoom() {
  Zoom_Thumb_Items.style.display="none";
  document.body.style.overflow = "auto";
  thumb_items.style.display="flex";
  
}

var Located_Now = 0,
  State = "Staying",
  Lenght_Slide_Thumb_Items = Slide_Thumb_Items.length;

Previous_Thumb_Items.addEventListener("click", Move_Slide_Go_To_Left);
Next_Thumb_Items.addEventListener("click", Move_Slide_Go_To_Right);

function Identify_Slide_And_Move(Which_Button) {
  if (State === "Moving") {
    return false;
  }
  State = "Moving";
  var State_Of_Two_Moving = 0;
  var Element_Now = Slide_Thumb_Items[Located_Now];
  console.log(Element_Now);
  if (Which_Button === "Previous_Thumb_Items") {
    if (Located_Now > 0) {

      Located_Now -= 1;

    }
    else {
      Located_Now = Lenght_Slide_Thumb_Items - 1;
    }

  }
  else {

    if (Located_Now < Lenght_Slide_Thumb_Items-1) {
      Located_Now += 1;
    }
    else {
      Located_Now = 0;

    }
  }
   console.log(Located_Now);
  var Next_Element = Slide_Thumb_Items[Located_Now];
  var State_Now_Animate_Button_Next_Or_Previous = "";
  var State_Next_Animate_Button_Next_Or_Previous = "";

  function Handle_Now_And_Finish_Moving() {
    this.classList.remove('Watching');
    if (Which_Button === "Next_Thumb_Items") {
      console.log("ok");

      State_Now_Animate_Button_Next_Or_Previous = "Hidden_When_Click_Next";

    }
    else {
      State_Now_Animate_Button_Next_Or_Previous = "Hidden_When_Click_Previous";
    }
    State_Of_Two_Moving++;
    if(State_Of_Two_Moving===2){
      State="Staying";
    }
    else {
      State="Moving";
    }
    console.log(State_Now_Animate_Button_Next_Or_Previous);
    this.classList.remove(State_Now_Animate_Button_Next_Or_Previous);
    
  }

  function Handle_Next_And_Finish_Moving() {
    this.classList.add('Watching');
    if (Which_Button === "Next_Thumb_Items") {

      State_Next_Animate_Button_Next_Or_Previous = "Visible_When_Click_Next";

    }
    else {
      State_Next_Animate_Button_Next_Or_Previous = "Visible_When_Click_Previous";
      
    }
    console.log(State_Next_Animate_Button_Next_Or_Previous);
    State_Of_Two_Moving++;
    if(State_Of_Two_Moving===2){
      State="Staying";

    }
    else {
      State="Moving";
    }
    this.classList.remove(State_Next_Animate_Button_Next_Or_Previous);
  }
  Element_Now.addEventListener("webkitAnimationEnd", Handle_Now_And_Finish_Moving);
  Next_Element.addEventListener("webkitAnimationEnd", Handle_Next_And_Finish_Moving);
  Element_Now.classList.add((Which_Button == 'Next_Thumb_Items') ? ('Hidden_When_Click_Next') : ('Hidden_When_Click_Previous'));
	Next_Element.classList.add((Which_Button == 'Next_Thumb_Items') ? ('Visible_When_Click_Next') : ('Visible_When_Click_Previous'));	 
}
function Move_Slide_Go_To_Left() {
  Identify_Slide_And_Move('Previous_Thumb_Items');
}

function Move_Slide_Go_To_Right() {
  Identify_Slide_And_Move('Next_Thumb_Items');
}

// imageZoom(MyImage[0],"myresult");



// function imageZoom(imgID, resultID) {

//     var img, lens, result, cx, cy;
//     img = imgID;
//     result = document.getElementById(resultID);


//     lens = document.createElement("DIV");
//     lens.setAttribute("class", "img-zoom-lens");

//     img.parentElement.insertBefore(lens, img);

//     cx = result.offsetWidth / lens.offsetWidth;
//     cy = result.offsetHeight / lens.offsetHeight;

//     result.style.backgroundImage = "url('" + img.src + "')";
//     result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";

//     lens.addEventListener("mousemove", moveLens);
//     img.addEventListener("mousemove", moveLens);

//     lens.addEventListener("touchmove", moveLens);
//     img.addEventListener("touchmove", moveLens);
//     function moveLens(e) {
//       var pos, x, y;

//       e.preventDefault();

//       pos = getCursorPos(e);

//       x = pos.x - (lens.offsetWidth / 2);
//       y = pos.y - (lens.offsetHeight / 2);

//       if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
//       if (x < 0) {x = 0;}
//       if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
//       if (y < 0) {y = 0;}

//       lens.style.left = x + "px";

//       lens.style.top = y + "px";

//       result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
//     }
//     function getCursorPos(e) {
//       var a, x = 0, y = 0;
//       e = e || window.event;

//       a = img.getBoundingClientRect();

//       x = e.pageX - a.left;
//       y = e.pageY - a.top;

//       x = x - window.pageXOffset;
//       y = y - window.pageYOffset;
//       return {x : x, y : y};
//     }
//   }
