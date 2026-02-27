import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: {
          header: {
            title: "Helldivers",
            subtitle: "Por Supertierra",
          },
          nav: {
            home: "Inicio",
            missions: "Misiones",
            arsenal: "Arsenal",
            settings: "Configuración",
          },
          footer: {
            copyright: "© 2026 copyright Comité de Defensa Planetaria",
            cookies: "página democrática que hay que poner para que leas sobre el uso de cookies y todo eso",
          },
          news: {
            page: { title: "Noticias Helldivers" },
            news1: {
              title: "FALLO EN CYBERSTAN",
              description: "Las fuerzas atomatas se han hecho con el control de la base de cyberstan, Supertierra para evitar un desastre de magnitudes catastróficas contra supertierra, por tanto la supertierra ha optado por mover el super destructor a la órbita de cyberstan para destruir la base y eliminar a las fuerzas enemigas, el ataque se realizará en 24 horas, se recomienda a todos los helldivers que se preparen para esta misión de vital importancia para la seguridad de la galaxia.",
            },
            news2: {
              title: "Misión SIN ASIGNAR",
              description: "Descripción de la noticia 2",
            },
          },
          missions: {
            page: { title: "Misiones Helldivers" },
            mission1: {
              title: "Ataque a Cyberstan",
              description: "A todos los helldivers se les ha asignado la misión de atacar la base de Cyberstan. El objetivo es destruir su centro de mando y eliminar a sus fuerzas enemigas para asegurar la seguridad de la galaxia.",
            },
            mission2: {
              title: "Misión SIN ASIGNAR",
              description: "TODAS LAS FUERZAS DEBEN CONCENTRASE EN EL ATAQUE A CYBERSTAN, UNA AMENAZA INMINENTE PARA LA GALAXIA. LOS HELLDIVERS DEBEN UNIRSE Y ENFRENTAR ESTA AMENAZA CON DETERMINACIÓN Y VALOR. ¡LA VICTORIA DEPENDE DE NUESTRA UNIDAD Y CORAJE!",
            },
          },
          cockies: {
            title: "ATENCIÓN, CIUDADANO DIGITAL.",
            intro: "El Ministerio de Ciberdefensa de la Súper-Tierra ha detectado actividad masiva de entidades conocidas como COCKIES DE INTERNET infiltrándose en navegadores patrióticos.",
            data_collected: "Estas micro-unidades de rastreo se adhieren a su dispositivo con el pretexto de \"mejorar la experiencia\", pero en realidad almacenan datos como:",
            history: "Historial de",
            preferences: "Preferencias de",
            credentials: "Credenciales parcialmente",
            consumption: "Patrones de consumo de",
            classification: "Los Cockies se clasifican en:",
            essential: {
              title: "Cockies Esenciales",
              description: "Necesarios para el funcionamiento de la página. Nivel de amenaza:",
            },
            performance: {
              title: "Cockies de Rendimiento",
              description: "Recolectan datos sobre cómo interactúa con el sistema. Nivel de vigilancia:",
            },
            marketing: {
              title: "Cockies de Marketing",
              description: "Rastrean su actividad a través de múltiples dominios",
              description2: "para mostrar propaganda comercial altamente dirigida. Nivel de intrusión:",
            },
            persistence: "Informes indican que algunos Cockies pueden persistir durante",
            persistence2: "días, replicándose mediante",
            persistence3: "cruzado entre sitios.",
            protocol: {
              title: "PROTOCOLO ANTICOCKIE:",
              step1: "Revisar configuraciones de privacidad cada",
              step1b: "días.",
              step2: "Rechazar Cockies no esenciales salvo autorización estratégica.",
              step3: "Activar bloqueadores de",
              step4: "Borrar almacenamiento local antes de operaciones sensibles.",
            },
            remember: "Recuerde, ciudadano:",
            remember2: "Cada Cockie aceptada sin leer fortalece al Imperio del",
            keep_clean: "Mantenga su navegador limpio.",
            keep_democracy: "Mantenga su democracia digital intacta.",
            closing: "Por la Súper-Tierra. Por la Privacidad Gestionada.",
          },
        }
      },
      en: {
        translation: {
          header: {
            title: "Helldivers",
            subtitle: "For Super Earth",
          },
          nav: {
            home: "Home",
            missions: "Missions",
            arsenal: "Arsenal",
            settings: "Settings",
          },
          footer: {
            copyright: "© 2026 copyright Planetary Defense Committee",
            cookies: "democratic page you need to read about the use of cookies and all that",
          },
          news: {
            page: { title: "Helldivers News" },
            news1: {
              title: "Attack on Cyberstan",
              description: "News description 1",
            },
            news2: {
              title: "Unassigned Mission",
              description: "News description 2",
            },
          },
          missions: {
            page: { title: "Helldivers Missions" },
            mission1: {
              title: "Attack on Cyberstan",
              description: "All helldivers have been assigned the mission to attack the Cyberstan base. The objective is to destroy their command center and eliminate their enemy forces to ensure the safety of the galaxy.",
            },
            mission2: {
              title: "Mission UNASSIGNED",
              description: "ALL FORCES MUST CONCENTRATE ON THE ATTACK ON CYBERSTAN, AN IMMINENT THREAT TO THE GALAXY. HELLDIVERS MUST UNITE AND FACE THIS THREAT WITH DETERMINATION AND COURAGE. VICTORY DEPENDS ON OUR UNITY AND BRAVERY!",
            },
          },
          cockies: {
            title: "ATTENTION, DIGITAL CITIZEN.",
            intro: "The Super-Earth Cyber Defense Ministry has detected massive activity of entities known as INTERNET COCKIES infiltrating patriotic browsers.",
            data_collected: "These micro-tracking units attach to your device under the pretext of \"improving experience\", but actually store data such as:",
            history: "History of",
            preferences: "Preferences of",
            credentials: "Partially credentials",
            consumption: "Consumption patterns of",
            classification: "Cockies are classified into:",
            essential: {
              title: "Essential Cockies",
              description: "Necessary for page operation. Threat level:",
            },
            performance: {
              title: "Performance Cockies",
              description: "Collect data on how you interact with the system. Surveillance level:",
            },
            marketing: {
              title: "Marketing Cockies",
              description: "Track your activity across multiple domains",
              description2: "to display highly targeted commercial propaganda. Intrusion level:",
            },
            persistence: "Reports indicate that some Cockies can persist for",
            persistence2: "days, replicating through",
            persistence3: "cross-site.",
            protocol: {
              title: "ANTI-COCKIE PROTOCOL:",
              step1: "Review privacy settings every",
              step1b: "days.",
              step2: "Reject non-essential Cockies unless strategic authorization.",
              step3: "Activate blockers of",
              step4: "Clear local storage before sensitive operations.",
            },
            remember: "Remember, citizen:",
            remember2: "Every Cockie accepted without reading strengthens the Empire of",
            keep_clean: "Keep your browser clean.",
            keep_democracy: "Keep your digital democracy intact.",
            closing: "For Super Earth. For Managed Privacy.",
          },
        }
      },
    },
    fallbackLng: 'es',
    lng: 'es',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n