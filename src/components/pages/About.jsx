import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Code, Database, Zap, Award,CloudCog,ChartNoAxesCombined,LayoutPanelTop,ChartColumnIncreasing,BookOpenText} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Static data
const personalInfo = {
    title: "Data Scientist & AI Specialist",
    about: "Hi, I'm Pratham, an AI enthusiast by day and F1 fanatic by weekend. I'm currently pursuing my Master’s in Data Science at USC, with hands-on experience across data engineering, data science, and machine learning. I’ve built legal AI assistants, scaled genomic data pipelines on the cloud, and fine-tuned large language models using techniques like LoRA and PEFT. I'm especially passionate about distributed processing with Spark, optimizing big data workflows, and transforming massive datasets into meaningful insight",

    about2: "I love data! to me it's like a vast ocean filled with hidden treasures, just waiting to be discovered. I enjoy the challenge of hunting those gems, and turning them into stories that make sense. In my journey, I’ve come to believe that hard work and perseverance are few two things we can always control. That’s the mindset I carry : show up, give your best, and keep learning, no matter what comes your way.",

    about3 : "If you're reading this, I’d love to connect and chat about new projects, research, or exciting opportunities. Always open to freelance collaborations, mentoring roles, or just a good conversation around LLMs and the future of AI. Outside of tech, I’m a huge fan of ramen, table tennis, and Formula 1 (always rooting for Hamilton)."

};

