import React, { useState } from 'react';
import Section from './Section';
import { SOCIAL_LINKS } from '../constants';

// A reusable modal component for displaying submission status
const StatusModal = ({ message, onClose, type }: { message: string, onClose: () => void, type: 'success' | 'error' }) => {
    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="bg-white rounded-lg shadow-2xl w-full max-w-sm text-center p-8"
                onClick={(e) => e.stopPropagation()}
            >
                <div className={`mx-auto flex items-center justify-center h-12 w-12 rounded-full ${type === 'success' ? 'bg-green-100' : 'bg-red-100'}`}>
                    {type === 'success' ? (
                        <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    ) : (
                        <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                    )}
                </div>
                <p className="mt-4 text-lg font-medium text-slate-700">{message}</p>
                <button 
                    onClick={onClose}
                    className="mt-6 w-full bg-sky-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                >
                    OK
                </button>
            </div>
        </div>
    );
};


const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting'>('idle');
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
    const [modalState, setModalState] = useState<{ isOpen: boolean; message: string; type: 'success' | 'error' | null }>({
        isOpen: false,
        message: '',
        type: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors: { name?: string; email?: string; message?: string } = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                newErrors.email = 'Please enter a valid email address.';
            }
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required.';
        return newErrors;
    };

    const handleCloseModal = () => {
        if (modalState.type === 'success') {
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
        }
        setModalState({ isOpen: false, message: '', type: null });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        
        if (Object.keys(validationErrors).length > 0) {
            return;
        }
        
        setStatus('submitting');

        try {
            const response = await fetch('https://formspree.io/f/xldoqdaz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setModalState({ 
                    isOpen: true, 
                    type: 'success', 
                    message: '✅ Message sent successfully! Thank you for reaching out — I’ll get back to you soon.' 
                });
            } else {
                setModalState({
                    isOpen: true,
                    type: 'error',
                    message: '⚠️ Something went wrong. Please try again later.'
                });
            }
        } catch (error) {
            setModalState({
                isOpen: true,
                type: 'error',
                message: '⚠️ Something went wrong. Please try again later.'
            });
        } finally {
            setStatus('idle');
        }
    };
    
    const socialLinks = [
        { name: 'LinkedIn', url: SOCIAL_LINKS.linkedin, icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg> },
        { name: 'GitHub', url: SOCIAL_LINKS.github, icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> }
    ];

    return (
        <>
            {modalState.isOpen && modalState.type && (
                <StatusModal 
                    message={modalState.message} 
                    type={modalState.type}
                    onClose={handleCloseModal} 
                />
            )}
            <Section id="contact" title="Let's Connect & Collaborate">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <p className="text-lg text-slate-600">
                            Have a project idea or collaboration in mind? I’d love to connect and create something impactful together. Feel free to reach out via email or the contact form.
                        </p>
                        <div className="space-y-4">
                            <a href="mailto:jashgohil1804@email.com" className="flex items-center gap-3 text-slate-600 hover:text-sky-600 transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <span>jashgohil1804@email.com</span>
                            </a>
                            <div className="flex items-center gap-3 text-slate-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <span>Nashik, Maharashtra, India</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 pt-4">
                        {socialLinks.map(link => (
                            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-600 transition-colors duration-300">
                                    {link.icon}
                                    <span className="sr-only">{link.name}</span>
                            </a>
                        ))}
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="bg-white p-8 rounded-lg shadow-md space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-600">Name</label>
                            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" />
                            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-600">Email</label>
                            <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500" />
                            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-600">Message</label>
                            <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"></textarea>
                            {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
                        </div>
                        <button type="submit" disabled={status === 'submitting'} className="w-full bg-sky-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors duration-300 shadow-sm hover:shadow-md disabled:bg-sky-300 disabled:cursor-not-allowed">
                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </Section>
        </>
    );
};

export default Contact;