const defaultAvatar = "assets/robot.png";

const dataPonencias = {
    // Array para la agenda (Línea de tiempo)
    dias: [
        {
            id: "day1",
            fechaCorta: "16",
            mesCorto: "Mar",
            titulo: "Día 1",
            isActive: true,
            eventos: [
                {
                    hora: "15:00",
                    titulo: "Bienvenida",
                    descripcion: "Recepción de asistentes",
                    ponente: "Organización"
                },
                {
                    hora: "15:05",
                    titulo: "Introducción a las jornadas",
                    descripcion: "Apertura del evento",
                    ponente: "Organización"
                },
                {
                    hora: "15:15",
                    titulo: "Tecnologías inmersivas aplicadas a la educación",
                    descripcion: "",
                    ponente: "David Morillas Álvarez"
                },
                {
                    hora: "15:45",
                    titulo: "Por confirmar",
                    descripcion: "",
                    ponente: "Ponente por confirmar"
                },
                {
                    hora: "16:15",
                    titulo: "Por confirmar",
                    descripcion: "",
                    ponente: "Óscar Martínez Parés"
                },
                {
                    hora: "16:45",
                    titulo: "Cierre",
                    descripcion: "Conclusiones del día",
                    ponente: "Organización"
                },
                {
                    hora: "16:50",
                    titulo: "Café",
                    descripcion: "Descanso y Networking",
                    ponente: "Todos"
                }
            ]
        },
        {
            id: "day2",
            fechaCorta: "18",
            mesCorto: "Mar",
            titulo: "Día 2",
            isActive: false,
            eventos: [
                {
                    hora: "18:00",
                    titulo: "Bienvenida",
                    descripcion: "Recepción de asistentes",
                    ponente: "Organización"
                },
                {
                    hora: "18:05",
                    titulo: "Introducción a las jornadas",
                    descripcion: "Apertura de la segunda jornada",
                    ponente: "Organización"
                },
                {
                    hora: "18:15",
                    titulo: "El coste oculto de la IA",
                    descripcion: "",
                    ponente: "Yamilka Toca Diaz"
                },
                {
                    hora: "18:45",
                    titulo: "Por confirmar",
                    descripcion: "",
                    ponente: "Ponente por confirmar"
                },
                {
                    hora: "19:15",
                    titulo: "Por confirmar",
                    descripcion: "",
                    ponente: "Ponente por confirmar"
                },
                {
                    hora: "19:45",
                    titulo: "Cierre",
                    descripcion: "Clausura del congreso",
                    ponente: "Organización"
                },
                {
                    hora: "19:50",
                    titulo: "Café",
                    descripcion: "Despedida y Networking final",
                    ponente: "Todos"
                }
            ]
        }
    ],

    // Datos detallados de los Ponentes
    ponentes: [
        {
            nombre: "David Morillas Álvarez",
            tituloPonencia: "Tecnologías inmersivas aplicadas a la educación",
            tema: "Tecnologías inmersivas",
            fotoUrl: "data/ponencias/images/david_morillas.png",
            horaYFecha: "16 de marzo a las 15:15",
            resumen: `En esta ponencia se presentará una introducción a las principales tecnologías inmersivas y su aplicación en el ámbito educativo, mostrando ejemplos y soluciones reales que ya se están utilizando en diferentes contextos formativos. A través de casos prácticos, se analizará cómo estas tecnologías permiten simular entornos complejos, mejorar la comprensión de conceptos abstractos y generar experiencias de aprendizaje más motivadoras.
La sesión abordará también el potencial de los espacios virtuales y las experiencias interactivas como nuevos escenarios educativos, así como los retos y oportunidades que estas tecnologías plantean para docentes, instituciones y estudiantes en el contexto de la transformación digital de la educación.`,
            empresa: "Imascono Art., S.L.",
            cargo: "",
            redesSociales: {}
        },
        {
            nombre: "Ponente 16-P2",
            tituloPonencia: "Próximamente",
            tema: "Por determinar",
            fotoUrl: "",
            horaYFecha: "16 de marzo a las 15:45",
            resumen: "El contenido de esta sesión será anunciado próximamente.",
            empresa: "",
            cargo: "",
            redesSociales: {}
        },
        {
            nombre: "Óscar Martínez Parés",
            tituloPonencia: "Próximamente",
            tema: "Por determinar",
            fotoUrl: "",
            horaYFecha: "16 de marzo a las 16:15",
            resumen: "El contenido de esta sesión será anunciado próximamente.",
            empresa: "",
            cargo: "",
            redesSociales: {}
        },
        {
            nombre: "Yamilka Toca Diaz",
            tituloPonencia: "El coste oculto de la IA",
            tema: "Sostenibilidad Algorítmica",
            fotoUrl: "",
            horaYFecha: "18 de marzo a las 18:15",
            resumen: `La Inteligencia Artificial se ha convertido en un pilar fundamental de la innovación tecnológica transformando sectores como las finanzas, la salud, el entretenimiento, entre otros. Su impacto es tan notable que se prevé que para 2030 su uso se multiplique exponencialmente. Este crecimiento depende en gran medida del hardware especializado para ello, conocido como los Aceleradores de IA. Para procesar la enorme cantidad de cálculo que requieren las aplicaciones de IA, estos aceleradores suelen incorporar millones de transistores y alimentarse a una tensión con un umbral holgado de seguridad. Estos dispositivos, operando a esta tensión segura, demandan una gran cantidad de energía. Esto contribuye considerablemente al calentamiento global y genera un impacto crítico en la huella de carbono.
Ante este impacto, el sector educativo afronta un reto crítico: trascender el uso funcional de la IA para fomentar una conciencia ecosocial. Nuestra misión docente no es solo enseñar a programar, sino integrar la sostenibilidad algorítmica y la "Informática Verde" en el currículo. El éxito de la IA no debe medirse solo por su potencia de cálculo, sino por nuestra capacidad para alinear el progreso tecnológico con los límites del planeta.`,
            empresa: "Universidad de Zaragoza",
            cargo: "",
            redesSociales: {}
        },
        {
            nombre: "Ponente 18-P2",
            tituloPonencia: "Próximamente",
            tema: "Por determinar",
            fotoUrl: "",
            horaYFecha: "18 de marzo a las 18:45",
            resumen: "El contenido de esta sesión será anunciado próximamente.",
            empresa: "",
            cargo: "",
            redesSociales: {}
        },
        {
            nombre: "Ponente 18-P3",
            tituloPonencia: "Próximamente",
            tema: "Por determinar",
            fotoUrl: "",
            horaYFecha: "18 de marzo a las 19:15",
            resumen: "El contenido de esta sesión será anunciado próximamente.",
            empresa: "",
            cargo: "",
            redesSociales: {}
        }
    ]
};
