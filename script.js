
let projects = [
    {img: "/images/projects/hamburguerShop.jpg", content: "Aplicação de uma hamburgueria desenvovilvida em .Net, Javascript, SQL, HTML e CSS.", link: "https://www.youtube.com/"},
    {img: "/images/projects/macthGame.jpg", content:"Simples e divertido jogo da memória desenvolvido em Javascript, HTML e CSS.", link:"https://www.google.com/"}
];
let projectsControl = 0;
showCaseMateralize(projects[projectsControl]);

function showCaseMateralize(obj)
{
    let img = document.getElementById('showCaseImage');
    let content = document.getElementById('showCaseContent');
    let button = document.getElementById('projectButton');

    img.setAttribute("src", obj.img);
    content.innerText = obj.content;
    button.setAttribute("href", obj.link);
};

function showCaseControl(prm)
{
    if (projectsControl == 0 && prm == 0) 
    {
        projectsControl = (projects.length - 1);
        showCaseMateralize(projects[projectsControl]);
    } else if (projectsControl == (projects.length - 1) && prm == 1)
    {
        projectsControl = 0;
        showCaseMateralize(projects[projectsControl]);
    } else if (prm == 0) {
        projectsControl -= 1;
        showCaseMateralize(projects[projectsControl]);
    } else {
        projectsControl += 1;
        showCaseMateralize(projects[projectsControl]);
    };
}

