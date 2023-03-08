import React from 'react'

export default function Contact() {
  return (
    <div id="contact" className=" py-6">
        <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-xl">
            <div className="md:flex">
            <div className="w-full px-4 py-5 md:w-1/2">
                <div className="mb-5">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="bg-gray-100 border-2 border-gray-400 rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="John Doe" />
                </div>
                <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="bg-gray-100 border-2 border-gray-400 rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="john.doe@example.com" />
                </div>
                <div className="mb-5">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" name="message" className="bg-gray-100 border-2 border-gray-400 rounded-lg py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" rows="4" placeholder="Enter your message here"></textarea>
                </div>
                <button className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Send</button>
            </div>
            <div className="w-full px-4 py-5 md:w-1/2">
                <div className="mb-5">
                    <h2 className="text-xl font-bold mb-2">Our Address</h2>
                    <p className="text-gray-700">123 Main St, Anytown USA</p>
                </div>
                <div className="mb-5">
                    <h2 className="text-xl font-bold mb-2">Phone Number</h2>
                    <p className="text-gray-700">(123) 456-7890</p>
                </div>
                <div className="mb-5">
                    <h2 className="text-xl font-bold mb-2">Email</h2>
                    <p className="text-gray-700">info@example.com</p>
                </div>
                <div className="mb-5">
                    <h2 className="text-xl font-bold mb-2">Social Media</h2>
                <div className="flex">
                    <a href="#" className="mr-4 text-blue-600 hover:text-blue-700 focus:text-blue-700" target="_blank" rel="noreferrer"><i className="fab fa-twitter fa-2x"></i></a>
                    <a href="#" className="mr-4 text-blue-600 hover:text-blue-700 focus:text-blue-700" target="_blank" rel="noreferrer"><i className="fab fa-facebook fa-2x"></i></a>
                    <a href="#" className="mr-4 text-blue-600 hover:text-blue-700 focus:text-blue-700" target="_blank" rel="noreferrer"><i className="fab fa-instagram fa-2x"></i></a>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
);
}

