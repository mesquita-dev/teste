import React from 'react';
import Search from '../components/Search';
import { StaticImage } from "gatsby-plugin-image"
import { Linkedin, Facebook, Instagram, Youtube, MailPlus } from 'lucide-react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// markup
const IndexPage = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <header className="w-full max-w-full bg-neutral-100">
        <figure className="mx-auto max-w-[1240px] h-24">
          <StaticImage
            src="../images/logo.svg"
            alt="Logo da Granto Seguros"
            width={96}
            height={96}
            layout="fixed"
          />
        </figure>
      </header>

      <div className='grid grid-cols-1 sm:grid-cols-2 justify-items-center'>
          <div className='bg-[#5828AC] h-full w-full p-3 py-6 text-center'>
          <StaticImage
            src='../images/ilustrationNPS.svg'
            alt='Ilustração de uma mão segurando uma lupa'
            className='mt-4 hidden sm:block sm:mx-auto'
            layout='fixed'
          />
            <h1 className='text-2xl sm:text-3xl max-w-lg mx-auto font-bold text-center text-white sm:mt-10 mb-4'>Parabéns! Você realizou a nossa pesquisa de engajamento</h1>
            <p className='text-base text-center text-white'>Essa pesquisa irá nos ajudar a melhorar os nossos serviços para você!</p>
            <p className='text-base text-center text-white'>Lembrando que essa pesquisa é totalmente anônima e confidencial.</p>
          </div>

          <Router>
            <Routes>
              <Route path="/" element={<Search />}></Route>
            </Routes>
          </Router>
      </div>

      <footer className="w-full max-w-full bg-neutral-100 py-7">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center lg:justify-between">
        <figure>
          <StaticImage
            src="../images/logo.svg"
            alt="Logo da Granto Seguros"
            width={96}
            height={96}
            layout="fixed"
          />
        </figure>
        <div>
          <div className="flex justify-center gap-6">
            <a
              href="https://grantoseguros.com"
              target="_blank"
              className="text-xl font-medium"
            >
              Site
            </a>
            <a
              href="https://grantoseguros.com/blog"
              target="_blank"
              className="text-xl font-medium"
            >
              Blog
            </a>
          </div>
          <span className="block text-center">
            Copyright ©{currentYear} GRANTO | Todos os Direitos Reservados
          </span>
        </div>
        <div className="my-4 flex gap-4">
          <a
            href="https://www.linkedin.com/company/granto-seguros/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
          <a
            href="https://www.facebook.com/grantoseguros"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook />
          </a>
          <a
            href="https://www.instagram.com/grantoseguros/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram />
          </a>
          <a
            href="https://www.youtube.com/channel/UC5OjMxB8tpeiKc3Gibxl7gg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Youtube"
          >
            <Youtube />
          </a>
          <a
            href="mailto:contato@grantoseguros.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <MailPlus />
          </a>
        </div>
      </div>
    </footer>
    </>
  );
};

export default IndexPage;
