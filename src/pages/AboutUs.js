import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="container-fluid px-4">
                <h1 className='text-center mt-5 mb-3' style={{ color: " rgb(138, 2, 2)", fontWeight: "bold" }}>About</h1>
                <p>
                    Welcome to Life Saver, a compassionate initiative born from the collective desire to make a meaningful difference in people's lives through the simple act of blood donation. At Life Saver, we believe in the power of connection, empathy, and community support.
                </p>

                <h4 style={{ color: " rgb(138, 2, 2)", fontWeight: "bold" }}>Our Mission</h4>
                <p>
                    Our mission is straightforward yet profound: to bridge the gap between blood donors and those in urgent need. We strive to create a platform that facilitates quick and efficient connections, ensuring that no one faces a shortage of this life-saving resource in times of crisis.
                </p>

                <h4 style={{ color: " rgb(138, 2, 2)", fontWeight: "bold" }}>What Drives Us</h4>
                <p>
                    At the core of Life Saver is our unwavering commitment to saving lives. We recognize the critical importance of timely access to blood, and we're driven by the belief that everyone should have easy access to this vital resource when they need it the most. Every action we take, every feature we develop, is aimed at making the process of blood donation and retrieval as seamless and effective as possible.
                </p>

                <h4 style={{ color: " rgb(138, 2, 2)", fontWeight: "bold" }}>Features That Define Us</h4>
                <p>
                    Our website, built on the robust React framework, offers a user-friendly interface that empowers individuals to:
                </p>
                <div className='mx-3'>
                    <ul >
                        <li> <strong>Log In and Connect:</strong> Donors and recipients alike can securely log in to their accounts, fostering a trusted community.</li>
                        <li> <strong>Find Blood Donors:</strong> Users can easily locate willing blood donors within their vicinity, streamlining the process of donation.</li>
                        <li> <strong>Google Map Integration::</strong> The integration of Google Maps enables precise location tracking of donors, ensuring swift assistance.</li>
                        <li> <strong>Emergency Blood Requests:</strong> In moments of urgency, users can post for emergency blood needs, specifying the required blood group.</li>
                        <li> <strong>Event Advertise:</strong> Stay updated on ongoing blood donation drives and community events through our informative Event manager.</li>
                    </ul>
                </div>
                <h4 style={{ color: " rgb(138, 2, 2)", fontWeight: "bold" }}>Join Us in Making a Difference</h4>
                <p>
                    Life Saver isn't just a website; it's a collective effort fueled by the generosity and kindness of people like you. Whether you're considering becoming a donor, seeking assistance, or simply want to support our cause, we invite you to join our community dedicated to saving lives.
                </p>
                <br></br>
                <p>Thank you for being a part of Life Saver, where every donation is a lifeline, and every life saved is a testament to the strength of human compassion.</p>
            </div>
            <Footer/>
        </div>
    );
};

export default AboutUs;