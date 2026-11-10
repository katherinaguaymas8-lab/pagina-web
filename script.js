'use strict';

/* ============================================
   BASE DE DATOS DE PERSONAJES
   ============================================ */
const CHARACTERS = [
  {
    id: 'zeus',
    name: 'Zeus',
    mythology: 'griega',
    mythologyLabel: 'Griega',
    role: 'Dios del Cielo y del Trueno',
    bio: 'Hijo de Cronos y Rea, fue escondido al nacer para evitar ser devorado por su padre. Al crecer, lideró a sus hermanos en una guerra contra los Titanes, la Titanomaquia, que terminó con su victoria y su ascenso como soberano del Olimpo.',
    domain: 'Gobierna el cielo, el trueno y el orden entre dioses y mortales. Es el árbitro supremo del Olimpo y guardián de los juramentos y la hospitalidad.',
    symbols: ['Rayo', 'Águila', 'Roble', 'Cetro'],
    img: 'Zeus.webp'
  },
  {
    id: 'perséfone',
    name: 'Perséfone',
    mythology: 'griega',
    mythologyLabel: 'Griega',
    role: 'Reina del Inframundo',
    bio: 'Hija de Deméter y Zeus, fue raptada por Hades para convertirse en su esposa. Su madre, devastada, sumió a la tierra en un invierno eterno hasta que se pactó que Perséfone pasara parte del año en el inframundo y parte en la superficie.',
    domain: 'Reina junto a Hades el mundo de los muertos y personifica el ciclo de las estaciones: su regreso anual marca la llegada de la primavera.',
    symbols: ['Granada', 'Narciso', 'Antorcha', 'Trigo'],
    img: 'Persefone.jpg'
  },
  {
    id: 'poseidón',
    name: 'Poseidón',
    mythology: 'griega',
    mythologyLabel: 'Griega',
    role: 'Dios del Mar y los Terremotos',
    bio: 'Hermano de Zeus y Hades, recibió el dominio de los mares al repartirse el universo entre los tres. De temperamento volátil, era temido tanto por marineros como por ciudades enteras cuando su ira sacudía la tierra.',
    domain: 'Gobierna los océanos, las tormentas marinas, los caballos y los terremotos, a los que provoca golpeando el suelo con su tridente.',
    symbols: ['Tridente', 'Caballo', 'Delfín', 'Concha marina'],
    img: 'Poseidon.jpeg'
  },
  {
    id: 'hades',
    name: 'Hades',
    mythology: 'griega',
    mythologyLabel: 'Griega',
    role: 'Señor del Inframundo',
    bio: 'Tras la caída de los Titanes, le correspondió en suerte el reino de los muertos. A diferencia de la imagen que la cultura popular le atribuye, no era un dios malvado, sino un gobernante justo y severo, poco interesado en abandonar sus dominios.',
    domain: 'Gobierna el inframundo y juzga a las almas de los difuntos. Custodia también las riquezas ocultas bajo la tierra, de ahí su vínculo con la abundancia mineral.',
    symbols: ['Casco de invisibilidad', 'Cerbero', 'Ciprés', 'Cetro de dos puntas'],
    img: 'Hades.jpg'
  },
  {
    id: 'apolo',
    name: 'Apolo',
    mythology: 'griega',
    mythologyLabel: 'Griega',
    role: 'Dios de la Luz, la Música y la Profecía',
    bio: 'Hijo de Zeus y Leto, nació junto a su hermana gemela Artemisa en la isla de Delos. Patrón de Delfos, su oráculo se convirtió en el centro espiritual más influyente de la Grecia antigua.',
    domain: 'Preside la música, la poesía, la medicina, la profecía y la luz solar. Guía a las Musas y castiga la desmesura (hybris) con su arco certero.',
    symbols: ['Lira', 'Arco de plata', 'Laurel', 'Cisne'],
    img: 'Apolo.jpg'
  },
  {
    id: 'artemisa',
    name: 'Artemisa',
    mythology: 'griega',
    mythologyLabel: 'Griega',
    role: 'Diosa de la Caza y la Luna',
    bio: 'Gemela de Apolo, pidió a su padre Zeus permanecer virgen para siempre y vivir libre en los bosques junto a sus ninfas cazadoras. Protectora fiera de la naturaleza salvaje y de quienes la respetan.',
    domain: 'Domina la caza, los animales salvajes, los bosques y la luna. Vela también por los partos y la infancia, pese a su voto de soltería.',
    symbols: ['Arco y flechas', 'Luna creciente', 'Ciervo', 'Ciprés'],
    img: 'Artemisa.webp'
  },
  {
    id: 'odín',
    name: 'Odín',
    mythology: 'nordica',
    mythologyLabel: 'Nórdica',
    role: 'Padre de Todos, Dios de la Sabiduría',
    bio: 'Se colgó nueve noches del árbol Yggdrasil, atravesado por su propia lanza, para obtener el conocimiento de las runas. Sacrificó también un ojo en el pozo de Mímir a cambio de sabiduría infinita.',
    domain: 'Rige la guerra, la sabiduría, la poesía y la muerte. Gobierna Asgard desde su trono Hlidskjálf y recibe a los guerreros caídos en el Valhalla.',
    symbols: ['Lanza Gungnir', 'Cuervos Huginn y Muninn', 'Caballo Sleipnir', 'Runas'],
    img: 'Odin.jpeg'
  },
  {
    id: 'thor',
    name: 'Thor',
    mythology: 'nordica',
    mythologyLabel: 'Nórdica',
    role: 'Dios del Trueno',
    bio: 'Hijo de Odín y la giganta Jörd, es el más fuerte de los dioses nórdicos y el protector incansable de Asgard y Midgard frente a los gigantes de hielo. Su fuerza bruta se combina con una lealtad inquebrantable hacia los suyos.',
    domain: 'Controla el trueno, las tormentas y la fertilidad de los campos. Es el guardián por excelencia de dioses y humanos frente al caos.',
    symbols: ['Martillo Mjölnir', 'Cinturón Megingjörð', 'Cabras Tanngrisnir y Tanngnjóstr', 'Guanteletes de hierro'],
    img: 'Thor.jpg'
  },
  {
    id: 'loki',
    name: 'Loki',
    mythology: 'nordica',
    mythologyLabel: 'Nórdica',
    role: 'Dios del Engaño y la Metamorfosis',
    bio: 'De origen jotun pero criado entre los Aesir, Loki es un embaucador de lealtad ambigua: tanto ayuda a los dioses con su astucia como orquesta su ruina. Su papel culmina al liderar a las fuerzas del caos durante el Ragnarök.',
    domain: 'Encarna el engaño, la transformación y el desorden creativo. Puede cambiar de forma y sexo a voluntad, y es padre de criaturas tan temibles como Fenrir y Jörmungandr.',
    symbols: ['Red de pesca', 'Fuego', 'Serpiente', 'Máscara/forma cambiante'],
    img: 'Loki.jpg'
  },
  {
    id: 'anubis',
    name: 'Anubis',
    mythology: 'egipcia',
    mythologyLabel: 'Egipcia',
    role: 'Dios de la Momificación y los Muertos',
    bio: 'Con cabeza de chacal, animal asociado a los cementerios del desierto, Anubis fue uno de los dioses funerarios más antiguos de Egipto, presente ya en los primeros textos de las pirámides mucho antes del auge de Osiris.',
    domain: 'Preside los ritos de momificación y guía a las almas hasta la Sala de la Verdad, donde pesa el corazón del difunto contra la pluma de Maat.',
    symbols: ['Balanza de la justicia', 'Chacal', 'Ankh', 'Vendas de momificación'],
    img: 'Anubis.webp'
  },
  {
    id: 'ra',
    name: 'Ra',
    mythology: 'egipcia',
    mythologyLabel: 'Egipcia',
    role: 'Dios Sol, Creador del Mundo',
    bio: 'Surgido de las aguas primigenias de Nun, Ra creó a los primeros dioses y al mundo mismo con su palabra y su luz. Cada noche viaja por el inframundo en su barca solar, enfrentando a la serpiente del caos, Apofis, para renacer al amanecer.',
    domain: 'Gobierna el sol, la creación y el orden cósmico (Maat). Es la deidad suprema de la que descienden faraones y dioses menores.',
    symbols: ['Disco solar', 'Halcón', 'Barca solar', 'Cobra Uraeus'],
    img: 'Ra.jpeg'
  },
  {
    id: 'isis',
    name: 'Isis',
    mythology: 'egipcia',
    mythologyLabel: 'Egipcia',
    role: 'Diosa de la Magia y la Maternidad',
    bio: 'Esposa y hermana de Osiris, tras el asesinato de este a manos de Set, reunió sus restos dispersos y lo resucitó el tiempo suficiente para concebir a Horus. Su devoción la convirtió en el arquetipo de madre y esposa protectora.',
    domain: 'Domina la magia, la maternidad y la protección. Su culto se extendió por todo el Mediterráneo, llegando incluso a Roma y Grecia.',
    symbols: ['Trono jeroglífico', 'Alas extendidas', 'Nudo de Isis (Tyet)', 'Disco solar con cuernos'],
    img: 'Isiss.jpeg'
  },
  {
    id: 'amaterasu',
    name: 'Amaterasu',
    mythology: 'japonesa',
    mythologyLabel: 'Japonesa',
    role: 'Diosa del Sol',
    bio: 'Nacida del ojo izquierdo del dios Izanagi durante su purificación, es la más venerada del panteón sintoísta. Cuando se ocultó en una cueva tras una afrenta de su hermano Susanoo, el mundo quedó sumido en oscuridad hasta que los demás dioses lograron hacerla salir con risas y un espejo.',
    domain: 'Gobierna el sol y, por extensión, el orden celestial. Se considera la antepasada mítica de la línea imperial japonesa.',
    symbols: ['Espejo sagrado Yata no Kagami', 'Sol', 'Cueva celestial', 'Gallo'],
    img: 'Amaterasu.png'
  },
  {
    id: 'susanoo',
    name: 'Susanoo',
    mythology: 'japonesa',
    mythologyLabel: 'Japonesa',
    role: 'Dios de las Tormentas y el Mar',
    bio: 'Hermano de Amaterasu y nacido de la nariz de Izanagi, es un dios impetuoso y de carácter tormentoso, tantas veces destructivo como heroico. Tras ser expulsado del cielo, descendió a la tierra y derrotó a la serpiente Yamata no Orochi para salvar a una doncella.',
    domain: 'Rige las tormentas, el mar y, tras su gesta heroica, se le asocia también con la agricultura y la protección frente a monstruos.',
    symbols: ['Espada Kusanagi', 'Serpiente de ocho cabezas', 'Tormenta', 'Nubes'],
    img: 'Susanoo.jpeg'
  }
];

