// =====================================================
// SCRIPT.JS - Funcionalidad del Portafolio
// =====================================================

const traducciones = {
    es: {
        saltarContenido: 'Saltar al contenido',
        abrirMenu: 'Abrir menú',
        cerrarMenu: 'Cerrar menú',
        saludo: 'Hola,',
        soy: 'Soy',
        puestoPrincipal: 'Estudiante de Ingeniería de Sistemas de Información',
        navInicio: 'Inicio',
        navSobreMi: 'Sobre Mí',
        navCertificados: 'Certificados',
        navExperiencia: 'Experiencia',
        navProyectos: 'Proyectos',
        navContacto: 'Contacto',
        trayectoriaTag: 'TRAYECTORIA',
        formacionTag: 'FORMACIÓN ACADÉMICA',
        terminalLaboral: 'bash — Laboral',
        terminalAcademica: 'bash — Académica',
        estadoLaboral: 'Actualmente trabajando',
        curriculum: 'Currículum',
        fotoCaption: 'Ingeniero de Sistemas en formación',
        terminalSubtitulo: 'Soporte TI · Infraestructura · Ciberseguridad',
        terminalItem1: 'Ingeniería de Sistemas de Información — UPC',
        terminalItem2: 'Auxiliar en Soporte Técnico — Tinbet',
        terminalItem3: '6 certificaciones: Google, IBM, Microsoft, ITBA',
        terminalItem4: 'Abierto a nuevas oportunidades',
        botonCvTerminal: 'descargar_cv.pdf',
        botonContactoTerminal: './contactar',
        fotoCaptionTerminal: '// Lima, Perú',
        sobreMiTitulo: 'Sobre Mí',
        quienSoyTitulo: '¿Quién Soy?',
        quienSoyTexto: 'Estudiante de Ingeniería de Sistemas de Información en la UPC, orientado a soporte TI, infraestructura y ciberseguridad.',
        objetivoTitulo: 'Mi Objetivo',
        objetivoTexto: 'Desarrollarme en soporte TI e infraestructura, aplicando soluciones técnicas y buenas prácticas de seguridad.',
        perfilTitulo: 'Mi Perfil',
        perfilTexto: 'Formación en diagnóstico de incidencias, Windows, Linux, bases de datos, redes e ITSM, respaldada por certificaciones profesionales.',
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
        experienciaAcademicaUnoTextoTres: 'Participé en prácticas de automatización ofensiva y defensiva con Nmap, Subfinder, playbooks y SOAR.',
        experienciaAcademicaDosPuesto: 'Misión Universitaria de Ciberseguridad e IoT',
        experienciaAcademicaDosTexto: 'Analicé vulnerabilidades en entornos simulados y propuse arquitecturas seguras para proteger datos y comunicaciones.',
        experienciaAcademicaDosTextoDos: 'Desarrollé soluciones IoT aplicando buenas prácticas de conectividad, integridad y ciberseguridad.',
        experienciaAcademicaDosTextoTres: 'Participé en actividades prácticas de seguridad informática, Internet de las Cosas y protección de sistemas tecnológicos.',
        certificadosTitulo: 'Mis Certificaciones',
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
        proyectoDosTitulo: 'Bufete de abogados',
        proyectoDosTexto: 'LexiConnect es una plataforma integral diseñada para optimizar la gestión y administración de bufetes de abogados. Su objetivo es centralizar la información legal, facilitar el seguimiento de casos y mejorar la comunicación entre profesionales y clientes.',
        proyectoTresTitulo: 'Mi portafolio',
        proyectoTresTexto: 'Sitio web personal interactivo y responsivo diseñado para presentar mi perfil profesional como estudiante de Ingeniería de Sistemas. Destaca mis habilidades técnicas y proyectos relevantes.',
        verCodigo: 'Ver Código',
        verDemo: 'Ver Demo',
        contactoTitulo: 'Trabajemos Juntos',
        contactoTexto: 'Estoy interesado en oportunidades para colaborar en proyectos innovadores y desafiantes. Si tienes alguna propuesta, pregunta o simplemente quieres saludar, no dudes en contactarme a través del formulario o por mis redes sociales.',
        nombrePlaceholder: 'Nombre',
        nombreEtiqueta: 'Nombre',
        correoPlaceholder: 'Correo Electrónico',
        correoEtiqueta: 'Correo electrónico',
        mensajePlaceholder: 'Tu mensaje',
        mensajeEtiqueta: 'Mensaje',
        enviarMensaje: 'Enviar Mensaje',
        enviando: 'Enviando…',
        errorNombre: 'Escribe un nombre de entre 2 y 50 caracteres.',
        errorCorreo: 'Escribe una dirección de correo válida.',
        errorMensaje: 'Escribe un mensaje de entre 10 y 500 caracteres.',
        errorEnvio: 'No se pudo enviar el mensaje. Inténtalo nuevamente.',
        servicioNoDisponible: 'El formulario no está disponible temporalmente. Escríbeme por correo.',
        certificadoModalTitulo: 'Vista ampliada del certificado',
        cerrar: 'Cerrar',
        mensajeEnviadoTitulo: '¡Mensaje Enviado!',
        mensajeEnviadoTexto: 'Gracias por contactarme. Te responderé lo antes posible.'
    },
    en: {
        saltarContenido: 'Skip to content',
        abrirMenu: 'Open menu',
        cerrarMenu: 'Close menu',
        saludo: 'Hi,',
        soy: "I'm",
        puestoPrincipal: 'Student Information Systems Engineer',
        navInicio: 'Home',
        navSobreMi: 'About Me',
        navCertificados: 'Certificates',
        navExperiencia: 'Experience',
        navProyectos: 'Projects',
        navContacto: 'Contact',
        trayectoriaTag: 'CAREER PATH',
        formacionTag: 'ACADEMIC BACKGROUND',
        terminalLaboral: 'bash — Work Experience',
        terminalAcademica: 'bash — Academic Background',
        estadoLaboral: 'Currently employed',
        curriculum: 'Resume',
        fotoCaption: 'System Engineer in training',
        terminalSubtitulo: 'IT Support · Infrastructure · Cybersecurity',
        terminalItem1: 'Information Systems Engineering — UPC',
        terminalItem2: 'Technical Support Assistant — Tinbet',
        terminalItem3: '6 certifications: Google, IBM, Microsoft, ITBA',
        terminalItem4: 'Open to new opportunities',
        botonCvTerminal: 'download_cv.pdf',
        botonContactoTerminal: './contact',
        fotoCaptionTerminal: '// Lima, Peru',
        sobreMiTitulo: 'About Me',
        quienSoyTitulo: 'Who Am I?',
        quienSoyTexto: 'Information Systems Engineering student at UPC, focused on IT support, infrastructure and cybersecurity.',
        objetivoTitulo: 'My Goal',
        objetivoTexto: 'To grow in IT support and infrastructure while applying technical solutions and security best practices.',
        perfilTitulo: 'My Profile',
        perfilTexto: 'Trained in incident diagnosis, Windows, Linux, databases, networking and ITSM, supported by professional certifications.',
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
        experienciaAcademicaUnoTextoTres: 'Participated in offensive and defensive automation practices using Nmap, Subfinder, playbooks and SOAR.',
        experienciaAcademicaDosPuesto: 'University Cybersecurity and IoT Mission',
        experienciaAcademicaDosTexto: 'Analyzed vulnerabilities in simulated environments and proposed secure architectures to protect data and communications.',
        experienciaAcademicaDosTextoDos: 'Developed IoT solutions applying connectivity, integrity and cybersecurity best practices.',
        experienciaAcademicaDosTextoTres: 'Participated in practical activities involving information security, the Internet of Things and system protection.',
        certificadosTitulo: 'My Certifications',
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
        nombreEtiqueta: 'Name',
        correoPlaceholder: 'Email Address',
        correoEtiqueta: 'Email address',
        mensajePlaceholder: 'Your message',
        mensajeEtiqueta: 'Message',
        enviarMensaje: 'Send Message',
        enviando: 'Sending…',
        errorNombre: 'Enter a name between 2 and 50 characters.',
        errorCorreo: 'Enter a valid email address.',
        errorMensaje: 'Enter a message between 10 and 500 characters.',
        errorEnvio: 'The message could not be sent. Please try again.',
        servicioNoDisponible: 'The form is temporarily unavailable. Please email me instead.',
        certificadoModalTitulo: 'Enlarged certificate view',
        cerrar: 'Close',
        mensajeEnviadoTitulo: 'Message Sent!',
        mensajeEnviadoTexto: 'Thank you for contacting me. I will get back to you soon.'
    }
};

