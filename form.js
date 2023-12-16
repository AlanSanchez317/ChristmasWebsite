document.addEventListener("DOMContentLoaded", function () {
    const formContainer = document.querySelector('.form-container');
    const decorativeContainer = document.querySelector('.decorative-container'); 

    formContainer.addEventListener('submit', function (event) {
        event.preventDefault();
        showThankYouPopup();
    });

    function showThankYouPopup() {
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.innerHTML = `
            <div class="popup-content">
                <p>Thank you for your Wish!</p>
                <p>Merry Christmas!</p>
            </div>
        `;

        document.body.appendChild(popup);

        setTimeout(function () {
            document.body.removeChild(popup);
            addSparkleEffect(function () {
                formContainer.classList.add('shake');
                window.location.href = 'index.html';
            });
        }, 2000);
    }

    function addSparkleEffect(callback) {
        const explosionContainer = document.createElement('div');
        explosionContainer.classList.add('explosion-container');
        document.body.appendChild(explosionContainer);

        const numDots = 50;

        for (let i = 0; i < numDots; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            explosionContainer.appendChild(sparkle);

            const angle = (i / numDots) * 2 * Math.PI;
            const distance = Math.random() * 300 + 50;

            sparkle.style.top = `50%`;
            sparkle.style.left = `50%`;

            sparkle.style.transform = `translate(-50%, -50%) translate(${distance * Math.cos(angle)}px, ${distance * Math.sin(angle)}px)`;

            sparkle.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`;
        }

        setTimeout(function () {
            document.body.removeChild(explosionContainer);
            callback();
        }, 1000);
    }

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome to our Christmas Wish List!';
    decorativeContainer.appendChild(paragraph);
});
