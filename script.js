// Store the original letter content
    const originalLetterContent = `
        <div class="letter-body" id="letterBody">
            <p>From the moment I met you in CODM, my world changed in a way I never expected. What started as simple matches and short chats slowly became the best part of my day. Then we started talking more, and even though we’re in an LDR, 
                every night ended with us on a video call—something I always look forward to.</p>
            
            <p>Ever since I confessed, everything has felt even more unreal… because it turns out you like me too. And that feeling, that moment, is something I’ll never forget.</p>
            
            <p>Every conversation with you feels like entering a place where happiness grows naturally. Even from a distance, the memories we’ve made are treasures I keep close to my heart.</p>
            
            <p>You made me feel something I’ve never felt before—loved. And because of you, I want to grow, to improve, and to become the best version of myself.</p>

             <p>I know I’m not perfect, but I promise to give you my best. To make you smile, to support you, and to stay with you through everything, no matter the distance.</p>
romise to give you my best. To make you smile, to support you, to be there through everything.</p>

        <p class="letter-question">Can I Court You?💕</p>

        <div class="button-container">
            <button class="button" onclick="sayYes()">
                <span style="position: relative; z-index: 1;">Yes! 💖</span>
            </button>
            <button class="button" onclick="sayMaybe()">
                <span style="position: relative; z-index: 1;">Let me think 🤔</span>
            </button>
        </div>
    `;

    // Enhanced Design Functions
    let cursorTrails = [];

    function createCursorTrail(x, y) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';
        document.body.appendChild(trail);
        
        cursorTrails.push(trail);
        if (cursorTrails.length > 10) {
            const oldTrail = cursorTrails.shift();
            if (oldTrail && oldTrail.parentNode) {
                oldTrail.parentNode.removeChild(oldTrail);
            }
        }
    }

    function createFloatingElements() {
        const elements = ['💖', '✨', '🌸', '💕', '🎵', '🌟', '💌', '🦋'];
        const container = document.getElementById('floatingHearts');

        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const element = document.createElement('div');
                element.className = 'floating-element';
                element.innerHTML = elements[Math.floor(Math.random() * elements.length)];
                element.style.left = Math.random() * 100 + '%';
                element.style.fontSize = (Math.random() * 20 + 16) + 'px';
                element.style.animationDelay = Math.random() * 5 + 's';
                container.appendChild(element);
            }, i * 300);
        }
    }

    function createMorphingShapes() {
        const container = document.getElementById('morphingShapes');

        for (let i = 0; i < 8; i++) {
            const shape = document.createElement('div');
            shape.className = 'morph-shape';
            shape.style.width = Math.random() * 200 + 100 + 'px';
            shape.style.height = shape.style.width;
            shape.style.left = Math.random() * 100 + '%';
            shape.style.top = Math.random() * 100 + '%';
            shape.style.animationDelay = Math.random() * 20 + 's';
            shape.style.background = `linear-gradient(45deg, 
                ${getRandomColor()}, 
                ${getRandomColor()})`;
            container.appendChild(shape);
        }
    }

    function getRandomColor() {
        const colors = ['#FF1493', '#FF69B4', '#87CEEB', '#90EE90', '#FFD700', '#FFB6C1'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function createStars() {
        const stars = document.getElementById('stars');
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 50 + '%';
            star.style.width = Math.random() * 3 + 1 + 'px';
            star.style.height = star.style.width;
            star.style.animationDelay = Math.random() * 3 + 's';
            stars.appendChild(star);
        }
    }

    function createSeasonalParticles() {
        const particles = ['🌸', '🍃', '✨', '💖'];
        setInterval(() => {
            const particle = document.createElement('div');
            particle.className = 'seasonal-particle cherry-blossom';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.fontSize = (Math.random() * 20 + 16) + 'px';
            particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
            
            if (Math.random() > 0.5) {
                particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
                particle.style.background = 'transparent';
            }
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 10000);
        }, 300);
    }

    // Enhanced cursor trail
    document.addEventListener('mousemove', (e) => {
        createCursorTrail(e.clientX, e.clientY);
    });

    // Existing functions remain the same
    function createCloud() {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        cloud.style.width = Math.random() * 100 + 100 + 'px';
        cloud.style.height = Math.random() * 50 + 50 + 'px';
        cloud.style.top = Math.random() * 30 + '%';
        cloud.style.animationDuration = Math.random() * 20 + 30 + 's';
        document.body.appendChild(cloud);
        
        setTimeout(() => cloud.remove(), 50000);
    }

    // Initialize enhanced design
    function initEnhancedDesign() {
        createFloatingElements();
        createMorphingShapes();
        createStars();
        createSeasonalParticles();
    }

    // Rest of your existing JavaScript remains exactly the same...
    setInterval(createCloud, 5000);
    for(let i = 0; i < 3; i++) createCloud();

    // Create trees
    for(let i = 0; i < 5; i++) {
        const tree = document.createElement('div');
        tree.className = 'tree';
        tree.style.left = (i * 20 + 10) + '%';
        tree.innerHTML = '<div class="trunk"></div><div class="leaves"></div>';
        document.querySelector('.garden').appendChild(tree);
    }

    // Create flowers
    for(let i = 0; i < 20; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.left = Math.random() * 95 + '%';
        flower.style.animationDelay = Math.random() * 2 + 's';
        flower.innerHTML = `
            <div class="petals">
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="center"></div>
            </div>
            <div class="stem"></div>
        `;
        document.querySelector('.garden').appendChild(flower);
    }

    // Flying birds
    function createBird() {
        const bird = document.createElement('div');
        bird.className = 'bird';
        bird.innerHTML = '🐦';
        bird.style.top = Math.random() * 40 + '%';
        bird.style.animationDuration = Math.random() * 10 + 15 + 's';
        document.body.appendChild(bird);
        
        setTimeout(() => bird.remove(), 25000);
    }

    setInterval(createBird, 8000);
    createBird();

    // Click interaction - hearts and flowers
    document.addEventListener('click', (e) => {
        if(e.target.closest('.envelope-container') || e.target.closest('.letter-paper')) return;
        
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = e.clientX - 15 + 'px';
        heart.style.top = e.clientY - 15 + 'px';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);

        const flower = document.createElement('div');
        flower.className = 'floating-flower';
        flower.innerHTML = '🌸';
        flower.style.left = e.clientX + 20 + 'px';
        flower.style.top = e.clientY - 10 + 'px';
        flower.style.fontSize = '25px';
        document.body.appendChild(flower);
        setTimeout(() => flower.remove(), 4000);
    });

    // Touch interaction for mobile
    document.addEventListener('touchstart', (e) => {
        if(e.target.closest('.envelope-container') || e.target.closest('.letter-paper')) return;
        
        const touch = e.touches[0];
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = touch.clientX - 15 + 'px';
        heart.style.top = touch.clientY - 15 + 'px';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);

        const flower = document.createElement('div');
        flower.className = 'floating-flower';
        flower.innerHTML = '🌸';
        flower.style.left = touch.clientX + 20 + 'px';
        flower.style.top = touch.clientY - 10 + 'px';
        flower.style.fontSize = '25px';
        document.body.appendChild(flower);
        setTimeout(() => flower.remove(), 4000);
    });

    // Open envelope
    function openEnvelope() {
        const envelope = document.getElementById('envelope');
        const envelopeContainer = document.getElementById('envelopeContainer');
        const letterPaper = document.getElementById('letterPaper');
        const floatingPhotos = document.getElementById('floatingPhotos');
        const backButton = document.getElementById('backButton');
        const loadingSpinner = document.getElementById('loadingSpinner');
        
        // Show loading
        loadingSpinner.classList.add('show');
        
        // Play background music with error handling
        const bgMusic = document.getElementById('bgMusic');
        const playPromise = bgMusic.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(e => {
                console.log("Audio play failed:", e);
            });
        }
        
        envelope.classList.add('opening');
        
        setTimeout(() => {
            envelopeContainer.classList.add('hidden');
            letterPaper.classList.add('show');
            floatingPhotos.classList.add('show');
            backButton.classList.add('show');
            loadingSpinner.classList.remove('show');
        }, 1500);
    }

    // Reset to original letter content
    function resetToOriginalLetter() {
        const letterBody = document.getElementById('letterBody');
        letterBody.innerHTML = originalLetterContent;
    }

    // Close letter and go back to envelope
    function closeLetter() {
        const envelope = document.getElementById('envelope');
        const envelopeContainer = document.getElementById('envelopeContainer');
        const letterPaper = document.getElementById('letterPaper');
        const floatingPhotos = document.getElementById('floatingPhotos');
        const backButton = document.getElementById('backButton');
        
        letterPaper.classList.remove('show');
        floatingPhotos.classList.remove('show');
        backButton.classList.remove('show');
        
        setTimeout(() => {
            envelope.classList.remove('opening');
            envelopeContainer.classList.remove('hidden');
            // Reset letter content when closing
            resetToOriginalLetter();
        }, 500);
    }

    // Response functions
    function sayYes() {
        const letterBody = document.getElementById('letterBody');
        const backButton = document.getElementById('backButton');
        
        // Create response animation overlay
        const responseDiv = document.createElement('div');
        responseDiv.className = 'response-animation';
        responseDiv.innerHTML = `
            <div style="font-size: 80px; margin-bottom: 20px;">💖</div>
            <h1 style="color: var(--primary-color); font-size: 48px; margin-bottom: 20px;">YES!</h1>
        `;
        document.body.appendChild(responseDiv);
        
        setTimeout(() => {
            responseDiv.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            responseDiv.remove();
            letterBody.innerHTML = `
                <h1 style="color: var(--primary-color); font-size: 36px; margin: 20px 0;">You made me the happiest! 💖</h1>
                <p style="font-size: 24px; color: var(--primary-color); font-weight: bold;">Thank you for giving me this chance! 🌹</p>
                <p style="font-size: 20px;">I promise to make every moment special and fill your days with love and happiness!</p>
                <p style="font-size: 50px; margin-top: 30px;">🎉✨💕🌸🦋</p>
                <button class="button" onclick="resetToOriginalLetter()" style="margin-top: 30px;">
                    <span style="position: relative; z-index: 1;">Read again 💌</span>
                </button>
            `;
            celebrate();
        }, 2000);
    }

    function sayMaybe() {
        const letterBody = document.getElementById('letterBody');
        
        // Create response animation overlay
        const responseDiv = document.createElement('div');
        responseDiv.className = 'response-animation';
        responseDiv.innerHTML = `
            <div style="font-size: 80px; margin-bottom: 20px;">🤔</div>
            <h1 style="color: var(--secondary-color); font-size: 48px; margin-bottom: 20px;">That's okay!</h1>
        `;
        document.body.appendChild(responseDiv);
        
        setTimeout(() => {
            responseDiv.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            responseDiv.remove();
            letterBody.innerHTML = `
                <h1 style="color: var(--primary-color); font-size: 36px; margin: 20px 0;">Take all the time you need 💝</h1>
                <p style="font-size: 20px;">I'll be here, waiting with flowers and hope in my heart.</p>
                <p style="font-size: 20px;">No pressure - just know that you mean the world to me! 🌹</p>
                <button class="button" onclick="resetToOriginalLetter()" style="margin-top: 30px;">
                    <span style="position: relative; z-index: 1;">Read again 💌</span>
                </button>
            `;
        }, 2000);
    }

    function celebrate() {
        const celebration = document.createElement('div');
        celebration.className = 'celebration';
        document.body.appendChild(celebration);

        for(let i = 0; i < 100; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.background = ['var(--primary-color)', '#FFD700', 'var(--secondary-color)', 'var(--accent-color)'][Math.floor(Math.random() * 4)];
                confetti.style.animationDelay = Math.random() * 0.5 + 's';
                celebration.appendChild(confetti);
                setTimeout(() => confetti.remove(), 3000);
            }, i * 30);
        }

        // Remove celebration container after animation
        setTimeout(() => {
            celebration.remove();
        }, 3000);
    }

    // Handle page visibility change (pause music when tab is not active)
    document.addEventListener('visibilitychange', function() {
        const bgMusic = document.getElementById('bgMusic');
        if (document.hidden) {
            bgMusic.pause();
        } else {
            // Only play if user has already interacted with the audio
            if (bgMusic.currentTime > 0) {
                bgMusic.play().catch(e => console.log("Auto-play prevented"));
            }
        }
    });

    // Initialize with improved error handling
    document.addEventListener('DOMContentLoaded', function() {
        // Preload images with error handling
        const images = document.querySelectorAll('.floating-photo img');
        images.forEach(img => {
            img.onerror = function() {
                this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjRkZFOEUxIi8+CjxwYXRoIGQ9Ik03NSA0MEw4NSA2MEg2NUw3NSA0MFoiIGZpbGw9IiNGRjY5QjQiLz4KPHBhdGggZD0iTTc1IDExMEw2NSA5MEg4NUw3NSAxMTBaIiBmaWxsPSIjRkY2OUI0Ii8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNzUiIHI9IjIwIiBmaWxsPSIjRkZEOEMwIi8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNzUiIHI9IjEwIiBmaWxsPSIjRkYxNDkzIi8+Cjx0ZXh0IHg9Ijc1IiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjRkYxNDkzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7imqA8L3RleHQ+Cjwvc3ZnPgo=';
                this.alt = 'Placeholder - Memory photo';
            };
        });

        // Initialize enhanced design
        initEnhancedDesign();
    });