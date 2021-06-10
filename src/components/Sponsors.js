import React from 'react';

export default function Sponsors({ sponsors }) {
  return (
    <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
      <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
        {Object.keys(sponsors).length > 0 && (
          <>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
              Sponsors
            </h2>

            <div class='mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8'>
              {Object.entries(sponsors).map(([key, value]) => (
                <div className='col-span-1 flex justify-center py-8 px-8 bg-gray-50'>
                  <img
                    class='max-h-12'
                    src={value.sponsorLogo}
                    alt='Workcation'
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
