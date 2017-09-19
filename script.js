// https://desandro.github.io/3dtransforms/docs/card-flip.html

var placeholder = "http://accso.de/app/uploads/2016/04/Platzhalter.jpg"
var people = [];
var currentPerson;
var frontVisible = true;

$(document).ready(function() {
  var card = $("#card");
  $("#card").click(function(element) {
    if (frontVisible) {
      setName();
    } else {
      loadNext();
      setImage();
    }
    
    card.toggleClass('flipped');
    frontVisible = !frontVisible;
  });
});

function setName() {
  var nameElement = $("figure.back div");
  nameElement.text(currentPerson.name);
}

function setImage() {
  var imageElement = $("figure.front img");
  var url = (currentPerson === null) ? placeholder : currentPerson.image;
  imageElement.attr("src", url);
}

function loadNext() {
  var index = Math.floor(Math.random()*people.length);
  currentPerson = people[index];
}

$.ajax({
 url: "https://cors-anywhere.herokuapp.com/http://accso.de/menschen/",
 type: "GET",
 beforeSend: function(xhr) {
   xhr.setRequestHeader('X-Requested-With', 'text/html');
 },
 success: function(data) {
   console.log("Received people content!");

   var virtualDom = $("<virtual>").html(data)[0];
   people = [];
   
   $(virtualDom).find("div.staff").each(function (i, el) {
     var staff = $(el);
     var image = staff.find("img").attr("src");
     var name = staff.find("div.name").text();

     if (image === placeholder) {
      console.log("Skipping " + name + " since s_he has no image yet."); 
     } else {
      people.push({
        name: name,
        image: image
      }); 
     }
   });
   
   console.log("Found " + people.length + " people");
   
   loadNext();
   setImage();
   setName();
 }
});