const topicData = {
  reflexive: { title: 'Reflexive Verben', symbol: '↻', color: 'coral', study: {
    explanation: 'Reflexive Verben werden von einem Reflexivpronomen begleitet. Das Pronomen passt zur Person und steht normalerweise vor dem Verb: me, te, se, nos, os, se.',
    summary: 'me, te, se, nos, os, se + konjugiertes Verb',
    examples: [['Tú te duchas por la noche.', 'Du duschst dich abends.'], ['Los sábados no me levanto a las ocho.', 'Samstags stehe ich nicht um acht Uhr auf.'], ['Me quedo en casa.', 'Ich bleibe zu Hause.'], ['Me voy a la cama a las once.', 'Ich gehe um elf Uhr ins Bett.']],
    tips: ['Bei einer Verneinung steht no vor dem Reflexivpronomen: no me levanto.', 'Einige Verben sind im Spanischen reflexiv, im Deutschen aber nicht: levantarse = aufstehen, quedarse = bleiben.'],
    phrases: []
  }, questions: [
    { text: 'Yo ___ a las siete.', answer: 'me levanto', options: ['me levanto', 'te levantas', 'se levanta', 'nos levantamos'] },
    { text: '¿A qué hora ___ tú?', answer: 'te duchas', options: ['me ducho', 'te duchas', 'se ducha', 'os ducháis'] },
    { text: 'Mis hermanos ___ los dientes.', answer: 'se lavan', options: ['me lavo', 'te lavas', 'se lavan', 'nos lavamos'] },
    { text: 'Nosotros ___ a la cama a las once.', answer: 'nos vamos', options: ['se van', 'nos vamos', 'os vais', 'me voy'] },
  ]},
  gerundio: { title: 'Estar + Gerundio', symbol: '◌', color: 'teal', study: {
    explanation: 'Mit estar + Gerundio beschreibst du, was gerade in diesem Moment passiert. Das Gerundio endet bei -ar-Verben auf -ando und bei -er/-ir-Verben auf -iendo.',
    summary: 'estar (konjugiert) + Verbstamm + -ando / -iendo',
    examples: [['Estoy estudiando español.', 'Ich lerne gerade Spanisch.'], ['Estamos comiendo.', 'Wir essen gerade.'], ['¿Qué estás haciendo?', 'Was machst du gerade?']],
    tips: ['estar wird an die Person angepasst: estoy, estás, está, estamos, estáis, están.', 'Wichtige unregelmäßige Formen: hacer → haciendo, leer → leyendo, ir → yendo.'],
    phrases: []
  }, questions: [
    { text: 'Ahora mismo yo ___ español.', answer: 'estoy estudiando', options: ['estudio', 'estoy estudiando', 'está estudiando', 'soy estudiando'] },
    { text: 'Ellos ___ la televisión.', answer: 'están viendo', options: ['están viendo', 'estoy viendo', 'son viendo', 'veniendo'] },
    { text: '¿Qué ___ tú?', answer: 'estás haciendo', options: ['está haciendo', 'estás haciendo', 'eres haciendo', 'haceste'] },
  ]},
  para: { title: 'Para + Infinitiv', symbol: '→', color: 'yellow', study: {
    explanation: 'Para + Infinitiv drückt einen Zweck oder ein Ziel aus. Nach para steht immer der Infinitiv, wenn das Subjekt im Haupt- und Nebensatz gleich bleibt.',
    summary: 'para + Infinitiv = um ... zu',
    examples: [['Estudio para aprender.', 'Ich lerne, um zu lernen.'], ['Voy al parque para correr.', 'Ich gehe in den Park, um zu joggen.'], ['Ahorro dinero para viajar.', 'Ich spare Geld, um zu reisen.']],
    tips: ['Nicht konjugieren: para estudiar, nicht para estudio.', 'Bei zwei verschiedenen Subjekten brauchst du meist que + konjugiertes Verb.'],
    phrases: []
  }, questions: [
    { text: 'Estudio ___ aprender.', answer: 'para', options: ['por', 'para', 'de', 'a'] },
    { text: 'Voy al supermercado ___ comprar fruta.', answer: 'para', options: ['para', 'por', 'en', 'con'] },
    { text: 'Tengo que salir ___ llegar a tiempo.', answer: 'para', options: ['en', 'por', 'para', 'sin'] },
  ]},
  muy: { title: 'Muy vs. Mucho', symbol: '≋', color: 'blue', study: {
    explanation: 'Muy verstärkt Adjektive und Adverbien. Mucho steht bei Nomen und passt sich dort in Geschlecht und Zahl an. Als Adverb bleibt mucho unverändert.',
    summary: 'muy + Adjektiv/Adverb | mucho/a/os/as + Nomen | Verb + mucho',
    examples: [['La clase es muy interesante.', 'Der Unterricht ist sehr interessant.'], ['Tengo muchas tareas.', 'Ich habe viele Aufgaben.'], ['Me gusta mucho la música.', 'Ich mag Musik sehr.']],
    tips: ['Frage nach dem Wort danach: Adjektiv → muy, Nomen → mucho/-a/-os/-as.', 'Nach Verben wie gustar, estudiar oder dormir steht mucho ohne Endung.'],
    phrases: []
  }, questions: [
    { text: 'La película es ___ interesante.', answer: 'muy', options: ['muy', 'mucho', 'muchas', 'mucha'] },
    { text: 'Tengo ___ deberes hoy.', answer: 'muchos', options: ['muy', 'muchos', 'mucha', 'mucho'] },
    { text: 'Me gusta ___ esta canción.', answer: 'mucho', options: ['muy', 'mucho', 'muchas', 'mucha'] },
  ]},
  alltag: { title: 'Mi día a día', symbol: '☼', color: 'lilac', study: {
    explanation: 'Für eine Beschreibung deines Alltags brauchst du Uhrzeiten, Tagesabschnitte und Verben wie levantarse, desayunar, ducharse, ir, jugar, cenar und dormir.',
    summary: 'por la mañana → después → por la tarde → por la noche | siempre / normalmente / nunca',
    examples: [['Me levanto a las seis y media.', 'Ich stehe um halb sieben auf.'], ['Después desayuno y me ducho.', 'Danach frühstücke ich und dusche mich.'], ['A las ocho menos veinte voy al colegio.', 'Um zwanzig vor acht gehe ich zur Schule.'], ['Por la tarde juego al billar con mis amigos.', 'Nachmittags spiele ich mit meinen Freunden Billard.']],
    tips: ['Ordne deinen Text mit Uhrzeiten und Verbindungswörtern.', 'Nutze Häufigkeitsangaben: siempre, muchas veces, normalmente, casi nunca, nunca.', 'Achte bei reflexiven Verben auf das passende Pronomen.'],
    phrases: ['A las ... / A las ocho menos veinte ... — Um ... / Um zwanzig vor acht ...', 'Después / Luego ... — Danach / Dann ...', 'Normalmente ... — Normalerweise ...', 'Por la tarde ... — Nachmittags ...']
  }, questions: [
    { text: 'Por la mañana ___ el desayuno.', answer: 'preparo', options: ['preparo', 'acuesto', 'sueño', 'llego'] },
    { text: 'A las ocho ___ al instituto.', answer: 'voy', options: ['hago', 'voy', 'duermo', 'visto'] },
    { text: 'Por la noche ___ los dientes.', answer: 'me cepillo', options: ['me cepillo', 'me levanto', 'me visto', 'me despierto'] },
  ]},
  reading: { title: 'Leseverstehen', symbol: '▤', color: 'mint', study: {
    explanation: 'Beim Leseverstehen geht es nicht darum, jedes Wort zu übersetzen. Suche zuerst Schlüsselwörter, erkenne Zeitangaben und lies die Frage genau, bevor du im Text nach Belegen suchst.',
    summary: 'Frage lesen → Schlüsselwörter markieren → Textstelle finden → Antwort belegen',
    examples: [['Marta va a la escuela en bicicleta.', 'Marta fährt mit dem Fahrrad zur Schule.'], ['Después de clase estudia.', 'Nach dem Unterricht lernt sie.']],
    tips: ['Lies den Text zuerst komplett und beantworte danach die Fragen.', 'Achte besonders auf Verneinungen wie no und auf Zeitangaben.'],
    phrases: ['Según el texto ... — Laut dem Text ...', 'La respuesta es ... porque ... — Die Antwort ist ..., weil ...', 'En el texto se dice que ... — Im Text steht, dass ...']
  }, questions: [
    { text: 'Texto: Marta se levanta a las seis y media. ¿A qué hora se levanta?', answer: 'A las seis y media', options: ['A las seis', 'A las seis y media', 'A las siete', 'A las ocho'] },
    { text: 'Marta va al instituto en bicicleta. ¿Cómo va?', answer: 'En bicicleta', options: ['En autobús', 'A pie', 'En bicicleta', 'En coche'] },
    { text: 'Después de clase, Marta estudia para su examen. ¿Qué hace?', answer: 'Estudia', options: ['Duerme', 'Estudia', 'Cocina', 'Corre'] },
  ]}
};

