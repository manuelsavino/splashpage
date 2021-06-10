import React from 'react';

export default function Speakers({ speakers }) {
  return (
    <>
      {Object.keys(speakers).length > 0 && (
        <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
          <div className='space-y-12'>
            <div className='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
              <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Speakers
              </h2>
              <p className='text-xl text-gray-500'>
                Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum
                dolor ultricies donec risus sodales. Tempus quis et.
              </p>
            </div>
            <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'>
              {Object.entries(speakers).map(([key, value]) => (
                <li key={key}>
                  <div className='space-y-4'>
                    <div className='aspect-w-3 aspect-h-2'>
                      <img
                        className='object-cover shadow-lg rounded-lg'
                        src={
                          speakers[key].speakerImage ||
                          'https://image.flaticon.com/icons/png/512/64/64096.png'
                        }
                        alt='girl'
                      />
                    </div>
                    <div className='space-y-2'>
                      <div className='text-lg leading-6 font-medium space-y-1'>
                        <h3>{speakers[key].speakerName}</h3>
                        <p className='text-indigo-600'>
                          {speakers[key].speakerTitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
