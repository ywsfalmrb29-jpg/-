// ═══ Typing Effect ═══
const texts = [
    'تعلم الأمن السيبراني من الصفر',
    'اختراق أخلاقي • Red Team • Blue Team',
    'مصادر عربية وأجنبية مجانية',
    'من المبتدئ إلى المحترف 🚀'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed');

function type() {
    const current = texts[textIndex];
    
    if (isDeleting) {
        typedEl.textContent = current.substring(0, charIndex--);
    } else {
        typedEl.textContent = current.substring(0, charIndex++);
    }

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === current.length + 1) {
        delay = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        delay = 500;
    }

    setTimeout(type, delay);
}

type();

// ═══ Stats Counter ═══
const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (el) => {
    const target = +el.dataset.target;
    let count = 0;
    const increment = target / 60;
    
    const update = () => {
        count +=