/* ============================================
   ESTADO Y REFERENCIAS DOM
   ============================================ */
const state = {
  filter: 'todas',
  query: ''
};

const grid = document.getElementById('grid');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('search');
const filterButtons = document.querySelectorAll('.filter-btn');

const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalImg = document.getElementById('modalImg');
const modalBadge = document.getElementById('modalBadge');
const modalMyth = document.getElementById('modalMyth');
const modalName = document.getElementById('modalName');
const modalRole = document.getElementById('modalRole');
const modalBio = document.getElementById('modalBio');
const modalDomain = document.getElementById('modalDomain');
const modalSymbols = document.getElementById('modalSymbols');

const ACCENTS = {
  griega: 'var(--griega)',
  nordica: 'var(--nordica)',
  egipcia: 'var(--egipcia)',
  japonesa: 'var(--japonesa)'
};

/* ============================================
   RENDERIZADO DE TARJETAS
   ============================================ */
function getFilteredCharacters(){
  return CHARACTERS.filter(c => {
    const matchesFilter = state.filter === 'todas' || c.mythology === state.filter;
    const matchesQuery = c.name.toLowerCase().includes(state.query.toLowerCase());
    return matchesFilter && matchesQuery;
  });
}

function createCard(character){
  const card = document.createElement('button');
  card.className = 'card';
  card.style.setProperty('--accent', ACCENTS[character.mythology]);
  card.setAttribute('type', 'button');
  card.setAttribute('aria-haspopup', 'dialog');

  card.innerHTML = `
    <div class="card-media">
      <img src="${character.img}" alt="Representación de ${character.name}" loading="lazy">
      <span class="card-badge">${character.mythologyLabel}</span>
    </div>
    <div class="card-body">
      <h3 class="card-name">${character.name}</h3>
      <p class="card-role">${character.role}</p>
    </div>
  `;

  card.addEventListener('click', () => openModal(character));
  return card;
}

