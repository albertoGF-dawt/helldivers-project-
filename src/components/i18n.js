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
            cookies: "Cockies y privacidad",
            rss: "Feed de noticias"
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
            create: "Nueva Noticia",
            form: {
              title: "Título",
              description: "Descripción",
              image: "URL de la imagen",
              submit: "Publicar",
              success: "¡Noticia publicada con éxito, Helldiver!",
            }
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
          privacy: {
            title: "POLÍTICA DE PRIVACIDAD Y COOKIES | CONDICIONES DE VENTA",
            subtitle: "Ministerio de Ciberdefensa de la Súper-Tierra — Directiva 7-Gamma",
            privacy_title: "I. POLÍTICA DE PRIVACIDAD",
            privacy_text: "Todo ciudadano que acceda a este portal de operaciones acepta que el Comité de Defensa Planetaria puede recopilar datos de navegación con el único fin de proteger la democracia galáctica. Los datos recogidos incluyen dirección IP, patrones de navegación y preferencias de idioma. Esta información nunca será vendida a entidades externas, especialmente no a los Automatons ni a los Terminids. El incumplimiento de esta directiva será considerado traición a la Súper-Tierra.",
            cookies_title: "II. POLÍTICA DE COOKIES",
            cookies_text: "Este portal utiliza cookies esenciales para su funcionamiento operativo. Algunas cookies adicionales nos ayudan a mejorar tu experiencia como Helldiver en activo. Puedes rechazar las cookies no esenciales sin comprometer tu acceso al portal, aunque el Ministerio de Ciberdefensa lo considera una actitud sospechosa digna de investigación. Las cookies expiran tras 30 días terrestres o tras la destrucción total del dispositivo en zona de combate, lo que ocurra primero.",
            sales_title: "III. CONDICIONES DE VENTA",
            sales_text: "Todo equipamiento, armamento y suministros adquiridos a través de este portal están destinados exclusivamente al uso en misiones autorizadas por la Súper-Tierra. El Comité de Defensa Planetaria no se hace responsable de daños colaterales, pérdida de extremidades, bajas amigas o destrucción accidental de naves aliadas. No se aceptan devoluciones una vez desplegado en zona de combate activa. Los reembolsos deben solicitarse en persona en las oficinas centrales de la Súper-Tierra, Sector Alpha-9, Planta 47.",
            closing: "Por la Súper-Tierra. Por la Democracia. Por la Privacidad Gestionada.",
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
            cookies: "Cookies and Privacy",
            rss: "News Feed",
          },
          news: {
            page: { title: "Helldivers News" },
            news1: {
              title: "CYBERSTAN FAILURE",
              description: "Automaton forces have taken control of the Cyberstan base. Super-Earth, to avoid a catastrophic disaster, has opted to move the Super Destroyer into Cyberstan's orbit to destroy the base and eliminate enemy forces. The attack will take place in 24 hours. All Helldivers are recommended to prepare for this mission of vital importance to the safety of the galaxy.",
            },
            news2: {
              title: "Unassigned Mission",
              description: "News description 2",
            },
            create: "New Notice",
            form: {
              title: "Title",
              description: "Description",
              image: "Image URL",
              submit: "Publish",
              success: "Notice published successfully, Helldiver!",
            }
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
          privacy: {
            title: "PRIVACY POLICY AND COOKIES | TERMS OF SALE",
            subtitle: "Super-Earth Cyber Defense Ministry — Directive 7-Gamma",
            privacy_title: "I. PRIVACY POLICY",
            privacy_text: "Any citizen accessing this operations portal agrees that the Planetary Defense Committee may collect browsing data for the sole purpose of protecting galactic democracy. Data collected includes IP address, browsing patterns and language preferences. This information will never be sold to external entities, especially not to the Automatons or the Terminids. Non-compliance with this directive will be considered treason against Super-Earth.",
            cookies_title: "II. COOKIE POLICY",
            cookies_text: "This portal uses essential cookies for its operational functioning. Some additional cookies help us improve your experience as an active Helldiver. You may reject non-essential cookies without compromising your access to the portal, although the Cyber Defense Ministry considers this a suspicious attitude worthy of investigation. Cookies expire after 30 Earth days or upon total destruction of the device in a combat zone, whichever comes first.",
            sales_title: "III. TERMS OF SALE",
            sales_text: "All equipment, weaponry and supplies purchased through this portal are intended exclusively for use in missions authorized by Super-Earth. The Planetary Defense Committee is not responsible for collateral damage, loss of limbs, friendly casualties or accidental destruction of allied ships. No returns accepted once deployed in an active combat zone. Refunds must be requested in person at Super-Earth headquarters, Sector Alpha-9, Floor 47.",
            closing: "For Super Earth. For Democracy. For Managed Privacy.",
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