                  import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils/temp';
import { ArrowLeft, Github, ExternalLink, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Static project details data
const projectDetails = {
    1: {
        id: 1,
        title: "Customer Churn Prediction",
        description: "ML model predicting customer churn with 95% accuracy using advanced ensemble methods.",
        detailed_description: "This comprehensive machine learning project focuses on predicting customer churn using advanced ensemble methods and feature engineering techniques. The model achieves 95% accuracy by combining multiple algorithms including Random Forest, XGBoost, and Neural Networks.\n\nKey features include:\n• Advanced feature engineering with over 50+ behavioral and demographic features\n• Real-time prediction capabilities through REST API\n• Comprehensive model interpretability using SHAP values\n• A/B testing framework for model validation\n• Automated retraining pipeline for model drift detection\n\nThe solution has been deployed in production and has helped reduce customer churn by 25%, resulting in significant revenue retention for the business.",
        image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Flask", "Docker", "AWS"],
        github_url: "https://github.com",
        live_url: "https://demo.example.com",
        year: 2023,
        duration: "4 months",
        client: "TechCorp Solutions"
    },
    2: {
        id: 2,
        title: "Sales Forecasting Dashboard",
        description: "Interactive dashboard providing real-time sales insights and predictive analytics.",
        detailed_description: "An interactive business intelligence dashboard that provides real-time sales insights and accurate forecasting capabilities. Built using modern visualization techniques and time series analysis.\n\nCore capabilities:\n• Real-time sales data visualization with interactive charts\n• Time series forecasting using ARIMA and Prophet models\n• Drill-down capabilities for regional and product-level analysis\n• Automated anomaly detection for unusual sales patterns\n• Mobile-responsive design for on-the-go access\n• Integration with multiple data sources (CRM, ERP, Marketing platforms)\n\nThe dashboard has become an essential tool for the sales team, improving forecast accuracy by 40% and enabling data-driven decision making across the organization.",
        image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        technologies: ["Tableau", "Python", "SQL", "PostgreSQL", "Apache Airflow"],
        github_url: "https://github.com",
        live_url: "https://dashboard.example.com",
        year: 2023,
        duration: "3 months",
        client: "Analytics Pro"
    },
    3: {
        id: 3,
        title: "NLP Sentiment Analysis",
        description: "Deep learning model for analyzing customer sentiment from social media data.",
        detailed_description: "A sophisticated natural language processing system designed to analyze customer sentiment from social media data using state-of-the-art deep learning techniques.\n\nTechnical highlights:\n• Fine-tuned BERT model for domain-specific sentiment classification\n• Multi-language support (English, Spanish, French)\n• Real-time processing of social media streams\n• Aspect-based sentiment analysis for detailed insights\n• Custom preprocessing pipeline for social media text\n• RESTful API for easy integration\n• Comprehensive evaluation metrics and bias detection\n\nThe system processes over 10,000 social media posts daily and provides actionable insights that have helped improve customer satisfaction scores by 30%.",
        image_url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
        technologies: ["TensorFlow", "BERT", "Python", "Flask", "Redis", "Docker"],
        github_url: "https://github.com",
        year: 2022,
        duration: "5 months",
        client: "StartupXYZ"
    }
};

export default function ProjectDetailsPage() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const projectId = searchParams.get('id');
    const project = projectDetails[projectId];

    if (!project) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
                <div className="text-center">
                    <h1 className="text-2xl mb-4">Project not found</h1>
                    <Link to={createPageUrl('Projects')} className="text-teal-400 hover:text-teal-300">
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="py-20 sm:py-24 bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <Button asChild variant="ghost" className="mb-8 text-teal-400 hover:text-teal-300 hover:bg-teal-400/10">
                            <Link to={createPageUrl('Projects')}>
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                            </Link>
                        </Button>
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">{project.title}</h1>
                        <p className="mt-4 text-lg text-gray-400">{project.description}</p>

                        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-400">
                             <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-teal-400" /><span>{project.year}</span></div>
                             <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-teal-400" /><span>{project.duration}</span></div>
                             {project.client && <div className="flex items-center gap-2 text-white"><strong>Client:</strong> {project.client}</div>}
                        </div>

                        <div className="mt-8 flex gap-4">
                            {project.live_url && <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white"><a href={project.live_url} target="_blank" rel="noopener noreferrer"><ExternalLink className="mr-2 h-4 w-4" />Live Demo</a></Button>}
                            {project.github_url && <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"><a href={project.github_url} target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-4 w-4" />View Code</a></Button>}
                        </div>

                        <img src={project.image_url} alt={project.title} className="my-12 rounded-lg shadow-2xl shadow-teal-900/20" />

                        <div className="prose prose-invert prose-lg max-w-none text-gray-300 prose-headings:text-white prose-a:text-teal-400 prose-strong:text-white">
                            <div dangerouslySetInnerHTML={{ __html: project.detailed_description?.replace(/\n/g, '<br />') }} />
                        </div>

                        <div className="mt-12">
                            <h3 className="text-2xl font-bold text-white mb-4">Technologies Used</h3>
                            <div className="flex flex-wrap gap-3">
                                {project.technologies?.map(tech => (
                                    <span key={tech} className="bg-gray-700 text-gray-300 text-sm font-medium px-3 py-1.5 rounded-full">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}