import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
    Terminal, Code2, Globe, MessageSquare, Mail, Github, Linkedin, Phone,
    ExternalLink, Sparkles, Flame, Zap, Star, Heart, ArrowUpRight, Play
} from 'lucide-react';

const vibeProducts = [
    { name: 'VIBE CLI', tagline: 'Multi-agent AI coding tool', icon: Terminal, status: 'In Development', color: 'from-pink-500 to-rose-500' },
    { name: 'VIBE VS Code', tagline: 'Multi-agent IDE assistant', icon: Code2, status: 'Planned', color: 'from-violet-500 to-purple-500' },
    { name: 'VIBE Web', tagline: 'Documentation hub', icon: Globe, status: 'Live', color: 'from-amber-500 to-orange-500' },
    { name: 'VIBE Chat', tagline: 'AI website builder', icon: MessageSquare, status: 'Planned', color: 'from-emerald-500 to-teal-500' }
];

const selectedProjects = [
    { name: 'Neon Dashboard', category: 'Web', tech: 'Next.js', color: 'from-fuchsia-500 to-pink-500', emoji: '✨' },
    { name: 'Pulse Analytics', category: 'Tool', tech: 'React', color: 'from-cyan-500 to-blue-500', emoji: '📊' },
    { name: 'Flux Chat', category: 'Web', tech: 'TypeScript', color: 'from-violet-500 to-purple-500', emoji: '💬' },
    { name: 'Quantum Tasks', category: 'Tool', tech: 'Vue', color: 'from-amber-500 to-yellow-500', emoji: '⚡' },
    { name: 'Zenith Notes', category: 'Web', tech: 'React', color: 'from-emerald-500 to-green-500', emoji: '📝' },
    { name: 'Nova Forms', category: 'Tool', tech: 'Next.js', color: 'from-rose-500 to-red-500', emoji: '📋' }
];

const skillsByCategory = {
    'Magic Stack': ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    'Creative Tools': ['Figma', 'Protopie', 'Blender', 'After Effects'],
    'Backend': ['Node.js', 'Supabase', 'Prisma', 'Edge Functions'],
    'Experiments': ['WebGL', 'Three.js', 'GSAP', 'Canvas API']
};

const floatingIcons = [Sparkles, Flame, Zap, Star, Heart, Play];

