import React, {useState, useEffect, useRef} from "react";
import './App.css';
import { Loading } from "./components/Loading";
import { ProgressBar } from "./components/ProgressBar";
import { ProjectsData } from "./data/Projects";

const App = () => {

  var projectsDepth = 0;

  const [loading] = useState(false);
  const [collapsableMenuCollapsed, updateCollapsed] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [styleLevel, handleLevelChange] = useState(0);
  const title = useRef();
  const description = useRef();
  const role = useRef();
  const website = useRef();
  const [codeRoomCode, handleChange] = useState({code: "<div>\n\
  <p>\n\
   I am a self-taught young programmer that has a freelancing + working background of over 6 years.\n\
  </p>\n\
  <p>\n\
   Coding is <span>fun</span> because you can do whatever you want.\n\
  </p>\n\
  <p>\n\
    Anything can be done using the right tools. (or know where to look :) )\n\
  </p>\n\
 </div>"});
  const codeRoom = useRef();

  const stylingLevels = [
    "*{transition: all 1s ease} body{color: rgba(0,0,0, 1);display: flex;justify-content:start;align-items:start} body div{width: 100%}",
    "*{transition: all 1s ease} body{color: rgba(255,255,255, .9);display: flex;justify-content:center;align-items:center} body div{width: 80%} body div span{text-transform:uppercase}",
    "*{transition: all 1s ease} body{background:#28334AFF;color: rgba(255,255,255, .9);display: flex;justify-content:center;align-items:center} body div{width: 80%} body div span{text-transform:uppercase} body div p {background-size: 0;}",
    "*{transition: all 1s ease} body{background:#28334AFF;color: rgba(255,255,255, .9);display: flex;justify-content:center;align-items:center} body div{width: 80%} body div p span{text-transform:uppercase} body div p {padding: 15px 10px;margin: 0px;background: rgba(252, 118, 106, .7);background-size: cover;}",
    "*{transition: all 1s ease} body{background:#28334AFF;color: rgba(255,255,255, .9);display: flex;justify-content:center;align-items:center} body div{width: 80%} body div p span{text-transform:uppercase} body div p {padding: 15px 10px;margin: 0px;background-size: cover;} body div p:hover{position:relative; bottom: 5px; left: 5px;background: rgba(252, 118, 106, .7); box-shadow: -5px 5px 2px rgba(0,0,0,.8)} body div::before{content: 'hover'; top: 0; right: 0; color: #fff; font-size: 12px;}",
    "*{transition: all 1s ease} body{background:#28334AFF;color: rgba(255,255,255, .9);display: flex;justify-content:center;align-items:center} body div{width: 80%} body div p span{text-transform:uppercase} body div p {padding: 15px 10px;margin: 0px;background-size: cover;} body div p:hover{position:relative; bottom: 5px; left: 5px;background: rgba(252, 118, 106, .7); box-shadow: -5px 5px 2px rgba(0,0,0,.8)} body div::before{content: 'hover'; top: 0; right: 0; color: #fff; font-size: 12px;}",
    "*{transition: all 1s ease} body{overflow: hidden;background:#28334AFF;color: rgba(255,255,255, .9);display: flex;justify-content:center;align-items:center} body div{width: 80%;} body div p span{text-transform:uppercase} body div p:nth-child(1), body div p:nth-child(2), body div p:nth-child(3) {position:absolute; padding: 0;margin: 0;background: rgba(252, 118, 106, .7); overflow: hidden;text-indent:100%; width: 80px; height: 6px; transform: rotateZ(90deg)}  body div p:nth-child(1) {top: 15%; left: 0px; animation: animateleft 5s linear; animation-fill-mode:forwards; -webkit-animation-fill-mode: forwards;} body div::after {content:'👑︁'; display: block; position: absolute; top: 0; left: 45%; animation: winnerwinnerchickendinner 6s linear; animation-fill-mode: forwards; -webkit-animation-fill-mode: forwards;} body div p:nth-child(2) {bottom: 15%; right: 0px; animation: animateright 5s linear; animation-fill-mode:forwards; -webkit-animation-fill-mode: forwards;} body div p:nth-child(3) {width:20px; height: 20px; border-radius: 50%; top: 50%; left: 45%; animation: animateball 5s linear;  animation-fill-mode:forwards; -webkit-animation-fill-mode: forwards;} @keyframes animateleft{0% {top: 15%;} 10% {top: 18%;} 30% {top: 10%;} 40% {top: 55%} 70% {top: 55%;} 100% {top: 80%}} @keyframes animateright{0% {bottom: 30%;} 10% {bottom: 35%;} 30% {bottom: 25%;} 40% {bottom: 35%} 70% {bottom: 80%} 97% {bottom:40%; transform: rotateZ(90deg)} 100% {transform: rotateZ(-90deg); bottom: -50%;}} @keyframes animateball {0% {top: 50%; left: 45%} 10% {top: 10%; left: 45px} 15% {top: 0; left: 17%;} 35% {top: 75%; left: calc(100% - 60px);} 45% {top: 90%; left: 65%} 65% {top: 50%; left: 45px} 100% {top: 20%; left: 110%; width: 20px; height: 20px;}} @keyframes winnerwinnerchickendinner {0% {top: 0; left: 45%; visibility: hidden;} 86.33% {top: 0; left: 45%; visibility: hidden;} 100% {top: 65%; left: 29px; visibility: visible;}}"
  ]

  const ProjectsDataa = ProjectsData;

  function handleProjectsChange(x) {
    if(projectsDepth + x < 0 && x < 0)
      projectsDepth = ProjectsDataa.length-1;

    else if(projectsDepth + x > ProjectsDataa.length-1 && x > 0)
      projectsDepth = 0;
    else projectsDepth+= x;

    title.current.innerHTML = ProjectsDataa[projectsDepth].title;
    description.current.innerHTML = ProjectsDataa[projectsDepth].description;
    role.current.innerHTML = ProjectsDataa[projectsDepth].role;
    website.current.href = ProjectsDataa[projectsDepth].website;
  };

  useEffect(() => {
    title.current.innerHTML = ProjectsDataa[projectsDepth].title;
    description.current.innerHTML = ProjectsDataa[projectsDepth].description;
    role.current.innerHTML = ProjectsDataa[projectsDepth].role;
    website.current.href = ProjectsDataa[projectsDepth].website;
  }, []);

  useEffect(() => {
    const updateWindowWidth = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    }
  }, []);

  useEffect(() => {
    const code = document.getElementById("codeShow").contentWindow.document;
    code.body.innerHTML = codeRoom.current.value;
    code.head.innerHTML = "<style>" + stylingLevels[styleLevel < 7 ? styleLevel : 6] + "</style>";
  })

  useEffect(() => {
    const updateIframe = () => {
      const code = document.getElementById("codeShow").contentWindow.document.body;
      code.innerHTML = codeRoom.current.value;
    }

    codeRoom.current.addEventListener("keyup", updateIframe);

    return () => {
      codeRoom.current.removeEventListener("keyup", updateIframe);
    }
  })

  return (
    <>
      {loading && <Loading/>}
      <header class="ap-navi">
        <div class="logo">
          <p><span>A</span><span>P<span>escaru</span></span></p>
          <span></span>
          <span></span>
        </div>
        <ul class={width < 750 ? "collapsed" : ""}>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <ul class={collapsableMenuCollapsed ? "ap-collapsed-menu" : "ap-collapsed-menu active"}>
          <li><a onClick={() => updateCollapsed(collapsableMenuCollapsed => !collapsableMenuCollapsed)} href="#about">About<span></span><span></span></a></li>
          <li><a onClick={() => updateCollapsed(collapsableMenuCollapsed => !collapsableMenuCollapsed)} href="#skills">Skills<span></span><span></span></a></li>
          <li><a onClick={() => updateCollapsed(collapsableMenuCollapsed => !collapsableMenuCollapsed)} href="#projects">Projects<span></span><span></span></a></li>
          <li><a onClick={() => updateCollapsed(collapsableMenuCollapsed => !collapsableMenuCollapsed)} href="#contact">Contact<span></span><span></span></a></li>
        </ul>
        <button 
        onClick={() => updateCollapsed(collapsableMenuCollapsed => !collapsableMenuCollapsed)} 
        class={width < 750 ? "ap-toggleButton active" : "ap-toggleButton"}>menu<span></span><span></span></button>
      </header>
      <div class="ap-container">
        <div id="about" class="ap-content-box">
          <div class="ap-title">
            <p>Who am I ?</p>
          </div>

          
          <div class={width < 750 ? "ap-box-container code-collapsed" : "ap-box-container"}>
            <div class="ap-two-part ap-left">
              <textarea 
                id="ap-code-room"
                class="ap-code-room"
                name="ap-code-room-html"
                value={codeRoomCode.code}
                onChange={handleChange}
                ref={codeRoom}
                spellCheck="false">
                  
              </textarea>
            </div>

            <div class="ap-two-part ap-right">
              <iframe id="codeShow" title="codeShow" class="ap-code-frame">

              </iframe>
              <button
               class="ap-prettier"
               onClick={() => handleLevelChange(styleLevel => styleLevel +1)}>
                 <span>{styleLevel < 5 ? "Make it prettier" : styleLevel === 5 ? "What did I just witness" : styleLevel < 7 ? "With a little imagination you can turn anything into anything" : "Never enough, huh?"}</span>
                 <div class="ap-levels" style={{width: styleLevel*10 + "px"}}>
                   <div class="ap-level ap-level-1"></div>
                   <div class="ap-level ap-level-2"></div>
                   <div class="ap-level ap-level-3"></div>
                   <div class="ap-level ap-level-4"></div>
                 </div>
              </button>
            </div>
          </div>
        </div>

        <div id="skills" class="ap-content-box">
          <div class="ap-title ap-3d-big">
            What am I good at ?
          </div>

          <div class="ap-box-container">
            <div class="ap-description-tree-part ap-description-left">
              <div class="ap-skills-description">
                <p>PHP</p>
                <p>Laravel</p>
                <p>JavaScript</p>
                <p>MySQL</p>
                <p>React.js</p>
                <p>Vue.js</p>
                <p>CSS</p>
                <p>Sass</p>
                <p>Html</p>
                <p>Angular.js</p>
                <p>Elastic/ Algolia</p>
                <p>Node.js</p>
                <p>C#</p>
                <p>C/ C++</p>
                <p>Python</p>
                <p>Java</p>
                <p>Unity</p>
                <p>Photoshop</p>
                <p>3D Modeling</p>
                <p>Microsoft Office</p>
              </div>
            </div>
            <div class="ap-description-tree-part ap-description-middle">
              <ProgressBar percent={85}/>
              <ProgressBar percent={70}/>
              <ProgressBar percent={85}/>
              <ProgressBar percent={75}/>
              <ProgressBar percent={60}/>
              <ProgressBar percent={45}/>
              <ProgressBar percent={95}/>
              <ProgressBar percent={40}/>
              <ProgressBar percent={95}/>
              <ProgressBar percent={25}/>
              <ProgressBar percent={75}/>
              <ProgressBar percent={60}/>
              <ProgressBar percent={40}/>
              <ProgressBar percent={45}/>
              <ProgressBar percent={20}/>
              <ProgressBar percent={30}/>
              <ProgressBar percent={45}/>
              <ProgressBar percent={85}/>
              <ProgressBar percent={65}/>
              <ProgressBar percent={95}/>
            </div>
            {width > 750 &&
            <div class="ap-description-tree-part ap-description-last">
              <h1>
                Languages
              </h1>
              <p>
                Thoughout my career i tried a lot of different programming languages. During my last employment I only worked in Laravel (my first framework), learning that my ways of coding were a bit old.
              </p>
              <p>
                Although coding has been simplifying over the years, I still prefer the good old Vanilla type of code (an example would be this site's styiling)
              </p>
            </div>
            }
          </div>
        </div>

        <div id="projects" class="ap-content-box ap-100">
          <div class="ap-title">
            Projects
          </div>

          <div class="ap-project-slider">
            <div class="ap-slider-card">
              <div class="ap-card-title" ref={title}>
              </div>
              
              <div class="ap-placeholder">Description</div>
              <div class="ap-card-description" ref={description}>
              </div>

              <div class="ap-placeholder">My role</div>
              <div class="ap-card-role" ref={role}>
              </div>

              <div class="ap-card-preview">
                <a ref={website} target="_blank" rel="noreferer"> Preview <span></span><span></span></a>
              </div>
            </div>
            

            <button id="projectChangeDown" onClick={() => {handleProjectsChange(-1)}} class="ap-slider ap-slide-left"><span></span></button>
            <button id="projectChangeUp" onClick={() => {handleProjectsChange(1)}} class="ap-slider ap-slide-right"><span></span></button>
          </div>
        </div>

        <div id="contact" class="ap-content-box ap-black-bg">
          <div class="ap-title">
            Contact
          </div>

          <div class="ap-contact-box">
            <div class="ap-contact-titles">
              <p>Email</p>
              <p>Github</p>
              <p>Codepen</p>
              <p>Instagram</p>
            </div>
            <div class="ap-contact-info">
              <p>pesalexandru@gmail.com</p>
              <p>@apescaru</p>
              <p>@ArmaanZ</p>
              <p>@pescarualexandru</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
 