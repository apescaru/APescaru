// import * from "./data/Projects.js";

const ProjectsDataa = [
    {
        title: "Goalsreplay",
        description: "A Football application that displays matches, video highlights of matches and players.",
        role: "Backend (DB design + API + Logic) implementation + frontend integration (mostly using Laravel blade)<br></br>\
        Frontend: Bootstrap + Vue.js (Laravel nova admin panel)<br></br>\
        Backend: Laravel",
        website: "https://www.goalsreplay.com"
    },

    {
        title: "Allejobs",
        description: "A job searching platform. Create a profile, upload a CV, apply for a job.",
        role: "Backend optimisations + frontend/ API updates<br></br>\
        Frontend: Bootrap + Laravel blade<br></br>\
        Backend: Laravel",
        website: "https://www.allejobs.jetzt"
    },

    {
        title: "Clevercardeals",
        description: "A car leasing application. Search prices, specs and similar cars.",
        role: "Backend (DB design + API + Logic) implementation + admin panel<br></br>\
        Frontend: Laravel blade + Laravel Livewire + Vue.js (Laravel nova admin panel)<br></br>\
        Backend: Laravel",
        website: "https://www.clevercardeals.com"
    }
];

var codeRoomCode ="<div>\n\
  <p>\n\
   I am a self-taught young programmer that has a freelancing + working background of over 6 years.\n\
  </p>\n\
  <p>\n\
   Coding is <span>fun</span> because you can do whatever you want.\n\
  </p>\n\
  <p>\n\
    Anything can be done using the right tools. (or know where to look :) )\n\
  </p>\n\
 </div>";

 const stylingLevels = [
    "*{transition: all 1s ease} body{color: rgba(0,0,0, 1);display: flex;justify-content:start;align-items:start} body div{width: 100%}",
    "*{transition: all 1s ease} body{color: rgba(255,255,255, .9);display: flex;justify-content:center;align-items:center} body div{width: 80%} body div span{text-transform:uppercase}",
    "*{transition: all 1s ease} body{background:#28334AFF;color: rgba(255,255,255, .9);display: flex;justify-content:center;align-items:center} body div{width: 80%} body div span{text-transform:uppercase} body div p {background-size: 0;}",
    "*{transition: all 1s ease} body{background:#28334AFF;color: rgba(255,255,255, .9);display: flex;justify-content:center;align-items:center} body div{width: 80%} body div p span{text-transform:uppercase} body div p {padding: 15px 10px;margin: 0px;background: rgba(252, 118, 106, .7);background-size: cover;}",
    "*{transition: all 1s ease} body{background:#28334AFF;color: rgba(255,255,255, .9);display: flex;justify-content:center;align-items:center} body div{width: 80%} body div p span{text-transform:uppercase} body div p {padding: 15px 10px;margin: 0px;background-size: cover;} body div p:hover{position:relative; bottom: 5px; left: 5px;background: rgba(252, 118, 106, .7); box-shadow: -5px 5px 2px rgba(0,0,0,.8)} body div::before{content: 'hover'; top: 0; right: 0; color: #fff; font-size: 12px;}",
    "*{transition: all 1s ease} body{background:#28334AFF;color: rgba(255,255,255, .9);display: flex;justify-content:center;align-items:center} body div{width: 80%} body div p span{text-transform:uppercase} body div p {padding: 15px 10px;margin: 0px;background-size: cover;} body div p:hover{position:relative; bottom: 5px; left: 5px;background: rgba(252, 118, 106, .7); box-shadow: -5px 5px 2px rgba(0,0,0,.8)} body div::before{content: 'hover'; top: 0; right: 0; color: #fff; font-size: 12px;}",
    "*{transition: all 1s ease} body{overflow: hidden;background:#28334AFF;color: rgba(255,255,255, .9);display: flex;justify-content:center;align-items:center} body div{width: 80%;} body div p span{text-transform:uppercase} body div p:nth-child(1), body div p:nth-child(2), body div p:nth-child(3) {position:absolute; padding: 0;margin: 0;background: rgba(252, 118, 106, .7); overflow: hidden;text-indent:100%; width: 80px; height: 6px; transform: rotateZ(90deg)}  body div p:nth-child(1) {top: 15%; left: 0px; animation: animateleft 5s linear; animation-fill-mode:forwards; -webkit-animation-fill-mode: forwards;} body div::after {content:'👑︁'; display: block; position: absolute; top: 0; left: 45%; animation: winnerwinnerchickendinner 6s linear; animation-fill-mode: forwards; -webkit-animation-fill-mode: forwards;} body div p:nth-child(2) {bottom: 15%; right: 0px; animation: animateright 5s linear; animation-fill-mode:forwards; -webkit-animation-fill-mode: forwards;} body div p:nth-child(3) {width:20px; height: 20px; border-radius: 50%; top: 50%; left: 45%; animation: animateball 5s linear;  animation-fill-mode:forwards; -webkit-animation-fill-mode: forwards;} @keyframes animateleft{0% {top: 15%;} 10% {top: 18%;} 30% {top: 10%;} 40% {top: 55%} 70% {top: 55%;} 100% {top: 80%}} @keyframes animateright{0% {bottom: 30%;} 10% {bottom: 35%;} 30% {bottom: 25%;} 40% {bottom: 35%} 70% {bottom: 80%} 97% {bottom:40%; transform: rotateZ(90deg)} 100% {transform: rotateZ(-90deg); bottom: -50%;}} @keyframes animateball {0% {top: 50%; left: 45%} 10% {top: 10%; left: 45px} 15% {top: 0; left: 17%;} 35% {top: 75%; left: calc(100% - 60px);} 45% {top: 90%; left: 65%} 65% {top: 50%; left: 45px} 100% {top: 20%; left: 110%; width: 20px; height: 20px;}} @keyframes winnerwinnerchickendinner {0% {top: 0; left: 45%; visibility: hidden;} 86.33% {top: 0; left: 45%; visibility: hidden;} 100% {top: 65%; left: 29px; visibility: visible;}}"
  ];

  var projectsDepth = 0;

  var loading = false;
  var collapsableMenuCollapsed = true;
  var screenWidth = window.innerWidth;
  var styleLevel = 0;
  
  var codeRoom = document.getElementById("ap-code-room");



