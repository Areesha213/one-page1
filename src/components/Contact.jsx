import React, { useState } from 'react';

function Contact() {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted with email:', email);
    };

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div className="container mx-auto">
            <div className='flex justify-evenly items-start'>
                <h1 className="text-5xl text-start text-gray-600">Sign up and get exclusive <br /> special deals</h1>
                <form onSubmit={handleSubmit} className="flex justify-center mt-8 ">
                    <input
                        className="w-75 h-25 px-4 mr-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="email"
                        
                        value={email}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 text-xl font-medium text-white bg-blue-600 rounded-r-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
