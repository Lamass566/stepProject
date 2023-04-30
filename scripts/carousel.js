let circles = document.querySelectorAll(".small-circle");
let btnL = document.querySelector(".btn-left");
let btnR = document.querySelector(".btn-right");
let activeItem = document.getElementById("active-carousel-item");
let mainImg = document.querySelector(".carousel-img");

let carouselTitle = document.querySelector(".carousel-text");
let carouselName = document.querySelector(".name");
let carouselPost = document.querySelector(".post");

let curItem = 0;

function changeContent(){
    let item = circles[curItem].firstElementChild.id;
    switch(item)
    {
        case "nasan":
            mainImg.removeAttribute('src');
            mainImg.setAttribute('src', './images/img1.png');
            carouselTitle.innerText = "Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.";
            carouselName.innerText = "HASAN ALI";
            carouselPost.innerText = "UX Designer";
            break;
        case "norton":
            mainImg.removeAttribute('src');
            mainImg.setAttribute('src', './images/EdwardNorton 1.png');
            carouselTitle.innerText = "Edward Harrison Norton (born August 18, 1969) is an American actor and filmmaker. Born in Boston and raised in Columbia, Maryland,[1] Norton was drawn to theatrical productions at local venues as a child. After graduating from Yale College in 1991, he worked for a few months.";
            carouselName.innerText = "Edward Norton";
            carouselPost.innerText = "Actor";
            break;
        case "hawke":
            mainImg.removeAttribute('src');
            mainImg.setAttribute('src', './images/Ethan_Hawke.png');
            carouselTitle.innerText = "Ethan Green Hawke (born November 6, 1970) is an American actor, author and film director. He has been nominated for numerous accolades including four Academy Awards, two Golden Globe Awards and a Tony Award. Hawke has directed three feature films, plays, and a documentary.";
            carouselName.innerText = "Ethan Hawke";
            carouselPost.innerText = "Actor";
            break;
        case "toro":
            mainImg.removeAttribute('src');
            mainImg.setAttribute('src', './images/Benicio_Del_Toro.png');
            carouselTitle.innerText = "Benicio Del Toro emerged in the mid-1990s as one of the most watchable and charismatic character actors to come along in years. A favorite of film buffs, Del Toro gained mainstream public attention as the conflicted but basically honest Mexican policeman in Steven Soderbergh's (2000).";
            carouselName.innerText = "Benicio Del Toro";
            carouselPost.innerText = "Actor";
            break;
    }
}

function a(){
    let temp = curItem;
    curItem++;
    if(curItem<circles.length){
    

        circles[temp].removeAttribute('id');
        circles[curItem].setAttribute('id', 'active-carousel-item');
    }
    else{
        curItem = 3;
    }
    changeContent();
}

function b(){
    let temp = curItem;
    curItem--;
    if(curItem>=0){

        circles[temp].removeAttribute('id');
        circles[curItem].setAttribute('id', 'active-carousel-item');
    }
    else{
        curItem = 0;
    }
    changeContent();
}

btnL.addEventListener('click', b);
btnR.addEventListener('click', a);