const experiences = [
    {
        id: 1,
        position: "Data Scientist",
        company: "EmpiriLaw",
        location: "Los Angeles, CA",
        start_date: "2024-06-03",
        current: true,
        description: "Leading machine learning initiatives and building predictive models that drive business growth. Responsible for end-to-end ML pipeline development and deployment.",
        achievements: [
            "Developed customer churn prediction model reducing churn by 25%",
            "Built real-time recommendation system increasing revenue by 15%",
            "Led team of 3 junior data scientists"
        ],
        skills: ["LegalBert", "RAG", "AWS", "Computer Vision", "Audio Signal Processing"],
        type: "Intern"
    },
    {
        id: 2,
        position: "Research Assistant",
        company: "USC Alfred E. Mann School of Pharmacy and Pharmaceutical Sciences",
        location: "Los Angeles, CA",
        start_date: "2025-05-025",
        // end_date: "2025-06-025",
        current: true,
        description: "Developed machine learning models for financial forecasting and risk assessment. Collaborated with cross-functional teams to implement data-driven solutions.",
        achievements: [
            "Created fraud detection system with 98% accuracy",
            "Automated reporting processes saving 20 hours/week",
            "Presented findings to C-level executives"
        ],
        skills: ["Python", "AWS EMR", "AWS Glue", "AWS RDS", "AWS S3", "AWS Lmabda"],
        type: "Part-time"
    },
        {
        id: 3,
        position: "AI Engineer",
        company: "Individual",
        location: "Los Angeles",
        start_date: "2025-05-025",
        current: true,
        description: "Developed machine learning models for financial forecasting and risk assessment. Collaborated with cross-functional teams to implement data-driven solutions.",
        achievements: [
            "Created fraud detection system with 98% accuracy",
            "Automated reporting processes saving 20 hours/week",
            "Presented findings to C-level executives"
        ],
        skills: ["RAG", "PEFT", "Fine-tuning", "GPT", "Gemini"],
        type: "Contractual"
    },
    {
        id: 4,
        position: "Machine Learning Engineer",
        company: "Vosyn",
        location: "Chicago, Illinois",
        start_date: "2025-03-025",
        end_date: "2025-06-025",
        current: false,
        description: "Developed machine learning models for financial forecasting and risk assessment. Collaborated with cross-functional teams to implement data-driven solutions.",
        achievements: [
            "Created fraud detection system with 98% accuracy",
            "Automated reporting processes saving 20 hours/week",
            "Presented findings to C-level executives"
        ],
        skills: ["Python", "LoRA", "QLoRA", "LLM", "GCP"],
        type: "Intern"
    },
    {
        id: 6,
        position: "Graduate Teaching Assistant for DSCI 553 (Foundations and Applications of Data Mining)",
        company: "USC Viterbi School of Engineering",
        location: "Los Angeles, CA",
        start_date: "2025-01-10",
        end_date: "2023-07-25",
        current: true,
        description: "Developed machine learning models for financial forecasting and risk assessment. Collaborated with cross-functional teams to implement data-driven solutions.",
        achievements: [
            "Created fraud detection system with 98% accuracy",
            "Automated reporting processes saving 20 hours/week",
            "Presented findings to C-level executives"
        ],
        skills: ["Python", "Spark", "Data Minning" ,"Machine Learning"],
        type: "Part-Time"
    },
        {
        id: 8,
        position: "Teaching Assistant for MA203 (Probability and stochastic processes)",
        company: "Sardar Patel Institute of Technology",
        location: "Mumbai, Maharashtra",
        start_date: "2023-08-05",
        end_date: "2023-12-20",
        current: false,
        description: "Developed machine learning models for financial forecasting and risk assessment. Collaborated with cross-functional teams to implement data-driven solutions.",
        achievements: [
            "Created fraud detection system with 98% accuracy",
            "Automated reporting processes saving 20 hours/week",
            "Presented findings to C-level executives"
        ],
        skills: ["Python", "Probability","Statistics"],
        type: "Part-Time"
    },
    {
        id: 9,
        position: "Teaching Assistant for ET207 (Signals and systems)",
        company: "Sardar Patel Institute of Technology",
        location: "Mumbai, Maharashtra",
        start_date: "2023-08-05",
        end_date: "2023-12-20",
        current: false,
        description: "Developed machine learning models for financial forecasting and risk assessment. Collaborated with cross-functional teams to implement data-driven solutions.",
        achievements: [
            "Created fraud detection system with 98% accuracy",
            "Automated reporting processes saving 20 hours/week",
            "Presented findings to C-level executives"
        ],
        skills: ["Python", "Signal Processing","Computer Vision"],
        type: "Part-Time"
    },
                {
        id: 7,
        position: "Data Science",
        company: "TATA Capital",
        location: "Mumbai, Maharashtra",
        start_date: "2023-02-01",
        end_date: "2023-07-25",
        current: false,
        description: "Developed machine learning models for financial forecasting and risk assessment. Collaborated with cross-functional teams to implement data-driven solutions.",
        achievements: [
            "Created fraud detection system with 98% accuracy",
            "Automated reporting processes saving 20 hours/week",
            "Presented findings to C-level executives"
        ],
        skills: ["Python", "Tableau", "Machine Learning", "Django", "Azure", "Deep Learning", "Pyspark", "SQL"],
        type: "Intern"
    },
    {id: 10,
        position: "Data Engineer",
        company: "TATA Capital",
        location: "Mumbai, Maharashtra",
        start_date: "2022-01-05",
        end_date: "2022-06-25",
        current: false,
        description: "Developed machine learning models for financial forecasting and risk assessment. Collaborated with cross-functional teams to implement data-driven solutions.",
        achievements: [
            "Created fraud detection system with 98% accuracy",
            "Automated reporting processes saving 20 hours/week",
            "Presented findings to C-level executives"
        ],
        skills: ["Python", "SAS", "ETL", "Tableau", "Azure", "Machine Learning", "Pyspark","SQL"],
        type: "Intern"
    },
        {id: 11,
        position: "Head of Operations",
        company: "Oculus ",
        location: "Mumbai, Maharashtra",
        start_date: "2021-02-05",
        end_date: "2022-03-20",
        current: false,
        description: "Developed machine learning models for financial forecasting and risk assessment. Collaborated with cross-functional teams to implement data-driven solutions.",
        achievements: [
            "Created fraud detection system with 98% accuracy",
            "Automated reporting processes saving 20 hours/week",
            "Presented findings to C-level executives"
        ],
        skills: ["Team Management", "Cross-Functional Collaboration","Vendor & Partner Management", "Conflict Resolution"],
        type: "Part-Time"
    },
        {id: 11,
        position: "Head of Operations",
        company: "IEEE",
        location: "Mumbai, Maharashtra",
        start_date: "2020-03-05",
        end_date: "2022-12-20",
        current: false,
        description: "Developed machine learning models for financial forecasting and risk assessment. Collaborated with cross-functional teams to implement data-driven solutions.",
        achievements: [
            "Created fraud detection system with 98% accuracy",
            "Automated reporting processes saving 20 hours/week",
            "Presented findings to C-level executives"
        ],
        skills: ["Scheduling & Timeline Management", "Event Planning & Coordination","Budgeting & Resource Allocation"],
        type: "Part-Time"
    },

    {id: 12,
        position: "Training and Placement Coordinator",
        company: "Sardar Patel Institute of Technology",
        location: "Mumbai, Maharashtra",
        start_date: "2020-01-07",
        end_date: "2020-12-08",
        current: false,
        description: "Developed machine learning models for financial forecasting and risk assessment. Collaborated with cross-functional teams to implement data-driven solutions.",
        achievements: [
            "Created fraud detection system with 98% accuracy",
            "Automated reporting processes saving 20 hours/week",
            "Presented findings to C-level executives"
        ],
        skills: ["Time Management","Business Communication", "Crisis Management"],
        type: "Part-Time"
    },

    
    
    
];

