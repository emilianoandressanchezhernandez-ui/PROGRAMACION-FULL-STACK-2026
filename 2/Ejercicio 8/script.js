// 1. BANCO DE DATOS: 15 NIVELES ALEATORIOS
const levelPool = [
    [{p:"CLAVE", h:"Contraseña básica."}, {p:"LLAVE", h:"Herramienta de acceso."}],
    [{p:"REDES", h:"Nodos interconectados."}, {p:"DATOS", h:"Unidades de información."}],
    [{p:"BANCO", h:"Entidad financiera objetivo."}, {p:"CIFRA", h:"Número o código secreto."}],
    [{p:"LOGIN", h:"Puerta de entrada."}, {p:"ADMIN", h:"Usuario con privilegios."}],
    [{p:"BOVEDA", h:"Caja fuerte blindada."}, {p:"TESORO", h:"El botín del servidor."}],
    [{p:"NUCLEO", h:"El corazón del sistema."}, {p:"KERNEL", h:"Capa baja del software."}],
    [{p:"CODIGO", h:"Instrucciones lógicas."}, {p:"FUENTE", h:"Origen del software."}],
    [{p:"ESCUDO", h:"Defensa del firewall."}, {p:"ENLACE", h:"Conexión entre servidores."}],
    [{p:"BINARIO", h:"Base de la computación."}, {p:"LOGICA", h:"Razonamiento de máquina."}],
    [{p:"PIRATA", h:"Navegante de la red."}, {p:"HACKER", h:"Experto en intrusión."}],
    [{p:"MATRIZ", h:"Realidad simulada."}, {p:"ORIGEN", h:"Punto de inicio del rastro."}],
    [{p:"SOMBRA", h:"Infiltrado sin rastro."}, {p:"SIGILO", h:"Acción sin ser detectado."}],
    [{p:"PUENTE", h:"Salto entre redes locales."}, {p:"TUNEL", h:"Canal de datos privado."}],
    [{p:"VIRTUAL", h:"Existencia no física."}, {p:"ESPEJO", h:"Servidor de respaldo."}],
    [{p:"LIBERTAD", h:"El fin del protocolo."}, {p:"ENIGMA", h:"El misterio resuelto."}]
];

// 2. MOTOR DE SONIDO (Web Audio API)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSound(freq, type, duration, vol = 0.1) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(vol, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
}

const sfx = {
    type: () => playSound(800, 'square', 0.05, 0.05),
    success: () => { playSound(600, 'sine', 0.2); setTimeout(()=>playSound(800, 'sine', 0.3), 100); },
    error: () => { playSound(150, 'sawtooth', 0.4, 0.2); },
    cmd: () => playSound(1200, 'sine', 0.1, 0.05),
    victory: () => { [440, 554, 659, 880].forEach((f, i) => setTimeout(()=>playSound(f, 'triangle', 0.5), i*150)); }
};

// 3. ESTADO DEL JUEGO
let currentLevel = 0;
let attempts = 5;
let timeLeft = 60;
let activePass = "";
let timerInterval;
const SYMBOLS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

const elements = {
    intro: document.getElementById('intro-screen'),
    game: document.getElementById('game-screen'),
    start: document.getElementById('start-mission'),
    scramble: document.getElementById('scramble-text'),
    hint: document.getElementById('hint-box'),
    level: document.getElementById('level-counter'),
    timer: document.getElementById('timer'),
    input: document.getElementById('terminal-input'),
    submit: document.getElementById('submit-btn'),
    feedback: document.getElementById('feedback'),
    meter: document.getElementById('detection-meter'),
    fail: document.getElementById('fail-overlay')
};

// 4. LÓGICA
elements.start.addEventListener('click', () => {
    audioCtx.resume();
    elements.intro.classList.add('d-none');
    elements.game.classList.remove('d-none');
    updateDetectionUI();
    loadLevel();
    startTimer();
    sfx.success();
});

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) triggerGameOver();
    }, 1000);
}

function updateTimerDisplay() {
    let m = Math.floor(timeLeft / 60);
    let s = timeLeft % 60;
    elements.timer.innerText = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    if (timeLeft < 15) elements.timer.classList.add('text-warning');
    else elements.timer.classList.remove('text-warning');
}

function loadLevel() {
    elements.feedback.innerText = "";
    if (currentLevel < levelPool.length) {
        timeLeft = 60; // Reinicio de tiempo por nivel
        updateTimerDisplay();
        
        const pool = levelPool[currentLevel];
        const selection = pool[Math.floor(Math.random() * pool.length)];
        activePass = selection.p;
        
        elements.level.innerText = `CAPA: ${String(currentLevel + 1).padStart(2, '0')}/15`;
        elements.hint.innerText = `Pista: ${selection.h}`;
        runScramble(activePass.length);
        elements.input.value = "";
        elements.input.focus();
    } else {
        victory();
    }
}

function runScramble(len) {
    let i = 0;
    const interval = setInterval(() => {
        let res = "";
        for(let j=0; j<len; j++) res += SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
        elements.scramble.innerText = res;
        i++;
        if(i > 10) clearInterval(interval);
    }, 60);
}

function validate() {
    const val = elements.input.value.toUpperCase().trim();
    
    // COMANDOS OCULTOS
    if (val === "FREEZE") {
        clearInterval(timerInterval);
        sfx.cmd();
        elements.feedback.innerText = "CRONO CONGELADO 10S";
        setTimeout(startTimer, 10000);
        elements.input.value = ""; return;
    }
    if (val === "BYPASS") {
        attempts--;
        sfx.error();
        updateDetectionUI();
        currentLevel++;
        loadLevel();
        return;
    }
    if (val === "DECRYPT") {
        timeLeft -= 15;
        sfx.cmd();
        elements.feedback.innerText = `INIT: ${activePass[0]} / END: ${activePass.slice(-1)}`;
        elements.input.value = ""; return;
    }

    // LÓGICA NORMAL
    if (val === activePass) {
        sfx.success();
        elements.feedback.innerText = "ACCESO PERMITIDO";
        elements.feedback.style.color = "var(--neon-green)";
        currentLevel++;
        setTimeout(loadLevel, 800);
    } else {
        attempts--;
        timeLeft -= 10; // PENALIZACIÓN DE TIEMPO
        sfx.error();
        updateDetectionUI();
        updateTimerDisplay();
        elements.feedback.innerText = "ANOMALÍA DETECTADA: -10s";
        elements.feedback.style.color = "#ff3131";
        if (attempts <= 0) triggerGameOver();
    }
    elements.input.value = "";
}

function updateDetectionUI() {
    elements.meter.innerHTML = "";
    for(let i=0; i<attempts; i++) {
        elements.meter.innerHTML += '<i class="fa-solid fa-triangle-exclamation"></i>';
    }
}

function triggerGameOver() {
    clearInterval(timerInterval);
    sfx.error();
    elements.fail.classList.remove('d-none');
    setTimeout(() => location.reload(), 4000);
}

function victory() {
    clearInterval(timerInterval);
    sfx.victory();
    elements.scramble.innerText = "ACCESO_TOTAL";
    elements.hint.innerText = "BÓVEDA VACIADA. SALIENDO SIN RASTRO.";
    elements.input.classList.add('d-none');
    elements.submit.classList.add('d-none');
}

elements.submit.addEventListener('click', validate);
elements.input.addEventListener('keypress', (e) => { 
    sfx.type();
    if(e.key === 'Enter') validate(); 
});