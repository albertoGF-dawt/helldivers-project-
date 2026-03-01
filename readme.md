<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]



<br />
<div align="center">
  <h3 align="center">Helldivers Project</h3>

  <p align="center">
    A fan web app built with React and Firebase inspired by the Helldivers 2 universe.
    <br />
    <a href="https://github.com/albertoGF-dawt/helldivers-project-"><strong>Explore the repository »</strong></a>
    <br />
    <br />
    <a href="https://github.com/albertoGF-dawt/helldivers-project-/issues/new?labels=bug">Report Bug</a>
    &middot;
    <a href="https://github.com/albertoGF-dawt/helldivers-project-/issues/new?labels=enhancement">Request Feature</a>
  </p>
</div>



<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



## About The Project

**Helldivers Project** is a fan web application inspired by the video game *Helldivers 2*. It works as a Super-Earth operations portal where Helldivers can check news from the galactic front, active missions, and the Planetary Defense Committee's privacy policy.

Key features:
* **News** section with real-time data from Firebase Realtime Database
* **Missions** page with briefings for active Helldivers
* **Multilanguage support** (Spanish & English) via i18next with automatic browser language detection. Note: the News section is not translated as its content is created directly by the user.
* **Create News** panel to publish new dispatches directly to the database
* Themed cookies and privacy policy page set in the game's universe

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![Vite][Vite.dev]][Vite-url]
* [![Firebase][Firebase.com]][Firebase-url]
* [![i18next][i18next-badge]][i18next-url]
* [![React Router][ReactRouter-badge]][ReactRouter-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

You need **Node.js** and **npm** installed on your machine.

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/albertoGF-dawt/helldivers-project-.git
   ```
2. Navigate into the project directory
   ```sh
   cd helldivers-project-
   ```
3. Install dependencies
   ```sh
   npm install
   ```
4. Start the development server
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Usage

Once the app is running, you can navigate through the following sections:

- **`/home`** — Main page with the latest news from the galactic front
- **`/missions`** — List of active missions assigned to Helldivers
- **`/create-news`** — Form to publish new dispatches (saved to Firebase Realtime Database)
- **`/Cockies`** — Themed privacy and cookies policy

The language selector (ES/EN) is available at all times on every page.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Roadmap

- [x] Home page with dynamic news from Firebase
- [x] Missions page
- [x] Multilanguage support (ES/EN) — except News, which is user-generated content
- [x] Create news form
- [x] Themed cookies & privacy page

See the [open issues](https://github.com/albertoGF-dawt/helldivers-project-/issues) for a full list of proposed features and known bugs.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Contact

Alberto Guerra Forestier — albertoguerraforestier@alumno.ieselrincon.es

Project Link: [https://github.com/albertoGF-dawt/helldivers-project-](https://github.com/albertoGF-dawt/helldivers-project-)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Acknowledgments

* [Best-README-Template by othneildrew](https://github.com/othneildrew/Best-README-Template/blob/main/README.md)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



[contributors-shield]: https://img.shields.io/github/contributors/albertoGF-dawt/helldivers-project-.svg?style=for-the-badge
[contributors-url]: https://github.com/albertoGF-dawt/helldivers-project-/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/albertoGF-dawt/helldivers-project-.svg?style=for-the-badge
[forks-url]: https://github.com/albertoGF-dawt/helldivers-project-/network/members
[stars-shield]: https://img.shields.io/github/stars/albertoGF-dawt/helldivers-project-.svg?style=for-the-badge
[stars-url]: https://github.com/albertoGF-dawt/helldivers-project-/stargazers
[issues-shield]: https://img.shields.io/github/issues/albertoGF-dawt/helldivers-project-.svg?style=for-the-badge
[issues-url]: https://github.com/albertoGF-dawt/helldivers-project-/issues

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vite.dev]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[Firebase.com]: https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black
[Firebase-url]: https://firebase.google.com/
[i18next-badge]: https://img.shields.io/badge/i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white
[i18next-url]: https://www.i18next.com/
[ReactRouter-badge]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[ReactRouter-url]: https://reactrouter.com/
