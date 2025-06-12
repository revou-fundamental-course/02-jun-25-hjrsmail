// === textAnimation.js ===
export function splitCharactersIntoSpans(element) {
    const text = element.innerHTML;
    const modifiedHTML = [];

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const attributes = char.trim() ? 'class="inline-block"' : '';
        modifiedHTML.push(`<span ${attributes}>${char}</span>`);
    }

    element.innerHTML = modifiedHTML.join('');
}

function addScriptToHead(url, callback) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}

function animateText(element) {
    element.classList.remove('invisible');
    gsap.fromTo(
        element.children,
        { opacity: 0, scale: 6 },
        { opacity: 1, scale: 1, stagger: 0.07, duration: 1, ease: 'expo.out' }
    );
}

export function initTextAnimation () {
    const heading = document.getElementById('animated-heading');

    splitCharactersIntoSpans(heading);

    addScriptToHead('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js', function () {
        animateText(heading);
    });
};