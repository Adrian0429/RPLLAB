import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Card from 'components/Card';


const Hobbies = () => {
  return (
   <section className="bg-white text-pink-400">
  <div className="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
    <div className="max-w-xl">
      <h2 className="text-3xl font-bold sm:text-4xl">What are my hobbies?</h2>

      <p className="mt-4 text-gray-600 text-justify">
        I used to like modding mechanical keyboards. But after my second semester I stopped doing my Keyboard hobby
        because it was too expensive xD. I also like playing games and sports especially Badminton.
      </p>
    </div>

    <div
      className="mt-8 grid sm: grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
    >
      <div className="flex items-start gap-4">
        <Card
          title='Keyboards'
          imageaddress='/assets/sideview.jpg'
          judul='Keyboards!'
          content='Mechanical Keyboards'
          />
      </div>

      <div className="flex items-start gap-4">
        <Card
        judul='MOAR KEYBOARDS!!'
        title='MOAR KEEBS?'
        imageaddress='/assets/white.jpg'
        content='Keyboard lagi keyboard lagi'
        
        />
      </div>

      <div className="flex items-start gap-4">
      <Card
        judul='Games'
        title='Nintendo Switch'
        imageaddress='/assets/switch.jpg'
        content='Nintendo Switch hasil kepingin punya pak baskoro'
        
        />
      </div>

      <div className="flex items-start gap-4">
      <Card
        judul='Badminton'
        title='Nintendo Switch'
        imageaddress='/assets/switch.jpg'
        content='Keyboard lagi keyboard lagi'
        
        />
      </div>

      

    </div>
  </div>
</section>

  );
};

export default Hobbies;