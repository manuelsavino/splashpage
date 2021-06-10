import React from 'react';

export default function SpeakerOptions({
  sponsorNumber,
  sponsors,
  changeSponsorData,
  removeSponsor,
}) {
  console.log(sponsorNumber);
  console.log(sponsors);
  return (
    <div className='border border-indigo-500  rounded mt-4'>
      <div className='bg-indigo-500 px-2 py-3 flex justify-between items-center'>
        <h2 className='text-white text-lg'>Sponsor {sponsorNumber}</h2>
        <button
          onClick={() => removeSponsor(sponsorNumber)}
          className='bg-red-500 text-white px-2 py-1 rounded'
        >
          Remove
        </button>
      </div>
      <div className='p-2'>
        <label>
          <span className='text-white text-sm'>Sponsor Name</span>
          <input
            className='w-full py-1 rounded pl-2'
            type='text'
            name='sponsorName'
            value={sponsors[sponsorNumber].sponsorName}
            onChange={(e) => changeSponsorData(e, sponsorNumber)}
          ></input>
        </label>
        <label>
          <span className='text-white text-sm'>Sponsor Logo</span>
          <input
            className='w-full py-1 rounded pl-2'
            type='text'
            name='sponsorLogo'
            value={sponsors[sponsorNumber].sponsorLogo}
            onChange={(e) => changeSponsorData(e, sponsorNumber)}
          ></input>
        </label>
      </div>
    </div>
  );
}
