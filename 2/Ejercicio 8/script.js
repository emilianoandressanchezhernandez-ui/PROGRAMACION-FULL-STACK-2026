// 1. BANCO DE DATOS: 15 NIVELES X 5 OPCIONES (Dificultad Progresiva)
const levelPool = [
    { // Nivel 1: 3-4 letras
        words: [
            {p:"WEB", h:"Sitio de internet."}, {p:"LINK", h:"Un enlace azul."}, {p:"WIFI", h:"Internet sin cables."},
            {p:"CHAT", h:"Donde escribes mensajes."}, {p:"RED", h:"Conexión de computadoras."}
        ]
    },
    { // Nivel 2
        words: [
            {p:"URL", h:"La dirección de una web."}, {p:"USER", h:"Nombre de quien usa la PC."}, {p:"PC", h:"Computadora personal."},
            {p:"APP", h:"Aplicación de celular."}, {p:"PDF", h:"Un formato de documento."}
        ]
    },
    { // Nivel 3: 5 letras
        words: [
            {p:"MOUSE", h:"Se usa para hacer clic."}, {p:"CABLE", h:"Conecta la PC a la corriente."}, {p:"TECLA", h:"Parte del teclado."},
            {p:"BOTON", h:"Lo presionas en la pantalla."}, {p:"PLACA", h:"Circuito verde interno."}
        ]
    },
    { // Nivel 4
        words: [
            {p:"EMAIL", h:"Correo electrónico."}, {p:"DISCO", h:"Donde se guarda todo."}, {p:"ICONO", h:"Dibujito de un programa."},
            {p:"CHIP", h:"Cerebro minúsculo."}, {p:"MOVIL", h:"Teléfono celular."}
        ]
    },
    { // Nivel 5: 6 letras
        words: [
            {p:"MODEM", h:"El aparato del internet."}, {p:"GOOGLE", h:"El buscador más usado."}, {p:"CLAVE", h:"Tu contraseña secreta."},
            {p:"DATOS", h:"Información guardada."}, {p:"FIBRA", h:"Internet muy rápido."}
        ]
    },
    { // Nivel 6: 6-7 letras
        words: [
            {p:"HACKER", h:"Experto en sistemas."}, {p:"VIRUS", h:"Programa que daña la PC."}, {p:"CODIGO", h:"Escritura de programas."},
            {p:"SONIDO", h:"Lo que sale por los parlantes."}, {p:"PUERTO", h:"Donde conectas el USB."}
        ]
    },
    { // Nivel 7
        words: [
            {p:"MONITOR", h:"La pantalla de la PC."}, {p:"TECLADO", h:"Sirve para escribir."}, {p:"CARPETA", h:"Guarda muchos archivos."},
            {p:"VENTANA", h:"Cuadro donde abre un programa."}, {p:"MEMORIA", h:"Guarda cosas temporalmente."}
        ]
    },
    { // Nivel 8: 7-8 letras
        words: [
            {p:"SISTEMA", h:"Windows o Android son un..."}, {p:"DIGITAL", h:"Lo opuesto a lo analógico."}, {p:"MENSAJE", h:"Texto que envías."},
            {p:"BATERIA", h:"Energía de la laptop."}, {p:"CAMARA", h:"Sirve para videollamadas."}
        ]
    },
    { // Nivel 9
        words: [
            {p:"SOFTWARE", h:"La parte que no puedes tocar."}, {p:"HARDWARE", h:"La parte física de la PC."}, {p:"PROGRAMA", h:"Word, Chrome o Spotify."},
            {p:"INTERNET", h:"La red mundial."}, {p:"ARCHIVO", h:"Un solo documento guardado."}
        ]
    },
    { // Nivel 10: 8-9 letras
        words: [
            {p:"FIREWALL", h:"Muro que protege la red."}, {p:"SERVIDOR", h:"PC que da datos a otras."}, {p:"CONEXION", h:"Estar unido a la red."},
            {p:"PANTALLA", h:"Donde miras los videos."}, {p:"DESCARGA", h:"Bajar algo de internet."}
        ]
    },
    { // Nivel 11: Conceptos intermedios
        words: [
            {p:"BUSCADOR", h:"Sirve para encontrar webs."}, {p:"TERMINAL", h:"Pantalla negra con letras."}, {p:"COMANDO", h:"Orden que le das a la PC."},
            {p:"CONSOLA", h:"Donde juegan videojuegos."}, {p:"NAVEGADOR", h:"Chrome, Safari o Edge."}
        ]
    },
    { // Nivel 12
        words: [
            {p:"PROCESO", h:"Tarea que hace la PC."}, {p:"ALGORITMO", h:"Pasos para resolver algo."}, {p:"HISTORIAL", h:"Lista de webs visitadas."},
            {p:"FAVORITO", h:"Web que guardas para volver."}, {p:"PESTAÑA", h:"Varias webs en una ventana."}
        ]
    },
    { // Nivel 13: 10+ letras
        words: [
            {p:"TECNOLOGIA", h:"Ciencia aplicada a la PC."}, {p:"INFORMATICA", h:"Estudio de la información."}, {p:"CONTRASEÑA", h:"Palabra secreta de acceso."},
            {p:"INCOGNITO", h:"Navegar sin dejar rastro."}, {p:"PRIVACIDAD", h:"Protección de tus datos."}
        ]
    },
    { // Nivel 14
        words: [
            {p:"INTELIGENCIA", h:"Capacidad de procesar datos."}, {p:"PROGRAMACION", h:"Crear software con código."}, {p:"CIBERSEGURIDAD", h:"Protección contra hackers."},
            {p:"INSTALACION", h:"Poner un programa nuevo."}, {p:"ACTUALIZAR", h:"Poner la versión más nueva."}
        ]
    },
    { // Nivel 15: El Enigma Final
        words: [
            {p:"ARTIFICIAL", h:"No es natural, es..."}, {p:"ENCRIPTADO", h:"Código oculto y secreto."}, {p:"REVOLUCION", h:"Cambio total tecnológico."},
            {p:"EXPERIENCIA", h:"Lo que ganas al jugar."}, {p:"LIBERTAD", h:"Has vencido al sistema."}
        ]
    }
];

