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

import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Doctors = () => {

  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])
  return (
    <div>
      <p className='text-gray-600'>Browse through the chefs specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'Chef' ? navigate('/chef') : navigate('/chef/Chef')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Chef' ? 'bg-primary text-black ' : ''}`}>Chef</p>
          <p onClick={() => speciality === 'Classes' ? navigate('/chef') : navigate('/chef/Classes')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Classes' ? 'bg-primary text-black ' : ''}`}>Classes</p>
          <p onClick={() => speciality === 'Testing' ? navigate('/chef') : navigate('/chef/Testing')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Testing' ? 'bg-primary text-black ' : ''}`}>Testing</p>
          <p onClick={() => speciality === 'Nutrition' ? navigate('/chef') : navigate('/chef/Nutrition')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Nutrition' ? 'bg-primary text-black ' : ''}`}>Nutrition</p>
          <p onClick={() => speciality === 'Recipes' ? navigate('/chef') : navigate('/chef/Recipes')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Recipes' ? 'bg-primary text-black ' : ''}`}>Recipes</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6' >
          {
            filterDoc.map((item, index) => (
              <div onClick={() => navigate(`/booking/${item._id}`)} className='border border-yellow-800 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-primary' src={item.image} alt="" />
                <div className='p-4'>
                  <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-red-500'} `}>
                    <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-red-500'}  rounded-full`}></p><p>{item.available ? 'Available' : 'Not Available'}</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors
