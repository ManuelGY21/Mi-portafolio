// =====================================================
// SCRIPT.JS - Funcionalidad del Portafolio
// =====================================================

function mostrarMensajeExito() {
    const formularioContainer = document.querySelector('.contacto-formulario');
    
    let mensajeExistente = formularioContainer.querySelector('.mensaje-confirmacion');
    if (mensajeExistente) {
        mensajeExistente.remove();
    }
    
    const contenedorMensaje = document.createElement('div');
    contenedorMensaje.className = 'mensaje-confirmacion';
    
    const icono = document.createElement('div');
    icono.className = 'icono-check';
    icono.innerHTML = '✓';
    
    const titulo = document.createElement('h3');
    titulo.textContent = '¡Mensaje Enviado!';
    
    const subtitulo = document.createElement('p');
    subtitulo.textContent = 'Gracias por contactarme. Te responderé lo antes posible.';
    
    contenedorMensaje.appendChild(icono);
    contenedorMensaje.appendChild(titulo);
    contenedorMensaje.appendChild(subtitulo);
    
    formularioContainer.appendChild(contenedorMensaje);
    
    formularioContainer.classList.add('mensaje-enviado');
    
    setTimeout(() => {
        contenedorMensaje.classList.add('mostrar');
    }, 10);
    
    setTimeout(() => {
        contenedorMensaje.classList.remove('mostrar');
        setTimeout(() => {
            formularioContainer.classList.remove('mensaje-enviado');
            contenedorMensaje.remove();
        }, 400);
    }, 4000);
}

function enviarEmail(formData) {
    const serviceID = 'service_id6ybxg';
    const templateID = 'template_bb5kdod';
    const userID = 'X4_t8wQlEDT9ZzXha';
    
    const templateParams = {
        from_name: formData.nombre,
        from_email: formData.email,
        message: formData.mensaje,
        to_email: 'manuelgonzalesyactayo@gmail.com'
    };
    
    return emailjs.send(serviceID, templateID, templateParams, userID)
        .then(() => {
            console.log('Email enviado exitosamente a:', templateParams.to_email);
            return true;
        })
        .catch((error) => {
            console.error('Error al enviar email:', error);
            return false;
        });
}

document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('contactForm');
    
    if (formulario) {
        formulario.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = {
                nombre: document.getElementById('nombre').value,
                email: document.getElementById('email').value,
                mensaje: document.getElementById('mensaje').value
            };
            
            if (!formData.nombre || !formData.email || !formData.mensaje) {
                alert('Por favor, completa todos los campos.');
                return;
            }
            
            const botonEnviar = formulario.querySelector('.boton-enviar');
            const textoOriginal = botonEnviar.textContent;
            botonEnviar.textContent = 'Enviando...';
            botonEnviar.disabled = true;
            
            try {
                const exitoso = await enviarEmail(formData);
                
                if (exitoso) {
                    mostrarMensajeExito();
                    formulario.reset();
                } else {
                    alert('Hubo un error al enviar el mensaje. Inténtalo nuevamente.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Hubo un error al enviar el mensaje. Inténtalo nuevamente.');
            } finally {
                botonEnviar.textContent = textoOriginal;
                botonEnviar.disabled = false;
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const enlaces = document.querySelectorAll('.nav-links a[href^="#"]');
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
