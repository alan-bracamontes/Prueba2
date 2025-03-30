document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Esto evita la redirección
    
    const form = e.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('.submit');
    const thankYouMessage = document.getElementById('thankYouMessage');
    
    // Cambiar texto del botón durante el envío
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    
    try {
        // Enviar datos a Formspree usando Fetch API
        const response = await fetch('https://formspree.io/f/xldjwwlo', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Mostrar mensaje de éxito
            thankYouMessage.classList.add('show');
            
            // Resetear formulario
            form.reset();
            
            // Ocultar mensaje después de 4 segundos
            setTimeout(() => {
                thankYouMessage.classList.remove('show');
            }, 4000);
        } else {
            throw new Error('Error en el envío');
        }
    } catch (error) {
        alert('Hubo un error al enviar el mensaje. Por favor inténtalo de nuevo.');
        console.error('Error:', error);
    } finally {
        // Restaurar botón
        submitButton.textContent = 'Enviar Solicitud';
        submitButton.disabled = false;
    }
});