function renderGrid(){
  const filtered = getFilteredCharacters();

  grid.innerHTML = '';
  filtered.forEach(character => grid.appendChild(createCard(character)));

  const total = CHARACTERS.length;
  resultsCount.textContent = state.filter === 'todas' && !state.query
    ? `Mostrando los ${total} personajes del panteón`
    : `${filtered.length} de ${total} personajes encontrados`;

  noResults.hidden = filtered.length !== 0;
  grid.hidden = filtered.length === 0;
}

/* ============================================
   FILTROS POR MITOLOGÍA
   ============================================ */
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    state.filter = btn.dataset.filter;
    renderGrid();
  });
});

/* ============================================
   BÚSQUEDA EN TIEMPO REAL
   ============================================ */
searchInput.addEventListener('input', (e) => {
  state.query = e.target.value.trim();
  renderGrid();
});

/* ============================================
   MODAL DE PERFIL
   ============================================ */
let lastFocusedElement = null;

function openModal(character){
  lastFocusedElement = document.activeElement;

  modalImg.src = character.img;
  modalImg.alt = `Representación de ${character.name}`;
  modalBadge.textContent = character.mythologyLabel;
  modalMyth.textContent = `Mitología ${character.mythologyLabel}`;
  modalName.textContent = character.name;
  modalRole.textContent = character.role;
  modalBio.textContent = character.bio;
  modalDomain.textContent = character.domain;

  modalSymbols.innerHTML = '';
  character.symbols.forEach(symbol => {
    const li = document.createElement('li');
    li.textContent = symbol;
    modalSymbols.appendChild(li);
  });

  document.getElementById('modal').style.setProperty('--accent', ACCENTS[character.mythology]);

  modalBackdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal(){
  modalBackdrop.classList.remove('is-open');
  document.body.style.overflow = '';
  if (lastFocusedElement) lastFocusedElement.focus();
}

modalClose.addEventListener('click', closeModal);

modalBackdrop.addEventListener('click', (e) => {
  if (e.target === modalBackdrop) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalBackdrop.classList.contains('is-open')) {
    closeModal();
  }
});

/* ============================================
   INICIALIZACIÓN
   ============================================ */
renderGrid();
