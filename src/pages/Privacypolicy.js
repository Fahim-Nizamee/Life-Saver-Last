import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacypolicy = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="container-fluid px-4">
                <h1 className='text-center mt-5 mb-3' style={{ color: " rgb(138, 2, 2)", fontWeight: "bold" }}>Privacy Policy</h1>
                <p>
                    At Life Saver, we are committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, disclose, and manage your personal information when you use our website.
                </p>


                <h4 style={{ color: " rgb(138, 2, 2)", fontWeight: "bold" }}>Information We Collect</h4>

                <div className='mx-3'>
                    <ul >
                        <li> <strong>Personal Information:</strong> When you register on our website or use our services, we may collect personal information such as your name, email address, contact information, and blood type.</li>
                        <li> <strong>Usage Data:</strong> We may collect information about how you interact with our website, including IP addresses, browser information, pages visited, and timestamps.</li>
                    </ul>
                </div>
                <h4 style={{ color: " rgb(138, 2, 2)", fontWeight: "bold" }}>How We Use Your Information</h4>
                <div className='mx-3'>
                    <ul >
                        <li> <strong>To Facilitate Blood Donations: </strong> When you register on our website or use our services, we may collect personal information such as your name, email address, contact information, and blood type.Your information may be used to connect potential blood donors with individuals in need of blood donations.</li>
                        <li> <strong>Communication: </strong> We may use your contact information to send you important updates, notifications about blood donation camps, or respond to your inquiries.</li>
                        <li> <strong>Improvement of Services: </strong>  Your data helps us analyze usage patterns and improve the functionality and user experience of our website.</li>
                    </ul>
                </div>

                <h4 style={{ color: " rgb(138, 2, 2)", fontWeight: "bold" }}>Data Security</h4>
                <div className='mx-3'>
                    <ul >
                        <li>We employ industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</li>
                        <li>While we take every reasonable precaution to protect your data, no method of transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security.</li>
                    </ul>
                </div>

                <h4 style={{ color: " rgb(138, 2, 2)", fontWeight: "bold" }}>Disclosure of Information</h4>
                <div className='mx-3'>
                    <ul >
                        <li>We do not sell, trade, or transfer your personal information to third parties without your consent, except as required by law or to facilitate the blood donation process.</li>
                    </ul>
                </div>

                <h4 style={{ color: " rgb(138, 2, 2)", fontWeight: "bold" }}>Your Choices</h4>
                <div className='mx-3'>
                    <ul >
                        <li>You have the right to access, update, or delete your personal information stored on our platform. You can do so by accessing your account settings or contacting us directly.</li>
                        <li>You can choose not to provide certain information, but this may limit your ability to fully utilize our services.</li>
                    </ul>
                </div>

                <h4 style={{ color: " rgb(138, 2, 2)", fontWeight: "bold" }}>Third-Party Links</h4>
                <div className='mx-3'>
                    <ul >
                        <li>Our website may contain links to third-party websites or services. Please note that we are not responsible for the privacy practices or content of these external sites.</li>
                    </ul>
                </div>

                <h4 style={{ color: " rgb(138, 2, 2)", fontWeight: "bold" }}>Policy Updates</h4>
                <div className='mx-3'>
                    <ul >
                        <li>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be reflected on this page, and it is your responsibility to review this page periodically.</li>
                    </ul>
                </div>
                <br></br>

            </div>
            <Footer />
        </div>
    );
};

export default Privacypolicy;