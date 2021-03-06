import React, { useRef } from 'react';
import Head from 'next/head';

export default function Home() {
  const about = useRef();
  const portfolio = useRef();
  const contact = useRef();
  const goToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const goToAbout = () => {
    window.scrollTo({
      top: about.current.offsetTop - 100,
      behavior: 'smooth',
    });
  };
  const goToPortfolio = () => {
    window.scrollTo({
      top: portfolio.current.offsetTop,
      behavior: 'smooth',
    });
  };
  const goToContact = () => {
    window.scrollTo({
      top: contact.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const goToGitHub = () => {
    window.location.href = 'https://github.com/ice-rahul';
  };

  const openUrl = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <Head>
        <title>Rahul Agrawal: Home Page</title>
        <link rel="icon" href="/assets/img/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio Website by Rahul Agrawal" />
        <meta name="keywords" content="HTML, CSS, JavaScript, React, Next, PHP, Code Igniter" />
        <meta name="author" content="Rahul Agrawal"></meta>
      </Head>
      <main>
        <header className="sticky top-0 z-10 text-gray-600 bg-white body-font">
          <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
            <a href="https://ice-rahul.github.io" className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#3B82F6" />
                <path d="M11.9219 26H8.43262V13.3438H14.6553C15.2412 13.3438 15.8066 13.4141 16.3516 13.5547C16.8965 13.6895 17.377 13.9062 17.793 14.2051C18.2148 14.498 18.5488 14.8789 18.7949 15.3477C19.0469 15.8164 19.1729 16.3848 19.1729 17.0527C19.1729 17.5742 19.0615 18.0664 18.8389 18.5293C18.6221 18.9863 18.3291 19.3965 17.96 19.7598C17.5967 20.1172 17.1777 20.416 16.7031 20.6562C16.2285 20.8906 15.7363 21.0459 15.2266 21.1221C15.4551 21.5088 15.6924 21.875 15.9385 22.2207C16.1904 22.5664 16.4424 22.8916 16.6943 23.1963C16.9521 23.4951 17.207 23.7734 17.459 24.0312C17.7109 24.2832 17.9512 24.5146 18.1797 24.7256C18.7188 25.2178 19.252 25.6426 19.7793 26H15.4287C15.0771 25.666 14.7432 25.2646 14.4268 24.7959C14.1572 24.3975 13.8848 23.9053 13.6094 23.3193C13.3398 22.7275 13.1318 22.0449 12.9854 21.2715H11.9219V26ZM15.6309 17.0527C15.6309 16.2031 15.4229 15.5791 15.0068 15.1807C14.5967 14.7822 13.9785 14.583 13.1523 14.583H11.9219V20.0762H13.1523C13.5918 20.0762 13.9668 19.9941 14.2773 19.8301C14.5938 19.6602 14.8516 19.4375 15.0508 19.1621C15.25 18.8809 15.3965 18.5586 15.4902 18.1953C15.584 17.832 15.6309 17.4512 15.6309 17.0527ZM33.4727 19.9443V20.1113C33.4609 20.6035 33.4082 21.1133 33.3145 21.6406C33.2266 22.168 33.1006 22.6953 32.9365 23.2227C32.7725 23.75 32.5762 24.2715 32.3477 24.7871C32.1191 25.3027 31.8613 25.7949 31.5742 26.2637C31.293 26.7383 30.9883 27.1807 30.6602 27.5908C30.332 28.0068 29.9863 28.373 29.623 28.6895L28.3135 27.9336C28.5186 27.5879 28.7031 27.21 28.8672 26.7998C29.0371 26.3955 29.1895 25.9707 29.3242 25.5254C29.459 25.0801 29.5732 24.623 29.667 24.1543C29.7666 23.6855 29.8486 23.2197 29.9131 22.7568C29.9775 22.2939 30.0244 21.8398 30.0537 21.3945C30.0889 20.9434 30.1064 20.5156 30.1064 20.1113C30.1064 19.7949 30.1035 19.4375 30.0977 19.0391C30.0977 18.6348 30.0742 18.2246 30.0273 17.8086C29.9863 17.3926 29.916 16.9883 29.8164 16.5957C29.7168 16.1973 29.5674 15.8428 29.3682 15.5322C29.1748 15.2217 28.9229 14.9727 28.6123 14.7852C28.3076 14.5977 27.9268 14.5039 27.4697 14.5039C27.0654 14.5039 26.7168 14.5742 26.4238 14.7148C26.1367 14.8496 25.8906 15.0342 25.6855 15.2686C25.4863 15.4971 25.3252 15.7637 25.2021 16.0684C25.085 16.373 24.9912 16.6953 24.9209 17.0352C24.8564 17.3691 24.8125 17.709 24.7891 18.0547C24.7715 18.3945 24.7627 18.7168 24.7627 19.0215V21.4736H28.5508V22.9238H24.7627V26H21.2734V19.5664C21.2734 18.6465 21.4199 17.791 21.7129 17C22.0059 16.209 22.4189 15.5234 22.9521 14.9434C23.4912 14.3574 24.1357 13.9004 24.8857 13.5723C25.6416 13.2383 26.4824 13.0713 27.4082 13.0713C28.0352 13.0713 28.6211 13.1621 29.166 13.3438C29.7168 13.5195 30.2178 13.7656 30.6689 14.082C31.1201 14.3926 31.5215 14.7646 31.873 15.1982C32.2305 15.626 32.5264 16.0947 32.7607 16.6045C33.001 17.1143 33.1826 17.6533 33.3057 18.2217C33.4287 18.79 33.4844 19.3643 33.4727 19.9443Z" fill="white" />
              </svg>
              <span className="ml-3 text-xl">Rahul Agrawal</span>
            </a>
            <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
              <button onClick={goToHome} className="mr-5 outline-none focus:outline-none hover:text-gray-900">Home</button>
              <button onClick={goToAbout} className="mr-5 outline-none focus:outline-none hover:text-gray-900">About</button>
              <button onClick={goToPortfolio} className="mr-5 outline-none focus:outline-none hover:text-gray-900">Portfolio</button>
              <button onClick={goToGitHub} className="mr-5 outline-none focus:outline-none hover:text-gray-900">GitHub</button>
            </nav>
            <button onClick={goToContact} className="inline-flex items-center px-3 py-1 mt-4 text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-700 md:mt-0">Contact Me
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </header>

        <section className="text-gray-600 body-font">
          <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
            <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
              <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">I&rsquo;m Rahul Agrawal&nbsp;
                <br className="hidden lg:inline-block" />an erudite technologist
              </h1>
              <p className="mb-8 leading-relaxed text-justify">I&rsquo;m extremely happy to see you spare some time on my website. I would be happy to connect with you in near future for your upcoming assignments and would recommend exploring my website and projects.</p>
              <div className="flex justify-center">
                <button onClick={goToPortfolio} className="inline-flex px-6 py-2 text-lg text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600">View Portfolio</button>
                <button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200">Download Resume</button>
              </div>
            </div>
            <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
              <img className="object-cover object-center rounded" alt="hero" src="assets/img/coding.svg" />
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font bg-gray-50" ref={about}>
          <div className="container flex flex-col items-center px-5 py-10 mx-auto md:flex-row">
            <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
              <img className="object-cover object-center rounded" alt="hero" src="assets/img/about_me.svg" />
            </div>
            <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
              <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">About Me
                <br /> <span className="text-base">FrontEnd Developer (MERN Stack) , FullStack Developer (LAMP Stack)</span>
              </h1>
              <p className="mb-8 leading-relaxed text-justify">I&rsquo;m an IT professional with 5+ years of experience in various software domains. I have been working in technologies like PHP (core + MVC Frameworks), ReactJs, Android, MySql, HTML, CSS, Javascript, etc. Still learning new technologies and frameworks to upgrade and update my skills as per industry standards.</p>
              <p className="mb-8 leading-relaxed text-justify">Just as a side note, this website is built using Next.js and Tailwind CSS <span role="img" aria-label="happy">&#128513;</span></p>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font" ref={portfolio}>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="w-full mb-6 lg:w-1/2 lg:mb-0">
                <h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font">Some Of My Projects</h1>
                <div className="w-20 h-1 bg-blue-500 rounded"></div>
              </div>
              <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">I have tried to show some of my projects along with the source code made available using GitHub</p>
            </div>
            <div className="flex flex-wrap justify-center -mx-4 -mt-4 -mb-10 sm:-m-4">
              <div className="p-4 mb-6 md:w-1/3 sm:mb-0">
                <div role="button" tabIndex={0} className="h-64 overflow-hidden rounded-lg cursor-pointer" onClick={() => openUrl('https://ice-rahul.github.io/lyrics')} onKeyUp={() => openUrl('https://ice-rahul.github.io/lyrics')}>
                  <img alt="content" className="object-cover object-center w-full h-full border" loading="lazy" src="assets/img/lyrics.png" />
                </div>
                <h2 className="mt-5 text-xl font-medium text-gray-900 title-font">Get Lyrics</h2>
                <p className="mt-2 text-base leading-relaxed text-justify"><span className="font-medium">Why?</span> This project has been created using plain Javascript and CSS. The notion was to avoid the ready-made libraries (like bootstrap, materialize, tailwind, etc.)</p>
                <p className="mt-2 text-base leading-relaxed text-justify"><span className="font-medium">What?</span> You can search lyrics by song title or name of the artist. This project is mobile responsive and supports the pagination functionality. We have used the concept of memoization to reduce your network calls as far as possible and provide a better experience</p>
                <div className="flex flex-row justify-between">
                  <a href="https://ice-rahul.github.io/lyrics" className="inline-flex items-center mt-3 mr-3 text-blue-500">Launch Project
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <a href="https://github.com/ice-rahul/lyrics" className="inline-flex items-center mt-3 text-blue-500">Dive into Code
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-4 mb-6 md:w-1/3 sm:mb-0">
                <div role="button" tabIndex={0} className="h-64 overflow-hidden rounded-lg cursor-pointer" onClick={() => openUrl('https://ice-rahul.github.io/fast-fingers')} onKeyUp={() => openUrl('https://ice-rahul.github.io/fast-fingers')}>
                  <img alt="content" className="object-cover object-center w-full h-full border" loading="lazy" src="assets/img/fast-fingers.png" />
                </div>
                <h2 className="mt-5 text-xl font-medium text-gray-900 title-font">Fast Fingers</h2>
                <p className="mt-2 text-base leading-relaxed text-justify"><span className="font-medium">Why?</span> This project is made using Create React App. The notion was to create a project purely on react.</p>
                <p className="mt-2 text-base leading-relaxed text-justify"><span className="font-medium">What?</span> This is a word typing game which has three level’s namely EASY, MEDIUM, and HARD. You will have to keep typing the words which are getting displayed. The game will indicate letters typed correctly, letters typed incorrectly, letters not typed, total time spent in the game, time left for typing, the difficulty of the game, and the scoreboard. Also, the difficulty factor is dynamic as per your performance.</p>
                <div className="flex flex-row justify-between">
                  <a href="https://ice-rahul.github.io/fast-fingers" className="inline-flex items-center mt-3 mr-3 text-blue-500">Launch Project
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <a href="https://github.com/ice-rahul/fast-fingers" className="inline-flex items-center mt-3 text-blue-500">Dive into Code
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="hidden p-4 mb-6 md:w-1/3 sm:mb-0">
                <div className="h-64 overflow-hidden rounded-lg">
                  <img alt="content" className="object-cover object-center w-full h-full" src="/assets/img/coming_soon.svg" />
                </div>
                <h2 className="mt-5 text-xl font-medium text-gray-900 title-font">Coming Soon</h2>
                <p className="mt-2 text-base leading-relaxed">Coming Soon</p>
                <div className="flex flex-row justify-between">
                  <a href="https://www.google.com" className="inline-flex items-center mt-3 mr-3 text-blue-500">Launch Project
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <a href="https://www.google.com" className="inline-flex items-center mt-3 text-blue-500">Dive into Code
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col w-full mb-20 text-center">
              <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">Some Sample CSS Designs</h1>
              <p className="mx-auto text-base leading-relaxed lg:w-2/3">I have tried to show some of random design challenges solved over <a className="text-blue-500" target="__blank" href="https://cssbattle.dev/player/rahul_agrawal">cssbattle.dev</a> </p>
            </div>
            <div className="flex flex-wrap justify-center -m-4">
              <div className="p-4 lg:w-1/3 sm:w-1/2">
                <div className="relative flex">
                  <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full" src="/assets/img/css-target-3.png" />
                  <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                    <h2 className="mb-1 text-sm font-medium tracking-widest text-blue-500 title-font">Challenge No. 3</h2>
                    <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Push Button</h1>
                    <p className="leading-relaxed">Link for the challenge: <a className="text-blue-500" href="https://cssbattle.dev/play/3">https://cssbattle.dev/play/3</a><br/><br/><br/><br/></p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/3 sm:w-1/2">
                <div className="relative flex">
                  <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full" src="/assets/img/css-target-8.png" />
                  <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                    <h2 className="mb-1 text-sm font-medium tracking-widest text-blue-500 title-font">Challenge No. 8</h2>
                    <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Forking Crazy</h1>
                    <p className="leading-relaxed">Link for the challenge: <a className="text-blue-500" href="https://cssbattle.dev/play/8">https://cssbattle.dev/play/8</a><br/><br/><br/><br/></p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/3 sm:w-1/2">
                <div className="relative flex">
                  <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full" src="/assets/img/css-target-9.png" />
                  <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                    <h2 className="mb-1 text-sm font-medium tracking-widest text-blue-500 title-font">Challenge No. 9</h2>
                    <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Tesseract</h1>
                    <p className="leading-relaxed">Link for the challenge: <a className="text-blue-500" href="https://cssbattle.dev/play/9">https://cssbattle.dev/play/9</a><br/><br/><br/><br/></p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/3 sm:w-1/2">
                <div className="relative flex">
                  <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full" src="/assets/img/css-target-10.png" />
                  <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                    <h2 className="mb-1 text-sm font-medium tracking-widest text-blue-500 title-font">Challenge No. 10</h2>
                    <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Cloaked Spirits</h1>
                    <p className="leading-relaxed">Link for the challenge: <a className="text-blue-500" href="https://cssbattle.dev/play/10">https://cssbattle.dev/play/10</a><br/><br/><br/><br/></p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/3 sm:w-1/2">
                <div className="relative flex">
                  <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full" src="/assets/img/css-target-11.png" />
                  <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                    <h2 className="mb-1 text-sm font-medium tracking-widest text-blue-500 title-font">Challenge No. 11</h2>
                    <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Eye of Sauron</h1>
                    <p className="leading-relaxed">Link for the challenge: <a className="text-blue-500" href="https://cssbattle.dev/play/11">https://cssbattle.dev/play/11</a><br/><br/><br/><br/></p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/3 sm:w-1/2">
                <div className="relative flex">
                  <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full" src="/assets/img/css-target-14.png" />
                  <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                    <h2 className="mb-1 text-sm font-medium tracking-widest text-blue-500 title-font">Challenge No. 14</h2>
                    <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Web Maker Logo</h1>
                    <p className="leading-relaxed">Link for the challenge: <a className="text-blue-500" href="https://cssbattle.dev/play/14">https://cssbattle.dev/play/14</a><br/><br/><br/><br/></p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/3 sm:w-1/2">
                <div className="relative flex">
                  <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full" src="/assets/img/css-target-15.png" />
                  <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                    <h2 className="mb-1 text-sm font-medium tracking-widest text-blue-500 title-font">Challenge No. 15</h2>
                    <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">OverLap</h1>
                    <p className="leading-relaxed">Link for the challenge: <a className="text-blue-500" href="https://cssbattle.dev/play/15">https://cssbattle.dev/play/15</a><br/><br/><br/><br/></p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/3 sm:w-1/2">
                <div className="relative flex">
                  <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full" src="/assets/img/css-target-16.png" />
                  <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                    <h2 className="mb-1 text-sm font-medium tracking-widest text-blue-500 title-font">Challenge No. 16</h2>
                    <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Eye of Tiger</h1>
                    <p className="leading-relaxed">Link for the challenge: <a className="text-blue-500" href="https://cssbattle.dev/play/16">https://cssbattle.dev/play/16</a><br/><br/><br/><br/></p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/3 sm:w-1/2">
                <div className="relative flex">
                  <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full" src="/assets/img/css-target-19.png" />
                  <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                    <h2 className="mb-1 text-sm font-medium tracking-widest text-blue-500 title-font">Challenge No. 19</h2>
                    <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Cube</h1>
                    <p className="leading-relaxed">Link for the challenge: <a className="text-blue-500" href="https://cssbattle.dev/play/19">https://cssbattle.dev/play/19</a><br/><br/><br/><br/></p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/3 sm:w-1/2">
                <div className="relative flex">
                  <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full" src="/assets/img/css-target-20.png" />
                  <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                    <h2 className="mb-1 text-sm font-medium tracking-widest text-blue-500 title-font">Challenge No. 20</h2>
                    <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Ticket</h1>
                    <p className="leading-relaxed">Link for the challenge: <a className="text-blue-500" href="https://cssbattle.dev/play/20">https://cssbattle.dev/play/20</a><br/><br/><br/><br/></p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/3 sm:w-1/2">
                <div className="relative flex">
                  <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full" src="/assets/img/css-target-21.png" />
                  <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                    <h2 className="mb-1 text-sm font-medium tracking-widest text-blue-500 title-font">Challenge No. 21</h2>
                    <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">SitePoint Logo</h1>
                    <p className="leading-relaxed">Link for the challenge: <a className="text-blue-500" href="https://cssbattle.dev/play/21">https://cssbattle.dev/play/21</a><br/><br/><br/><br/></p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/3 sm:w-1/2">
                <div className="relative flex">
                  <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full" src="/assets/img/css-target-32.png" />
                  <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                    <h2 className="mb-1 text-sm font-medium tracking-widest text-blue-500 title-font">Challenge No. 32</h2>
                    <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Band Aid</h1>
                    <p className="leading-relaxed">Link for the challenge: <a className="text-blue-500" href="https://cssbattle.dev/play/32">https://cssbattle.dev/play/32</a><br/><br/><br/><br/></p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/3 sm:w-1/2">
                <div className="relative flex">
                  <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full" src="/assets/img/css-target-33.png" />
                  <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                    <h2 className="mb-1 text-sm font-medium tracking-widest text-blue-500 title-font">Challenge No. 33</h2>
                    <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">Birdie</h1>
                    <p className="leading-relaxed">Link for the challenge: <a className="text-blue-500" href="https://cssbattle.dev/play/33">https://cssbattle.dev/play/33</a><br/><br/><br/><br/></p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/3 sm:w-1/2">
                <div className="relative flex">
                  <img alt="gallery" className="absolute inset-0 object-cover object-center w-full h-full" src="/assets/img/css-target-35.png" />
                  <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                    <h2 className="mb-1 text-sm font-medium tracking-widest text-blue-500 title-font">Challenge No. 35</h2>
                    <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">ICE Cream</h1>
                    <p className="leading-relaxed">Link for the challenge: <a className="text-blue-500" href="https://cssbattle.dev/play/35">https://cssbattle.dev/play/35</a><br/><br/><br/><br/></p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="relative text-gray-600 body-font bg-gray-50" ref={contact}>
          <div className="container flex flex-wrap px-5 py-24 mx-auto sm:flex-nowrap">
            <div className="relative flex items-end justify-start p-10 overflow-hidden bg-gray-300 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10">
              <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.0066311083896!2d81.27266082918625!3d21.191105249538737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDExJzI4LjAiTiA4McKwMTYnMjMuNiJF!5e0!3m2!1sen!2sin!4v1613470933526!5m2!1sen!2sin"></iframe>
              <div className="relative flex flex-wrap py-6 bg-white rounded shadow-md">
                <div className="px-6 lg:w-1/2">
                  <h2 className="text-xs font-semibold tracking-widest text-gray-900 title-font">ADDRESS</h2>
                  <p className="mt-1">H.No. 106/ Ward 32, Brahmanpara Near Durga Mandir, Durg C.G. INDIA</p>
                </div>
                <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
                  <h2 className="text-xs font-semibold tracking-widest text-gray-900 title-font">EMAIL</h2>
                  <a href="mailto:meet4g@gmail.com" className="leading-relaxed text-blue-500">meet4g@gmail.com</a>
                  <h2 className="mt-4 text-xs font-semibold tracking-widest text-gray-900 title-font">PHONE</h2>
                  <p className="leading-relaxed">+91-96910-78419</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mt-8 bg-gray-50 lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
              <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">Feedback / Query</h2>
              <p className="mb-5 leading-relaxed text-gray-600">Please fill the below form and submit your feedback</p>
              <div className="relative mb-4">
                <label htmlFor="name" className="text-sm text-gray-600 leading-7">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-1 text-base text-gray-700 bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="text-sm text-gray-600 leading-7">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-1 text-base text-gray-700 bg-white border border-gray-300 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="text-sm text-gray-600 leading-7">Message</label>
                <textarea id="message" name="message" className="w-full h-32 px-3 py-1 text-base text-gray-700 bg-white border border-gray-300 rounded outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button className="px-6 py-2 text-lg text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600">Submit</button>
              <p className="mt-3 text-xs text-gray-500">I will get back to you via mail within 24 working hours, In case of urgent communication you can directly mail me or contact via whatsapp (+919691078419)</p>
            </div>
          </div>
        </section>

        <footer className="relative text-gray-600 bg-white body-font">
          <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
            <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
              <a href="https://ice-rahul.github.io" className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" fill="#3B82F6" />
                  <path d="M11.9219 26H8.43262V13.3438H14.6553C15.2412 13.3438 15.8066 13.4141 16.3516 13.5547C16.8965 13.6895 17.377 13.9062 17.793 14.2051C18.2148 14.498 18.5488 14.8789 18.7949 15.3477C19.0469 15.8164 19.1729 16.3848 19.1729 17.0527C19.1729 17.5742 19.0615 18.0664 18.8389 18.5293C18.6221 18.9863 18.3291 19.3965 17.96 19.7598C17.5967 20.1172 17.1777 20.416 16.7031 20.6562C16.2285 20.8906 15.7363 21.0459 15.2266 21.1221C15.4551 21.5088 15.6924 21.875 15.9385 22.2207C16.1904 22.5664 16.4424 22.8916 16.6943 23.1963C16.9521 23.4951 17.207 23.7734 17.459 24.0312C17.7109 24.2832 17.9512 24.5146 18.1797 24.7256C18.7188 25.2178 19.252 25.6426 19.7793 26H15.4287C15.0771 25.666 14.7432 25.2646 14.4268 24.7959C14.1572 24.3975 13.8848 23.9053 13.6094 23.3193C13.3398 22.7275 13.1318 22.0449 12.9854 21.2715H11.9219V26ZM15.6309 17.0527C15.6309 16.2031 15.4229 15.5791 15.0068 15.1807C14.5967 14.7822 13.9785 14.583 13.1523 14.583H11.9219V20.0762H13.1523C13.5918 20.0762 13.9668 19.9941 14.2773 19.8301C14.5938 19.6602 14.8516 19.4375 15.0508 19.1621C15.25 18.8809 15.3965 18.5586 15.4902 18.1953C15.584 17.832 15.6309 17.4512 15.6309 17.0527ZM33.4727 19.9443V20.1113C33.4609 20.6035 33.4082 21.1133 33.3145 21.6406C33.2266 22.168 33.1006 22.6953 32.9365 23.2227C32.7725 23.75 32.5762 24.2715 32.3477 24.7871C32.1191 25.3027 31.8613 25.7949 31.5742 26.2637C31.293 26.7383 30.9883 27.1807 30.6602 27.5908C30.332 28.0068 29.9863 28.373 29.623 28.6895L28.3135 27.9336C28.5186 27.5879 28.7031 27.21 28.8672 26.7998C29.0371 26.3955 29.1895 25.9707 29.3242 25.5254C29.459 25.0801 29.5732 24.623 29.667 24.1543C29.7666 23.6855 29.8486 23.2197 29.9131 22.7568C29.9775 22.2939 30.0244 21.8398 30.0537 21.3945C30.0889 20.9434 30.1064 20.5156 30.1064 20.1113C30.1064 19.7949 30.1035 19.4375 30.0977 19.0391C30.0977 18.6348 30.0742 18.2246 30.0273 17.8086C29.9863 17.3926 29.916 16.9883 29.8164 16.5957C29.7168 16.1973 29.5674 15.8428 29.3682 15.5322C29.1748 15.2217 28.9229 14.9727 28.6123 14.7852C28.3076 14.5977 27.9268 14.5039 27.4697 14.5039C27.0654 14.5039 26.7168 14.5742 26.4238 14.7148C26.1367 14.8496 25.8906 15.0342 25.6855 15.2686C25.4863 15.4971 25.3252 15.7637 25.2021 16.0684C25.085 16.373 24.9912 16.6953 24.9209 17.0352C24.8564 17.3691 24.8125 17.709 24.7891 18.0547C24.7715 18.3945 24.7627 18.7168 24.7627 19.0215V21.4736H28.5508V22.9238H24.7627V26H21.2734V19.5664C21.2734 18.6465 21.4199 17.791 21.7129 17C22.0059 16.209 22.4189 15.5234 22.9521 14.9434C23.4912 14.3574 24.1357 13.9004 24.8857 13.5723C25.6416 13.2383 26.4824 13.0713 27.4082 13.0713C28.0352 13.0713 28.6211 13.1621 29.166 13.3438C29.7168 13.5195 30.2178 13.7656 30.6689 14.082C31.1201 14.3926 31.5215 14.7646 31.873 15.1982C32.2305 15.626 32.5264 16.0947 32.7607 16.6045C33.001 17.1143 33.1826 17.6533 33.3057 18.2217C33.4287 18.79 33.4844 19.3643 33.4727 19.9443Z" fill="white" />
                </svg>
                <span className="ml-3 text-xl">Rahul Agrawal</span>
              </a>
              <p className="mt-2 text-sm text-gray-500">On a mission to be a better technologist</p>
            </div>
            <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2 sm:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">Navigation</h2>
                <nav className="mb-10 list-none">
                  <li>
                    <button onClick={goToHome} className="text-gray-600 outline-none focus:outline-none hover:text-gray-800">Home</button>
                  </li>
                  <li>
                    <button onClick={goToAbout} className="text-gray-600 outline-none focus:outline-none hover:text-gray-800">About</button>
                  </li>
                  <li>
                    <button onClick={goToPortfolio} className="text-gray-600 outline-none focus:outline-none hover:text-gray-800">Portfolio</button>
                  </li>
                  <li>
                    <button onClick={goToContact} className="text-gray-600 outline-none focus:outline-none hover:text-gray-800">Contact</button>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2 sm:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">Github</h2>
                <nav className="mb-10 list-none">
                  <li>
                    <a href="https://github.com/ice-rahul/lyrics" className="text-gray-600 hover:text-gray-800">Get Lyrics</a>
                  </li>
                  <li>
                    <a href="https://github.com/ice-rahul/fast-fingers" className="text-gray-600 hover:text-gray-800">Fast Fingers</a>
                  </li>
                  <li>
                    <a href="https://github.com/ice-rahul/fitnessClub" className="text-gray-600 hover:text-gray-800">Fitness Club</a>
                  </li>
                  <li>
                    <a href="https://github.com/ice-rahul/ice-rahul.github.io" className="text-gray-600 hover:text-gray-800">Portfolio</a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2 sm:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">Projects</h2>
                <nav className="mb-10 list-none">
                  <li>
                    <a href="https://ice-rahul.github.io/lyrics/" className="text-gray-600 hover:text-gray-800">Get Lyrics</a>
                  </li>
                  <li>
                    <a href="https://ice-rahul.github.io/fast-fingers/" className="text-gray-600 hover:text-gray-800">Fast Fingers</a>
                  </li>
                  <li>
                    <a href="https://ice-rahul.github.io/fitnessClub/" className="text-gray-600 hover:text-gray-800">Fitness Club</a>
                  </li>
                  <li>
                    <a href="https://ice-rahul.github.io" className="text-gray-600 hover:text-gray-800">Portfolio</a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2 sm:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font">Social</h2>
                <nav className="mb-10 list-none">
                  <li>
                    <a href="https://www.linkedin.com/in/rahul-agrawal-b6868887" className="flex text-gray-600 hover:text-gray-800">
                      <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                      </svg>
                    Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="mailto:meet4g@gmail.com" className="flex text-gray-600 hover:text-gray-800">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      Gmail
                    </a>
                  </li>
                  <li>
                    <a href="https://ice-rahul.github.io" className="flex text-gray-600 hover:text-gray-800">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://ice-rahul.github.io" className="flex text-gray-600 hover:text-gray-800">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                      Instagram
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-gray-100">
            <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
              <p className="text-sm text-center text-gray-500 sm:text-left">© 2021 Portfolio —
              <a href="https://www.linkedin.com/in/rahul-agrawal-b6868887" rel="noopener noreferrer" className="ml-1 text-gray-600" target="_blank">@rahul</a>
              </p>
              <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                <a href="https://ice-rahul.github.io" className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a href="https://ice-rahul.github.io" className="ml-3 text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a href="https://ice-rahul.github.io" className="ml-3 text-gray-500">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/rahul-agrawal-b6868887" className="ml-3 text-gray-500">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
