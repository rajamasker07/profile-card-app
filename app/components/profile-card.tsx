import Image from 'next/image';
import React from 'react';
import profilePic from '@/public/assets/image-victor.jpg'
import SocialMediaMetricItem from './social-media-metric-item';
import bgPic from '@/public/assets/bg-pattern-card.svg';

export default function ProfileCard() {
  return (
    <div className='rounded-lg shadow-lg flex flex-col w-full max-w-[350px] bg-white'>
      <div className="flex w-full min-h-[280] place-items-center place-content-center flex-col gap-2">
        <div className=''>
          <Image src={bgPic} alt="bg" className='rounded-t-lg object-cover'/>
        </div>
        <div className='relative w-full text-center flex flex-col place-items-center -top-12 gap-3 text-normal'>
          <Image alt="profile" width={70} height={70} className="rounded-full outline-2 outline-white" src={profilePic} />
          <h1 className="text-dark-blue text-2xl font-bold">
            Victor Crest &nbsp;
            <span className='text-neutral-dark-grey'>26</span>
          </h1>
          <p className="text-dark-blue text-center">
            London
          </p>
        </div>
      </div>
      <hr className='divide-x divide-solid divide-gray-500' />
      <div className="w-full inline-flex gap-0 p-2">
        <SocialMediaMetricItem metrics={80000} name="Followers" />
        <SocialMediaMetricItem metrics={803000} name="Likes" />
        <SocialMediaMetricItem metrics={140000} name="Photos" />
      </div>
    </div>
  )
}
