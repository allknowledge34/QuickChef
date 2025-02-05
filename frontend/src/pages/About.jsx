// Copyright 2025 PREM
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to QuickSafe, your kitchen's trusted partner. Our state-of-the-art storage solutions ensure that your ingredients stay fresh and secure, preserving quality and taste for every culinary creation.</p>
          <p>With QuickSafe, savor the confidence of knowing your ingredients are always at their best, ready to inspire your next culinary masterpiece.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>To revolutionize kitchen storage with cutting-edge solutions that ensure the highest quality and freshness of ingredients. We aim to empower culinary enthusiasts by providing reliable and innovative storage options that inspire creativity in the kitchen. At QuickSafe, our goal is to enhance the joy of cooking by maintaining the integrity and flavor of every ingredient, fostering a culinary environment where excellence thrives.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>SAFETY:</b>
          <p>Keeping your ingredients fresh, secure, and ready for every culinary creation.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>QUALITY:</b>
          <p>Ensuring your ingredients are maintained at the highest standards for the best culinary results.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CUSTOMIZATION:</b>
          <p>Specifically crafted to match your culinary storage preferences.</p>
        </div>
      </div>
    </div>
  )
}

export default About
