// Functions, objects, and events

// Dog objects
const dog1 = {
 heading: "Bucket Case",
 image: "images/black-dog.jpg",
 caption: "Just hanging out waiting for water",
 altTag: "Black dog in bucket."
};

const dog2 = {
    heading: "Sunshine",
    image: "images/gold-dog.jpg",
    caption: "As golden as the sun.",
    altTag: "Golden retriever laying in grass."
};

const dog3 = {
    heading: "Not a (Snow)Man's Best Friend",
    image: "images/snow-dog.jpg",
    caption: "I don't remember this part of Frosty the Snowman",
    altTag: "Dog with snowman."
};

const dog4 = {
    heading: "The Nuzzle",
    image: "images/white-dogs.jpg",
    caption: "Awwwww!",
    altTag: "Big dog and little dog."
};

const dog0 = {
    heading: "",
    image: "none",
    caption: "",
    altTag: ""
};

function chooseDog(dog) {
    var x = document.getElementById("img" + dog);
    if (x.style.display === "block") {
        x.style.display = "none";
        document.getElementById("heading" + dog).innerHTML = dog0.heading;
        document.getElementById("p" + dog).innerHTML = dog0.caption;
    }
    else if (dog == 1) {
        loadMe(dog1, 1);
    } else if (dog == 2) {
        loadMe(dog2, 2);
    } else if (dog == 3) {
        loadMe(dog3, 3);
    } else if (dog == 4) {
        loadMe(dog4, 4);
    }
  // don't put dog1 in quotes or it will pass a string not the object
 }


function loadMe(dog, dogNum) {
 document.getElementById("heading" + dogNum).innerHTML = dog.heading;
 document.getElementById("img" + dogNum).src = dog.image;
 document.getElementById("img" + dogNum).style.display = "block";
 document.getElementById("p" + dogNum).innerHTML = dog.caption;
 document.getElementById("img" + dogNum).setAttribute('alt', dog.altTag);
}