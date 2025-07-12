import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils/temp';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github, ExternalLink, Brain, BarChart3, Database, TrendingUp, Bot, Eye, Filter } from 'lucide-react';

// Enhanced projects data with data science focus
const projects = [
    {
        id: 1,
        title: "Swarm - Guard : Multimodal Misinformation Detection",
        description: "Built a robust detection system combining text, image, and graph data using BERT, ViT, and GraphSAGE encoders. Designed a TriModal fusion architecture to combat astroturfing and disinformation campaigns under extreme class imbalance.",
        image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        technologies: ["Python", "PyTorch", "Hugging Face", "BERT", "Vision Transformers", "GraphSAGE", "PEFT"],
        github_url: "https://github.com/prathamsolanki-USC/swarmguard",
        category: "deep_learning",
        impact: "81% F1-score on minority class(5%).",
        icon: Brain
    },
    {
        id: 2,
        title: "Scalable Data Pipeline for Oil Well Data",
        description: "Built a distributed data pipeline using Apache Spark and AWS EMR to extractf oil well data from PDFs, storing 400K+ structured records. Built a interactive Tableau dashboard to visualize trends and insights.",
        image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        technologies: ["Spark", "AWS EMR", "Tableau", "SQL", "AWS S3", "AWS Lambda", "Python"],
        github_url: "https://github.com/prathamsolanki-USC/Scalable-Data-Pipeline-for-Oil-Well-Data-Extraction",
        category: "data_visualization",
        impact: "Reduced manual data collection time by 70%, and increased query performance by 40%",
        complexity: "advanced",
        icon: BarChart3
    },
    {
        id: 3,
        title: "Cross Lingual Hate Speech Detection",
        description: "Built a cross-lingual hate speech detection system using XLM-RoBERTa with zero-shot learning. Integrated hate, offensive, and sentiment classification via multi-task learning, boosting performance on low-resource languages.",
        image_url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
        technologies: ["XLM-RoBERTa", "Hugging Face", "Python", "Pytorch"],
        github_url: "https://github.com/prathamsolanki-USC/Cross-Lingual-Hate-Speech-Detection",
        category: "machine_learning",
        impact: "Achieved a Macro F1 score of 0.79 on Hindi, outperforming baselines.",
        complexity: "expert",
        icon: Bot
    },
    {
        id: 4,
        title: "Financial Fraud Detection System",
        description: "Real-time anomaly detection system using unsupervised learning algorithms, preventing $2M+ in fraudulent transactions.",
        image_url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
        technologies: ["Python", "Isolation Forest", "Apache Kafka", "Docker", "Elasticsearch"],
        github_url: "https://github.com",
        category: "machine_learning",
        impact: "$2M+ fraud prevented",
        complexity: "advanced",
        icon: Eye
    },
    {
        id: 5,
        title: "Supply Chain Optimization Engine",
        description: "AI-powered optimization system reducing logistics costs by 20% through predictive demand forecasting and route optimization.",
        image_url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
        technologies: ["R", "OptaPlanner", "Shiny", "MongoDB", "Plotly"],
        github_url: "https://github.com",
        category: "optimization",
        impact: "20% cost reduction",
        complexity: "advanced",
        icon: TrendingUp
    },
    {
        id: 6,
        title: "Computer Vision Product Classifier",
        description: "CNN-based image recognition API achieving 98% accuracy in product categorization with real-time inference capabilities.",
        image_url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
        technologies: ["PyTorch", "FastAPI", "OpenCV", "Docker", "AWS Lambda"],
        github_url: "https://github.com",
        category: "computer_vision",
        impact: "98% classification accuracy",
        complexity: "expert",
        icon: Eye
    }
];

const categories = {
    all: { name: "All Projects", color: "bg-gray-600" },
    machine_learning: { name: "Machine Learning", color: "bg-blue-600" },
    deep_learning: { name: "Deep Learning", color: "bg-purple-600" },
    data_visualization: { name: "Data Visualization", color: "bg-green-600" },
    computer_vision: { name: "Computer Vision", color: "bg-orange-600" },
    optimization: { name: "Optimization", color: "bg-teal-600" }
};

