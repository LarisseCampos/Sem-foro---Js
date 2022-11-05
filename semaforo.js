const img = document.getElementById( 'img' );
const botoes = document.getElementById( 'botoes');
let corIndex = 0;
let intervalId = null;

const luzDeTrafego = ( event ) =>{
    pararAutomatico();
    ligar[event.target.id](); 
}

const proximoIndex = () =>{
    corIndex = corIndex < 2 ? ++corIndex : 0;    
}

const changeColor = () =>{
    const cores = ['red','yellow', 'green'];
    const cor = cores [ corIndex ];
    ligar[cor]();
    proximoIndex();
}

const pararAutomatico = () =>{
    clearInterval ( intervalId );
}

const ligar ={
    'red':      () => img.src = './img/vermelho.png',
    'yellow':   () => img.src = './img/amarelo.png',
    'green':    () => img.src = './img/verde.png',
    'automatico': () => intervalId = setInterval( changeColor, 1000 )
}

botoes.addEventListener('click', luzDeTrafego);