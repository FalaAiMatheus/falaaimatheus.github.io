const courses = [
    {
        title: 'PHP 7 Completo - Curso do Desenvolvedor Web',
        plataform: 'Udemy',
        emissionDate: 'Verificação emitida em out de 2023',
        skills: 'Competências: PHP · CSS · HTML5 · MySQL · Banco de dados'
    },
    {
        title: 'Treinamento Redes 5G - Softex',
        plataform: 'Universidade Estadual do Ceará',
        emissionDate: 'Verificação emitida em jul de 2023'
    },
    {
        title: 'Banco de Dados SQL',
        plataform: 'Microlins',
        emissionDate: 'Verificação emitida em fev de 2022'
    },
    {
        title: 'Programação C# Visual Studio (Basíco ao Avançado)',
        plataform: 'Microlins',
        emissionDate: 'Verificação emitida em fev de 2022'
    },
    {
        title: 'Lógica de programação',
        plataform: 'Microlins',
        emissionDate: 'Verificação emitida em jul de 2021'
    },
    {
        title: 'Pacote Office Completo - Microsoft Word, Excel e PowerpointL',
        plataform: 'Microlins',
        emissionDate: 'Verificação emitida em jul de 2021'
    },
]
const titleCourse = document.querySelectorAll('.card-title')
const plataformCourse = document.querySelectorAll('.card-subtitle') 
const emissionDateCourse = document.querySelectorAll('.card-text')

courses.forEach((item, i) =>{
    titleCourse[i].innerHTML = item.title
    plataformCourse[i].innerHTML = item.plataform
    emissionDateCourse[i].innerHTML = item.emissionDate
})