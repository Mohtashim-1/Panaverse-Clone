import React from 'react'
import Wrapper from '@/Compoenents/Shared/Wrapper'
import QuarterBox from '../Shared/QuarterBox'

export const data = [
  {
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    quarters: [
      {
        header: "Quarter IV",
        description: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps"
      }, {
        header: "Quarter V",
        description: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences"
      }
    ]
  }, {
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    quarters: [
      {
        header: "Quarter IV",
        description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming"
      }, {
        header: "Quarter V",
        description: "AI-361: Deep Learning and MLOps"
      }
    ]

  }
  , {
    header: "Cloud-Native Computing Specialization",
    description: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    quarters: [
      {
        header: "Quarter IV",
        description: "CN-351: Certified Kubernetes Application Developer (CKAD)"
      }, {
        header: "Quarter V",
        description: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform"
      }
    ]

  }, {
    header: "Ambient Computing and IoT Specialization",
    description: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    quarters: [
      {
        header: "Quarter IV",
        description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices"
      }, {
        header: "Quarter V",
        description: "AC-361: Embedded Programming using C and Rust"
      }
    ]

  }, {
    header: "Genomics and Bioinformatics Specialization",
    description: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    quarters: [
      {
        header: "Quarter IV",
        description: "Bio-351: Python for Biologists"
      }, {
        header: "Quarter V",
        description: "Bio-361: Bioinformatics with Python"
      }
    ]

  }, {
    header: "Network Programmability and Automation Specialization",
    description: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    quarters: [
      {
        header: "Quarter IV",
        description: "NPA-351: CCNA 200-301 Certification"
      }, {
        header: "Quarter V",
        description: "NPA-361: Network Programmability and Automation"
      }
    ]

  }
]
const SpecializedTrack = () => {
  return (
    <section>
      <Wrapper>
        {/* Header */}
        <div>

          <h2 className="text-4xl font-bold whitespace-pre-line">Specialized Tracks:</h2>
          <p className="mt-6 text-xl text-slate-600 max-w-screen-sm">
            After completing the first three quarters the participants will select <br /> one or more specializations consisting of two courses each:
          </p>
        </div>
        <div className='mt-10 flex gap-x-4 gap-y-8'>
          {/* Content Left */}
          <div className='bg-white basis-8/12 rounded-xl shadow-xl border border-slade-200 py-8 px-8'>
            <h4 className=' text-primary text-lg font-medium'>Specialized Program</h4>
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

          <div className=' bg-slate-100 px-4 py-6 basis-4/12 cursor-pointer'>
            {/* Element 01 */}
            <div className='flex  items-center gap-x-3'>
              <div className='w-20 h-16 rounded bg-red-300 '></div>
              <div>
                <h4 className=' text-primary font-medium'>Specialized Program</h4>
                <h3 className='text-xl font-semibold'>Web 3.0 (Blockchain) and Metaverse Specialization</h3>
              </div>
            </div>
            {/* Element 02 */}
            <div className='flex  items-center gap-x-3'>
              <div className='w-20 h-16 rounded bg-red-300 '></div>
              <div>
                <h4 className=' text-primary font-medium'>Specialized Program</h4>
                <h3 className='text-xl font-semibold'>Web 3.0 (Blockchain) and Metaverse Specialization</h3>
              </div>
            </div>
          </div>
        </div>


      </Wrapper>
    </section>
  )
}

export default SpecializedTrack