// 2. BANCO DE DATOS FASE 2 (Voz)
const voiceWords = ["SERVIDOR", "PROTOCOLO", "ALGORITMO", "TERMINAL", "SOFTWARE", "BINARIO", "INTERFAZ", "SEGURIDAD", "PANTALLA", "INTERNET"];

// ESTADO GLOBAL
let currentLevel = 0;
let voiceIndex = 0;
let attempts = 5;
let timeLeft = 60;
let activePass = "";
let timerInterval;
let isVoicePhase = false;

// ELEMENTOS
const el = {
    game: document.getElementById('game-screen'),
    voice: document.getElementById('voice-screen'),
    scramble: document.getElementById('scramble-text'),
    hint: document.getElementById('hint-box'),
    input: document.getElementById('terminal-input'),
    feedback: document.getElementById('feedback'),
    vWord: document.getElementById('voice-word'),
    vFeedback: document.getElementById('voice-feedback'),
    vProgress: document.getElementById('voice-progress'),
    vTimer: document.getElementById('voice-timer')
};

// MOTOR DE AUDIO
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSfx(f, d, type='sine') {
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = type; osc.frequency.value = f;
    g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + d);
    osc.connect(g); g.connect(audioCtx.destination);
    osc.start(); osc.stop(audioCtx.currentTime + d);
}

// INICIO
document.getElementById('start-mission').addEventListener('click', () => {
    audioCtx.resume();
    document.getElementById('intro-screen').classList.add('d-none');
    el.game.classList.remove('d-none');
    updateDetectionUI();
    loadLevel();
    startTimer();
});

function startTimer() {
    if(timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        if(!isVoicePhase) document.getElementById('timer').innerText = `00:${String(timeLeft).padStart(2, '0')}`;
        else el.vTimer.innerText = `${timeLeft}s`;
        if(timeLeft <= 0) gameOver();
    }, 1000);
}