const questionContexts = {
  reflexive: ['Cada día:', 'Por la mañana:', 'Normalmente:', 'Los lunes:', 'Antes del desayuno:', 'Después de clase:', 'A las siete:', 'Cuando tengo clase:', 'En invierno:', 'Durante la semana:', 'Los fines de semana:', 'Antes de salir:', 'Al llegar a casa:', 'Por la noche:', 'Después de cenar:', 'En vacaciones:', 'Cuando estoy cansada:', 'Antes del examen:', 'A veces:', 'Siempre:'],
  gerundio: ['Ahora:', 'En este momento:', 'Hoy:', 'Durante la clase:', 'En el autobús:', 'En casa:', 'A las ocho:', 'Mientras hablo:', 'Esta tarde:', 'Justo ahora:', 'Durante el descanso:', 'En la biblioteca:', 'Al mismo tiempo:', 'Esta semana:', 'Mientras espero:', 'En el parque:', 'Después de comer:', 'Cuando llamo:', 'En la foto:', 'Mira:'],
  para: ['En mi tiempo libre:', 'Este verano:', 'En la escuela:', 'Cada semana:', 'Con mis amigos:', 'Para el examen:', 'En vacaciones:', 'Por las tardes:', 'En el futuro:', 'Este año:', 'En casa:', 'Los sábados:', 'Para mejorar:', 'En mi rutina:', 'Antes del viaje:', 'Con este ejercicio:', 'En la biblioteca:', 'Para mi proyecto:', 'Después de clase:', 'En mi plan:'],
  muy: ['En mi opinión:', 'Para mí:', 'En la clase:', 'En el examen:', 'Después de la película:', 'Con esta canción:', 'En mi ciudad:', 'Para mis amigos:', 'En el restaurante:', 'En vacaciones:', 'En casa:', 'En la escuela:', 'Para mi familia:', 'Esta semana:', 'En el deporte:', 'En el libro:', 'Con este tiempo:', 'En mi día:', 'Para el proyecto:', 'En la fiesta:'],
  alltag: ['Por la mañana:', 'A primera hora:', 'Después:', 'A mediodía:', 'Por la tarde:', 'Al volver a casa:', 'Antes de cenar:', 'Por la noche:', 'Los lunes:', 'Durante la semana:', 'Los viernes:', 'Antes de clase:', 'Después del desayuno:', 'A las ocho:', 'Cuando llego:', 'En vacaciones:', 'Normalmente:', 'Cada día:', 'Los fines de semana:', 'Antes de dormir:'],
  reading: ['Lee esta frase:', 'Según el texto:', 'Busca la información:', 'Observa el detalle:', 'Fíjate en la hora:', 'Comprueba el lugar:', 'Encuentra la acción:', 'Vuelve al texto:', 'Lee con atención:', 'Busca la respuesta:', 'Mira el primer dato:', 'Comprueba el segundo dato:', 'Relaciona la información:', 'Encuentra la palabra clave:', 'Lee la frase:', 'Busca el personaje:', 'Observa la acción:', 'Comprueba la respuesta:', 'Vuelve a leer:', 'Elige la información correcta:']
};

