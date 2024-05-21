'use client';

import * as React from 'react';
import '@/lib/env';

import AboutUs from '@/components/AboutUs';
import LoadingSpinner from '@/components/LoadingSpinner';
import Logo from '@/components/Logo/inde';
import UnderlineLink from '@/components/UnderlineLink';

export const HomePage = () => {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center py-12 text-center'>
          <Logo />
          <LoadingSpinner />
          <h1 className='mt-6'>Entregas rápidas, resultados mais ágeis</h1>
          <p className='text-sm text-gray-800 mt-5'>
            Sua mercadoria em movimento constante conosco!
          </p>
          <div className="flex w-full mt-4 border-gray-500">
            <input 
              className="flex w-full h-[50px] rounded-l-md rounded-r-none border border-gray-500 px-3 py-2 ring-offset-background file:bg-transparent placeholder:text-muted-foreground text-[18px] font-normal leading-[22.4px] text-black focus:border-green-500 focus:ring-2 focus:ring-green-500" 
              id="code" 
              type="text" 
              placeholder="Digite o código de rastreio" 
            />
            <button 
              className="h-[50px] px-4 text-white bg-green-500 hover:bg-green-600 rounded-tr-md rounded-br-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Pesquisar
            </button>
          </div>
          <section className="grid grid-cols-1 gap-8 text-white px-5 mt-10 mb-10 max-w-xl mx-auto w-full flex-grow">
            <AboutUs title='Sobre nós' description='Focamos em fornecer excelentes serviços de rastreamento para seus pacotes, com informações de rastreamento sempre atualizadas.'>
              <svg width="24" height="23" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_116_274)">
                    <path d="M2.96405 6.22693C3.88231 6.22693 4.62889 5.48036 4.62889 4.5621C4.62889 3.64383 3.88231 2.89726 2.96405 2.89726C2.04579 2.89726 1.29922 3.64383 1.29922 4.5621C1.29922 5.48036 2.04579 6.22693 2.96405 6.22693ZM14.6179 6.22693C15.5362 6.22693 16.2827 5.48036 16.2827 4.5621C16.2827 3.64383 15.5362 2.89726 14.6179 2.89726C13.6996 2.89726 12.9531 3.64383 12.9531 4.5621C12.9531 5.48036 13.6996 6.22693 14.6179 6.22693ZM15.4503 7.05935H13.7855C13.3277 7.05935 12.9141 7.24404 12.6123 7.54319C13.6606 8.11808 14.4046 9.15601 14.5659 10.389H16.2827C16.7432 10.389 17.1152 10.017 17.1152 9.55661V8.72419C17.1152 7.80593 16.3686 7.05935 15.4503 7.05935ZM8.79098 7.05935C10.4012 7.05935 11.7044 5.7561 11.7044 4.14589C11.7044 2.53568 10.4012 1.23242 8.79098 1.23242C7.18077 1.23242 5.87752 2.53568 5.87752 4.14589C5.87752 5.7561 7.18077 7.05935 8.79098 7.05935ZM10.7888 7.89177H10.5729C10.0318 8.1519 9.4309 8.30798 8.79098 8.30798C8.15106 8.30798 7.55276 8.1519 7.00909 7.89177H6.79318C5.13875 7.89177 3.79647 9.23405 3.79647 10.8885V11.6377C3.79647 12.327 4.35575 12.8863 5.0451 12.8863H12.5369C13.2262 12.8863 13.7855 12.327 13.7855 11.6377V10.8885C13.7855 9.23405 12.4432 7.89177 10.7888 7.89177ZM4.96966 7.54319C4.66791 7.24404 4.2543 7.05935 3.79647 7.05935H2.13163C1.21337 7.05935 0.466797 7.80593 0.466797 8.72419V9.55661C0.466797 10.017 0.838784 10.389 1.29922 10.389H3.01348C3.17736 9.15601 3.92133 8.11808 4.96966 7.54319Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_116_274">
                      <rect width="16.6484" height="13.3187" fill="white" transform="translate(0.466797 0.399414)"/>
                    </clipPath>
                  </defs>
                </svg>
            </AboutUs>
            <AboutUs title="Segurança" description="Somos comprometidos com a segurança de seus pacotes, mantendo rastreamentos e trabalhos de extrema qualidade.">
              <svg width="23" height="23" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.03947 1.08594L2.80664 3.85608V8.0113C2.80664 11.8549 5.46598 15.4491 9.03947 16.3217C12.613 15.4491 15.2723 11.8549 15.2723 8.0113V3.85608L9.03947 1.08594ZM9.03947 5.24116C10.009 5.24116 10.9786 6.00295 10.9786 6.9725V8.0113C11.3941 8.0113 11.8096 8.42682 11.8096 8.9116V11.3355C11.8096 11.751 11.3941 12.1665 10.9093 12.1665H7.10037C6.68484 12.1665 6.26932 11.751 6.26932 11.2662V8.84234C6.26932 8.42682 6.68484 8.0113 7.10037 8.0113V6.9725C7.10037 6.00295 8.06992 5.24116 9.03947 5.24116ZM9.03947 6.0722C8.48544 6.0722 8.00066 6.41847 8.00066 6.9725V8.0113H10.0783V6.9725C10.0783 6.41847 9.5935 6.0722 9.03947 6.0722Z" fill="white"/>
              </svg>
            </AboutUs>
            <AboutUs title="Velocidade" description="Além do nosso sistema de rastreio, temos a entrega mais rápida do Brasil, com uma equipe de profissionais altamente qualificados.">
              <svg width="23" height="23" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.88581 2.70215C11.1919 2.70215 12.4445 3.221 13.3681 4.14456C14.2917 5.06812 14.8105 6.32074 14.8105 7.62685C14.8105 8.93296 14.2917 10.1856 13.3681 11.1091C12.4445 12.0327 11.1919 12.5516 9.88581 12.5516C8.5797 12.5516 7.32708 12.0327 6.40352 11.1091C5.47996 10.1856 4.9611 8.93296 4.9611 7.62685C4.9611 6.32074 5.47996 5.06812 6.40352 4.14456C7.32708 3.221 8.5797 2.70215 9.88581 2.70215ZM9.88581 3.93332C8.90622 3.93332 7.96676 4.32246 7.27409 5.01513C6.58142 5.7078 6.19228 6.64727 6.19228 7.62685C6.19228 8.60644 6.58142 9.5459 7.27409 10.2386C7.96676 10.9312 8.90622 11.3204 9.88581 11.3204C10.8654 11.3204 11.8049 10.9312 12.4975 10.2386C13.1902 9.5459 13.5793 8.60644 13.5793 7.62685C13.5793 6.64727 13.1902 5.7078 12.4975 5.01513C11.8049 4.32246 10.8654 3.93332 9.88581 3.93332ZM9.27022 5.1645H10.1936V7.49142L11.6279 8.92574L10.9754 9.57826L9.27022 7.87309V5.1645ZM1.88317 11.3204C1.7199 11.3204 1.56332 11.2555 1.44788 11.1401C1.33243 11.0246 1.26758 10.8681 1.26758 10.7048C1.26758 10.5415 1.33243 10.3849 1.44788 10.2695C1.56332 10.1541 1.7199 10.0892 1.88317 10.0892H4.24087C4.4317 10.5263 4.67793 10.9387 4.9611 11.3204H1.88317ZM2.49875 8.24244C2.33549 8.24244 2.17891 8.17758 2.06347 8.06214C1.94802 7.94669 1.88317 7.79011 1.88317 7.62685C1.88317 7.46359 1.94802 7.30701 2.06347 7.19156C2.17891 7.07612 2.33549 7.01126 2.49875 7.01126H3.76071L3.72993 7.62685L3.76071 8.24244H2.49875ZM3.11434 5.1645C2.95108 5.1645 2.7945 5.09964 2.67906 4.9842C2.56361 4.86875 2.49875 4.71218 2.49875 4.54891C2.49875 4.38565 2.56361 4.22907 2.67906 4.11363C2.7945 3.99818 2.95108 3.93332 3.11434 3.93332H4.9611C4.67793 4.31499 4.4317 4.72743 4.24087 5.1645H3.11434Z" fill="white"/>
              </svg>
            </AboutUs>
          </section>
          <footer className="absolute bottom-2 text-gray-700">
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href="https://primelogtracking.com" target="_blank">
              Primelog Tracking
            </UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