function loadLevel() {
    // BUG FIX: Limpiar mensaje de feedback al pasar de nivel
    el.feedback.innerText = "";
    
    if(currentLevel >= 15) {
        initVoicePhase();
        return;
    }
    const pool = levelPool[currentLevel].words;
    const select = pool[Math.floor(Math.random() * pool.length)];
    activePass = select.p;
    document.getElementById('level-counter').innerText = `NIVEL: ${String(currentLevel+1).padStart(2, '0')}/15`;
    el.hint.innerText = `PISTA: ${select.h}`;
    runScrambleEffect(activePass);
    timeLeft = 60;
}

function runScrambleEffect(word) {
    let iterations = 0;
    const interval = setInterval(() => {
        el.scramble.innerText = word.split('').sort(() => Math.random() - 0.5).join('');
        if(++iterations > 8) clearInterval(interval);
    }, 70);
}

function validate() {
    const val = el.input.value.toUpperCase().trim();
    if(val === activePass) {
        playSfx(880, 0.3);
        currentLevel++;
        el.feedback.innerText = "SISTEMA VULNERADO";
        el.feedback.style.color = "var(--neon-green)";
        setTimeout(loadLevel, 800); // El loadLevel ahora limpia este mensaje
    } else {
        playSfx(150, 0.4, 'sawtooth');
        attempts--;
        timeLeft -= 10;
        updateDetectionUI();
        el.feedback.innerText = "ANOMALÍA: -10 SEG";
        el.feedback.style.color = "red";
        if(attempts <= 0) gameOver();
    }
    el.input.value = "";
}

// FASE DE VOZ
function initVoicePhase() {
    isVoicePhase = true;
    timeLeft = 30;
    el.game.classList.add('d-none');
    el.voice.classList.remove('d-none');
    loadVoiceWord();
}

function loadVoiceWord() {
    el.vFeedback.innerText = "";
    if(voiceIndex >= 10) {
        alert("¡BASE DE DATOS EXTRAÍDA CON ÉXITO!");
        location.reload();
        return;
    }
    el.vWord.innerText = voiceWords[voiceIndex];
    el.vProgress.innerText = `PALABRAS: ${voiceIndex} / 10`;
    startVoiceRecognition();
}

function startVoiceRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'es-ES';
    recognition.start();

    recognition.onresult = (event) => {
        const result = event.results[0][0].transcript.toUpperCase();
        if(result.includes(voiceWords[voiceIndex])) {
            playSfx(1000, 0.3);
            el.vFeedback.innerText = "✓ FRECUENCIA CORRECTA";
            el.vFeedback.style.color = "var(--neon-green)";
            voiceIndex++;
            setTimeout(loadVoiceWord, 1000);
        } else {
            playSfx(200, 0.5, 'sawtooth');
            attempts--;
            timeLeft = Math.max(0, timeLeft - 5);
            el.vFeedback.innerText = "✗ ERROR DE AUDIO: -5s";
            el.vFeedback.style.color = "red";
            updateDetectionUI();
            if(attempts <= 0) gameOver();
            else setTimeout(loadVoiceWord, 1000);
        }
    };
}

function updateDetectionUI() {
    const meter = document.getElementById('detection-meter');
    meter.innerHTML = "";
    for(let i=0; i<attempts; i++) meter.innerHTML += '<i class="fa-solid fa-triangle-exclamation mx-1"></i>';
}

function gameOver() {
    clearInterval(timerInterval);
    document.getElementById('fail-overlay').classList.remove('d-none');
    setTimeout(() => location.reload(), 3000);
}

document.getElementById('submit-btn').addEventListener('click', validate);
el.input.addEventListener('keypress', (e) => { if(e.key === 'Enter') validate(); });

// ... (Mantener bancos de datos anteriores)

// CONFIGURACIÓN FASE 3
const cableColors = ['cable-red', 'cable-blue', 'cable-yellow', 'cable-green', 'cable-purple'];
let selectedNode = null;
let connectionsMade = 0;
let isPanelPhase = false;

// ELEMENTOS NUEVOS
const elPanel = {
    screen: document.getElementById('panel-screen'),
    left: document.getElementById('left-nodes'),
    right: document.getElementById('right-nodes'),
    feedback: document.getElementById('panel-feedback'),
    timer: document.getElementById('panel-timer')
};