const questionStems = {
  reflexive: ['Yo ___ a las seis y media.', '¿A qué hora ___ tú?', 'Mis hermanos ___ los dientes.', 'Nosotros ___ a la cama a las once.', 'Yo ___ antes del desayuno.', '¿Cuándo ___ tú por la noche?', 'Mis hermanos ___ por la mañana.', 'Nosotros ___ después de cenar.', 'Yo ___ a las siete.', '¿A qué hora ___ tú los sábados?', 'Mis hermanos ___ después de comer.', 'Nosotros ___ cuando estamos cansados.', 'Yo ___ antes de salir.', '¿Por qué ___ tú tan tarde?', 'Mis hermanos ___ antes de dormir.', 'Nosotros ___ a las diez.', 'Yo ___ antes de ir al colegio.', '¿Cuándo ___ tú normalmente?', 'Mis hermanos ___ cada noche.', 'Nosotros ___ después de la película.'],
  gerundio: ['Yo ___ español ahora.', 'Ellos ___ la televisión.', '¿Qué ___ tú?', 'Yo ___ la cena.', 'Ellas ___ en la biblioteca.', 'Tú ___ un mensaje.', 'Yo ___ música.', 'Ellos ___ un libro.', '¿Qué ___ tú?', 'Yo ___ al fútbol.', 'Ellos ___ para el examen.', 'Tú ___ la explicación.', 'Yo ___ en el parque.', 'Ellas ___ una película.', 'Yo ___ una carta.', '¿Qué ___ tú?', 'Ellos ___ en el autobús.', 'Tú ___ un dibujo.', 'Yo ___ la radio.', 'Ellos ___ la tarea.'],
  para: ['Estudio ___ aprender.', 'Voy al supermercado ___ comprar fruta.', 'Tengo que salir ___ llegar a tiempo.', 'Leo ___ aprender español.', 'Trabajo ___ tener dinero.', 'Voy al parque ___ correr.', 'Voy de viaje ___ ver un lugar nuevo.', 'Uso un diccionario ___ entender una palabra.', 'Practico ___ hablar español.', 'Me levanto temprano ___ estudiar.', 'Cocino ___ comer.', 'Voy a la biblioteca ___ leer.', 'Escribo una lista ___ recordar cosas.', 'Hago deporte ___ correr.', 'Escucho música ___ descansar.', 'Llevo agua ___ beber.', 'Estudio los verbos ___ hacer el examen.', 'Voy en autobús ___ llegar a la escuela.', 'Aprendo palabras ___ hablar con amigos.', 'Tengo una agenda ___ recordar las tareas.'],
  muy: ['La película es ___ interesante.', 'Tengo ___ deberes hoy.', 'Me gusta ___ esta canción.', 'El examen es ___ fácil.', 'Hay ___ estudiantes en la clase.', 'Me gusta ___ esta canción.', 'Comemos ___ temprano.', 'Mi mochila tiene ___ libros.', 'Estudio ___ en casa.', 'Bebo ___ agua.', 'La profesora habla ___ rápido.', 'Tengo ___ amigos españoles.', 'Este texto es ___ claro.', 'Hay ___ preguntas.', 'Me gusta ___ leer.', 'La casa es ___ grande.', 'Necesito ___ tiempo.', 'El autobús llega ___ tarde.', 'Tenemos ___ clases.', 'La respuesta es ___ buena.'],
  alltag: ['Por la mañana yo ___ el desayuno.', 'A las ocho yo ___ a la escuela.', 'Por la noche yo ___ los dientes.', 'Antes de clase yo ___ la mochila.', 'Después de la escuela yo ___ a casa.', 'Después de cenar yo ___ los dientes.', 'Por la tarde yo ___ la comida.', 'Los lunes yo ___ a la escuela.', 'Antes de dormir yo ___ los dientes.', 'En vacaciones yo ___ la bolsa.', 'A las siete yo ___ de casa.', 'Al levantarme yo ___ los dientes.', 'Antes del examen yo ___ mis libros.', 'Los viernes yo ___ a casa.', 'Después del desayuno yo ___ los dientes.', 'Por la noche yo ___ la ropa.', 'A las seis yo ___ en autobús.', 'Después de la cena yo ___ los dientes.', 'Cada día yo ___ mi mochila.', 'Después de clase yo ___ al parque.'],
  reading: ['Marta se levanta a las seis y media. ¿A qué hora se levanta?', 'Marta va a la escuela en bicicleta. ¿Cómo va?', 'Después de clase, Marta estudia. ¿Qué hace?', 'Marta se levanta a las seis y media cada día. ¿A qué hora se levanta?', 'Marta llega a la escuela en bicicleta. ¿Cómo llega?', 'Después de clase Marta estudia para un examen. ¿Qué hace?', 'Marta se despierta a las seis y media. ¿A qué hora se despierta?', 'Marta va a clase en bicicleta. ¿Cómo va?', 'Marta estudia por la tarde. ¿Qué hace por la tarde?', 'Marta se levanta a las seis y media. ¿A qué hora se levanta?', 'Marta llega en bicicleta a la escuela. ¿Cómo llega?', 'Marta estudia después de comer. ¿Qué hace después?', 'Marta se levanta temprano, a las seis y media. ¿A qué hora?', 'Para ir a la escuela Marta usa la bicicleta. ¿Cómo va?', 'Después de clase Marta estudia. ¿Qué hace?', 'Marta se levanta a las seis y media los lunes. ¿A qué hora?', 'Marta va en bicicleta cuando tiene clase. ¿Cómo va?', 'Marta estudia una hora después de clase. ¿Qué hace?', 'Marta se levanta a las seis y media. ¿Cuándo se levanta?', 'Marta estudia para su examen. ¿Qué hace?']
};
const questionSeedIndexes = {
  reflexive: [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3],
  gerundio: [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1],
  para: [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1],
  muy: [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1],
  alltag: [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1],
  reading: [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1]
};
const alltagQuestions = [
  { text: 'Me ___ a las seis y media.', answer: 'levanto', options: ['levanto', 'ducho', 'quedo', 'voy'] },
  { text: 'Después ___ y me ducho.', answer: 'desayuno', options: ['desayuno', 'ceno', 'duermo', 'juego'] },
  { text: 'A las ocho menos veinte ___ al colegio.', answer: 'voy', options: ['voy', 'vuelvo', 'ceno', 'duermo'] },
  { text: 'En el colegio ___ clase.', answer: 'tengo', options: ['tengo', 'hago', 'pongo', 'quito'] },
  { text: 'Después de clase ___ a casa.', answer: 'vuelvo', options: ['vuelvo', 'desayuno', 'me levanto', 'me ducho'] },
  { text: 'Por la tarde ___ al billar con mis amigos.', answer: 'juego', options: ['juego', 'duermo', 'ceno', 'voy'] },
  { text: 'A las cinco ___ una merienda.', answer: 'meriendo', options: ['meriendo', 'me levanto', 'me voy', 'tengo'] },
  { text: 'El domingo ___ en casa.', answer: 'me quedo', options: ['me quedo', 'me ducho', 'me pongo', 'me quito'] },
  { text: 'Por la noche me ___ los dientes.', answer: 'lavo', options: ['lavo', 'pongo', 'quito', 'voy'] },
  { text: 'A las nueve ___.', answer: 'ceno', options: ['ceno', 'desayuno', 'meriendo', 'duermo'] },
  { text: 'Después de cenar ___ un libro.', answer: 'leo', options: ['leo', 'juego', 'vuelvo', 'tengo'] },
  { text: 'A las once me ___ a la cama.', answer: 'voy', options: ['voy', 'quedo', 'levanto', 'ducho'] },
  { text: 'Los sábados no me ___ a las ocho.', answer: 'levanto', options: ['levanto', 'ducho', 'quedo', 'pongo'] },
  { text: '___ voy al colegio a las ocho menos veinte.', answer: 'Normalmente', options: ['Normalmente', 'Nunca', 'Después', 'A medianoche'] },
  { text: '___ juego al billar con mis amigos.', answer: 'Muchas veces', options: ['Muchas veces', 'Nunca', 'A las ocho', 'Después'] },
  { text: '___ llego tarde al colegio.', answer: 'Nunca', options: ['Nunca', 'Siempre', 'Muchas veces', 'Normalmente'] },
  { text: '___ me quedo en casa los fines de semana.', answer: 'Casi nunca', options: ['Casi nunca', 'Siempre', 'A las ocho', 'Después'] },
  { text: 'Me ___ la ropa antes de desayunar.', answer: 'pongo', options: ['pongo', 'quito', 'lavo', 'voy'] },
  { text: 'Cuando llego a casa me ___ los zapatos.', answer: 'quito', options: ['quito', 'pongo', 'levanto', 'ducho'] },
  { text: 'Antes de ir al colegio me ___ rápidamente.', answer: 'ducho', options: ['ducho', 'quedo', 'voy', 'ceno'] }
];
Object.entries(topicData).forEach(([key, topic]) => { const sourceQuestions = key === 'alltag' ? alltagQuestions : questionStems[key].map((text, index) => ({ ...topic.questions[questionSeedIndexes[key][index]], text })); topic.questionBank = ['easy', 'medium', 'challenge'].flatMap((difficulty) => sourceQuestions.map((question) => ({ ...question, difficulty }))); });

