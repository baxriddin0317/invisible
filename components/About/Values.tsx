import React from 'react'

export const Values = () => {
  return (
    <section className="max-w-xxl mx-auto text-center px-4 mt-10 lg:mt-16">
      <h4 className="text-brand-gray-200 font-bold uppercase tracking-widest">our values</h4>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 lg:mt-8">
        <div className="bg-white rounded-lg space-y-2 lg:space-y-4 p-4 lg:p-6">
          <h5 className="text-xl">Human-centric</h5>
          <p>We place human-centric designs at heart of our value creation.</p>
        </div>
        <div className="bg-white rounded-lg space-y-2 lg:space-y-4 p-4 lg:p-6">
          <h5 className="text-xl">Practicality</h5>
          <p>Ethics and Integrity is the foundation of our business.</p>
        </div>
        <div className="bg-white rounded-lg space-y-2 lg:space-y-4 p-4 lg:p-6">
          <h5 className="text-xl">Practicality</h5>
          <p>We provide practical and quality solutions to real-world problems.</p>
        </div>
        <div className="bg-white rounded-lg space-y-2 lg:space-y-4 p-4 lg:p-6">
          <h5 className="text-xl">Creativity</h5>
          <p>Great ideas can come from anywhere. Start looking.</p>
        </div>
      </div>
    </section>
  )
}
