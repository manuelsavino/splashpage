import React from 'react';

export default function SpeakerOptions({
  speakerNumber,
  speakers,
  changeSpeakersData,
  removeSpeaker,
}) {
  return (
    <div className='border border-indigo-500  rounded mt-4'>
      <div className='bg-indigo-500 px-2 py-3 flex justify-between items-center'>
        <h2 className='text-white text-lg'>Speaker {speakerNumber}</h2>
        <button
          onClick={() => removeSpeaker(speakerNumber)}
          className='bg-red-500 text-white px-2 py-1 rounded'
        >
          Remove
        </button>
      </div>
      <div className='p-2'>
        <label>
          <span className='text-white text-sm'>Speaker Name</span>
          <input
            className='w-full py-1 rounded pl-2'
            type='text'
            name='speakerName'
            value={speakers[speakerNumber].speakerName}
            onChange={(e) => changeSpeakersData(e, speakerNumber)}
          ></input>
        </label>
        <label>
          <span className='text-white text-sm'>Speaker Image</span>
          <input
            className='w-full py-1 rounded pl-2'
            type='text'
            name='speakerImage'
            value={speakers[speakerNumber].speakerImage}
            onChange={(e) => changeSpeakersData(e, speakerNumber)}
          ></input>
        </label>
        <label>
          <span className='text-white text-sm'>Speaker Title</span>
          <input
            className='w-full py-1 rounded pl-2'
            type='text'
            name='speakerTitle'
            value={speakers[speakerNumber].speakerTitle}
            onChange={(e) => changeSpeakersData(e, speakerNumber)}
          ></input>
        </label>
      </div>
    </div>
  );
}