export default function App() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeFilter, setActiveFilter] = useState('All');
    const [visibleCount, setVisibleCount] = useState(6);
    const filters = ['All', 'Web', 'Tool'];

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const filteredProjects = activeFilter === 'All'
        ? selectedProjects
        : selectedProjects.filter(p => p.category === activeFilter);

    const visibleProjects = filteredProjects.slice(0, visibleCount);
    const hasMore = filteredProjects.length > visibleCount;

    return (
        <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [90, 0, 90],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-[80px]"
                />
            </div>

            {/* Floating Icons */}
            {floatingIcons.map((Icon, i) => (
                <motion.div
                    key={i}
                    className="fixed pointer-events-none z-10"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight
                    }}
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2
                    }}
                >
                    <Icon className={`w-6 h-6 ${i % 2 === 0 ? 'text-pink-500/30' : 'text-cyan-500/30'}`} />
                </motion.div>
            ))}

            {/* Mouse Follower */}
            <motion.div
                className="fixed w-64 h-64 rounded-full pointer-events-none z-0"
                style={{
                    background: 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)',
                    left: mousePosition.x - 128,
                    top: mousePosition.y - 128,
                }}
            />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/50 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-10 h-10 bg-gradient-to-br from-pink-500 to-violet-500 rounded-xl flex items-center justify-center"
                    >
                        <Sparkles className="w-5 h-5" />
                    </motion.div>
                    <div className="flex items-center gap-6">
                        {['About', 'Products', 'Work', 'Resume', 'Contact'].map((item, i) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                className="text-sm text-gray-400 hover:text-white transition-colors relative group"
                            >
                                {item}
                                <motion.span
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-violet-500"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                />
                            </motion.a>
                        ))}
                        <motion.a
                            href="https://github.com/mk-knight23"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </motion.a>
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-16 max-w-7xl mx-auto px-6 relative z-10">
                {/* Hero */}
                <section className="min-h-[70vh] flex items-center justify-center text-center py-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-violet-500/20 border border-pink-500/30 rounded-full text-pink-400 text-sm font-medium mb-8"
                        >
                            <Sparkles className="w-4 h-4" />
                            Creative Developer & Experience Designer
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
                        >
                            <span className="inline-block">
                                <motion.span
                                    animate={{ color: ['#fff', '#ec4899', '#8b5cf6', '#fff'] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                >
                                    KAZI
                                </motion.span>
                            </span>
                            {' '}
                            <span className="inline-block">
                                <motion.span
                                    animate={{ color: ['#6b7280', '#06b6d4', '#ec4899', '#6b7280'] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                >
                                    MUSHARRAF
                                </motion.span>
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto"
                        >
                            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 font-semibold">
                                delightful digital experiences
                            </span> with motion, color, and intention.
                            Currently building the VIBE Ecosystem.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <motion.a
                                href="#products"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl font-medium flex items-center gap-2"
                            >
                                Explore Magic
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.a>
                            <motion.a
                                href="#work"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-medium transition-all"
                            >
                                See Creations
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Animated Stats */}
                <section className="grid grid-cols-4 gap-6 mb-24">
                    {[
                        { value: '60+', label: 'Projects', icon: Sparkles, color: 'from-pink-500 to-rose-500' },
                        { value: '4', label: 'Products', icon: Star, color: 'from-violet-500 to-purple-500' },
                        { value: '∞', label: 'Ideas', icon: Flame, color: 'from-amber-500 to-orange-500' },
                        { value: '❤️', label: 'Passion', icon: Heart, color: 'from-rose-500 to-red-500' }
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, type: "spring" }}
                            whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                            className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl text-center relative overflow-hidden group"
                        >
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                            />
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="relative z-10"
                            >
                                <stat.icon className={`w-8 h-8 bg-gradient-to-br ${stat.color} p-1.5 rounded-2xl mx-auto mb-3`} />
                            </motion.div>
                            <div className="text-4xl font-bold mb-1 relative z-10">{stat.value}</div>
                            <div className="text-sm text-gray-500 relative z-10">{stat.label}</div>
                        </motion.div>
                    ))}
                </section>

                {/* About */}
                <section id="about" className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring" }}
                        className="p-10 bg-gradient-to-br from-pink-500/10 to-violet-500/10 border border-white/10 rounded-3xl relative overflow-hidden"
                    >
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-pink-500/20 to-violet-500/20 rounded-full blur-3xl"
                        />
                        <h2 className="text-3xl font-bold mb-6 relative z-10">✨ About Me</h2>
                        <div className="grid md:grid-cols-2 gap-8 text-gray-300 relative z-10">
                            <p className="text-lg leading-relaxed">
                                I'm a <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 font-semibold">Creative Developer</span> who believes in the power of
                                <strong className="text-white"> motion</strong>,
                                <strong className="text-white"> color</strong>, and
                                <strong className="text-white"> playfulness</strong> in digital experiences.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Currently crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">VIBE Ecosystem</span> —
                                a suite of AI-powered developer tools. Every project is an opportunity to create something delightful.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Products */}
                <section id="products" className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="p-2 bg-gradient-to-br from-pink-500 to-violet-500 rounded-xl"
                            >
                                <Sparkles className="w-5 h-5" />
                            </motion.div>
                            <h2 className="text-3xl font-bold">VIBE Ecosystem</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {vibeProducts.map((product, i) => (
                                <motion.div
                                    key={product.name}
                                    initial={{ opacity: 0, y: 50, rotate: -5 }}
                                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                                    transition={{ delay: i * 0.15, type: "spring" }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05, y: -10 }}
                                    className="group relative"
                                >
                                    <div className={`p-6 bg-gradient-to-br ${product.color} rounded-3xl relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                                        <motion.div
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                            className="relative z-10"
                                        >
                                            <div className="p-3 bg-white/20 backdrop-blur rounded-2xl w-fit mb-4">
                                                <product.icon className="w-6 h-6 text-white" />
                                            </div>
                                        </motion.div>
                                        <h3 className="font-bold text-lg mb-1 relative z-10">{product.name}</h3>
                                        <p className="text-white/80 text-sm mb-3 relative z-10">{product.tagline}</p>
                                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                                            product.status === 'Live' ? 'bg-green-400/30 text-green-100' : 'bg-white/20 text-white/80'
                                        }`}>
                                            {product.status}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Projects Gallery */}
                <section id="work" className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-8">🎨 Creative Projects</h2>

                        {/* Filter */}
                        <div className="flex gap-3 mb-10">
                            {filters.map(filter => (
                                <motion.button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                                        activeFilter === filter
                                            ? 'bg-gradient-to-r from-pink-500 to-violet-500 text-white'
                                            : 'bg-white/5 text-gray-400 hover:text-white'
                                    }`}
                                >
                                    {filter}
                                </motion.button>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <AnimatePresence>
                                {visibleProjects.map((project, i) => (
                                    <motion.div
                                        key={project.name}
                                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ delay: i * 0.1, type: "spring" }}
                                        whileHover={{ scale: 1.05, y: -10 }}
                                        className="group cursor-pointer"
                                    >
                                        <motion.div
                                            animate={{ rotate: [0, 2, -2, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                                            className={`h-56 rounded-3xl bg-gradient-to-br ${project.color} p-6 relative overflow-hidden mb-4`}
                                        >
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                                            <span className="text-5xl">{project.emoji}</span>
                                            <div className="absolute bottom-4 right-4 opacity-30">
                                                <Sparkles className="w-16 h-16 text-white" />
                                            </div>
                                        </motion.div>
                                        <h3 className="font-bold text-xl mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-violet-500 transition-all">
                                            {project.name}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <span className={`px-2 py-0.5 rounded-full text-xs ${
                                                project.category === 'Web' ? 'bg-fuchsia-500/30 text-fuchsia-300' : 'bg-amber-500/30 text-amber-300'
                                            }`}>
                                                {project.category}
                                            </span>
                                            <span className="text-sm text-gray-500">{project.tech}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Load More / View All */}
                        {hasMore ? (
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                onClick={() => setVisibleCount(prev => prev + 3)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-8 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-medium transition-all flex items-center gap-2 mx-auto"
                            >
                                Load More Projects
                                <ArrowUpRight className="w-4 h-4" />
                            </motion.button>
                        ) : (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-8 text-center text-gray-500 text-sm"
                            >
                                Showing {visibleProjects.length} of {filteredProjects.length} projects
                            </motion.p>
                        )}

                        <motion.a
                            href="https://github.com/mk-knight23?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-2 mt-6 text-pink-400 hover:text-pink-300 transition-colors"
                        >
                            View all 60+ projects on GitHub <ExternalLink className="w-4 h-4" />
                        </motion.a>
                    </motion.div>
                </section>

                {/* Skills */}
                <section id="skills" className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-10">⚡ Superpowers</h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {Object.entries(skillsByCategory).map(([category, skills], i) => (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1, type: "spring" }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.03, rotate: [0, 2, -2, 0] }}
                                    className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl group"
                                >
                                    <motion.div
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                        className="mb-4"
                                    >
                                        <span className="text-4xl">{category === 'Magic Stack' ? '🪄' : category === 'Creative Tools' ? '🎨' : category === 'Backend' ? '⚙️' : '🔬'}</span>
                                    </motion.div>
                                    <h3 className="font-bold mb-4">{category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map(skill => (
                                            <motion.span
                                                key={skill}
                                                whileHover={{ scale: 1.1 }}
                                                className="px-3 py-1.5 bg-gradient-to-r from-pink-500/20 to-violet-500/20 text-pink-300 rounded-full text-sm"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Resume */}
                <section id="resume" className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="p-2 bg-gradient-to-br from-pink-500 to-violet-500 rounded-xl"
                            >
                                <Sparkles className="w-5 h-5" />
                            </motion.div>
                            <h2 className="text-3xl font-bold">Resume</h2>
                        </div>
                        <p className="text-gray-400 mb-10 text-lg">Indie Builder & SaaS Developer</p>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-8">
                                {/* Experience */}
                                <motion.div
                                    whileHover={{ scale: 1.01 }}
                                    className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl"
                                >
                                    <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                        <span className="text-2xl">💼</span> Experience
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="pl-6 border-l-2 border-pink-500/50">
                                            <div className="flex items-start justify-between mb-2">
                                                <h4 className="text-xl font-semibold">Project Engineer (TURBO)</h4>
                                                <span className="text-sm text-gray-500 font-medium">Jul 2022 – Present</span>
                                            </div>
                                            <p className="text-pink-400 font-medium mb-2">Wipro</p>
                                            <p className="text-gray-400 leading-relaxed">
                                                Building full-stack SaaS products and indie apps. Specialized in React,
                                                Next.js, and end-to-end product development. Shipped 80+ projects including
                                                the VIBE Ecosystem and multiple AI-powered tools.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Education */}
                                <motion.div
                                    whileHover={{ scale: 1.01 }}
                                    className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl"
                                >
                                    <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                        <span className="text-2xl">🎓</span> Education
                                    </h3>
                                    <div className="pl-6 border-l-2 border-violet-500/50">
                                        <div className="flex items-start justify-between mb-2">
                                            <h4 className="text-xl font-semibold">B.Tech Computer Science & Engineering</h4>
                                            <span className="text-sm text-gray-500 font-medium">2022</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-8">
                                {/* Tech Stack */}
                                <motion.div
                                    whileHover={{ scale: 1.02, rotate: [0, 2, -2, 0] }}
                                    className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl"
                                >
                                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                        <span className="text-xl">🪄</span> Tech Stack
                                    </h3>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Full Stack</p>
                                            <div className="flex flex-wrap gap-2">
                                                {['React', 'Next.js', 'TypeScript', 'Vue', 'Tailwind'].map((tech) => (
                                                    <span key={tech} className="px-2 py-1 bg-gradient-to-r from-pink-500/20 to-violet-500/20 text-pink-300 rounded text-sm">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Backend</p>
                                            <div className="flex flex-wrap gap-2">
                                                {['Node.js', 'Supabase', 'Prisma', 'Edge Functions'].map((tech) => (
                                                    <span key={tech} className="px-2 py-1 bg-gradient-to-r from-pink-500/20 to-violet-500/20 text-pink-300 rounded text-sm">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Connect */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl"
                                >
                                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                        <span className="text-xl">🔗</span> Connect
                                    </h3>
                                    <div className="space-y-3">
                                        <a href="https://github.com/mk-knight23" target="_blank" rel="noopener"
                                           className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors">
                                            <Github className="w-4 h-4" />
                                            <span className="text-sm">github.com/mk-knight23</span>
                                        </a>
                                        <a href="https://www.linkedin.com/in/kazi-musharraf-0674871a4" target="_blank" rel="noopener"
                                           className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors">
                                            <Linkedin className="w-4 h-4" />
                                            <span className="text-sm">linkedin.com/in/kazi-musharraf</span>
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* What I'll Build */}
                <section id="what-ill-build" className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-10 bg-gradient-to-br from-pink-500/10 via-violet-500/10 to-cyan-500/10 border border-white/10 rounded-3xl relative overflow-hidden"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-pink-500/20 to-violet-500/20 rounded-full blur-3xl"
                        />

                        <div className="relative z-10">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-violet-500/20 border border-pink-500/30 rounded-full text-pink-400 text-sm font-medium mb-6"
                            >
                                <Sparkles className="w-4 h-4" />
                                If You Hire Me
                            </motion.div>
                            <h2 className="text-3xl font-bold mb-4">What I’ll Build ✨</h2>
                            <p className="text-gray-400 mb-10 text-lg max-w-2xl">First 3–6 months as your Indie Builder & SaaS Developer</p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className="p-6 bg-white/5 border border-white/10 rounded-2xl"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-2xl">🚀</span>
                                        <h3 className="font-bold">Product MVP</h3>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Ship a functional MVP in 4-6 weeks. Focus on core value proposition,
                                        user feedback loops, and iterative improvement based on real usage data.
                                    </p>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className="p-6 bg-white/5 border border-white/10 rounded-2xl"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-2xl">⚡</span>
                                        <h3 className="font-bold">Growth Features</h3>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Build viral loops, onboarding flows, and retention features.
                                        Implement analytics to understand user behavior and optimize conversion.
                                    </p>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className="p-6 bg-white/5 border border-white/10 rounded-2xl"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-2xl">💎</span>
                                        <h3 className="font-bold">Monetization</h3>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Design pricing strategy, implement payment integrations,
                                        and build tiered feature sets. Focus on LTV and churn reduction.
                                    </p>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className="p-6 bg-white/5 border border-white/10 rounded-2xl"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-2xl">🔮</span>
                                        <h3 className="font-bold">AI Integration</h3>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Add AI features that create real value — smart recommendations,
                                        content generation, or automation. No hype, just measurable impact.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Contact */}
                <section id="contact" className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-12 bg-gradient-to-br from-pink-500/20 via-violet-500/20 to-cyan-500/20 border border-white/10 rounded-3xl text-center relative overflow-hidden"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br from-pink-500/30 to-violet-500/30 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
                        />

                        <div className="relative z-10">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <h2 className="text-4xl font-bold mb-6">Let's Create Magic ✨</h2>
                            </motion.div>
                            <p className="text-gray-300 mb-10 max-w-xl mx-auto text-lg">
                                Always excited to collaborate on creative projects, innovative ideas, and delightful experiences.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <motion.a
                                    href="mailto:mk.knight970@gmail.com"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl font-medium flex items-center gap-2"
                                >
                                    <Mail className="w-5 h-5" /> Say Hello
                                </motion.a>
                                <motion.a
                                    href="https://github.com/mk-knight23"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, rotate: 5 }}
                                    className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-medium transition-all"
                                >
                                    <Github className="w-5 h-5 inline mr-2" /> GitHub
                                </motion.a>
                                <motion.a
                                    href="tel:+919765490536"
                                    whileHover={{ scale: 1.05, rotate: -3 }}
                                    className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-medium transition-all"
                                >
                                    <Phone className="w-5 h-5 inline mr-2" /> Call
                                </motion.a>
                                <motion.a
                                    href="https://www.linkedin.com/in/kazi-musharraf-0674871a4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, rotate: -5 }}
                                    className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-medium transition-all"
                                >
                                    <Linkedin className="w-5 h-5 inline mr-2" /> LinkedIn
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </main>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-white/10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <p>&copy; 2025 Kazi Musharraf</p>
                    </motion.div>
                    <p>Indie Builder & SaaS Developer — Hyderabad, India</p>
                </div>
            </footer>
        </div>
    );
}
