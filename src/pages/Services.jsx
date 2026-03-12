import React from 'react'
import Header from '../components/common/Header'

export default function Services() {
  return (
    <>
    <Header/>
    <div>
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
                <p className="text-gray-600 text-lg mb-12">Explore our comprehensive range of services</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                            <div className="bg-blue-500 rounded-full w-12 h-12 mb-4"></div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Service {item}</h3>
                            <p className="text-gray-600">High-quality solutions tailored to meet your business needs and objectives.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}
