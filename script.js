// =====================================================
// SCRIPT.JS - Funcionalidad del Portafolio
// =====================================================

const traducciones = {
    es: {
        saludo: 'Hola,',
        soy: 'Soy',
        puestoPrincipal: 'Student Information Systems Engineer',
        navInicio: 'Inicio',
        navSobreMi: 'Sobre Mí',
        navExperiencia: 'Experiencia',
        navProyectos: 'Proyectos',
        navContacto: 'Contacto',
        estadoLaboral: 'Actualmente trabajando',
        curriculum: 'Curriculum',
        fotoCaption: 'Ingeniero de Sistemas en formación',
        sobreMiTitulo: 'Sobre Mí',
        quienSoyTitulo: '¿Quién Soy?',
        quienSoyTexto: 'Estudiante de octavo ciclo de Ingeniería de Sistemas de Información en la UPC, orientado a soporte técnico, infraestructura y ciberseguridad.',
        objetivoTitulo: 'Mi Objetivo',
        objetivoTexto: 'Desarrollarme en soporte TI, infraestructura y ciberseguridad, aportando soluciones técnicas que generen impacto.',
        perfilTitulo: 'Mi Perfil',
        perfilTexto: 'Cuento con formación en diagnóstico de incidencias, Windows, Linux, redes TCP/IP, gestión de usuarios y fundamentos de ITSM.',
        experienciaTitulo: 'Experiencia',
        experienciaLaboralEtiqueta: 'Experiencia laboral',
        experienciaAcademicaEtiqueta: 'Experiencia académica',
        experienciaPuesto: 'Auxiliar en Soporte Técnico',
        experienciaEmpresa: 'Tinbet',
        experienciaFecha: 'ago. 2026 - actualidad',
        experienciaUno: 'Gestión y resolución de consultas e incidencias de clientes, verificando información, tickets y movimientos dentro de la plataforma.',
        experienciaDos: 'Validación de KYC, retiros, depósitos, apuestas y bonos, asegurando el cumplimiento de los procedimientos y condiciones establecidas.',
        experienciaTres: 'Análisis de operaciones y consultas mediante herramientas internas como IGP y First, identificando inconsistencias y dando seguimiento a cada caso.',
        experienciaAcademicaUnoPuesto: 'Misión Universitaria de Ciberseguridad con IA',
        experienciaAcademicaUnoTexto: 'Desarrollé conocimientos en diseño y operación de un SOC moderno, análisis de logs y procesamiento de datos con Python.',
        experienciaAcademicaUnoTextoDos: 'Apliqué inteligencia artificial y modelos de lenguaje para el análisis de incidentes, detección de amenazas y automatización.',
        experienciaAcademicaDosPuesto: 'Misión Universitaria de Ciberseguridad e IoT',
        experienciaAcademicaDosTexto: 'Analicé vulnerabilidades en entornos simulados y propuse arquitecturas seguras para proteger datos y comunicaciones.',
        experienciaAcademicaDosTextoDos: 'Desarrollé soluciones IoT aplicando buenas prácticas de conectividad, integridad y ciberseguridad.',
        certificadosEtiqueta: 'Certificados',
        ampliarCertificado: 'Ampliar',
        habilidadesLenguajes: 'Lenguajes',
        habilidadesSistemas: 'Sistemas',
        habilidadesBasesDatos: 'Bases de datos',
        habilidadesSeguridadCloud: 'Cloud',
        habilidadesHerramientas: 'Herramientas',
        certificadoUno: 'Microsoft Certified: SQL AI Developer Associate',
        certificadoDos: 'IBM IT Support Professional Certificate',
        certificadoTres: 'Google IT Support Professional Certificate',
        certificadoCuatro: 'Google Cybersecurity Professional Certificate',
        certificadoCinco: 'Certificación Profesional en Ciberseguridad con IA',
        certificadoSeis: 'Certificado de Ciberseguridad e IoT',
        habilidadesTitulo: 'Mis Habilidades Técnicas',
        proyectosTitulo: 'Mis Proyectos',
        proyectoUnoTitulo: 'Realidad aumentada para diseñar ciudades sostenibles',
        proyectoUnoTexto: 'La aplicación ProyectVision fue creada para transformar la forma en que se llevan a cabo los proyectos urbanos. En un mundo en constante evolución, la necesidad de herramientas innovadoras se vuelve cada vez más crucial.',
        proyectoDosTitulo: 'Buffet de Abogados',
        proyectoDosTexto: 'LexiConnect es una plataforma integral diseñada para optimizar la gestión y administración de bufetes de abogados. Su objetivo es centralizar la información legal, facilitar el seguimiento de casos y mejorar la comunicación entre profesionales y clientes.',
        proyectoTresTitulo: 'Mi portafolio',
        proyectoTresTexto: 'Sitio web personal interactivo y responsivo diseñado para presentar mi perfil profesional como estudiante de Ingeniería de Sistemas. Destaca mis habilidades técnicas y proyectos relevantes.',
        verCodigo: 'Ver Código',
        verDemo: 'Ver Demo',
        contactoTitulo: 'Trabajemos Juntos',
        contactoTexto: 'Estoy interesado en oportunidades para colaborar en proyectos innovadores y desafiantes. Si tienes alguna propuesta, pregunta o simplemente quieres saludar, no dudes en contactarme a través del formulario o por mis redes sociales.',
        nombrePlaceholder: 'Nombre',
        correoPlaceholder: 'Correo Electrónico',
        mensajePlaceholder: 'Tu mensaje',
        enviarMensaje: 'Enviar Mensaje',
        mensajeEnviadoTitulo: '¡Mensaje Enviado!',
        mensajeEnviadoTexto: 'Gracias por contactarme. Te responderé lo antes posible.'
    },
    en: {
        saludo: 'Hi,',
        soy: "I'm",
        puestoPrincipal: 'Student Information Systems Engineer',
        navInicio: 'Home',
        navSobreMi: 'About Me',
        navExperiencia: 'Experience',
        navProyectos: 'Projects',
        navContacto: 'Contact',
        estadoLaboral: 'Currently employed',
        curriculum: 'Resume',
        fotoCaption: 'System Engineer in training',
        sobreMiTitulo: 'About Me',
        quienSoyTitulo: 'Who Am I?',
        quienSoyTexto: 'Eighth-cycle Information Systems Engineering student at UPC, focused on technical support, infrastructure and cybersecurity.',
        objetivoTitulo: 'My Goal',
        objetivoTexto: 'To grow in IT support, infrastructure and cybersecurity while contributing technical solutions with real impact.',
        perfilTitulo: 'My Profile',
        perfilTexto: 'Trained in incident diagnosis, Windows, Linux, TCP/IP networking, user management and ITSM fundamentals.',
        experienciaTitulo: 'Experience',
        experienciaLaboralEtiqueta: 'Work experience',
        experienciaAcademicaEtiqueta: 'Academic experience',
        experienciaPuesto: 'Technical Support Assistant',
        experienciaEmpresa: 'Tinbet',
        experienciaFecha: 'Aug. 2026 - present',
        experienciaUno: 'Management and resolution of customer inquiries and incidents, verifying information, tickets and platform activity.',
        experienciaDos: 'Validation of KYC, withdrawals, deposits, bets and bonuses, ensuring compliance with established procedures and conditions.',
        experienciaTres: 'Analysis of operations and inquiries through internal tools such as IGP and First, identifying inconsistencies and following up on each case.',
        experienciaAcademicaUnoPuesto: 'University Cybersecurity with AI Mission',
        experienciaAcademicaUnoTexto: 'Learned to design and operate a modern SOC, analyze logs and process data with Python.',
        experienciaAcademicaUnoTextoDos: 'Applied artificial intelligence and language models to incident analysis, threat detection and automation.',
        experienciaAcademicaDosPuesto: 'University Cybersecurity and IoT Mission',
        experienciaAcademicaDosTexto: 'Analyzed vulnerabilities in simulated environments and proposed secure architectures to protect data and communications.',
        experienciaAcademicaDosTextoDos: 'Developed IoT solutions applying connectivity, integrity and cybersecurity best practices.',
        certificadosEtiqueta: 'Certificates',
        ampliarCertificado: 'Enlarge',
        habilidadesLenguajes: 'Languages',
        habilidadesSistemas: 'Systems',
        habilidadesBasesDatos: 'Databases',
        habilidadesSeguridadCloud: 'Cloud',
        habilidadesHerramientas: 'Tools',
        certificadoUno: 'Microsoft Certified: SQL AI Developer Associate',
        certificadoDos: 'IBM IT Support Professional Certificate',
        certificadoTres: 'Google IT Support Professional Certificate',
        certificadoCuatro: 'Google Cybersecurity Professional Certificate',
        certificadoCinco: 'Professional Certificate in Cybersecurity with AI',
        certificadoSeis: 'Cybersecurity and IoT Certificate',
        habilidadesTitulo: 'Technical Skills',
        proyectosTitulo: 'My Projects',
        proyectoUnoTitulo: 'Augmented reality for designing sustainable cities',
        proyectoUnoTexto: 'ProyectVision was created to transform how urban projects are developed. In a constantly changing world, innovative tools are increasingly essential.',
        proyectoDosTitulo: 'Law Firm',
        proyectoDosTexto: 'LexiConnect is a platform designed to optimize law firm management. It centralizes legal information, simplifies case tracking and improves communication between professionals and clients.',
        proyectoTresTitulo: 'My portfolio',
        proyectoTresTexto: 'Interactive and responsive personal website designed to present my professional profile as an Information Systems Engineering student. It highlights my technical skills and projects.',
        verCodigo: 'View Code',
        verDemo: 'View Demo',
        contactoTitulo: 'Let’s Work Together',
        contactoTexto: 'I am interested in opportunities to collaborate on innovative and challenging projects. If you have a proposal, a question or simply want to say hello, feel free to contact me through the form or social networks.',
        nombrePlaceholder: 'Name',
        correoPlaceholder: 'Email Address',
        mensajePlaceholder: 'Your message',
        enviarMensaje: 'Send Message',
        mensajeEnviadoTitulo: 'Message Sent!',
        mensajeEnviadoTexto: 'Thank you for contacting me. I will get back to you soon.'
    }
};

