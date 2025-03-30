document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
    
    document.getElementById('contactForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        const form = e.target;
        const submitButton = form.querySelector('.submit');
        const successAnim = document.getElementById('successAnimation');
        
        // Resetear estado inicial
        successAnim.style.display = 'none';
        successAnim.querySelector('.checkmark-circle').innerHTML = '<div class="checkmark">✓</div>';
        
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        
        try {
            const response = await fetch('https://formspree.io/f/xldjwwlo', {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });
            
            if (response.ok) {
                // Mostrar animación
                successAnim.style.display = 'block';
                
                // Crear partículas (opcional)
                const circle = successAnim.querySelector('.checkmark-circle');
                for (let i = 0; i < 12; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'particle';
                    particle.style.setProperty('--tx', `${Math.random() * 100 - 50}px`);
                    particle.style.setProperty('--ty', `${Math.random() * 100 - 50}px`);
                    particle.style.width = `${Math.random() * 10 + 5}px`;
                    particle.style.height = particle.style.width;
                    particle.style.animationDelay = `${i * 0.05}s`;
                    circle.appendChild(particle);
                }
                
                // Resetear formulario
                form.reset();
                
                // Ocultar después de 4 segundos
                setTimeout(() => {
                    successAnim.style.display = 'none';
                    circle.innerHTML = '<div class="checkmark">✓</div>';
                }, 4000);
            }
        } catch (error) {
            alert('Error al enviar. Por favor inténtalo de nuevo.');
        } finally {
            submitButton.textContent = 'Enviar Solicitud';
            submitButton.disabled = false;
        }
    });
});