const skills = [
    { id: 1, name: "Python", category: "programming", proficiency: "expert" },
    { id: 2, name: "SQL", category: "programming", proficiency: "advanced" },
    { id: 3, name: "R", category: "programming", proficiency: "expert" },
    { id: 4, name: "MATLAB", category: "programming", proficiency: "expert" },
    { id: 5, name: "Scala", category: "programming", proficiency: "expert" },

    { id: 6, name: "AWS", category: "cloud", proficiency: "advanced" },
    { id: 7, name: "GCP", category: "cloud", proficiency: "advanced" },

    { id: 8, name: "PostgreSQL", category: "databases", proficiency: "advanced" },
    { id: 9, name: "MySQL", category: "databases", proficiency: "advanced" },
    { id: 10, name: "MongoDB", category: "databases", proficiency: "advanced" },
    { id: 11, name: "AWS RDS", category: "databases", proficiency: "advanced" },
    { id: 12, name: "AWS DynamoDB", category: "databases", proficiency: "advanced" },

    { id: 13, name: "Spark", category: "bigData", proficiency: "expert" },
    { id: 14, name: "Pyspark", category: "bigData", proficiency: "expert" },
    { id: 15, name: "MLib", category: "bigData", proficiency: "expert" },
    { id: 16, name: "Hadoop", category: "bigData", proficiency: "expert" },
    { id: 17, name: "Kafka", category: "bigData", proficiency: "expert" },
    
{ id: 18, name: "LangChain", category: "frameworks", proficiency: "intermediate" },
{ id: 19, name: "PEFT (LoRA / QLoRA)", category: "frameworks", proficiency: "advanced" },
{ id: 20, name: "NumPy", category: "libraries", proficiency: "advanced" },
{ id: 21, name: "Pandas", category: "libraries", proficiency: "advanced" },
{ id: 22, name: "Django", category: "frameworks", proficiency: "intermediate" },
{ id: 23, name: "Beautiful Soup", category: "libraries", proficiency: "intermediate" },
{ id: 24, name: "Hugging Face", category: "tools", proficiency: "intermediate" },
{ id: 25, name: "PyTorch", category: "frameworks", proficiency: "advanced" },
{ id: 26, name: "TensorFlow", category: "frameworks", proficiency: "advanced" },
{ id: 27, name: "Scikit-learn", category: "libraries", proficiency: "advanced" },
{ id: 28, name: "Linux", category: "tools", proficiency: "intermediate" },
{ id: 29, name: "Git", category: "tools", proficiency: "intermediate" },
{ id: 30, name: "Tableau", category: "visualization", proficiency: "advanced" },
{ id: 31, name: "Power BI", category: "visualization", proficiency: "intermediate" },
{ id: 32, name: "Excel", category: "tools", proficiency: "advanced" },
{ id: 33, name: "Matplotlib", category: "visualization", proficiency: "intermediate" },
{ id: 34, name: "Seaborn", category: "visualization", proficiency: "intermediate" },
{ id: 35, name: "Transformers", category: "libraries", proficiency: "advanced" },
{ id: 36, name: "spaCy", category: "libraries", proficiency: "intermediate" },
{ id: 37, name: "NLTK", category: "libraries", proficiency: "intermediate" },
{ id: 38, name: "Selenium", category: "tools", proficiency: "advanced" },










    // { id: 4, name: "TensorFlow", category: "frameworks", proficiency: "advanced" },
    // { id: 5, name: "PyTorch", category: "frameworks", proficiency: "intermediate" },
    // { id: 6, name: "Scikit-learn", category: "frameworks", proficiency: "expert" },
    // { id: 7, name: "PostgreSQL", category: "databases", proficiency: "advanced" },
    // { id: 8, name: "MongoDB", category: "databases", proficiency: "intermediate" },
    // { id: 10, name: "Docker", category: "tools", proficiency: "intermediate" },
    // { id: 11, name: "Tableau", category: "tools", proficiency: "advanced" },
    // { id: 12, name: "Git", category: "tools", proficiency: "expert" },
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
                            <div className="flex items-center gap-2 text-gray-400 mb-6">
                                <MapPin className="h-4 w-4" />
                                <span>{exp.location}</span>
                                <span className="px-2 py-1 bg-gray-700 rounded-full text-xs font-medium capitalize text-gray-300">
                                    {exp.type?.replace(/_/g, ' ')}
                                </span>
                            </div>
                            {/* <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
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
                            )} */}
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
    frameworks: { icon: LayoutPanelTop, color: "from-teal-600 to-emerald-600" },
    databases: { icon: Database, color: "from-teal-500 to-cyan-500" },
    cloud: { icon: CloudCog, color: "from-amber-400 to-orange-500" },
    tools: { icon: Zap, color: "from-yellow-500 to-orange-500" },
    design: { icon: Zap, color: "from-cyan-500 to-teal-500" },
    bigData: { icon: ChartNoAxesCombined, color: "from-rose-500 to-red-600" },
    libraries: { icon: BookOpenText, color: "ffrom-gray-800 to-gray-900" },
    visualization: { icon: ChartColumnIncreasing, color: "from-purple-500 to-pink-500" },
};
// from-purple-500 to-pink-500
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
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
                                        {/* <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
                                            {skill.proficiency}
                                        </span> */}
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
                            <p>{personalInfo.about2}</p>
                            <p>{personalInfo.about3}</p>

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