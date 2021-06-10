import React from 'react';

export default function HeroOptions({ heroOptions, changeHeroOptions }) {
  return (
    <>
      <div className='flex flex-col space-y-1'>
        <h2 className='text-white text-3xl mt-4'>Hero Image Options</h2>
        <label>
          <span className='text-white text-sm'>Hero Background</span>
          <input
            className='w-full py-1 rounded pl-2'
            type='text'
            name='heroImg'
            value={heroOptions.heroImg}
            onChange={changeHeroOptions}
          ></input>
        </label>
      </div>

      <div className='flex flex-col space-y-1'>
        <h2 className='text-white text-3xl mt-4'>Hero Content</h2>
        <label>
          <span className='text-white text-sm'>Headline</span>
          <input
            className='w-full py-1 rounded pl-2'
            type='text'
            name='headline'
            value={heroOptions.headline}
            onChange={changeHeroOptions}
          ></input>
        </label>
        <label>
          <span className='text-white text-sm'>Headline Color</span>
          <input
            className='w-full rounded'
            type='color'
            name='headlineColor'
            value={heroOptions.headlineColor}
            onChange={changeHeroOptions}
          ></input>
        </label>
        <div>
          <label className='text-white text-sm'>Headline Text Size</label>
          <select
            className='w-full py-2 rounded pl-2'
            name='textSize'
            onChange={changeHeroOptions}
            value={heroOptions.textSize}
          >
            <option value='text-4xl'>Small</option>
            <option value='text-5xl'>Medium</option>
            <option value='text-6xl'>Large</option>
          </select>
          <label>
            <span className='text-white text-sm'>Hero Copy</span>
            <textarea
              className='w-full py-1 rounded pl-2'
              name='heroCopy'
              value={heroOptions.heroCopy}
              onChange={changeHeroOptions}
            />
          </label>
          <label>
            <span className='text-white text-sm'>CTA Copy</span>
            <input
              className='w-full py-1 rounded pl-2'
              type='text'
              name='ctaCopy'
              value={heroOptions.ctaCopy}
              onChange={changeHeroOptions}
            ></input>
          </label>
        </div>
        <div className='flex space-x-2 justify-between'>
          <label className='w-full'>
            <span className='text-white text-sm'>CTA BG Color</span>
            <input
              className='w-full rounded'
              type='color'
              name='ctaBg'
              value={heroOptions.ctaBg}
              onChange={changeHeroOptions}
            ></input>
          </label>
          <label className='w-full'>
            <span className='text-white text-sm'>CTA Color</span>
            <input
              className='w-full rounded'
              type='color'
              name='ctaCopyColor'
              value={heroOptions.ctaCopyColor}
              onChange={changeHeroOptions}
            ></input>
          </label>
        </div>
      </div>
    </>
  );
}
