import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Speakers from '../components/Speakers';
import Sponsors from '../components/Sponsors';

const Index = () => {
  const [heroOptions, setHeroOptions] = useState({});
  const [speakers, setSpeakers] = useState({});
  const [sponsors, setSponsors] = useState({});

  const saveToLS = (name, item) => {
    localStorage.setItem(name, item);
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
            <div className='max-w-7xl mx-auto'>
              <div className='pt-10'>
                <Hero heroOptions={heroOptions} />
                <Speakers speakers={speakers} />
                <Sponsors sponsors={sponsors} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
