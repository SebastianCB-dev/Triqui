const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');
const button6 = document.querySelector('#button6');
const button7 = document.querySelector('#button7');
const button8 = document.querySelector('#button8');
const button9 = document.querySelector('#button9');

const button1_em = document.querySelector('#button1 em');
const button2_em = document.querySelector('#button2 em');
const button3_em = document.querySelector('#button3 em');
const button4_em = document.querySelector('#button4 em');
const button5_em = document.querySelector('#button5 em');
const button6_em = document.querySelector('#button6 em');
const button7_em = document.querySelector('#button7 em');
const button8_em = document.querySelector('#button8 em');
const button9_em = document.querySelector('#button9 em');

const info_player_em = document.querySelector('#turn em');

const button_reset = document.querySelector('#reset-game');

let playerCurrently = 1;

function desactivarBoton(boton) {
    boton.setAttribute('disabled', '');
}

function activarMecanismo(boton, em) {

    if (playerCurrently === 1) {
        em.classList.remove(boton.id);
        em.classList.add('ion-ios-circle-outline');
        desactivarBoton(boton);
    } else if (playerCurrently === 2) {
        em.classList.remove(boton.id);
        em.classList.add('ion-ios-close-empty');
        desactivarBoton(boton);
    }
}

function reiniciarBotones() {
    button1_em.classList.remove('ion-ios-circle-outline');
    button2_em.classList.remove('ion-ios-circle-outline');
    button3_em.classList.remove('ion-ios-circle-outline');
    button4_em.classList.remove('ion-ios-circle-outline');
    button5_em.classList.remove('ion-ios-circle-outline');
    button6_em.classList.remove('ion-ios-circle-outline');
    button7_em.classList.remove('ion-ios-circle-outline');
    button8_em.classList.remove('ion-ios-circle-outline');
    button9_em.classList.remove('ion-ios-circle-outline');
    button1_em.classList.remove('ion-ios-close-empty');
    button2_em.classList.remove('ion-ios-close-empty');
    button3_em.classList.remove('ion-ios-close-empty');
    button4_em.classList.remove('ion-ios-close-empty');
    button5_em.classList.remove('ion-ios-close-empty');
    button6_em.classList.remove('ion-ios-close-empty');
    button7_em.classList.remove('ion-ios-close-empty');
    button8_em.classList.remove('ion-ios-close-empty');
    button9_em.classList.remove('ion-ios-close-empty');
    button1_em.classList.add('button1');
    button2_em.classList.add('button2');
    button3_em.classList.add('button3');
    button4_em.classList.add('button4');
    button5_em.classList.add('button5');
    button6_em.classList.add('button6');
    button7_em.classList.add('button7');
    button8_em.classList.add('button8');
    button9_em.classList.add('button9');

    button1.removeAttribute('disabled');
    button2.removeAttribute('disabled');
    button3.removeAttribute('disabled');
    button4.removeAttribute('disabled');
    button5.removeAttribute('disabled');
    button6.removeAttribute('disabled');
    button7.removeAttribute('disabled');
    button8.removeAttribute('disabled');
    button9.removeAttribute('disabled');

    info_player_em.classList.remove('ion-ios-close-empty');
    info_player_em.classList.add('ion-ios-circle-outline');
}
const bloquearBotones = ()=> {
    button1.setAttribute('disabled', true);
    button2.setAttribute('disabled', true);
    button3.setAttribute('disabled', true);
    button4.setAttribute('disabled', true);
    button5.setAttribute('disabled', true);
    button6.setAttribute('disabled', true);
    button7.setAttribute('disabled', true);
    button8.setAttribute('disabled', true);
    button9.setAttribute('disabled', true);
}
function validar() {
    //Arriba horizontal
    if (button1_em.classList.value === button2_em.classList.value && button2_em.classList.value == button3_em.classList.value) {
        if (button1_em.classList.value === "ion-ios-circle-outline") {
            alert('Jugador uno gano!');
        } else {
            alert('Jugador dos gano!');
        }
        bloquearBotones();
        playerCurrently = 1;
    }
    //Izquierda vertical
    else if (button1_em.classList.value === button4_em.classList.value && button4_em.classList.value == button7_em.classList.value) {
        if (button4_em.classList.value === "ion-ios-circle-outline") {
            alert('Jugador uno gano!');
        } else {
            alert('Jugador dos gano!');
        }
        bloquearBotones();
        playerCurrently = 1;
    }
    //Centro Vertical
    else if (button2_em.classList.value === button5_em.classList.value && button5_em.classList.value == button8_em.classList.value) {
        if (button2_em.classList.value === "ion-ios-circle-outline") {
            alert('Jugador uno gano!');
        } else {
            alert('Jugador dos gano!');
        }
        bloquearBotones();
        playerCurrently = 1;
    }
    //Derecha Vertical
    else if (button3_em.classList.value === button6_em.classList.value && button6_em.classList.value == button9_em.classList.value) {
        if (button3_em.classList.value === "ion-ios-circle-outline") {
            alert('Jugador uno gano!');
        } else {
            alert('Jugador dos gano!');
        }
        bloquearBotones();
        playerCurrently = 1;
    }
    //Abajo Horizontal
    else if (button7_em.classList.value === button8_em.classList.value && button8_em.classList.value == button9_em.classList.value) {
        if (button7_em.classList.value === "ion-ios-circle-outline") {
            alert('Jugador uno gano!');
        } else {
            alert('Jugador dos gano!');
        }
        bloquearBotones();
        playerCurrently = 1;
    }
    //Diagonal Principal
    else if (button1_em.classList.value === button5_em.classList.value && button5_em.classList.value == button9_em.classList.value) {
        if (button5_em.classList.value === "ion-ios-circle-outline") {
            alert('Jugador uno gano!');
        } else {
            alert('Jugador dos gano!');
        }
        bloquearBotones();
        playerCurrently = 1;
    }
    //Diagonal Secundaria
    else if (button3_em.classList.value === button5_em.classList.value && button5_em.classList.value == button7_em.classList.value) {
        if (button3_em.classList.value === "ion-ios-close-empty") {
            alert('Jugador dos gano!');
        } else {
            alert('Jugador uno gano!');
        }
        bloquearBotones();
        playerCurrently = 1;
    }
    //Centro horizontal
    else if (button4_em.classList.value === button5_em.classList.value && button5_em.classList.value == button6_em.classList.value) {
        if (button4_em.classList.value === "ion-ios-close-empty") {
            alert('Jugador dos gano!');
        } else {
            alert('Jugador uno gano!');
        }
        bloquearBotones();
        playerCurrently = 1;
    }
    //Empate
    else {
        validarEmpate();
    }
}
//Validar empate
function validarEmpate(){
    if(button1_em.className != 'button1' && button2_em.className != 'button2' && button3_em.className != 'button3' && button4_em.className != 'button4' && button5_em.className != 'button5' && button6_em.className != 'button6' && button7_em.className != 'button7' && button8_em.className != 'button8' && button9_em.className != 'button9'){
        alert('Hubo empate!');        
        bloquearBotones();
        playerCurrently = 1;
    }
    
}
button_reset.addEventListener('click', () => {
    playerCurrently = 1;
    reiniciarBotones();
});
button1.addEventListener('click', () => {
    activarMecanismo(button1, button1_em);
    if (playerCurrently == 1) {
        playerCurrently = 2;
        info_player_em.classList.remove('ion-ios-circle-outline');
        info_player_em.classList.add('ion-ios-close-empty');
        validar();
    } else {
        playerCurrently = 1;
        info_player_em.classList.remove('ion-ios-close-empty');
        info_player_em.classList.add('ion-ios-circle-outline');
        validar();
    }
});

