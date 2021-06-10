import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Speakers from '../components/Speakers';
import Sponsors from '../components/Sponsors';

const Index = () => {
  const [heroOptions, setHeroOptions] = useState({});
  const [speakers, setSpeakers] = useState({});
  const [sponsors, setSponsors] = useState({});

  useEffect(() => {
    if (localStorage.getItem('heroOptions') != null) {
      setHeroOptions(JSON.parse(localStorage.getItem('heroOptions')));
    }
    if (localStorage.getItem('speakers') != null) {
      setSpeakers(JSON.parse(localStorage.getItem('speakers')));
    }
    if (localStorage.getItem('sponsors') != null) {
      setSponsors(JSON.parse(localStorage.getItem('sponsors')));
    }
  }, []);
  return (
    <div className='h-screen flex overflow-hidden'>
      <div className='flex flex-col w-0 flex-1 overflow-hidden'>
        <main className='flex-1 relative z-0 overflow-y-auto focus:outline-none'>
          <div className=''>
            <div className='max-w-7xl mx-auto'>
              <div>
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
