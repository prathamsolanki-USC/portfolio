import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils/temp';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Github } from 'lucide-react';

// Static projects data
const projects = [
    {
        id: 1,
        title: "Customer Churn Prediction",
        description: "ML model predicting customer churn with 95% accuracy using advanced ensemble methods.",
        image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
        github_url: "https://github.com"
    },
    {
        id: 2,
        title: "Sales Forecasting Dashboard",
        description: "Interactive dashboard providing real-time sales insights and predictive analytics.",
        image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        technologies: ["Tableau", "Python", "SQL", "PostgreSQL"],
        github_url: "https://github.com"
    },
    {
        id: 3,
        title: "NLP Sentiment Analysis",
        description: "Deep learning model for analyzing customer sentiment from social media data.",
        image_url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
        technologies: ["TensorFlow", "BERT", "Python", "Flask"],
        github_url: "https://github.com"
    },
    {
        id: 4,
        title: "Fraud Detection System",
        description: "Real-time fraud detection system using machine learning and anomaly detection.",
        image_url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
        technologies: ["Python", "Apache Kafka", "Redis", "Docker"],
        github_url: "https://github.com"
    },
    {
        id: 5,
        title: "Supply Chain Optimization",
        description: "AI-powered supply chain optimization reducing costs by 20% through predictive analytics.",
        image_url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
        technologies: ["R", "Shiny", "OptaPlanner", "MongoDB"],
        github_url: "https://github.com"
    },
    {
        id: 6,
        title: "Image Recognition API",
        description: "Computer vision API for product classification with 98% accuracy using CNN models.",
        image_url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
        technologies: ["PyTorch", "FastAPI", "Docker", "AWS"],
        github_url: "https://github.com"
    }
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden group hover:shadow-2xl hover:shadow-teal-900/20 transition-all duration-300 border-gray-700 shadow-lg bg-gray-800 text-white">
        <div className="relative overflow-hidden">
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies?.slice(0, 4).map(tech => (
              <span key={tech} className="bg-gray-700 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <Button asChild variant="outline" size="sm" className="flex-1 border-teal-500 text-teal-400 hover:bg-teal-500/10 hover:text-teal-300">
              <Link to={createPageUrl(`ProjectDetails?id=${project.id}`)}>
                View Details <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {project.github_url && (
              <Button asChild variant="ghost" size="sm" className="text-gray-400 hover:text-teal-400">
                <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-gray-950">
            <div className="bg-gray-900 py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl font-extrabold text-white mb-4">My Projects</h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            A showcase of my work in data science, machine learning, and software development
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}