button2.addEventListener('click', () => {
    activarMecanismo(button2, button2_em);
    if (playerCurrently == 1) {
        playerCurrently = 2;
        info_player_em.classList.remove('ion-ios-circle-outline');
        info_player_em.classList.add('ion-ios-close-empty');
        validar();
    } else {
        playerCurrently = 1;
        info_player_em.classList.remove('ion-ios-close-empty');
        info_player_em.classList.add('ion-ios-circle-outline');
        validar();
    }
});

button3.addEventListener('click', () => {
    activarMecanismo(button3, button3_em);
    if (playerCurrently == 1) {
        playerCurrently = 2;
        info_player_em.classList.remove('ion-ios-circle-outline');
        info_player_em.classList.add('ion-ios-close-empty');
        validar();
    } else {
        playerCurrently = 1;
        info_player_em.classList.remove('ion-ios-close-empty');
        info_player_em.classList.add('ion-ios-circle-outline');
        validar();
    }
});

button4.addEventListener('click', () => {
    activarMecanismo(button4, button4_em);
    if (playerCurrently == 1) {
        playerCurrently = 2;
        info_player_em.classList.remove('ion-ios-circle-outline');
        info_player_em.classList.add('ion-ios-close-empty');
        validar();
    } else {
        playerCurrently = 1;
        info_player_em.classList.remove('ion-ios-close-empty');
        info_player_em.classList.add('ion-ios-circle-outline');
        validar();
    }
});

