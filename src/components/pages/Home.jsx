import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils/temp';
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, BarChart, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Static data
const personalInfo = {
    full_name: "Pratham Solanki",
    title: "Data Scientist & AI Specialist",
    bio: "Passionate about transforming data into actionable insights and building intelligent systems that drive business growth.",
    profile_image: "https://drive.google.com/file/d/1ivl8HPf18xyer15yXMwRq_F0mJ4NnqVT/view?usp=drive_link"
};

const featuredProjects = [
    {
        id: 1,
        title: "Customer Churn Prediction",
        description: "ML model predicting customer churn with 95% accuracy using advanced ensemble methods.",
        image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        technologies: ["Python", "Scikit-learn", "XGBoost"],
        featured: true
    },
    {
        id: 2,
        title: "Sales Forecasting Dashboard",
        description: "Interactive dashboard providing real-time sales insights and predictive analytics.",
        image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        technologies: ["Tableau", "Python", "SQL"],
        featured: true
    },
    {
        id: 3,
        title: "NLP Sentiment Analysis",
        description: "Deep learning model for analyzing customer sentiment from social media data.",
        image_url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
        technologies: ["TensorFlow", "BERT", "Python"],
        featured: true
    }
];

// Initial Hero Section - Just "Hello, I'm [Name]"
function InitialHero({ personalInfo }) {
    return (
        <div className="relative h-screen bg-gray-900 flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-900/20 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-900/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white">
                        <span className="block">Hello, I'm</span>
                        <span className="block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mt-4">
                            {personalInfo.full_name}
                        </span>
                    </h1>
                </motion.div>
            </div>
        </div>
    );
}

// Professional Details Section
function ProfessionalSection({ personalInfo }) {
    return (
        <div className="relative min-h-screen bg-gray-950 flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-teal-900/10 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-cyan-900/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        {personalInfo.title}
                    </h2>
                    <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                        {personalInfo.bio}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button asChild size="lg" className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-teal-900/20">
                            <Link to={createPageUrl('Projects')}>
                                View My Work <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-teal-500 text-teal-400 hover:bg-teal-500/10 hover:text-teal-300 font-bold px-8 py-4 rounded-full">
                            <Link to={createPageUrl('Contact')}>
                                Get In Touch
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

// Profile Image Section
function ProfileImageSection({ personalInfo }) {
    if (!personalInfo.profile_image) return null;

    return (
        <section className="py-24 bg-gray-900">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
            >
                <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full blur opacity-40 animate-pulse"></div>
                    <img 
                        src={personalInfo.profile_image} 
                        alt={personalInfo.full_name} 
                        className="relative rounded-full w-60 h-60 sm:w-80 sm:h-80 object-cover border-4 border-gray-800 shadow-2xl"
                    />
                </div>
            </motion.div>
        </section>
    );
}

// Featured Projects Component
function FeaturedProjects({ projects }) {
    return (
        <section className="py-24 bg-gray-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Explore some of my most impactful work in data science and machine learning
                    </p>
                </motion.div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="group overflow-hidden hover:shadow-2xl hover:shadow-teal-900/20 transition-all duration-300 border-gray-700 shadow-lg bg-gray-800 text-white">
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={project.image_url} 
                                        alt={project.title} 
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-xl text-white mb-2 group-hover:text-teal-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies?.slice(0, 3).map(tech => (
                                            <span key={tech} className="bg-teal-900/50 text-teal-300 text-xs font-medium px-2.5 py-1 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <Link 
                                        to={createPageUrl(`ProjectDetails?id=${project.id}`)} 
                                        className="text-teal-400 hover:text-teal-300 font-medium inline-flex items-center gap-2"
                                    >
                                        Learn More <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <Button asChild variant="outline" size="lg" className="border-teal-500 text-teal-400 hover:bg-teal-500/10 hover:text-teal-300 font-bold px-8 py-3 rounded-full">
                        <Link to={createPageUrl('Projects')}>
                            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

// Core Competencies Component
function CoreCompetencies() {
    const competencies = [
        { 
            title: "Machine Learning", 
            description: "Building predictive models and intelligent algorithms that solve complex business problems.", 
            icon: BrainCircuit,
            color: "from-teal-500 to-cyan-500"
        },
        { 
            title: "Data Visualization", 
            description: "Creating compelling and interactive dashboards that tell meaningful stories.", 
            icon: BarChart,
            color: "from-blue-500 to-sky-500"
        },
        { 
            title: "Data Engineering", 
            description: "Designing scalable data pipelines and robust storage architectures.", 
            icon: Database,
            color: "from-emerald-500 to-green-500"
        },
    ];

    return (
        <section className="py-24 bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Core Competencies</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Areas where I excel and deliver exceptional results
                    </p>
                </motion.div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {competencies.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="text-center p-8 hover:shadow-xl hover:shadow-teal-900/20 transition-all duration-300 border-gray-700 shadow-lg bg-gray-800 text-white group">
                                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function HomePage() {
    return (
        <div>
            <InitialHero personalInfo={personalInfo} />
            <ProfessionalSection personalInfo={personalInfo} />
            <ProfileImageSection personalInfo={personalInfo} />
            <FeaturedProjects projects={featuredProjects} />
            <CoreCompetencies />
        </div>
    );
}