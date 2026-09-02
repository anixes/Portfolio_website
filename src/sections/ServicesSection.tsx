import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { Cpu, Terminal, Database, Cloud, ShieldCheck, BarChart2, Layers } from 'lucide-react';

interface ServiceItem {
  number: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<any>;
  coreTech: string[];
}

const servicesData: ServiceItem[] = [
  {
    number: '01',
    name: 'Machine Learning & Predictive Systems',
    tagline: 'High-precision gradient boosting & time-series forecasting',
    description: 'Developing end-to-end regression, classification, and forecasting engines using CatBoost, LightGBM, and XGBoost. Features Bayesian hyperparameter optimization with Optuna and granular interpretability via SHAP TreeExplainer.',
    icon: Cpu,
    coreTech: ['CatBoost', 'LightGBM', 'XGBoost', 'Optuna', 'Prophet', 'Scikit-Learn'],
  },
  {
    number: '02',
    name: 'MLOps & Containerized Model Serving',
    tagline: 'Production infrastructure, micro-APIs & CI/CD delivery',
    description: 'Architecting ultra-low latency REST inference microservices with FastAPI. Building hardened multi-stage Docker containers (reduced by 76% from 2.1GB to 500MB), automated CI/CD pipelines with GitHub Actions pushing to GHCR, and model artifact tracking with DVC and MLflow.',
    icon: Cloud,
    coreTech: ['FastAPI', 'Docker', 'AWS EC2 / S3', 'GitHub Actions', 'MLflow', 'DVC'],
  },
  {
    number: '03',
    name: 'Data Engineering & Schema Integrity',
    tagline: 'Asynchronous ingestion & strict schema validation gates',
    description: 'Constructing robust data collection pipelines with asynchronous Playwright scrapers handling 40k+ dynamic payloads. Enforcing strict schema contracts and statistical validation guards using Pandera and Pydantic before model ingestion.',
    icon: ShieldCheck,
    coreTech: ['Pandera', 'Pydantic v2', 'Playwright Async', 'Pytest', 'Data Drift Detection'],
  },
  {
    number: '04',
    name: 'Advanced SQL & Analytics Infrastructure',
    tagline: 'Complex query optimization & analytical KPIs',
    description: 'Writing high-performance PostgreSQL queries utilizing complex window functions, common table expressions (CTEs), and partitioned index strategies for operational metrics, sales attribution, and feature extraction from 100k+ record tables.',
    icon: Database,
    coreTech: ['PostgreSQL', 'Window Functions', 'CTEs', 'Query Indexing', 'Pandas Vectorization'],
  },
  {
    number: '05',
    name: 'Full-Stack AI Products & Dashboards',
    tagline: 'User-facing interfaces transforming models into tools',
    description: 'Bridging the gap between mathematical models and executive decision-makers by delivering intuitive full-stack web applications, interactive geospatial maps (H3 spatial indexing), and real-time dashboards using React, Streamlit, and TailwindCSS.',
    icon: Layers,
    coreTech: ['React', 'Streamlit', 'H3 Spatial Indexing', 'TailwindCSS', 'Vercel'],
  },
];

interface TechBadge {
  name: string;
  category: 'ml' | 'mlops' | 'data' | 'analytics';
  projects?: string[];
}

const techMatrix: TechBadge[] = [
  { name: 'CatBoost', category: 'ml', projects: ['P01', 'P02'] },
  { name: 'LightGBM', category: 'ml', projects: ['P03'] },
  { name: 'XGBoost', category: 'ml' },
  { name: 'FastAPI', category: 'mlops', projects: ['P01', 'P02'] },
  { name: 'Docker (500MB)', category: 'mlops', projects: ['P01', 'P02'] },
  { name: 'AWS EC2 / S3', category: 'mlops', projects: ['P01', 'P02'] },
  { name: 'GitHub CI/CD', category: 'mlops', projects: ['P02'] },
  { name: 'Pandera Schemas', category: 'data', projects: ['P01'] },
  { name: 'Pydantic v2', category: 'data', projects: ['P02'] },
  { name: 'Uber H3 Spatial', category: 'data', projects: ['P01'] },
  { name: 'PostgreSQL (CTEs/Windows)', category: 'analytics', projects: ['P02', 'P03'] },
  { name: 'SHAP Explainability', category: 'analytics', projects: ['P01', 'P02'] },
  { name: 'Optuna (Bayesian)', category: 'ml', projects: ['P01'] },
  { name: 'MLflow & DVC', category: 'mlops', projects: ['P03'] },
  { name: 'Prophet Time-Series', category: 'ml', projects: ['P03'] },
  { name: 'Streamlit', category: 'analytics', projects: ['P02'] },
];