let completed = Number(localStorage.getItem('spanisch-progress') || 0);
let currentTopic = null;
let currentQuestion = 0;
let currentQuestions = [];
let selectedDifficulty = 'easy';
const difficultyLabels = { easy: 'Leicht · A1', medium: 'Mittel · A2', challenge: 'Extra · A2+' };

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
function updateProgress() { const total = 20; const percent = Math.min(100, Math.round(completed / total * 100)); $('#progress-percent').textContent = `${percent}%`; $('#progress-fill').style.width = `${percent}%`; $('#progress-copy').textContent = completed ? `${completed} Aufgaben geschafft. Weiter so!` : 'Starte deine erste Aufgabe.'; }
function showView(view) { $$('.view').forEach((section) => section.classList.remove('active-view')); $(`#${view}-view`).classList.add('active-view'); $$('.nav-item').forEach((item) => item.classList.toggle('active', item.dataset.view === view)); $('#current-breadcrumb').textContent = view === 'dashboard' ? 'Übersicht' : view === 'practice' ? 'Üben' : 'Hören'; if (view === 'practice') renderTopicList(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
function questionsForLevel(topic) { return topic.questionBank.filter((question) => question.difficulty === selectedDifficulty); }
function renderTopicList() { const list = $('#practice-topics'); list.innerHTML = Object.entries(topicData).map(([key, topic]) => `<button class="practice-topic ${currentTopic === key ? 'selected' : ''}" data-practice-topic="${key}"><span class="topic-symbol">${topic.symbol}</span><span><strong>${topic.title}</strong><span>${questionsForLevel(topic).length} Aufgabe${questionsForLevel(topic).length === 1 ? '' : 'n'} · ${difficultyLabels[selectedDifficulty]}</span></span></button>`).join(''); $$('.practice-topic').forEach((button) => button.addEventListener('click', () => startTopic(button.dataset.practiceTopic))); }
function shuffle(items) { return [...items].sort(() => Math.random() - 0.5); }
function startTopic(key) { currentTopic = key; currentQuestion = 0; currentQuestions = shuffle(questionsForLevel(topicData[key])).slice(0, 10); renderTopicList(); renderStudyGuide(); }
function renderStudyGuide() { const topic = topicData[currentTopic]; const study = topic.study; const examples = study.examples.map(([spanish, german]) => `<div class="example-row"><strong>${spanish}</strong><span>${german}</span></div>`).join(''); const tips = study.tips.map((tip) => `<li>${tip}</li>`).join(''); const phrases = study.phrases.length ? `<div class="study-block phrases-block"><span class="small-label">Satzbausteine für Texte</span>${study.phrases.map((phrase) => `<div class="phrase-row">${phrase}</div>`).join('')}</div>` : ''; $('#exercise-panel').innerHTML = `<div class="study-guide"><div class="study-guide-head"><div><span class="small-label">${topic.title} · ${difficultyLabels[selectedDifficulty]}</span><h2>Erst verstehen, dann üben</h2></div><span class="study-badge">LERNTEIL</span></div><div class="study-block"><h3>Erklärung</h3><p>${study.explanation}</p></div><div class="summary-strip"><span class="small-label">Kurz zusammengefasst</span><strong>${study.summary}</strong></div><div class="study-block"><h3>Beispiele <span>mit Übersetzung</span></h3><div class="examples">${examples}</div></div><div class="study-columns"><div class="study-block"><h3>Tipps</h3><ul>${tips}</ul></div>${phrases}</div><button class="start-exercise-button" id="start-exercise">Jetzt üben <span>→</span></button></div>`; $('#start-exercise').addEventListener('click', renderQuestion); }
function renderQuestion() { const topic = topicData[currentTopic]; const questions = currentQuestions; const question = questions[currentQuestion]; const options = shuffle(question.options); $('#exercise-panel').innerHTML = `<div class="exercise-head"><div><span class="small-label">${topic.title} · ${difficultyLabels[selectedDifficulty]}</span><h2>Setze dein Wissen ein</h2></div><span class="exercise-count">${currentQuestion + 1} / ${questions.length}</span></div><div class="question">${question.text}</div><div class="answers">${options.map((option) => `<button class="answer">${option}</button>`).join('')}</div><div class="feedback" id="feedback"></div><button class="next-button" id="next-question">Nächste Aufgabe →</button>`; $$('.answer').forEach((button) => button.addEventListener('click', () => checkAnswer(button, question.answer))); $('#next-question').addEventListener('click', nextQuestion); }
function checkAnswer(button, answer) { if ($$('.answer.correct, .answer.wrong').length) return; const feedback = $('#feedback'); if (button.textContent === answer) { button.classList.add('correct'); feedback.textContent = '¡Muy bien! Genau richtig.'; completed += 1; localStorage.setItem('spanisch-progress', completed); updateProgress(); } else { button.classList.add('wrong'); feedback.textContent = `Fast! Die richtige Antwort ist „${answer}“.`; $$('.answer').find((item) => item.textContent === answer)?.classList.add('correct'); } $('#next-question').classList.add('show'); }
function nextQuestion() { const topic = topicData[currentTopic]; const questions = currentQuestions; currentQuestion += 1; if (currentQuestion >= questions.length) { $('#exercise-panel').innerHTML = `<div class="empty-state"><span>✓</span><h2>Unidad geschafft!</h2><p>Du hast 10 Fragen zu ${topic.title} auf ${difficultyLabels[selectedDifficulty]} abgeschlossen. Wähle ein weiteres Thema.</p></div>`; currentTopic = null; renderTopicList(); return; } renderQuestion(); }

$$('[data-view]').forEach((button) => button.addEventListener('click', () => showView(button.dataset.view)));
$$('[data-view-target]').forEach((button) => button.addEventListener('click', () => showView(button.dataset.viewTarget)));
$$('[data-topic]').forEach((card) => card.addEventListener('click', () => { if (card.dataset.topic === 'listening') { showView('listen'); return; } showView('practice'); startTopic(card.dataset.topic); }));
$$('[data-difficulty]').forEach((button) => button.addEventListener('click', () => { selectedDifficulty = button.dataset.difficulty; $$('[data-difficulty]').forEach((option) => option.classList.toggle('active', option === button)); renderTopicList(); if (currentTopic) { currentQuestion = 0; currentQuestions = []; renderStudyGuide(); } }));
$('#mobile-menu').addEventListener('click', () => $('.sidebar').classList.toggle('open'));
$('#toggle-transcript').addEventListener('click', () => { $('#transcript').classList.toggle('hidden'); $('#toggle-transcript').textContent = $('#transcript').classList.contains('hidden') ? 'Anzeigen' : 'Ausblenden'; });

const listeningQuestions = [
  { text: 'Warum steht Lucía früh auf?', answer: 'Sie hat eine Spanischprüfung.', options: ['Sie hat Training.', 'Sie hat eine Spanischprüfung.', 'Sie fährt in Urlaub.', 'Sie trifft ihre Freundinnen.'] },
  { text: 'Was macht sie im Bus?', answer: 'Sie wiederholt reflexive Verben.', options: ['Sie schläft.', 'Sie liest einen Roman.', 'Sie wiederholt reflexive Verben.', 'Sie telefoniert.'] },
  { text: 'Wie fühlt sie sich?', answer: 'Ein bisschen nervös.', options: ['Sehr müde.', 'Ein bisschen nervös.', 'Sehr glücklich.', 'Wütend.'] }
];
$('#listen-questions').innerHTML = listeningQuestions.map((item, index) => `<div class="listen-question"><h3>${index + 1}. ${item.text}</h3><div class="answers">${item.options.map((option) => `<button class="answer" data-listen-answer="${item.answer}">${option}</button>`).join('')}</div><div class="feedback"></div></div>`).join('');
$$('[data-listen-answer]').forEach((button) => button.addEventListener('click', () => { const group = button.closest('.listen-question'); if (group.querySelector('.correct, .wrong')) return; const feedback = group.querySelector('.feedback'); if (button.textContent === button.dataset.listenAnswer) { button.classList.add('correct'); feedback.textContent = '¡Perfecto!'; completed += 1; localStorage.setItem('spanisch-progress', completed); updateProgress(); } else { button.classList.add('wrong'); feedback.textContent = `Die richtige Antwort ist „${button.dataset.listenAnswer}“.`; [...group.querySelectorAll('.answer')].find((item) => item.textContent === button.dataset.listenAnswer)?.classList.add('correct'); } }));

let speaking = false; let seconds = 0; let timer; let availableVoices = [];
function voiceScore(voice) { const name = voice.name.toLowerCase(); return (name.includes('microsoft') ? 5 : 0) + (name.includes('google') ? 4 : 0) + (name.includes('online') || name.includes('natural') || name.includes('neural') ? 3 : 0) + (voice.lang.toLowerCase() === 'es-es' ? 2 : 0); }
function loadVoices() { if (!('speechSynthesis' in window)) return; availableVoices = speechSynthesis.getVoices().filter((voice) => voice.lang.toLowerCase().startsWith('es')).sort((first, second) => voiceScore(second) - voiceScore(first)); const select = $('#voice-select'); if (!availableVoices.length) { select.innerHTML = '<option value="">Browserstimme verwenden</option>'; return; } select.innerHTML = availableVoices.map((voice) => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`).join(''); select.value = availableVoices[0].name; }
if ('speechSynthesis' in window) { speechSynthesis.addEventListener('voiceschanged', loadVoices); loadVoices(); }
$('#play-audio').addEventListener('click', () => { if (!('speechSynthesis' in window)) { alert('Die Audiofunktion wird von diesem Browser nicht unterstützt.'); return; } if (speaking) { speechSynthesis.cancel(); speaking = false; clearInterval(timer); $('#play-audio').textContent = '▶'; return; } const text = $('#transcript').textContent; const utterance = new SpeechSynthesisUtterance(text); utterance.lang = 'es-ES'; utterance.voice = availableVoices.find((voice) => voice.name === $('#voice-select').value) || availableVoices[0] || null; utterance.rate = .82; utterance.onend = () => { speaking = false; clearInterval(timer); $('#play-audio').textContent = '▶'; }; speechSynthesis.speak(utterance); speaking = true; seconds = 0; $('#play-audio').textContent = 'Ⅱ'; clearInterval(timer); timer = setInterval(() => { seconds += 1; $('#audio-time').textContent = `0:${String(seconds).padStart(2, '0')}`; $('#audio-progress').style.width = `${Math.min(100, seconds / 42 * 100)}%`; }, 1000); });
updateProgress();