button5.addEventListener('click', () => {
    activarMecanismo(button5, button5_em);
    if (playerCurrently == 1) {
        playerCurrently = 2;
        info_player_em.classList.remove('ion-ios-circle-outline');
        info_player_em.classList.add('ion-ios-close-empty');
        validar();
    } else {
        playerCurrently = 1;
        info_player_em.classList.remove('ion-ios-close-empty');
        info_player_em.classList.add('ion-ios-circle-outline');
        validar();
    }
});

button6.addEventListener('click', () => {
    activarMecanismo(button6, button6_em);
    if (playerCurrently == 1) {
        playerCurrently = 2;
        info_player_em.classList.remove('ion-ios-circle-outline');
        info_player_em.classList.add('ion-ios-close-empty');
        validar();
    } else {
        playerCurrently = 1;
        info_player_em.classList.remove('ion-ios-close-empty');
        info_player_em.classList.add('ion-ios-circle-outline');
        validar();
    }
});

button7.addEventListener('click', () => {
    activarMecanismo(button7, button7_em);
    if (playerCurrently == 1) {
        playerCurrently = 2;
        info_player_em.classList.remove('ion-ios-circle-outline');
        info_player_em.classList.add('ion-ios-close-empty');
        validar();
    } else {
        playerCurrently = 1;
        info_player_em.classList.remove('ion-ios-close-empty');
        info_player_em.classList.add('ion-ios-circle-outline');
        validar();
    }
});

button8.addEventListener('click', () => {
    activarMecanismo(button8, button8_em);
    if (playerCurrently == 1) {
        playerCurrently = 2;
        info_player_em.classList.remove('ion-ios-circle-outline');
        info_player_em.classList.add('ion-ios-close-empty');
        validar();
    } else {
        playerCurrently = 1;
        info_player_em.classList.remove('ion-ios-close-empty');
        info_player_em.classList.add('ion-ios-circle-outline');
        validar();
    }
});

button9.addEventListener('click', () => {
    activarMecanismo(button9, button9_em);
    if (playerCurrently == 1) {
        playerCurrently = 2;
        info_player_em.classList.remove('ion-ios-circle-outline');
        info_player_em.classList.add('ion-ios-close-empty');
        validar();
    } else {
        playerCurrently = 1;
        info_player_em.classList.remove('ion-ios-close-empty');
        info_player_em.classList.add('ion-ios-circle-outline');
        validar();
    }
});