function volverALaPortadaAlRecargar() {
    const navegacion = performance.getEntriesByType('navigation')[0];
    if (navegacion?.type !== 'reload') return;

    if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    const posicionInicial = window.scrollY;
    if (posicionInicial <= 0) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.scrollTo(0, 0);
        return;
    }

    const duracion = 1400;
    const comienzo = performance.now();

    function animarSubida(tiempoActual) {
        const progreso = Math.min((tiempoActual - comienzo) / duracion, 1);
        const suavizado = 1 - Math.pow(1 - progreso, 3);
        window.scrollTo(0, Math.round(posicionInicial * (1 - suavizado)));
        if (progreso < 1) requestAnimationFrame(animarSubida);
    }

    requestAnimationFrame(animarSubida);
}

window.addEventListener('pageshow', () => {
    requestAnimationFrame(() => requestAnimationFrame(volverALaPortadaAlRecargar));
}, { once: true });

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

    document.querySelectorAll('[data-i18n-aria-label]').forEach((elemento) => {
        const traduccion = textos[elemento.dataset.i18nAriaLabel];
        if (traduccion) elemento.setAttribute('aria-label', traduccion);
    });

    document.querySelectorAll('[data-lang]').forEach((boton) => {
        boton.classList.toggle('idioma-activo', boton.dataset.lang === idioma);
    });
    const codigoIdioma = document.querySelector('.idioma-codigo');
    if (codigoIdioma) codigoIdioma.textContent = idioma.toUpperCase();
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        const abierto = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-label', textos[abierto ? 'cerrarMenu' : 'abrirMenu']);
    }
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
    contenedorMensaje.setAttribute('role', 'status');
    contenedorMensaje.setAttribute('aria-live', 'polite');
    
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
    
    if (!window.emailjs) return Promise.resolve(false);

    return window.emailjs.send(serviceID, templateID, templateParams, userID)
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
    if (window.emailjs) window.emailjs.init('X4_t8wQlEDT9ZzXha');

    const idiomaGuardado = localStorage.getItem('idiomaPreferido') || 'es';
    const selectorIdioma = document.querySelector('.selector-idioma');
    const botonIdioma = document.querySelector('.idioma-toggle');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    function cerrarMenu() {
        navLinks?.classList.remove('abierto');
        menuToggle?.setAttribute('aria-expanded', 'false');
        if (menuToggle) menuToggle.setAttribute('aria-label', traducciones[document.documentElement.lang].abrirMenu);
    }

    menuToggle?.addEventListener('click', () => {
        const abierto = navLinks?.classList.toggle('abierto') ?? false;
        menuToggle.setAttribute('aria-expanded', String(abierto));
        menuToggle.setAttribute('aria-label', traducciones[document.documentElement.lang][abierto ? 'cerrarMenu' : 'abrirMenu']);
    });

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
    let elementoAnteriorAlModal = null;

    function abrirCertificado(rutaImagen) {
        if (!certificadoModal || !certificadoModalImagen) return;
        elementoAnteriorAlModal = document.activeElement;
        certificadoModalImagen.src = rutaImagen;
        certificadoModal.hidden = false;
        document.body.classList.add('modal-abierto');
        cerrarCertificadoModal?.focus();
    }

    function cerrarCertificado() {
        if (!certificadoModal || !certificadoModalImagen || certificadoModal.hidden) return;
        certificadoModal.hidden = true;
        certificadoModalImagen.src = '';
        document.body.classList.remove('modal-abierto');
        elementoAnteriorAlModal?.focus();
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
        if (evento.key === 'Tab' && certificadoModal && !certificadoModal.hidden) {
            evento.preventDefault();
            cerrarCertificadoModal?.focus();
        }
    });

    const formulario = document.getElementById('contactForm');
    
    if (formulario) {
        formulario.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const campos = {
                nombre: document.getElementById('nombre'),
                email: document.getElementById('email'),
                mensaje: document.getElementById('mensaje')
            };

            Object.values(campos).forEach((campo) => {
                campo.value = campo.value.trim();
                document.getElementById(`${campo.id}Error`).textContent = '';
                campo.removeAttribute('aria-invalid');
            });

            const idioma = document.documentElement.lang || 'es';
            const errores = {};
            if (!campos.nombre.validity.valid) errores.nombre = traducciones[idioma].errorNombre;
            if (!campos.email.validity.valid) errores.email = traducciones[idioma].errorCorreo;
            if (!campos.mensaje.validity.valid) errores.mensaje = traducciones[idioma].errorMensaje;

            const primerCampoInvalido = Object.keys(errores)[0];
            Object.entries(errores).forEach(([id, mensaje]) => {
                document.getElementById(`${id}Error`).textContent = mensaje;
                campos[id].setAttribute('aria-invalid', 'true');
            });
            if (primerCampoInvalido) {
                campos[primerCampoInvalido].focus();
                return;
            }

            const formData = Object.fromEntries(Object.entries(campos).map(([id, campo]) => [id, campo.value]));
            
            const botonEnviar = formulario.querySelector('.boton-enviar');
            const textoOriginal = botonEnviar.textContent;
            botonEnviar.textContent = traducciones[idioma].enviando;
            botonEnviar.disabled = true;
            
            try {
                const exitoso = await enviarEmail(formData);
                
                if (exitoso) {
                    mostrarMensajeExito();
                    formulario.reset();
                } else {
                    alert(window.emailjs ? traducciones[idioma].errorEnvio : traducciones[idioma].servicioNoDisponible);
                }
            } catch (error) {
                console.error('Error:', error);
                alert(traducciones[idioma].errorEnvio);
            } finally {
                botonEnviar.textContent = textoOriginal;
                botonEnviar.disabled = false;
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const enlaces = document.querySelectorAll('.nav-links a[href^="#"]');
    const secciones = [...enlaces]
        .map((enlace) => document.querySelector(enlace.getAttribute('href')))
        .filter(Boolean);

    function marcarSeccionActiva(idSeccion) {
        enlaces.forEach((enlace) => {
            const activo = enlace.getAttribute('href') === `#${idSeccion}`;
            enlace.classList.toggle('activo', activo);
            if (activo) enlace.setAttribute('aria-current', 'location');
            else enlace.removeAttribute('aria-current');
        });
    }

    function detectarSeccionActiva() {
        const alturaNavbar = document.querySelector('.navbar')?.offsetHeight || 0;
        const lineaLectura = window.scrollY + alturaNavbar + Math.min(window.innerHeight * 0.28, 220);
        let seccionActiva = secciones[0];

        secciones.forEach((seccion) => {
            if (seccion.offsetTop <= lineaLectura) seccionActiva = seccion;
        });

        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
            seccionActiva = secciones.at(-1);
        }

        if (seccionActiva) marcarSeccionActiva(seccionActiva.id);
    }

    let actualizacionPendiente = false;
    function solicitarActualizacion() {
        if (actualizacionPendiente) return;
        actualizacionPendiente = true;
        requestAnimationFrame(() => {
            detectarSeccionActiva();
            actualizacionPendiente = false;
        });
    }
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                marcarSeccionActiva(targetSection.id);
                document.querySelector('.nav-links')?.classList.remove('abierto');
                const menuToggle = document.querySelector('.menu-toggle');
                menuToggle?.setAttribute('aria-expanded', 'false');
                history.pushState(null, '', targetId);
                targetSection.scrollIntoView({
                    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
                    block: 'start'
                });
            }
        });
    });

    detectarSeccionActiva();
    window.addEventListener('scroll', solicitarActualizacion, { passive: true });
    window.addEventListener('resize', solicitarActualizacion);
});
