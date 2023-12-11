import { projects } from "./infos.js"
import { courses } from "./infos.js"

const titleCourse = document.querySelectorAll('.card-title')
const plataformCourse = document.querySelectorAll('.card-subtitle') 
const emissionDateCourse = document.querySelectorAll('.card-text')

courses.forEach((item, i) =>{
    titleCourse[i].innerHTML = item.title
    plataformCourse[i].innerHTML = item.plataform
    emissionDateCourse[i].innerHTML = item.emissionDate
})

const projectsContainer = document.getElementById('container-project')

projects.forEach((item) => {

    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="card">
        <div class="card-body">
            <h3 class="project-title">${item.name}</h3>
            <hr>
            <p class="project-text">${item.description}</p>
            <a href="${item.repositore}" class="repositore">Repositrio</a>
            <hr>
            <span class="technologies fw-bold">Tecnologias: ${item.tecnologies}</span>
        </div>
    </div>
    `;
    projectsContainer.appendChild(newDiv)
});

function stickyHeader(){
    const header = document.querySelector('.header');

    header.classList.toggle('fixed', window.scrollY > 0);
}

window.addEventListener('scroll', stickyHeader)

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(e){
    e.preventDefault()
    const nav = document.querySelector('nav')
    const links = document.querySelectorAll('a')
    if(e.type === "touchstart") 
    nav.classList.toggle('active');

    links.forEach((item,i) =>{
        links[i].addEventListener('click', () =>{
            nav.classList.remove('')
        })
    })
}

btnMobile.addEventListener("click", toggleMenu);

btnMobile.addEventListener("touchstart", toggleMenu);