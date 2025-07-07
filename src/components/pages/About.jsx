import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Code, Database, Zap, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Static data
const personalInfo = {
    title: "Data Scientist & AI Specialist",
    about: "I'm a passionate data scientist with over 5 years of experience in transforming complex data into actionable business insights. My expertise spans machine learning, deep learning, and statistical analysis, with a strong focus on building scalable AI solutions that drive real business value. I thrive on solving challenging problems and turning data-driven insights into strategic advantages."
};

const experiences = [
    {
        id: 1,
        position: "Senior Data Scientist",
        company: "TechCorp Solutions",
        location: "San Francisco, CA",
        start_date: "2022-01-01",
        current: true,
        description: "Leading machine learning initiatives and building predictive models that drive business growth. Responsible for end-to-end ML pipeline development and deployment.",
        achievements: [
            "Developed customer churn prediction model reducing churn by 25%",
            "Built real-time recommendation system increasing revenue by 15%",
            "Led team of 3 junior data scientists"
        ],
        skills: ["Python", "TensorFlow", "AWS", "SQL", "Docker"],
        type: "full_time"
    },
    {
        id: 2,
        position: "Data Scientist",
        company: "Analytics Pro",
        location: "New York, NY",
        start_date: "2020-03-01",
        end_date: "2021-12-31",
        current: false,
        description: "Developed machine learning models for financial forecasting and risk assessment. Collaborated with cross-functional teams to implement data-driven solutions.",
        achievements: [
            "Created fraud detection system with 98% accuracy",
            "Automated reporting processes saving 20 hours/week",
            "Presented findings to C-level executives"
        ],
        skills: ["R", "Python", "Tableau", "PostgreSQL"],
        type: "full_time"
    },
    {
        id: 3,
        position: "Junior Data Analyst",
        company: "StartupXYZ",
        location: "Remote",
        start_date: "2019-06-01",
        end_date: "2020-02-29",
        current: false,
        description: "Performed statistical analysis and created visualizations to support business decisions. Maintained data pipelines and ensured data quality.",
        achievements: [
            "Improved data accuracy by 30% through quality checks",
            "Created executive dashboards used company-wide",
            "Completed advanced SQL and Python training"
        ],
        skills: ["SQL", "Python", "Excel", "Power BI"],
        type: "full_time"
    }
];

const skills = [
    { id: 1, name: "Python", category: "programming", proficiency: "expert" },
    { id: 2, name: "R", category: "programming", proficiency: "advanced" },
    { id: 3, name: "SQL", category: "programming", proficiency: "expert" },
    { id: 4, name: "TensorFlow", category: "frameworks", proficiency: "advanced" },
    { id: 5, name: "PyTorch", category: "frameworks", proficiency: "intermediate" },
    { id: 6, name: "Scikit-learn", category: "frameworks", proficiency: "expert" },
    { id: 7, name: "PostgreSQL", category: "databases", proficiency: "advanced" },
    { id: 8, name: "MongoDB", category: "databases", proficiency: "intermediate" },
    { id: 9, name: "AWS", category: "cloud", proficiency: "advanced" },
    { id: 10, name: "Docker", category: "tools", proficiency: "intermediate" },
    { id: 11, name: "Tableau", category: "tools", proficiency: "advanced" },
    { id: 12, name: "Git", category: "tools", proficiency: "expert" }
];

function ExperienceTimeline({ experiences }) {
    return (
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gray-700 before:content-[''] before:md:ml-5">
            {experiences.map((exp, index) => (
                <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-12"
                >
                    <div className="absolute left-5 top-2 -ml-0.5 mt-0.5 h-3 w-3 rounded-full bg-teal-500"></div>
                    <Card className="border-gray-700 shadow-lg bg-gray-800 overflow-hidden hover:shadow-teal-900/20">
                        <CardHeader className="bg-gradient-to-r from-teal-800 to-cyan-800 text-white">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                                <div>
                                    <CardTitle className="text-xl font-bold text-white">{exp.position}</CardTitle>
                                    <p className="text-teal-200 text-lg">{exp.company}</p>
                                </div>
                                <div className="flex items-center gap-2 text-teal-200">
                                    <Calendar className="h-4 w-4" />
                                    <span className="text-sm">
                                        {new Date(exp.start_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} -
                                        {exp.current ? ' Present' : new Date(exp.end_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                    </span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="flex items-center gap-2 text-gray-400 mb-4">
                                <MapPin className="h-4 w-4" />
                                <span>{exp.location}</span>
                                <span className="px-2 py-1 bg-gray-700 rounded-full text-xs font-medium capitalize text-gray-300">
                                    {exp.type?.replace(/_/g, ' ')}
                                </span>
                            </div>
                            <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                            {exp.achievements && exp.achievements.length > 0 && (
                                <div className="mb-4">
                                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                                        <Award className="h-4 w-4 text-teal-400" />
                                        Key Achievements
                                    </h4>
                                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {exp.skills && exp.skills.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map(skill => (
                                        <span key={skill} className="bg-teal-900/50 text-teal-300 text-xs font-medium px-2.5 py-1 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}

const skillCategories = {
    programming: { icon: Code, color: "from-blue-500 to-cyan-500" },
    frameworks: { icon: Code, color: "from-green-500 to-emerald-500" },
    databases: { icon: Database, color: "from-teal-500 to-cyan-500" },
    cloud: { icon: Zap, color: "from-sky-500 to-blue-500" },
    tools: { icon: Zap, color: "from-yellow-500 to-orange-500" },
    design: { icon: Zap, color: "from-cyan-500 to-teal-500" },
};

function SkillsGrid({ skills }) {
    const groupedSkills = skills.reduce((acc, skill) => {
        const category = skill.category || 'other';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(skill);
        return acc;
    }, {});

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(groupedSkills).map(([category, skillList], index) => (
                <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Card className="border-gray-700 shadow-lg bg-gray-800 h-full hover:shadow-teal-900/20">
                        <CardHeader className="pb-3">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${skillCategories[category]?.color || 'from-gray-500 to-gray-600'} flex items-center justify-center`}>
                                    {React.createElement(skillCategories[category]?.icon || Code, { className: "h-5 w-5 text-white" })}
                                </div>
                                <CardTitle className="text-lg capitalize text-white">
                                    {category.replace(/_/g, ' ')}
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                            <div className="space-y-3">
                                {skillList.map(skill => (
                                    <div key={skill.id} className="flex items-center justify-between">
                                        <span className="text-gray-300 font-medium">{skill.name}</span>
                                        <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
                                            {skill.proficiency}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-950 text-gray-200">
            {/* Hero Section */}
            <div className="bg-gray-900 py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center lg:text-left"
                    >
                        <h1 className="text-5xl font-extrabold text-white mb-4">About Me</h1>
                        <h2 className="text-2xl text-teal-400 font-semibold mb-6">{personalInfo.title}</h2>
                        <div className="prose prose-lg text-gray-300 leading-relaxed prose-invert max-w-none">
                            <p>{personalInfo.about}</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="space-y-16">
                    {/* Experience Section */}
                    <section>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                                <Briefcase className="text-teal-400" /> Professional Experience
                            </h2>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                                My journey through various roles and responsibilities
                            </p>
                        </motion.div>
                        <ExperienceTimeline experiences={experiences} />
                    </section>

                    {/* Skills Section */}
                    <section>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                                <Zap className="text-teal-400" /> Skills & Expertise
                            </h2>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                                Technologies and tools I work with
                            </p>
                        </motion.div>
                        <SkillsGrid skills={skills} />
                    </section>
                </div>
            </div>
        </div>
    );
}