let btn = document.querySelector("#btn4");
let container = document.querySelector('.flex-container-btn');
let card = document.querySelector(".card-img");
let tbs = document.querySelector(".tabs-s5-content");

let imgs = ["./images/12.png", "./images/13.png", "./images/14.png", "./images/15.png", "./images/16.png", "./images/17.png", "./images/18.png", "./images/19.png", "./images/20.png", "./images/21.png", "./images/22.png", "./images/Layer 9 1.png"];
let categories = ["graphic","web","landing", "wordpress"];

function diss(event){
    container.style.visibility = "hidden";
    for(let i = 0; i<= imgs.length; i++)
    {
    if(imgs[i] != null){
    let c = card.firstElementChild;

    let d = tbs.querySelector(".card-category");
    d.setAttribute('class', 'card-category');
    c.setAttribute('src', imgs[i]);


    let cae = categories[Math.floor(Math.random() * categories.length)];
    d.className = "card-category "+ cae;
    switch(cae){
        case "graphic":
            d.textContent = "Graphic Design";
            break;
        case "web":
            d.textContent = "Web Design";
            break;
        case "landing":
            d.textContent = "Landing Pages";
            break;
        case "wordpress":
            d.textContent = "Wordpress";
            break;
    }

    imgs[i] = null;
    let divOp = "<div class=\"card-img\">";
    let divEn = "</div>";

    let elem =divOp + tbs.firstElementChild.innerHTML+ divEn;


    tbs.insertAdjacentHTML("beforeEnd",elem);
}
}
}

let tabsCards = document.querySelector('#tabs-flex-2');
let cards = document.getElementsByClassName('card-img');

function filter(event){
    tabsCards.addEventListener('click', event =>{
    let fs = event.target.dataset.f;
    console.log(fs);

    switch(fs){
        case 'all':
            getItems('card-img')
            break;
        case 'graphic':
            getItems(fs)
            break;
        case 'web':
            getItems(fs)
            break;
        case 'landing':
            getItems(fs)
            break;
        case 'wordpress':
            getItems(fs)
            break;
    }
  })
}
filter();

function getItems(className){
    Array.from(cards).forEach(item => {
        if(className != 'card-img')
        {
            if(item.lastElementChild.lastElementChild.classList.contains(className)){
                item.style.display = 'block';
            }
            else{
                item.style.display = 'none';
            }
        }
        else{
            item.style.display = 'block';
        }
    })
}

btn.addEventListener('click', diss);
let tabsAll = document.querySelectorAll('.tab-s5');

function reset5(){
    for(let i = 0; i<tabsAll.length;i++){
        tabsAll[i].removeAttribute('id');
        
    }
}


function tabActive5(tab)
{
  if(tab.hasAttribute('id', 'active-s5'))
  {
  tab.removeAttribute('id','active-s5');
  }
  else
  {
  tab.setAttribute('id','active-s5');
  }
}

tabsAll.forEach(tab => {
    tab.addEventListener('click', function handleClick(event) {
        reset5();
        switch(tab.innerText){
          case "All":
            tabActive5(tab);
            btn.style.display = 'block';
            break;
          case "Graphic Design":
            tabActive5(tab);
            btn.style.display = 'none';
            break;
          case "Web Design":
            tabActive5(tab);
            btn.style.display = 'none';
            break;
          case "Landing Pages":
            tabActive5(tab);
            btn.style.display = 'none';
            break;
          case "Wordpress":
            tabActive5(tab);
            btn.style.display = 'none';
            break;
        }
        
  }
  )});