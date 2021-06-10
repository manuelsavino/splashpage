import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Speakers from '../components/Speakers';
import Sponsors from '../components/Sponsors';
import SpeakerOptions from '../components/SpeakerOptions';
import SponsorOptions from '../components/SponsorOptions';
import HeroOptions from '../components/HeroOptions';
const Index = () => {
  const [selectedArea, setSelectedArea] = useState('Hero');
  const [heroOptions, setHeroOptions] = useState({
    heroImg: '',
    headline: '',
    headlineColor: '#FFFFFF',
    ctaCopy: '',
    ctaBg: '#FFFFFF',
    ctaCopyColor: '#FFFFFF',
    heroCopy: '',
    textSize: '',
  });

  const [speakers, setSpeakers] = useState({});

  const [sponsors, setSponsors] = useState({});

  const changeArea = (e) => {
    setSelectedArea(e.target.value);
  };

  const saveToLS = (name, item) => {
    localStorage.setItem(name, item);
  };

  const onSubmit = () => {
    saveToLS('heroOptions', JSON.stringify(heroOptions));
    saveToLS('speakers', JSON.stringify(speakers));
    saveToLS('sponsors', JSON.stringify(sponsors));
  };

  const changeHeroOptions = (e) => {
    if (e.target.type == 'checkbox') {
      setHeroOptions({
        ...heroOptions,
        [e.target.name]: !heroOptions[e.target.name],
      });
    } else {
      setHeroOptions({ ...heroOptions, [e.target.name]: e.target.value });
    }
  };

  const changeSpeakersData = (e, speakerNum) => {
    setSpeakers((prevState) => ({
      ...prevState,
      [speakerNum]: {
        ...prevState[speakerNum],
        [e.target.name]: e.target.value,
      },
    }));
  };

  const changeSponsorData = (e, sponsorNumber) => {
    setSponsors((prevState) => ({
      ...prevState,
      [sponsorNumber]: {
        ...prevState[sponsorNumber],
        [e.target.name]: e.target.value,
      },
    }));
  };

  const addSpeaker = () => {
    const lastSpeaker =
      parseInt(Object.keys(speakers)[Object.keys(speakers).length - 1]) + 1 ||
      1;
    setSpeakers({
      ...speakers,
      [lastSpeaker]: {
        speakerImage: '',
        speakerName: 'John Smith',
        speakerTitle: 'Speker',
      },
    });
  };

  const addSponsor = () => {
    const lastSponsor =
      parseInt(Object.keys(sponsors)[Object.keys(sponsors).length - 1]) + 1 ||
      1;
    setSponsors({
      ...sponsors,
      [lastSponsor]: {
        sponsorLogo: '',
        sponsorName: '',
      },
    });
  };

  const removeSpeaker = (num) => {
    const speakersTemp = speakers;
    delete speakersTemp[num];
    setSpeakers({ ...speakersTemp });
  };

  const removeSponsor = (num) => {
    const sponsorsTemp = sponsors;
    delete sponsorsTemp[num];
    setSponsors({ ...sponsorsTemp });
  };

  useEffect(() => {
    if (localStorage.getItem('heroOptions') != null) {
      setHeroOptions(JSON.parse(localStorage.getItem('heroOptions')));
    } else {
      setHeroOptions({
        heroImg:
          'https://images.unsplash.com/photo-1541789094913-f3809a8f3ba5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        headline: 'Best event ever, coming soon to a screen near you',
        headlineColor: '#4F46E5',
        ctaCopy: 'Register Now',
        ctaBg: '#4F46E5',
        ctaCopyColor: '#FFFFFF',
        heroCopy:
          'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
        textSize: 'text-5xl',
      });
    }
    if (localStorage.getItem('speakers') != null) {
      setSpeakers(JSON.parse(localStorage.getItem('speakers')));
    } else {
      setSpeakers({
        1: {
          speakerTitle: 'Desert Expert',
          speakerName: 'Jose Smith',
          speakerImage:
            'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        },
        2: {
          speakerTitle: 'Speaker',
          speakerName: 'Joanna Smith',
          speakerImage:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        },
        2: {
          speakerTitle: 'Speaker',
          speakerName: 'Joanna Smith',
          speakerImage:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        },
        3: {
          speakerTitle: 'Guest Speaker',
          speakerName: 'Ted Mosby',
          speakerImage:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        },
      });
    }
    if (localStorage.getItem('sponsors') != null) {
      setSponsors(JSON.parse(localStorage.getItem('sponsors')));
    } else {
      setSponsors({
        1: {
          sponsorLogo:
            'https://www.meetingplay.com/hubfs/website-homepage-may-2020/logo.png',
        },
        2: {
          sponsorLogo:
            'https://www.carnival.com/-/media/Images/Header2013/carnival-logo-png',
        },
        3: {
          sponsorLogo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Spirit_Airlines_logo.svg/1200px-Spirit_Airlines_logo.svg.png',
        },
      });
    }
  }, []);

  useEffect(() => {
    saveToLS('sponsors', JSON.stringify(sponsors));
    saveToLS('speakers', JSON.stringify(speakers));
    saveToLS('heroOptions', JSON.stringify(heroOptions));
  }, [sponsors, speakers, heroOptions]);
  return (
    <div className='h-screen flex overflow-hidden'>
      <div className='flex flex-col w-0 flex-1 overflow-hidden'>
        <main className='flex-1 relative z-0 overflow-y-auto focus:outline-none'>
          <div className=''>
            <div className='max-w-7xl mx-auto pt-5 pb-5'>
              <div>
                <Hero heroOptions={heroOptions} />
                <Speakers speakers={speakers} />
                <Sponsors sponsors={sponsors} />
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className='hidden md:flex md:flex-shrink-0'>
        <div className='flex flex-col w-96'>
          <div className='flex flex-col h-0 flex-1 bg-gray-700 pt-1'>
            <div className='flex-1 flex flex-col pb-4 overflow-y-auto'>
              <nav className='py-3 px-5'>
                <button
                  onClick={onSubmit}
                  className='text-white bg-blue-500 rounded px-4 py-1 ml-auto  block'
                >
                  Save
                </button>
                <label className='text-white text-sm'>
                  Select area to edit
                </label>
                <select className='w-full py-2 rounded ' onChange={changeArea}>
                  <option value='Hero'>Hero</option>
                  <option value='Speakers'>Speakers</option>
                  <option value='Agenda'>Agenda</option>
                  <option value='Sponsors'>Sponsors</option>
                </select>

                {selectedArea === 'Hero' && (
                  <HeroOptions
                    heroOptions={heroOptions}
                    changeHeroOptions={changeHeroOptions}
                  />
                )}

                {selectedArea === 'Speakers' && (
                  <div>
                    <button
                      className='text-white bg-blue-500 rounded px-4 py-1 ml-auto mt-3 block'
                      onClick={addSpeaker}
                    >
                      Add Spaker
                    </button>
                    {Object.entries(speakers).map(([key, value]) => (
                      <SpeakerOptions
                        changeSpeakersData={changeSpeakersData}
                        key={key}
                        speakerNumber={key}
                        speakers={speakers}
                        removeSpeaker={removeSpeaker}
                      />
                    ))}
                  </div>
                )}
                {selectedArea === 'Sponsors' && (
                  <div>
                    <button
                      className='text-white bg-blue-500 rounded px-4 py-1 ml-auto mt-3 block'
                      onClick={addSponsor}
                    >
                      Add Sponsor
                    </button>
                    {Object.entries(sponsors).map(([key, value]) => (
                      <SponsorOptions
                        changeSponsorData={changeSponsorData}
                        key={key}
                        sponsorNumber={key}
                        sponsors={sponsors}
                        removeSponsor={removeSponsor}
                      />
                    ))}
                  </div>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
