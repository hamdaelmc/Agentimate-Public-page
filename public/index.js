// Create logo animation
function createLogoAnimation() {
    const logo = document.getElementById('logo-animation');
    const particleCount = 12;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('logo-particle');
        logo.appendChild(particle);
    }

    // Animate particles
    anime({
        targets: '.logo-particle',
        translateX: () => anime.random(-10, 10),
        translateY: () => anime.random(-10, 10),
        scale: [
            { value: [0, 1], duration: 500, easing: 'easeOutBack' },
            { value: 0.5, duration: 1000, delay: 1000, easing: 'easeInOutQuad' }
        ],
        rotate: () => anime.random(-360, 360),
        borderRadius: () => ['50%', '0%'],
        delay: anime.stagger(100),
        duration: 2000,
        loop: true,
        direction: 'alternate'
    });
}

// Create design playground animation
function createDesignPlayground() {
    const playground = document.getElementById('design-playground');
    const elements = playground.querySelectorAll('.design-element');

    // Initialize element properties
    elements.forEach((el, i) => {
        el.style.background = `rgba(227, 27, 35, ${0.3 + (i * 0.2)})`;
        el.style.width = '50px';
        el.style.height = '50px';
        el.style.position = 'absolute';
        el.style.borderRadius = '4px';
    });

    // Create timeline for synchronized animations
    const timeline = anime.timeline({
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutQuad'
    });

    // Add animations to timeline
    timeline
        .add({
            targets: '#element1',
            translateX: [0, 200],
            translateY: [0, 100],
            rotate: 180,
            scale: 1.5,
            duration: 2000
        })
        .add({
            targets: '#element2',
            translateX: [0, -150],
            translateY: [0, 150],
            rotate: -90,
            scale: 2,
            duration: 2000
        }, '-=1800')
        .add({
            targets: '#element3',
            translateX: [0, 100],
            translateY: [0, -100],
            rotate: 360,
            scale: 1.2,
            duration: 2000
        }, '-=1600');
}

// Create preview animation
function createPreviewAnimation() {
    const preview = document.getElementById('preview-animation');
    const gridSize = 5;
    
    // Create grid of elements
    for (let i = 0; i < gridSize * gridSize; i++) {
        const element = document.createElement('div');
        element.style.width = '20px';
        element.style.height = '20px';
        element.style.background = '#E31B23';
        element.style.margin = '2px';
        element.style.borderRadius = '2px';
        preview.appendChild(element);
    }

    preview.style.display = 'grid';
    preview.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    preview.style.gap = '4px';
    preview.style.padding = '20px';

    // Animate grid elements
    anime({
        targets: '#preview-animation div',
        scale: [
            { value: [0, 1], duration: 500, easing: 'easeOutBack' },
            { value: 0.5, duration: 1000, delay: 1000, easing: 'easeInOutQuad' }
        ],
        delay: anime.stagger(100, { grid: [gridSize, gridSize], from: 'center' }),
        loop: true,
        direction: 'alternate'
    });
}