// --- ACTUALIZACIÓN FASE VOZ (REINICIO TIEMPO) ---
function loadVoiceWord() {
    el.vFeedback.innerText = "";
    if(voiceIndex >= 10) {
        initPanelPhase(); // Salto a la nueva fase
        return;
    }
    timeLeft = 30; // REINICIO DE TIEMPO POR PALABRA CORRECTA
    el.vWord.innerText = voiceWords[voiceIndex];
    el.vProgress.innerText = `PALABRAS: ${voiceIndex} / 10`;
    startVoiceRecognition();
}

// --- FASE 3: PANEL ELÉCTRICO ---
function initPanelPhase() {
    isVoicePhase = false;
    isPanelPhase = true;
    timeLeft = 45;
    el.voice.classList.add('d-none');
    elPanel.screen.classList.remove('d-none');
    setupCables();
}

function setupCables() {
    elPanel.left.innerHTML = "";
    elPanel.right.innerHTML = "";
    connectionsMade = 0;
    
    // Crear nodos izquierda (ordenados)
    const leftOrder = [...cableColors];
    // Crear nodos derecha (desordenados)
    const rightOrder = [...cableColors].sort(() => Math.random() - 0.5);

    leftOrder.forEach(color => {
        const div = document.createElement('div');
        div.className = `node node-left ${color}`;
        div.dataset.color = color;
        div.onclick = () => handleNodeClick(div, 'left');
        elPanel.left.appendChild(div);
    });

    rightOrder.forEach(color => {
        const div = document.createElement('div');
        div.className = `node node-right ${color}`;
        div.dataset.color = color;
        div.onclick = () => handleNodeClick(div, 'right');
        elPanel.right.appendChild(div);
    });
}

function handleNodeClick(node, side) {
    if(node.classList.contains('connected')) return;
    playSfx(600, 0.1);

    if (!selectedNode) {
        selectedNode = { node, side, color: node.dataset.color };
        node.classList.add('selected');
    } else {
        // Si clickea en el mismo lado, cambia la selección
        if (selectedNode.side === side) {
            selectedNode.node.classList.remove('selected');
            selectedNode = { node, side, color: node.dataset.color };
            node.classList.add('selected');
        } 
        // Si clickea en el lado opuesto, intentamos conectar
        else {
            if (selectedNode.color === node.dataset.color) {
                // ÉXITO
                playSfx(1000, 0.2);
                node.classList.add('connected');
                selectedNode.node.classList.add('connected');
                selectedNode.node.classList.remove('selected');
                connectionsMade++;
                elPanel.feedback.innerText = "CIRCUITO CERRADO";
                elPanel.feedback.className = "text-success mt-5 h-25px fw-bold";
                
                if(connectionsMade === cableColors.length) {
                    setTimeout(victory, 1000);
                }
            } else {
                // FALLO
                playSfx(150, 0.4, 'sawtooth');
                attempts--;
                timeLeft -= 5;
                elPanel.feedback.innerText = "CORTOCIRCUITO: -5s";
                elPanel.feedback.className = "text-danger mt-5 h-25px fw-bold";
                updateDetectionUI();
                selectedNode.node.classList.remove('selected');
                if(attempts <= 0) gameOver();
            }
            selectedNode = null;
        }
    }
}

// ACTUALIZAR EL TIMER PARA INCLUIR LA FASE 3
// (Modifica tu función startTimer existente para manejar el nuevo span de tiempo)
function updateTimerDisplay() {
    if(isPanelPhase) {
        elPanel.timer.innerText = `${timeLeft}s`;
    }
    // ... resto de lógica de timers
}

function victory() {
    clearInterval(timerInterval);
    playSfx(1200, 0.5);
    elPanel.screen.innerHTML = `
        <div class="text-center p-5">
            <h1 class="text-neon display-3 mb-4">INFILTRACIÓN COMPLETA</h1>
            <p class="text-white">TODOS LOS DATOS HAN SIDO EXSTRAÍDOS.</p>
            <button onclick="location.reload()" class="btn btn-outline-neon mt-4">REINICIAR SISTEMA</button>
        </div>
    `;
}