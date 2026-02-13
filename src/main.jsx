import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Importar e inicializar i18n DIRECTAMENTE aquí
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: {
          // Header
          "header.title": "Helldivers",
          "header.subtitle": "Por Supertierra",
          "nav.home": "Inicio",
          "nav.missions": "Misiones",
          "nav.arsenal": "Arsenal",
          "nav.settings": "Configuración",
          
          // Footer
          "footer.copyright": "© 2026 copyright Comité de Defensa Planetaria",
          "footer.cookies": "página democrática que hay que poner para que leas sobre el uso de cookies y todo eso",
          
          // News
          "news.title": "Noticias Helldivers",
          "news.example.title": "TEXTO DE EJEMPLO",
          "news.example.description": "TEXTO DE EJEMPLO",
          
          // Missions Page
          "missions.page.title": "Misiones Helldivers",
          "missions.mission1.title": "ataque a cyberstan",
          "missions.mission1.description": "A todos los helldivers se les ha asignado la misión de atacar la base de Cyberstan. El objetivo es destruir su centro de mando y eliminar a sus fuerzas enemigas para asegurar la seguridad de la galaxia.",
          "missions.mission2.title": "Misión SIN ASIGNAR",
          "missions.mission2.description": "TODAS LAS FUERZAS DEBEN CONCENTRASE EN EL ATAQUE A CYBERSTAN, UNA AMENAZA INMINENTE PARA LA GALAXIA. LOS HELLDIVERS DEBEN UNIRSE Y ENFRENTAR ESTA AMENAZA CON DETERMINACIÓN Y VALOR. ¡LA VICTORIA DEPENDE DE NUESTRA UNIDAD Y CORAJE!",
          
          // Cockies Page
          "cockies.title": "ATENCIÓN, CIUDADANO DIGITAL.",
          "cockies.intro": "El Ministerio de Ciberdefensa de la Súper-Tierra ha detectado actividad masiva de entidades conocidas como COCKIES DE INTERNET infiltrándose en navegadores patrióticos.",
          "cockies.data_collected": "Estas micro-unidades de rastreo se adhieren a su dispositivo con el pretexto de \"mejorar la experiencia\", pero en realidad almacenan datos como:",
          "cockies.history": "Historial de",
          "cockies.preferences": "Preferencias de",
          "cockies.credentials": "Credenciales parcialmente",
          "cockies.consumption": "Patrones de consumo de",
          "cockies.classification": "Los Cockies se clasifican en:",
          "cockies.essential.title": "Cockies Esenciales",
          "cockies.essential.description": "Necesarios para el funcionamiento de la página. Nivel de amenaza:",
          "cockies.performance.title": "Cockies de Rendimiento",
          "cockies.performance.description": "Recolectan datos sobre cómo interactúa con el sistema. Nivel de vigilancia:",
          "cockies.marketing.title": "Cockies de Marketing",
          "cockies.marketing.description": "Rastrean su actividad a través de múltiples dominios",
          "cockies.marketing.description2": "para mostrar propaganda comercial altamente dirigida. Nivel de intrusión:",
          "cockies.persistence": "Informes indican que algunos Cockies pueden persistir durante",
          "cockies.persistence2": "días, replicándose mediante",
          "cockies.persistence3": "cruzado entre sitios.",
          "cockies.protocol.title": "PROTOCOLO ANTICOCKIE:",
          "cockies.protocol.step1": "Revisar configuraciones de privacidad cada",
          "cockies.protocol.step1b": "días.",
          "cockies.protocol.step2": "Rechazar Cockies no esenciales salvo autorización estratégica.",
          "cockies.protocol.step3": "Activar bloqueadores de",
          "cockies.protocol.step4": "Borrar almacenamiento local antes de operaciones sensibles.",
          "cockies.remember": "Recuerde, ciudadano:",
          "cockies.remember2": "Cada Cockie aceptada sin leer fortalece al Imperio del",
          "cockies.keep_clean": "Mantenga su navegador limpio.",
          "cockies.keep_democracy": "Mantenga su democracia digital intacta.",
          "cockies.closing": "Por la Súper-Tierra. Por la Privacidad Gestionada."
        }
      },
      en: {
        translation: {
          // Header
          "header.title": "Helldivers",
          "header.subtitle": "For Super Earth",
          "nav.home": "Home",
          "nav.missions": "Missions",
          "nav.arsenal": "Arsenal",
          "nav.settings": "Settings",
          
          // Footer
          "footer.copyright": "© 2026 copyright Planetary Defense Committee",
          "footer.cookies": "democratic page you need to read about the use of cookies and all that",
          
          // News
          "news.title": "Helldivers News",
          "news.example.title": "EXAMPLE TEXT",
          "news.example.description": "EXAMPLE TEXT",
          
          // Missions Page
          "missions.page.title": "Helldivers Missions",
          "missions.mission1.title": "attack on cyberstan",
          "missions.mission1.description": "All helldivers have been assigned the mission to attack the Cyberstan base. The objective is to destroy their command center and eliminate their enemy forces to ensure the safety of the galaxy.",
          "missions.mission2.title": "Mission UNASSIGNED",
          "missions.mission2.description": "ALL FORCES MUST CONCENTRATE ON THE ATTACK ON CYBERSTAN, AN IMMINENT THREAT TO THE GALAXY. HELLDIVERS MUST UNITE AND FACE THIS THREAT WITH DETERMINATION AND COURAGE. VICTORY DEPENDS ON OUR UNITY AND BRAVERY!",
          
          // Cockies Page
          "cockies.title": "ATTENTION, DIGITAL CITIZEN.",
          "cockies.intro": "The Super-Earth Cyber Defense Ministry has detected massive activity of entities known as INTERNET COCKIES infiltrating patriotic browsers.",
          "cockies.data_collected": "These micro-tracking units attach to your device under the pretext of \"improving experience\", but actually store data such as:",
          "cockies.history": "History of",
          "cockies.preferences": "Preferences of",
          "cockies.credentials": "Partially credentials",
          "cockies.consumption": "Consumption patterns of",
          "cockies.classification": "Cockies are classified into:",
          "cockies.essential.title": "Essential Cockies",
          "cockies.essential.description": "Necessary for page operation. Threat level:",
          "cockies.performance.title": "Performance Cockies",
          "cockies.performance.description": "Collect data on how you interact with the system. Surveillance level:",
          "cockies.marketing.title": "Marketing Cockies",
          "cockies.marketing.description": "Track your activity across multiple domains",
          "cockies.marketing.description2": "to display highly targeted commercial propaganda. Intrusion level:",
          "cockies.persistence": "Reports indicate that some Cockies can persist for",
          "cockies.persistence2": "days, replicating through",
          "cockies.persistence3": "cross-site.",
          "cockies.protocol.title": "ANTI-COCKIE PROTOCOL:",
          "cockies.protocol.step1": "Review privacy settings every",
          "cockies.protocol.step1b": "days.",
          "cockies.protocol.step2": "Reject non-essential Cockies unless strategic authorization.",
          "cockies.protocol.step3": "Activate blockers of",
          "cockies.protocol.step4": "Clear local storage before sensitive operations.",
          "cockies.remember": "Remember, citizen:",
          "cockies.remember2": "Every Cockie accepted without reading strengthens the Empire of",
          "cockies.keep_clean": "Keep your browser clean.",
          "cockies.keep_democracy": "Keep your digital democracy intact.",
          "cockies.closing": "For Super Earth. For Managed Privacy."
        }
      },
      fr: {
        translation: {
          // Header
          "header.title": "Helldivers",
          "header.subtitle": "Pour Super Terre",
          "nav.home": "Accueil",
          "nav.missions": "Missions",
          "nav.arsenal": "Arsenal",
          "nav.settings": "Paramètres",
          
          // Footer
          "footer.copyright": "© 2026 copyright Comité de Défense Planétaire",
          "footer.cookies": "page démocratique à lire sur l'utilisation des cookies et tout ça",
          
          // News
          "news.title": "Actualités Helldivers",
          "news.example.title": "TEXTE D'EXEMPLE",
          "news.example.description": "TEXTE D'EXEMPLE",
          
          // Missions Page
          "missions.page.title": "Missions Helldivers",
          "missions.mission1.title": "attaque sur cyberstan",
          "missions.mission1.description": "Tous les helldivers ont été chargés de la mission d'attaquer la base de Cyberstan. L'objectif est de détruire leur centre de commandement et d'éliminer leurs forces ennemies pour assurer la sécurité de la galaxie.",
          "missions.mission2.title": "Mission NON ASSIGNÉE",
          "missions.mission2.description": "TOUTES LES FORCES DOIVENT SE CONCENTRER SUR L'ATTAQUE DE CYBERSTAN, UNE MENACE IMMINENTE POUR LA GALAXIE. LES HELLDIVERS DOIVENT S'UNIR ET FAIRE FACE À CETTE MENACE AVEC DÉTERMINATION ET COURAGE. LA VICTOIRE DÉPEND DE NOTRE UNITÉ ET NOTRE BRAVOURE!",
          
          // Cockies Page
          "cockies.title": "ATTENTION, CITOYEN NUMÉRIQUE.",
          "cockies.intro": "Le Ministère de la Cyberdéfense de Super-Terre a détecté une activité massive d'entités connues sous le nom de COCKIES D'INTERNET s'infiltrant dans les navigateurs patriotiques.",
          "cockies.data_collected": "Ces micro-unités de suivi s'attachent à votre appareil sous prétexte d'\"améliorer l'expérience\", mais stockent en réalité des données telles que:",
          "cockies.history": "Historique de",
          "cockies.preferences": "Préférences de",
          "cockies.credentials": "Identifiants partiellement",
          "cockies.consumption": "Modèles de consommation de",
          "cockies.classification": "Les Cockies sont classés en:",
          "cockies.essential.title": "Cockies Essentiels",
          "cockies.essential.description": "Nécessaires au fonctionnement de la page. Niveau de menace:",
          "cockies.performance.title": "Cockies de Performance",
          "cockies.performance.description": "Collectent des données sur la façon dont vous interagissez avec le système. Niveau de surveillance:",
          "cockies.marketing.title": "Cockies de Marketing",
          "cockies.marketing.description": "Suivent votre activité sur plusieurs domaines",
          "cockies.marketing.description2": "pour afficher de la propagande commerciale hautement ciblée. Niveau d'intrusion:",
          "cockies.persistence": "Les rapports indiquent que certains Cockies peuvent persister pendant",
          "cockies.persistence2": "jours, se répliquant via",
          "cockies.persistence3": "entre sites.",
          "cockies.protocol.title": "PROTOCOLE ANTI-COCKIE:",
          "cockies.protocol.step1": "Vérifier les paramètres de confidentialité tous les",
          "cockies.protocol.step1b": "jours.",
          "cockies.protocol.step2": "Refuser les Cockies non essentiels sauf autorisation stratégique.",
          "cockies.protocol.step3": "Activer les bloqueurs de",
          "cockies.protocol.step4": "Effacer le stockage local avant les opérations sensibles.",
          "cockies.remember": "Souvenez-vous, citoyen:",
          "cockies.remember2": "Chaque Cockie accepté sans lecture renforce l'Empire de",
          "cockies.keep_clean": "Gardez votre navigateur propre.",
          "cockies.keep_democracy": "Gardez votre démocratie numérique intacte.",
          "cockies.closing": "Pour Super Terre. Pour la Confidentialité Gérée."
        }
      }
    },
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
