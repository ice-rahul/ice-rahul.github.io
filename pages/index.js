import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <main>
        <header className="text-gray-600 body-font">
          <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
            <a href="https://www.google.com" className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#3B82F6" />
                <path d="M11.9219 26H8.43262V13.3438H14.6553C15.2412 13.3438 15.8066 13.4141 16.3516 13.5547C16.8965 13.6895 17.377 13.9062 17.793 14.2051C18.2148 14.498 18.5488 14.8789 18.7949 15.3477C19.0469 15.8164 19.1729 16.3848 19.1729 17.0527C19.1729 17.5742 19.0615 18.0664 18.8389 18.5293C18.6221 18.9863 18.3291 19.3965 17.96 19.7598C17.5967 20.1172 17.1777 20.416 16.7031 20.6562C16.2285 20.8906 15.7363 21.0459 15.2266 21.1221C15.4551 21.5088 15.6924 21.875 15.9385 22.2207C16.1904 22.5664 16.4424 22.8916 16.6943 23.1963C16.9521 23.4951 17.207 23.7734 17.459 24.0312C17.7109 24.2832 17.9512 24.5146 18.1797 24.7256C18.7188 25.2178 19.252 25.6426 19.7793 26H15.4287C15.0771 25.666 14.7432 25.2646 14.4268 24.7959C14.1572 24.3975 13.8848 23.9053 13.6094 23.3193C13.3398 22.7275 13.1318 22.0449 12.9854 21.2715H11.9219V26ZM15.6309 17.0527C15.6309 16.2031 15.4229 15.5791 15.0068 15.1807C14.5967 14.7822 13.9785 14.583 13.1523 14.583H11.9219V20.0762H13.1523C13.5918 20.0762 13.9668 19.9941 14.2773 19.8301C14.5938 19.6602 14.8516 19.4375 15.0508 19.1621C15.25 18.8809 15.3965 18.5586 15.4902 18.1953C15.584 17.832 15.6309 17.4512 15.6309 17.0527ZM33.4727 19.9443V20.1113C33.4609 20.6035 33.4082 21.1133 33.3145 21.6406C33.2266 22.168 33.1006 22.6953 32.9365 23.2227C32.7725 23.75 32.5762 24.2715 32.3477 24.7871C32.1191 25.3027 31.8613 25.7949 31.5742 26.2637C31.293 26.7383 30.9883 27.1807 30.6602 27.5908C30.332 28.0068 29.9863 28.373 29.623 28.6895L28.3135 27.9336C28.5186 27.5879 28.7031 27.21 28.8672 26.7998C29.0371 26.3955 29.1895 25.9707 29.3242 25.5254C29.459 25.0801 29.5732 24.623 29.667 24.1543C29.7666 23.6855 29.8486 23.2197 29.9131 22.7568C29.9775 22.2939 30.0244 21.8398 30.0537 21.3945C30.0889 20.9434 30.1064 20.5156 30.1064 20.1113C30.1064 19.7949 30.1035 19.4375 30.0977 19.0391C30.0977 18.6348 30.0742 18.2246 30.0273 17.8086C29.9863 17.3926 29.916 16.9883 29.8164 16.5957C29.7168 16.1973 29.5674 15.8428 29.3682 15.5322C29.1748 15.2217 28.9229 14.9727 28.6123 14.7852C28.3076 14.5977 27.9268 14.5039 27.4697 14.5039C27.0654 14.5039 26.7168 14.5742 26.4238 14.7148C26.1367 14.8496 25.8906 15.0342 25.6855 15.2686C25.4863 15.4971 25.3252 15.7637 25.2021 16.0684C25.085 16.373 24.9912 16.6953 24.9209 17.0352C24.8564 17.3691 24.8125 17.709 24.7891 18.0547C24.7715 18.3945 24.7627 18.7168 24.7627 19.0215V21.4736H28.5508V22.9238H24.7627V26H21.2734V19.5664C21.2734 18.6465 21.4199 17.791 21.7129 17C22.0059 16.209 22.4189 15.5234 22.9521 14.9434C23.4912 14.3574 24.1357 13.9004 24.8857 13.5723C25.6416 13.2383 26.4824 13.0713 27.4082 13.0713C28.0352 13.0713 28.6211 13.1621 29.166 13.3438C29.7168 13.5195 30.2178 13.7656 30.6689 14.082C31.1201 14.3926 31.5215 14.7646 31.873 15.1982C32.2305 15.626 32.5264 16.0947 32.7607 16.6045C33.001 17.1143 33.1826 17.6533 33.3057 18.2217C33.4287 18.79 33.4844 19.3643 33.4727 19.9443Z" fill="white" />
              </svg>
              <span className="ml-3 text-xl">Rahul Agrawal</span>
            </a>
            <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
              <a href="https://www.google.com" className="mr-5 hover:text-gray-900">Home</a>
              <a href="https://www.google.com" className="mr-5 hover:text-gray-900">About</a>
              <a href="https://www.google.com" className="mr-5 hover:text-gray-900">Portfolio</a>
              <a href="https://www.google.com" className="mr-5 hover:text-gray-900">Contact</a>
            </nav>
            <button className="inline-flex items-center px-3 py-1 mt-4 text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-700 md:mt-0">Contact Us
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
              <p className="mb-8 leading-relaxed">I&rsquo;m extremely happy to see you spare some time on my website. I would be happy to connect with you in near future for your upcoming assignments and would recommend exploring my website and projects.</p>
              <div className="flex justify-center">
                <button className="inline-flex px-6 py-2 text-lg text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600">View Portfolio</button>
                <button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200">Download Resume</button>
              </div>
            </div>
            <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
              <img className="object-cover object-center rounded" alt="hero" src="assets/img/coding.svg" />
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font bg-gray-50">
          <div className="container flex flex-col items-center px-5 py-10 mx-auto md:flex-row">
            <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
              <img className="object-cover object-center rounded" alt="hero" src="assets/img/about_me.svg" />
            </div>
            <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
              <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">About Me,
                <br/> <span className="text-base">FrontEnd Developer (MERN Stack) , FullStack Developer (LAMP Stack)</span>
              </h1>
              <p className="mb-8 leading-relaxed">I&rsquo;m an IT professional with 5+ years of experience in various software domains. I have been working in technologies like PHP (core + MVC Frameworks), ReactJs, Android, MySql, HTML, CSS, Javascript, etc. Still learning new technologies and frameworks to upgrade and update my skills as per industry standards.</p>
              <p className="mb-8 leading-relaxed">Just as a side note, this website is built using Next.js and Tailwind CSS <span role="img" aria-label="happy">&#128513;</span></p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
