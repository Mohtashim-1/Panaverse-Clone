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
        <div className='mt-10 flex gap-x-4 gap-y-8'>
          {/* Content Left */}
          <div className='bg-white basis-8/12 rounded-xl shadow-xl border border-slade-200 py-8 px-8'>
            <h4 className='text-teal-600 text-lg'>Specialized Program</h4>
            <h3 className='text-2xl font-bold'>Web 3.0 (Blockchain) and Metaverse Specialization</h3>
            <p className='text-lg text-slate-600 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nemo aut repellat quas commodi omnis dolores, eveniet quam temporibus hic quo tempora sint praesentium magni consequatur dolore accusamus, qui unde!</p>
            <button className='text-teal-700 text-xl mt-8 underline flex gap-x-2 items-center'>Learn More
              <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2" />
              </svg>

            </button>
            <div className='flex gap-4 mt-8'>
              <QuarterBox description={"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"}
                number={4}
                header={"Quarter IV"}
                haveBorder={false} />

              <QuarterBox description={"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"}
                number={5}
                header={"Quarter V"}
                haveBorder={false} />
            </div>
          </div>
          {/* Content Right */}
          <div className='px-4 flex basis-4/12 py-6 bg-slate-100 gap-x-3'>
            <div className='w-20 h-16 rounded bg-red-300'></div>
            <div>
              <h4 className=' text-primary'>Specialized Program</h4>
              <h3>Web 3.0 (Blockchain) and Metaverse Specialization</h3>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default SpecializedTrack