function cambiarIdioma(idioma) {
    const textos = traducciones[idioma];
    if (!textos) return;

    document.documentElement.lang = idioma;
    document.querySelectorAll('[data-i18n]').forEach((elemento) => {
        const traduccion = textos[elemento.dataset.i18n];
        if (traduccion) elemento.textContent = traduccion;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((elemento) => {
        const traduccion = textos[elemento.dataset.i18nPlaceholder];
        if (traduccion) elemento.placeholder = traduccion;
    });

    document.querySelectorAll('[data-lang]').forEach((boton) => {
        boton.classList.toggle('idioma-activo', boton.dataset.lang === idioma);
    });
    const codigoIdioma = document.querySelector('.idioma-codigo');
    if (codigoIdioma) codigoIdioma.textContent = idioma.toUpperCase();
    localStorage.setItem('idiomaPreferido', idioma);
}

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
    const idiomaActual = document.documentElement.lang || 'es';
    titulo.textContent = traducciones[idiomaActual].mensajeEnviadoTitulo;
    
    const subtitulo = document.createElement('p');
    subtitulo.textContent = traducciones[idiomaActual].mensajeEnviadoTexto;
    
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
    const idiomaGuardado = localStorage.getItem('idiomaPreferido') || 'es';
    const selectorIdioma = document.querySelector('.selector-idioma');
    const botonIdioma = document.querySelector('.idioma-toggle');

    if (botonIdioma && selectorIdioma) {
        botonIdioma.addEventListener('click', () => {
            const abierto = selectorIdioma.classList.toggle('abierto');
            botonIdioma.setAttribute('aria-expanded', abierto);
        });

        document.addEventListener('click', (evento) => {
            if (!selectorIdioma.contains(evento.target)) {
                selectorIdioma.classList.remove('abierto');
                botonIdioma.setAttribute('aria-expanded', 'false');
            }
        });
    }

    document.querySelectorAll('[data-lang]').forEach((boton) => {
        boton.addEventListener('click', () => {
            cambiarIdioma(boton.dataset.lang);
            if (selectorIdioma && botonIdioma) {
                selectorIdioma.classList.remove('abierto');
                botonIdioma.setAttribute('aria-expanded', 'false');
            }
        });
    });
    cambiarIdioma(idiomaGuardado);

    const certificadoModal = document.getElementById('certificadoModal');
    const certificadoModalImagen = document.getElementById('certificadoModalImagen');
    const cerrarCertificadoModal = document.getElementById('cerrarCertificadoModal');

    function abrirCertificado(rutaImagen) {
        if (!certificadoModal || !certificadoModalImagen) return;
        certificadoModalImagen.src = rutaImagen;
        certificadoModal.hidden = false;
        document.body.classList.add('modal-abierto');
    }

    function cerrarCertificado() {
        if (!certificadoModal || !certificadoModalImagen) return;
        certificadoModal.hidden = true;
        certificadoModalImagen.src = '';
        document.body.classList.remove('modal-abierto');
    }

    document.querySelectorAll('[data-certificado]').forEach((boton) => {
        boton.addEventListener('click', () => abrirCertificado(boton.dataset.certificado));
    });

    cerrarCertificadoModal?.addEventListener('click', cerrarCertificado);
    certificadoModal?.addEventListener('click', (evento) => {
        if (evento.target === certificadoModal) cerrarCertificado();
    });
    document.addEventListener('keydown', (evento) => {
        if (evento.key === 'Escape') cerrarCertificado();
    });

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