$(document).ready(() => {
  handleProjectsChange(0);
  codeRoom.value = codeRoomCode;
  updateIframe();
  updateStylingLevel();
  updateWindowWidth();
})


function handleProjectsChange(x) {
    if(projectsDepth + x < 0 && x < 0)
      projectsDepth = ProjectsDataa.length-1;

    else if(projectsDepth + x > ProjectsDataa.length-1 && x > 0)
      projectsDepth = 0;
    else projectsDepth+= x;

    document.getElementById("title").innerHTML = ProjectsDataa[projectsDepth].title;
    document.getElementById("description").innerHTML = ProjectsDataa[projectsDepth].description;
    document.getElementById("role").innerHTML = ProjectsDataa[projectsDepth].role;
    document.getElementById("website").href = ProjectsDataa[projectsDepth].website;
};
  

  function updateWindowWidth() {
    const newWidth = window.innerWidth;
    screenWidth = newWidth;
    
    if(newWidth < 750) {
      $("#ap-menu").addClass("collapsed");
      $("#ap-toggleButton").addClass("active");
      $("#ap-box-container-code").addClass("code-collapsed");
      $("#ap-description-last").hide();
    } else {
      $("#ap-menu").removeClass("collapsed");
      $("#ap-toggleButton").removeClass("active");
      $("#ap-box-container-code").removeClass("code-collapsed");
      $("#ap-description-last").show();
    }
  };

  window.addEventListener("resize", updateWindowWidth);


  $("#ap-prettier").on("click", () => {
    styleLevel++;
    updateStylingLevel();
  });

  function updateStylingLevel() {
    const code = document.getElementById("codeShow").contentWindow.document;
    code.body.innerHTML = codeRoom.value;
    code.head.innerHTML = "<style>" + stylingLevels[styleLevel < 7 ? styleLevel : 6] + "</style>";
    $("#ap-prettier-description").html(styleLevel < 5 ? "Make it prettier" : styleLevel === 5 ? "What did I just witness" : styleLevel < 7 ? "With a little imagination you can turn anything into anything" : "Never enough, huh?");
    $("#ap-levels").width(styleLevel*10 + "px");
  };

  function updateIframe() {
    const code = document.getElementById("codeShow").contentWindow.document.body;
    code.innerHTML = codeRoom.value;
  }

  $("#ap-code-room").on("keyup", updateIframe);

  

