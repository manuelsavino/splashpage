import React from 'react';

export default function Hero({ heroOptions }) {
  return (
    <main className='lg:relative'>
      <div className='mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left'>
        <div className='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
          <h1
            className={`${heroOptions.textSize} tracking-tight font-extrabold`}
          >
            <span
              style={{ color: heroOptions.headlineColor }}
              className='block xl:inline'
            >
              {heroOptions.headline}
            </span>
          </h1>
          <p className='mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'>
            {heroOptions.heroCopy}
          </p>
          <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
            <div className='rounded-md shadow'>
              <a
                style={{
                  background: heroOptions.ctaBg,
                  color: heroOptions.ctaCopyColor,
                }}
                href='#'
                className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10'
              >
                {heroOptions.ctaCopy}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'>
        <img
          className='absolute inset-0 w-full h-full object-cover'
          src={heroOptions.heroImg}
          alt='mountains'
        />
      </div>
    </main>
  );
}
