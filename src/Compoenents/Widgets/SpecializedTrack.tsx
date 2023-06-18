import React from 'react'
import Wrapper from '@/Compoenents/Shared/Wrapper'
import QuarterBox from '../Shared/QuarterBox'

const SpecializedTrack = () => {
  return (
    <section>
      <Wrapper>
        {/* Header */}
        <div>

          <h2 className="text-4xl font-bold whitespace-pre-line">Specialized Tracks:</h2>
          <p className="mt-6 text-xl text-slate-600">
            After completing the first three quarters the participants will select <br /> one or more specializations consisting of two courses each:
          </p>
        </div>
        <div className='mt-10 '>
          {/* Content Left */}
          <div className='bg-white rounded-xl shadow-xl border border-slade-200 py-8 px-8'>
            <h4 className='text-teal-600 text-lg'>Specialized Program</h4>
            <h3 className='text-2xl font-bold'>Web 3.0 (Blockchain) and Metaverse Specialization</h3>
            <p className='text-lg text-slate-600 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nemo aut repellat quas commodi omnis dolores, eveniet quam temporibus hic quo tempora sint praesentium magni consequatur dolore accusamus, qui unde!</p>
            <button className='text-teal-700 text-xl mt-8 underline flex gap-x-2 items-center'>Learn More
              <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2" />
              </svg>

            </button>
            <div>
              <QuarterBox description={ } header={ } number={ } haveBorder={false} />
            </div>
          </div>
          {/* Content Right */}
        </div>
      </Wrapper>
    </section>
  )
}

export default SpecializedTrack