// Initialize animations when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize background animation
    const bgAnimation = anime({
        targets: '.background-animation',
        opacity: [0, 0.1],
        duration: 1000,
        easing: 'easeInOutQuad'
    });

    // Initialize floating elements
    anime({
        targets: '.design-element',
        translateX: function() { return anime.random(-50, 50); },
        translateY: function() { return anime.random(-50, 50); },
        scale: [0.8, 1.2],
        rotate: function() { return anime.random(-15, 15); },
        duration: function() { return anime.random(3000, 5000); },
        delay: function() { return anime.random(0, 1000); },
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutQuad'
    });

    // Initialize cursor follower
    const cursor = document.querySelector('.cursor-follower');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Initialize typing animation
    const phrases = [
        'Create a modern landing page',
        'Design an interactive dashboard',
        'Build a mobile app interface',
        'Generate a logo animation'
    ];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    const typingText = document.querySelector('.typing-text');
    const typingCursor = document.querySelector('.typing-cursor');

    function typePhrase() {
        if (currentCharIndex < phrases[currentPhraseIndex].length) {
            typingText.textContent += phrases[currentPhraseIndex][currentCharIndex];
            currentCharIndex++;
            setTimeout(typePhrase, 100);
        } else {
            setTimeout(erasePhrase, 2000);
        }
    }

    function erasePhrase() {
        if (currentCharIndex > 0) {
            typingText.textContent = phrases[currentPhraseIndex].substring(0, currentCharIndex - 1);
            currentCharIndex--;
            setTimeout(erasePhrase, 50);
        } else {
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            setTimeout(typePhrase, 500);
        }
    }

    // Start typing animation
    typePhrase();

    // Animate cursor blink
    anime({
        targets: '.typing-cursor',
        opacity: [1, 0],
        duration: 800,
        easing: 'easeInOutQuad',
        loop: true
    });

    // Initialize feature cards animation
    anime({
        targets: '.feature-card',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(200),
        easing: 'easeOutQuad'
    });

    // Initialize showcase items animation
    anime({
        targets: '.showcase-item',
        scale: [0.9, 1],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(150),
        easing: 'easeOutQuad'
    });

    // Initialize grid lines animation
    anime({
        targets: '.grid-line',
        scaleX: [0, 1],
        duration: 1500,
        delay: anime.stagger(300),
        easing: 'easeInOutQuart'
    });

    // Create interactive hover effect for feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            anime({
                targets: card,
                scale: 1.05,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });

        card.addEventListener('mouseleave', () => {
            anime({
                targets: card,
                scale: 1,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });

    // Initialize submit button animation
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.addEventListener('mouseenter', () => {
        anime({
            targets: submitBtn,
            scale: 1.05,
            duration: 300,
            easing: 'easeOutQuad'
        });
    });

    submitBtn.addEventListener('mouseleave', () => {
        anime({
            targets: submitBtn,
            scale: 1,
            duration: 300,
            easing: 'easeOutQuad'
        });
    });

    submitBtn.addEventListener('click', () => {
        anime({
            targets: submitBtn,
            scale: [1, 0.95, 1],
            duration: 300,
            easing: 'easeInOutQuad'
        });
    });

    // Create morphing shapes
    const morphingShapes = document.querySelector('.morphing-shapes');
    const shapeCount = 5;
    const colors = ['#6366F1', '#EC4899', '#8B5CF6'];
    
    for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape');
        shape.style.backgroundColor = colors[i % colors.length];
        morphingShapes.appendChild(shape);
        
        const size = anime.random(100, 400);
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        
        // Random initial position
        shape.style.left = `${anime.random(0, 100)}%`;
        shape.style.top = `${anime.random(0, 100)}%`;
        
        // Animate each shape
        anime({
            targets: shape,
            translateX: () => anime.random(-200, 200),
            translateY: () => anime.random(-200, 200),
            scale: [
                { value: 0.1, duration: 500, easing: 'easeOutSine' },
                { value: 1, duration: 2000, easing: 'easeInOutQuad' }
            ],
            rotate: () => anime.random(-180, 180),
            borderRadius: () => [`${anime.random(20, 50)}%`, `${anime.random(20, 50)}%`],
            duration: 8000,
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutQuad',
            delay: anime.random(0, 1000)
        });
    }

    // Create SVG paths for the design preview
    const svg = document.querySelector('.design-svg');
    const pathCount = 5;
    
    for (let i = 0; i < pathCount; i++) {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('stroke', colors[i % colors.length]);
        path.setAttribute('stroke-width', '2');
        path.setAttribute('fill', 'none');
        svg.appendChild(path);
        
        // Generate random path data
        const points = [];
        const pointCount = 4;
        for (let j = 0; j < pointCount; j++) {
            points.push({
                x: anime.random(0, 800),
                y: anime.random(0, 300)
            });
        }
        
        // Animate path
        const timeline = anime.timeline({
            targets: path,
            easing: 'easeInOutSine',
            duration: 2000,
            loop: true,
            direction: 'alternate'
        });
        
        timeline.add({
            d: [
                { value: `M ${points[0].x} ${points[0].y} C ${points[1].x} ${points[1].y}, ${points[2].x} ${points[2].y}, ${points[3].x} ${points[3].y}` }
            ],
            strokeDashoffset: [anime.setDashoffset, 0]
        });
    }

    // Create particles
    const particleContainer = document.querySelector('.particle-container');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particleContainer.appendChild(particle);
        
        const size = anime.random(4, 10);
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Animate particles
        anime({
            targets: particle,
            translateX: () => anime.random(-300, 300),
            translateY: () => anime.random(-100, 100),
            scale: [
                { value: [0, 1], duration: 500, easing: 'easeOutBack' },
                { value: 0, duration: 1000, delay: 1000 }
            ],
            opacity: [
                { value: [0, 0.8], duration: 500 },
                { value: 0, duration: 1000, delay: 1000 }
            ],
            duration: 3000,
            loop: true,
            delay: anime.random(0, 2000),
            easing: 'easeOutExpo'
        });
    }

    // Prompt text animation
    const prompts = [
        "What would you like to design?",
        "A landing page that converts?",
        "An app that users love?",
        "An innovative dashboard?",
        "Something completely unique?"
    ];
    
    let currentPromptIndex = 0;
    const promptElement = document.getElementById('prompt-text');
    
    function animatePrompt() {
        anime({
            targets: promptElement,
            opacity: [1, 0],
            duration: 800,
            easing: 'easeInOutQuad',
            complete: () => {
                currentPromptIndex = (currentPromptIndex + 1) % prompts.length;
                promptElement.textContent = prompts[currentPromptIndex];
                anime({
                    targets: promptElement,
                    opacity: [0, 1],
                    duration: 800,
                    easing: 'easeInOutQuad'
                });
            }
        });
    }
    
    promptElement.textContent = prompts[0];
    setInterval(animatePrompt, 3000);

    // Input field animations
    const input = document.getElementById('design-input');
    
    input.addEventListener('focus', () => {
        anime({
            targets: '.input-wrapper',
            scale: 1.02,
            duration: 300,
            easing: 'easeOutQuad'
        });
    });

    input.addEventListener('blur', () => {
        anime({
            targets: '.input-wrapper',
            scale: 1,
            duration: 300,
            easing: 'easeOutQuad'
        });
    });

    // Button shine effect
    anime({
        targets: '.btn-animation',
        translateX: ['-100%', '200%'],
        delay: 500,
        duration: 1500,
        easing: 'easeInOutQuad',
        loop: true
    });

    // Feature icons animation
    document.querySelectorAll('.feature-icon').forEach((icon, index) => {
        const gradient = document.createElement('div');
        gradient.style.position = 'absolute';
        gradient.style.width = '200%';
        gradient.style.height = '200%';
        gradient.style.background = 'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)';
        icon.appendChild(gradient);

        anime({
            targets: gradient,
            translateX: ['-100%', '100%'],
            translateY: ['-100%', '100%'],
            rotate: 360,
            duration: 3000,
            delay: index * 200,
            loop: true,
            easing: 'linear'
        });
    });

    // Feature cards animation on scroll
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [20, 0],
                    duration: 800,
                    easing: 'easeOutExpo'
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });

    // Initialize custom animations
    createLogoAnimation();
    createDesignPlayground();
    createPreviewAnimation();

    // Interactive animation preview
    const canvas = document.querySelector('.interactive-canvas');
    const cursorFollower = document.querySelector('.cursor-follower');
    const elements = document.querySelectorAll('.design-element');
    
    // Mouse movement handler
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Update cursor follower
        cursorFollower.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
        
        // Interact with floating elements
        elements.forEach(element => {
            const elementRect = element.getBoundingClientRect();
            const elementX = elementRect.left - rect.left + elementRect.width / 2;
            const elementY = elementRect.top - rect.top + elementRect.height / 2;
            
            const dx = x - elementX;
            const dy = y - elementY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 200) {
                const angle = Math.atan2(dy, dx);
                const push = (200 - distance) / 10;
                
                element.style.transform = `translate(${-Math.cos(angle) * push}px, ${-Math.sin(angle) * push}px) scale(1.1)`;
                element.style.filter = 'blur(0px)';
            } else {
                element.style.transform = '';
                element.style.filter = '';
            }
        });
    });
    
    // Reset elements on mouse leave
    canvas.addEventListener('mouseleave', () => {
        elements.forEach(element => {
            element.style.transform = '';
            element.style.filter = '';
        });
    });
});

