import React from 'react'
import Header from '../components/common/Header'

export default function Cart() {
  return (
    <div>
        <Header/>
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
                        <div className="space-y-4">
                            {/* Cart Item */}
                            <div className="flex justify-between items-center border-b pb-4">
                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg">Product Name</h3>
                                    <p className="text-gray-600">Quantity: 1</p>
                                </div>
                                <span className="text-lg font-bold">$99.99</span>
                            </div>
                        </div>
                    </div>

                    {/* Cart Summary */}
                    <div className="bg-white rounded-lg shadow p-6 h-fit">
                        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                        <div className="space-y-3 text-gray-700 mb-4">
                            <div className="flex justify-between">
                                <span>Subtotal:</span>
                                <span>$99.99</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Tax:</span>
                                <span>$8.00</span>
                            </div>
                            <div className="border-t pt-3 flex justify-between font-bold text-lg">
                                <span>Total:</span>
                                <span>$107.99</span>
                            </div>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
