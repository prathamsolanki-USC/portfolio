import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Static data
const personalInfo = {
    email: "alex.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    availability: "available",
    social_links: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
    }
};

export default function ContactPage() {
    const [formState, setFormState] = React.useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitMessage, setSubmitMessage] = React.useState('');

    const handleInputChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        // Simulate form submission
        setTimeout(() => {
            setSubmitMessage("Thank you for your message! I'll get back to you soon.");
            setFormState({ name: '', email: '', message: '' });
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gray-950 text-gray-200">
            {/* Hero Section */}
            <div className="bg-gray-900 py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl font-extrabold text-white mb-4">Let's Connect</h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            I'm always open to discussing new opportunities and interesting projects.
                            Currently <span className="text-teal-400 font-semibold">{personalInfo.availability}</span> for new collaborations.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Whether you have a project in mind, want to discuss opportunities, or just want to say hello,
                                I'd love to hear from you. Let's create something amazing together!
                            </p>
                        </div>

                        <div className="space-y-6">
                            <Card className="border-gray-700 shadow-lg bg-gray-800">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full flex items-center justify-center">
                                            <Mail className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">Email</h3>
                                            <a href={`mailto:${personalInfo.email}`} className="text-teal-400 hover:text-teal-300 transition-colors">
                                                {personalInfo.email}
                                            </a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-gray-700 shadow-lg bg-gray-800">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                                            <Phone className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">Phone</h3>
                                            <p className="text-gray-400">{personalInfo.phone}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-gray-700 shadow-lg bg-gray-800">
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                                            <MapPin className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">Location</h3>
                                            <p className="text-gray-400">{personalInfo.location}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-4">
                            <a href={personalInfo.social_links.github} target="_blank" rel="noopener noreferrer"
                               className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                                <Github className="h-6 w-6 text-white" />
                            </a>
                            <a href={personalInfo.social_links.linkedin} target="_blank" rel="noopener noreferrer"
                               className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                                <Linkedin className="h-6 w-6 text-white" />
                            </a>
                            <a href={personalInfo.social_links.twitter} target="_blank" rel="noopener noreferrer"
                               className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                                <Twitter className="h-6 w-6 text-white" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Card className="border-gray-700 shadow-xl bg-gray-800">
                            <CardHeader>
                                <CardTitle className="text-2xl text-white">Send me a message</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                                        <Input
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            value={formState.message}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500 resize-none"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold py-3 rounded-lg shadow-lg shadow-teal-900/20"
                                    >
                                        {isSubmitting ? (
                                            'Sending...'
                                        ) : (
                                            <>
                                                <Send className="mr-2 h-5 w-5" /> Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                                {submitMessage && (
                                    <div className="mt-4 p-4 bg-teal-900/50 border border-teal-700 rounded-lg">
                                        <p className="text-teal-200 text-center">{submitMessage}</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}