// Create background shapes
function createBackgroundShapes() {
    const container = document.querySelector('.morphing-shapes');
    const numShapes = 3;
    
    for (let i = 0; i < numShapes; i++) {
        const shape = document.createElement('div');
        shape.className = 'morphing-shape';
        container.appendChild(shape);
        
        // Randomize initial position
        shape.style.left = `${Math.random() * 100}%`;
        shape.style.top = `${Math.random() * 100}%`;
    }
}

// Initialize all animations
function initializeAnimations() {
    // Animate navigation items
    anime({
        targets: '.nav-item',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(100),
        easing: 'easeOutQuad'
    });

    // Animate hero section
    anime({
        targets: ['.main-title', '.sub-title', '.hero-subtitle'],
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 1200,
        delay: anime.stagger(200),
        easing: 'easeOutQuad'
    });

    // Animate feature cards
    anime({
        targets: '.feature-card',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(100),
        easing: 'easeOutQuad'
    });

    // Animate background shapes
    document.querySelectorAll('.morphing-shape').forEach((shape, index) => {
        anime({
            targets: shape,
            scale: [
                { value: [0.1, 0.5], duration: 5000, easing: 'easeOutElastic(1, .8)' },
                { value: 0.1, duration: 5000, easing: 'easeInElastic(1, .8)' }
            ],
            borderRadius: [
                { value: '70% 30% 30% 70% / 60% 40% 60% 40%', duration: 5000 },
                { value: '30% 70% 70% 30% / 40% 60% 40% 60%', duration: 5000 }
            ],
            translateX: anime.random(-200, 200),
            translateY: anime.random(-200, 200),
            rotate: {
                value: '360',
                duration: 10000,
                easing: 'linear'
            },
            delay: anime.random(0, 2000),
            loop: true,
            direction: 'alternate'
        });
    });

    // Animate floating elements
    document.querySelectorAll('.floating-element').forEach((el, index) => {
        anime({
            targets: el,
            translateX: () => anime.random(-100, 100),
            translateY: () => anime.random(-50, 50),
            scale: [0.5, 1],
            rotate: '1turn',
            opacity: [0, 0.6],
            duration: 4000,
            delay: index * 200,
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutQuad'
        });
    });

    // Animate SVG lines
    anime({
        targets: '.line',
        strokeDashoffset: [anime.setDashoffset, 0],
        opacity: [0, 0.5],
        duration: 2000,
        delay: anime.stagger(200),
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate'
    });
}