function ProjectCard({ project, index }) {
    const Icon = project.icon;
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <Card className="group overflow-hidden hover:shadow-2xl hover:shadow-teal-900/30 transition-all duration-500 bg-gradient-to-br from-gray-800 to-gray-900 text-white hover:-translate-y-2">
                <div className="relative overflow-hidden">
                    <img 
                        src={project.image_url} 
                        alt={project.title} 
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                            <Icon className="h-6 w-6 text-white" />
                        </div>
                    </div>
                    <div className="absolute top-4 right-4">
                        <Badge className={`${categories[project.category]?.color} text-white font-medium`}>
                            {categories[project.category]?.name}
                        </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
                            <TrendingUp className="h-4 w-4" />
                            {project.impact}
                        </div>
                    </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors line-clamp-2">
                            {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.technologies?.slice(0, 4).map(tech => (
                            <span key={tech} className="bg-gray-700/70 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-600">
                                {tech}
                            </span>
                        ))}
                        {project.technologies?.length > 4 && (
                            <span className="bg-teal-900/50 text-teal-300 text-xs font-medium px-2.5 py-1 rounded-full">
                                +{project.technologies.length - 4} more
                            </span>
                        )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                        <div className="flex gap-2">
                            {project.live_url && (
                                <Button asChild variant="ghost" size="sm" className="text-teal-400 hover:text-teal-300 hover:bg-teal-400/10 p-2">
                                    <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                </Button>
                            )}
                            {project.github_url && (
                                <Button asChild variant="ghost" size="sm" className="text-gray-400 hover:text-gray-300 hover:bg-gray-700 p-2">
                                    <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                                        <Github className="h-4 w-4" />
                                    </a>
                                </Button>
                            )}
                        </div>
                        <Button asChild variant="outline" size="sm" className="border-teal-500/50 text-teal-400 hover:bg-teal-500/10 hover:text-teal-300 hover:border-teal-500">
                            <Link to={createPageUrl(`ProjectDetails?id=${project.id}`)}>
                                Details <ArrowRight className="ml-1 h-3 w-3" />
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}

function CategoryFilter({ selectedCategory, onCategoryChange }) {
    return (
        <div className="flex flex-wrap gap-3 justify-center mb-12">
            {Object.entries(categories).map(([key, category]) => (
                <Button
                    key={key}
                    onClick={() => onCategoryChange(key)}
                    variant={selectedCategory === key ? "default" : "outline"}
                    className={`${
                        selectedCategory === key 
                            ? `${category.color} text-white border-transparent` 
                            : "border-gray-600 text-gray-300 hover:text-white hover:border-teal-500"
                    } transition-all duration-300`}
                >
                    {category.name}
                </Button>
            ))}
        </div>
    );
}

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    
    const filteredProjects = selectedCategory === 'all' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
            {/* Hero Section */}
            <div className="relative bg-gray-900/50 py-24 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-teal-900/20 rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-900/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
                </div>
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl">
                                <Database className="h-8 w-8 text-white" />
                            </div>
                            <h1 className="text-5xl font-extrabold text-white">Data Science Portfolio</h1>
                        </div>
                        <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                            Transforming complex data into actionable insights through advanced machine learning, 
                            deep learning, and statistical analysis. Each project represents a real-world solution 
                            with measurable business impact.
                        </p>
                        <div className="flex items-center justify-center gap-8 mt-8 text-sm">
                            <div className="flex items-center gap-2 text-teal-400">
                                <Brain className="h-5 w-5" />
                                <span className="font-semibold">Machine Learning</span>
                            </div>
                            <div className="flex items-center gap-2 text-cyan-400">
                                <BarChart3 className="h-5 w-5" />
                                <span className="font-semibold">Data Visualization</span>
                            </div>
                            <div className="flex items-center gap-2 text-blue-400">
                                <Bot className="h-5 w-5" />
                                <span className="font-semibold">AI Solutions</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* All Projects Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                        <Filter className="text-teal-400" />
                        All Projects
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Filter by category to explore specific areas of expertise
                    </p>
                    <CategoryFilter 
                        selectedCategory={selectedCategory} 
                        onCategoryChange={setSelectedCategory} 
                    />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-400 text-lg">No projects found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
}