export const ServicesSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'ml' | 'mlops' | 'data' | 'analytics'>('all');

  const filteredTech = selectedFilter === 'all'
    ? techMatrix
    : techMatrix.filter(t => t.category === selectedFilter);

  return (
    <section
      id="services"
      className="w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-12 py-24 sm:py-32 relative z-10 border-t border-neutral-900 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-20">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
            <Terminal className="w-3.5 h-3.5" />
            Core Competencies & Capabilities
          </div>
          <h2
            className="hero-heading font-black uppercase text-white tracking-tight leading-none select-none"
            style={{ fontSize: 'clamp(2.8rem, 10vw, 130px)' }}
          >
            Engineering
          </h2>
          <p className="text-neutral-400 font-light text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Full-lifecycle machine learning: from raw exploratory data pipelines to containerized, high-throughput model endpoints.
          </p>
        </FadeIn>

        {/* Tech Stack Interactive Matrix */}
        <FadeIn delay={0.15} y={30} className="w-full mb-16 sm:mb-20">
          <div className="bg-[#121215]/80 border border-neutral-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-5 border-b border-neutral-800">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  Verified Production Tech Stack
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Click filters to highlight verified tools. Badges indicate active project implementations.
                </p>
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 pt-0.5 max-w-full no-scrollbar text-xs">
                {[
                  { id: 'all', label: 'All Tech' },
                  { id: 'ml', label: 'Modeling & AI' },
                  { id: 'mlops', label: 'MLOps & Cloud' },
                  { id: 'data', label: 'Data & Schema' },
                  { id: 'analytics', label: 'SQL & Analytics' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedFilter(tab.id as any)}
                    className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all active:scale-95 flex items-center justify-center ${
                      selectedFilter === tab.id
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tech Badges Grid */}
            <div className="flex flex-wrap gap-2.5">
              {filteredTech.map((tech) => (
                <div
                  key={tech.name}
                  className="group relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-purple-500/50 hover:bg-neutral-850 transition-all cursor-default"
                >
                  <span className="text-xs font-medium text-neutral-200 group-hover:text-white">
                    {tech.name}
                  </span>
                  {tech.projects && tech.projects.map((p) => (
                    <span
                      key={p}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold"
                      title={`Demonstrated in Project ${p}`}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Services Cards List (Dark Titanium Style) */}
        <div className="w-full flex flex-col gap-4">
          {servicesData.map((service, index) => {
            const ServiceIcon = service.icon;

            return (
              <FadeIn
                key={service.number}
                delay={index * 0.1}
                y={25}
                className="w-full"
              >
                <div className="group relative w-full bg-[#121215]/80 hover:bg-[#16161a] border border-neutral-800/80 hover:border-purple-500/50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 transition-all duration-300 backdrop-blur-xl shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6">
                  {/* Left: Number + Icon */}
                  <div className="flex items-center gap-4 sm:gap-6 shrink-0">
                    <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-105 transition-transform">
                      <ServiceIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="font-mono font-black text-neutral-600 group-hover:text-purple-400 text-2xl sm:text-4xl transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Middle: Title & Description */}
                  <div className="flex flex-col gap-1.5 sm:gap-2 flex-grow max-w-2xl">
                    <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight group-hover:text-purple-200 transition-colors">
                      {service.name}
                    </h3>
                    <div className="text-xs font-mono text-purple-400/90 font-medium">
                      {service.tagline}
                    </div>
                    <p className="text-sm text-neutral-400 leading-relaxed mt-1">
                      {service.description}
                    </p>
                  </div>

                  {/* Right: Tech Tags */}
                  <div className="flex flex-wrap lg:flex-col gap-1.5 lg:items-end shrink-0">
                    {service.coreTech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