// Initialize Lottie animations
function initializeLottieAnimations() {
    // Background animation - Creative flowing gradient
    const bgAnimation = lottie.loadAnimation({
        container: document.getElementById('bg-lottie'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets10.lottiefiles.com/packages/lf20_ctunwap5.json' // Flowing creative gradient
    });
    bgAnimation.setSpeed(0.5);

    // Logo animation - Creative morphing shapes
    const logoAnimation = lottie.loadAnimation({
        container: document.getElementById('logo-lottie'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets9.lottiefiles.com/packages/lf20_6gqtyxsc.json' // Design tools morphing
    });
    logoAnimation.setSpeed(0.8);

    // Preview animation - Creative design workflow
    const previewAnimation = lottie.loadAnimation({
        container: document.getElementById('preview-lottie'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets3.lottiefiles.com/packages/lf20_xvmh8qdx.json' // Creative design workflow animation
    });
    previewAnimation.setSpeed(0.7);

    // Add hover interaction to preview
    const previewContainer = document.querySelector('.animation-preview');
    previewContainer.addEventListener('mouseenter', () => {
        previewAnimation.setDirection(1);
        previewAnimation.play();
        previewAnimation.setSpeed(1);
    });
    previewContainer.addEventListener('mouseleave', () => {
        previewAnimation.setDirection(-1);
        previewAnimation.setSpeed(0.7);
    });

    // Feature animations with design-focused icons
    const feature1Animation = lottie.loadAnimation({
        container: document.getElementById('feature1-lottie'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets8.lottiefiles.com/packages/lf20_xvroqt2q.json' // AI brain animation
    });
    feature1Animation.setSpeed(0.6);

    const feature2Animation = lottie.loadAnimation({
        container: document.getElementById('feature2-lottie'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets9.lottiefiles.com/packages/lf20_ic37m4uo.json' // Motion design animation
    });
    feature2Animation.setSpeed(0.6);

    const feature3Animation = lottie.loadAnimation({
        container: document.getElementById('feature3-lottie'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets3.lottiefiles.com/packages/lf20_yvwgjurf.json' // Magic wand animation
    });
    feature3Animation.setSpeed(0.6);

    // Add hover interactions for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        const animation = [feature1Animation, feature2Animation, feature3Animation][index];
        
        card.addEventListener('mouseenter', () => {
            animation.setDirection(1);
            animation.play();
            animation.setSpeed(1);
        });
        
        card.addEventListener('mouseleave', () => {
            animation.setDirection(-1);
            animation.setSpeed(0.6);
        });
    });

    // Button animation - Creative checkmark
    const buttonAnimation = lottie.loadAnimation({
        container: document.getElementById('button-lottie'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'https://assets2.lottiefiles.com/packages/lf20_jbrw3hax.json' // Creative success
    });

    // Add hover effect for the button
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.addEventListener('mouseenter', () => {
        buttonAnimation.goToAndPlay(0);
    });
}

// Sample prompts for typing animation
const prompts = [
    "Type your design idea...",
    "Create an animated logo...",
    "Design a landing page...",
    "Animate a character...",
    "Build an interactive UI..."
];

// Start typing animation
function startTypingAnimation() {
    const typingText = document.querySelector('.typing-text');
    let currentPromptIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentPrompt = prompts[currentPromptIndex];
        
        if (isDeleting) {
            // Deleting text
            typingText.textContent = currentPrompt.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            
            if (currentCharIndex === 0) {
                isDeleting = false;
                currentPromptIndex = (currentPromptIndex + 1) % prompts.length;
                setTimeout(type, 1000); // Pause before typing next prompt
                return;
            }
            
            setTimeout(type, 50); // Deleting speed
        } else {
            // Typing text
            typingText.textContent = currentPrompt.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            
            if (currentCharIndex === currentPrompt.length) {
                isDeleting = true;
                setTimeout(type, 2000); // Pause before deleting
                return;
            }
            
            setTimeout(type, 100); // Typing speed
        }
    }
    
    // Start the typing animation
    type();
}

// Add hover animation to the submit button
document.querySelector('.submit-btn').addEventListener('mouseenter', (e) => {
    anime({
        targets: e.target,
        scale: 1.05,
        duration: 300,
        easing: 'easeOutQuad'
    });
});

document.querySelector('.submit-btn').addEventListener('mouseleave', (e) => {
    anime({
        targets: e.target,
        scale: 1,
        duration: 300,
        easing: 'easeOutQuad'
    });
}); 