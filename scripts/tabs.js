let tabs = document.querySelectorAll('.tab');
let img = document.querySelector(".img-tab");
let txt = document.querySelector(".text-tab-content");
let triangle = document.querySelectorAll("#triangle");
console.log(triangle);

function reset(){
    for(let i = 0; i<tabs.length;i++){
        tabs[i].removeAttribute('id');
        tabs[i].lastChild.removeAttribute('id');
    }
}

function tabActive(tab)
{
  if(tab.hasAttribute('id', 'active'))
  {
  tab.removeAttribute('id','active');
  tab.lastChild.removeAttribute('id','triangle');
  }
  else
  {
  tab.setAttribute('id','active');
  tab.lastChild.setAttribute('id','triangle');
  }
}

tabs.forEach(tab => {
    tab.addEventListener('click', function handleClick(event) {
        reset();
      switch(tab.innerText)
      {
        case "Web Design":
          tabActive(tab);
          img.setAttribute('src', './images/Layer 9 1.png');
          txt.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
          break;
        case "Graphic Design":
            tabActive(tab);
            img.setAttribute('src', './images/4.png');
            txt.innerText = "Благодаря способности лечиться от вражеских атак Абаддон выдерживает почти любой приступ. Он колдует щит на союзников и запускает двустороннюю туманную спираль у друзей или врагов, всегда готов вскочить в самое сердце битвы.";
          break;
        case "Online Support":
            tabActive(tab);
            img.setAttribute('src', './images/1.jpg');
            txt.innerText = "Синтезируя дополнительные ресурсы по каждому убийству, Алхимик без проблем накапливает все средства для истребления своих врагов. Вскочив врасплох недругов едкой кислотой и поздравив их нестабильными химикатами, он воюет для обеспечения непрерывности своих жадных приключений.";
          break;
        case "App Design":
            tabActive(tab);
            img.setAttribute('src', './images/2.jpg');
            txt.innerText = "Кальдр, Древний Призрак, это проекция из-за пределов времен. Он возник из холодной бесконечной пустоты, которая предшествовала вселенной и ждет его конец. Кальдр был, Кальдр есть, Кальдр будет… И тот, кого мы видим в нашем мире, хоть и кажется нам сильным, но на самом деле лишь слабым угасающим эхом настоящего вечного Кальдра. Некоторые верят, что когда космос будет отживать свои последние годы, Древний Призрак будет становиться младше, ярче и сильнее, тогда как вечность будет гаснуть.";
          break;
        case "Online Marketing":
            tabActive(tab);
            img.setAttribute('src', './images/3.jpg');
            txt.innerText = "Перед началом всего существовала одна сущность: первоначальное сознание. Безграничная, невероятная, с непостижимыми целями. Когда вселенная появилась с громом, то это сознание раскололось. Два величайших обломка этого сознания, которые когда-нибудь назовут Сяйвом и Тьмой, обнаружили друг в друге злейших врагов и посвятили всю цель своего существования уничтожению противника.";
          break;
        case "Seo Service":
            tabActive(tab);
            img.setAttribute('src', './images/batrider.png');
            txt.innerText = "Среди созданий, населяющих джунгли Йама-Раскав, нет такого понятия, как гармония. Даже малейшее проявление слабости означает скорую смерть от зубов, когтей или копыт. Говорят, Летучий Всадник когда-то был простым парнем, обрабатывавшим семейное поле, когда его схватила огромная летучая мышь, которая именно искала себе продовольствие. Но у парня была лучшая идея — он вырвался из лап похитителя, залез назад на спину и зарубил летучую мышь своими инструментами.";
          break;
      }
    });
  });