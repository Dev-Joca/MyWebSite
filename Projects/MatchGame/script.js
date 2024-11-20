
var cardA= null;
var cardB= null;

var correctSound = document.getElementById('correctSound');
var wrongSound = document.getElementById('wrongSound');
// Array dos cards
const cards = [
   {id: 0, name:'Card-01_A', img:'./images/01.jpg'},
   {id: 1, name:'Card-01_B', img:'./images/01.jpg'},
   {id: 2, name:'Card-02_A', img:'./images/02.jpg'},
   {id: 3, name:'Card-02_B', img:'./images/02.jpg'},
   {id: 4, name:'Card-03_A', img:'./images/03.jpg'},
   {id: 5, name:'Card-03_B', img:'./images/03.jpg'},
   {id: 6, name:'Card-04_A', img:'./images/04.jpg'},
   {id: 7, name:'Card-04_B', img:'./images/04.jpg'},
   {id: 8, name:'Card-05_A', img:'./images/05.jpg'},
   {id: 9, name:'Card-05_B', img:'./images/05.jpg'},
   {id: 10, name:'Card-06_A', img:'./images/06.jpg'},
   {id: 11, name:'Card-06_B', img:'./images/06.jpg'},
   {id: 12, name:'Card-07_A', img:'./images/07.jpg'},
   {id: 13, name:'Card-07_B', img:'./images/07.jpg'},
   {id: 14, name:'Card-08_A', img:'./images/08.jpg'},
   {id: 15, name:'Card-08_B', img:'./images/08.jpg'},
   {id: 16, name:'Card-09_A', img:'./images/09.jpg'},
   {id: 17, name:'Card-09_B', img:'./images/09.jpg'}
];

// Função para gerar aleatoriamente o indice dos cards.
function index (obj){
   for(i=0; i<obj.length; i++){
      obj[i].index= parseInt (Math.random()*99);
   }
};

// Função de ordenação dos cards
function order (a,b){
   return a.index - b.index
}

// Função de impressão
function print (obj){
   for(i=0; i<obj.length; i++){
      let board = document.getElementById('board');
      let newCard =  `<div id="${obj[i].id}" class="slotCard" onclick="change(id)"></div>`;   
      board.innerHTML +=  newCard;      
   }
}

//Função virar o card
function change(prm){

   if (cardA != null && cardA.id == prm){
      alert ('Card  já selecionado! Selecione outro card');
   } else if (cardA == null){
      cardA = document.getElementById(prm);
      cardA.style.backgroundImage = `url(${cards[prm].img})`;
   } else if (cardB == null){
      cardB = document.getElementById(prm);
      cardB.style.backgroundImage = `url(${cards[prm].img})`;

      // Etapa verificação dos Cards
      setTimeout(function (objA,objB){
         objA = cards[cardA.id].img;
         objB = cards[cardB.id].img;
         if (objA === objB){
            cardA.setAttribute('onclick', ' ');
            cardB.setAttribute('onclick', ' ');
            cardA = null;
            cardB = null;
            correctSound.play();
         }else{
            comeBack(cardA,cardB);
            cardA = null;
            cardB = null;
            wrongSound.play();
         }
      },500);      
   }
}

// Função voltar card
function comeBack(objA, objB){
   objA.style.backgroundImage = 'url(./images/10.jpg)';
   objB.style.backgroundImage = 'url(./images/10.jpg)';
}

// Função para iniciar o jogo
function play(obj){
   document.getElementById(obj).style.display = 'none';
   document.getElementById('board').style.display = 'grid';
   index(cards);
   print (cards.sort(order));
}

// Função para reiniciar o jogo
function refresh()
{
   cardA = null;
   document.getElementById('board').innerHTML="";
   index(cards);
   print (cards.sort(order));
}