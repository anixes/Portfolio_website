import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { Database, ShieldCheck, Cpu, Server, GitBranch, ArrowDown, BarChart3, Clock, LayoutGrid, CheckCircle } from 'lucide-react';

interface PipelineStep {
  label: string;
  icon: React.ComponentType<any>;
  desc: string;
}

interface MetricItem {
  label: string;
  value: string;
  desc: string;
  color: string;
}

interface ShapItem {
  name: string;
  score: number;
  desc: string;
}

interface ProjectData {
  number: string;
  name: string;
  category: string;
  githubUrl: string;
  liveUrl: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  pipeline: PipelineStep[];
  metrics: MetricItem[];
  shapFeatures: ShapItem[];
}

const projects: ProjectData[] = [
  {
    number: '01',
    name: 'NCR Property Intelligence',
    category: 'ML Product | Recommendation System',
    githubUrl: 'https://github.com/anixes/ncr_property_price_estimation',
    liveUrl: 'https://ncr-property-intelligence-system.vercel.app/',
    col1Img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    pipeline: [
      { label: 'Async Ingestion', icon: Database, desc: 'Scrapes 43,000+ properties using async Playwright pipelines.' },
      { label: 'Pandera Schema', icon: ShieldCheck, desc: 'Strict validation of listings to eliminate corruption.' },
      { label: 'H3 Grid Encoding', icon: LayoutGrid, desc: 'Groups and maps spatial listings into target encodings.' },
      { label: 'CatBoost Engine', icon: Cpu, desc: 'Predictive pricing model with lux-aware weighting.' },
      { label: 'AWS EC2 API', icon: Server, desc: 'Docker API containerized FastAPI inference endpoint.' },
    ],
    metrics: [
      { label: 'Regression Error', value: '< 9% MAPE', desc: 'Average percentage error across zones', color: 'text-purple-400' },
      { label: 'Inference Latency', value: '14ms', desc: 'End-to-end API response time', color: 'text-blue-400' },
      { label: 'Geospatial Grid', value: 'H3 Level 8', desc: 'High-precision spatial resolution', color: 'text-cyan-400' },
    ],
    shapFeatures: [
      { name: 'Amenity Proximity', score: 84, desc: 'Distance to commercial centers and schools.' },
      { name: 'MicroMarket Class', score: 72, desc: 'Historical cluster target encoding.' },
      { name: 'Luxury Density Factor', score: 58, desc: 'Weighted spatial distribution metrics.' },
    ],
  },
  {
    number: '02',
    name: 'Delivery Delay Predictor',
    category: 'Classification | Explainable AI',
    githubUrl: 'https://github.com/anixes/ecommerce_delay_prediction',
    liveUrl: 'http://13.204.212.148:8502/',
    col1Img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    pipeline: [
      { label: 'Query Builder', icon: Database, desc: 'SQL joins extract features on 100k+ orders.' },
      { label: 'Pydantic Gate', icon: ShieldCheck, desc: 'Validates structure and typing of REST payload.' },
      { label: 'CatBoost Class', icon: Cpu, desc: 'Fitted classification trees with StratifiedKFold.' },
      { label: 'SHAP Explainer', icon: BarChart3, desc: 'Calculates real-time driver impacts for delivery risk.' },
      { label: 'GitHub CI/CD', icon: GitBranch, desc: 'Automated builds pushing to GHCR & AWS EC2.' },
    ],
    metrics: [
      { label: 'Image Optimized', value: '76% Shrunk', desc: 'Docker size reduced 2.1GB to 500MB', color: 'text-emerald-400' },
      { label: 'Inference Speed', value: '11ms', desc: 'API route response latency', color: 'text-purple-400' },
      { label: 'Model Datasets', value: '100k+ Orders', desc: 'Vast classification footprint', color: 'text-blue-400' },
    ],
    shapFeatures: [
      { name: 'Weather Index', score: 92, desc: 'Historical precipitation during dispatch.' },
      { name: 'Transit Node Load', score: 79, desc: 'Congestion percentage at delivery hubs.' },
      { name: 'Courier Performance', score: 64, desc: 'Historical average delivery times.' },
    ],
  },
  {
    number: '03',
    name: 'Promo Impact & Forecasting',
    category: 'Forecasting | Business Analytics',
    githubUrl: 'https://github.com/anixes/retail-promo-forecasting',
    liveUrl: 'https://github.com/anixes/retail-promo-forecasting',
    col1Img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    pipeline: [
      { label: 'Store Controls', icon: Database, desc: 'Aggregates promotional datasets from SQL databases.' },
      { label: 'Fixed-Effects', icon: ShieldCheck, desc: 'Quantifies promotional effectiveness in regressions.' },
      { label: 'Prophet Predictor', icon: Cpu, desc: 'Fits additive time-series forecasting trends.' },
      { label: 'LightGBM Pipeline', icon: GitBranch, desc: 'Incorporates lag variables and rolling statistics.' },
      { label: 'DVC Versioning', icon: Server, desc: 'Tracks forecasting model artifacts & datasets.' },
    ],
    metrics: [
      { label: 'Prediction Horizons', value: '90 Days', desc: 'Predictive forecast projection length', color: 'text-amber-400' },
      { label: 'Statistical Guard', value: 'Zero Leakage', desc: 'Chronologically structured cross validation', color: 'text-emerald-400' },
      { label: 'Regression Fit', value: '94.2% R²', desc: 'High explained promotional variance', color: 'text-cyan-400' },
    ],
    shapFeatures: [
      { name: 'Promotional saturation', score: 87, desc: 'Diminishing returns of prolonged campaigns.' },
      { name: 'Store Footprint', score: 71, desc: 'Average regional traffic coefficient.' },
      { name: 'Temporal seasonality', score: 54, desc: 'Day-of-week and monthly trends.' },
    ],
  },
];

interface CardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  targetScale: number;
}

const Card: React.FC<CardProps> = ({ project, index, totalCards, progress, targetScale }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const range = [index / totalCards, 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] min-h-[580px] w-full flex items-center justify-center sticky top-24 md:top-32"
    >
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
        }}
        className={`relative w-full max-w-6xl h-full max-h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl origin-top overflow-y-auto scrollbar-thin ${
          isExpanded ? 'border-purple-500/60 ring-2 ring-purple-500/20' : 'border-[#D7E2EA]'
        }`}
      >
        {/* Top Row */}
        <div className="flex flex-wrap justify-between items-center gap-3 sm:gap-6 w-full">
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
            <span
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] font-light uppercase tracking-widest text-xs sm:text-sm opacity-70">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-2xl md:text-3xl tracking-wide">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="rounded-full px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider border border-purple-400/50 text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 transition-all cursor-pointer flex items-center gap-1.5"
            >
              {isExpanded ? 'Close Deep Dive' : 'Explore Deep Dive'}
              <ArrowDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
            {project.liveUrl && project.liveUrl !== '#' && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <LiveProjectButton label="Live Project" />
              </a>
            )}
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <LiveProjectButton label="GitHub" />
            </a>
          </div>
        </div>

        {/* Collapsible Deep Dive Panel */}
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full mt-6 pt-6 border-t border-neutral-800/80 flex flex-col gap-8"
            >
              {/* Row 1: Pipeline Flowchart */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <GitBranch className="w-5 h-5 text-purple-400" />
                  <h4 className="text-xs font-mono font-bold uppercase text-neutral-300 tracking-wider">
                    Interactive ML & Data Engineering Pipeline
                  </h4>
                </div>

                {/* Pipeline Flow Grid */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative items-stretch">
                  {project.pipeline.map((step, idx) => {
                    const StepIcon = step.icon;
                    return (
                      <div key={idx} className="relative flex flex-col bg-neutral-950 border border-neutral-800/80 rounded-2xl p-4 hover:border-purple-500/40 transition-all">
                        <div className="flex justify-between items-center mb-3">
                          <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                            <StepIcon className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-mono text-neutral-500 font-bold">STAGE 0{idx + 1}</span>
                        </div>
                        <h5 className="text-xs font-bold text-white uppercase mb-1.5">{step.label}</h5>
                        <p className="text-[11px] text-neutral-400 leading-normal flex-grow">{step.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Row 2: Metrics and SHAP */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column: Visual Metrics */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <h4 className="text-xs font-mono font-bold uppercase text-neutral-300 tracking-wider">
                      Production Accuracy & Performance Metrics
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-neutral-950 border border-neutral-800/60 rounded-2xl p-4 text-center">
                        <div className="text-neutral-500 text-[10px] uppercase font-mono tracking-wider mb-1">{metric.label}</div>
                        <div className={`text-xl sm:text-2xl font-black ${metric.color} tracking-tight`}>{metric.value}</div>
                        <div className="text-[10px] text-neutral-400 mt-1 leading-tight">{metric.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: SHAP Drivers */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                    <h4 className="text-xs font-mono font-bold uppercase text-neutral-300 tracking-wider">
                      Model Explainability (SHAP Importance)
                    </h4>
                  </div>

                  <div className="bg-neutral-950 border border-neutral-800/60 rounded-2xl p-4 flex flex-col gap-3">
                    {project.shapFeatures.map((feat, idx) => (
                      <div key={idx} className="flex flex-col gap-1">
                        <div className="flex justify-between items-center text-[11px] text-neutral-300">
                          <span className="font-bold uppercase">{feat.name}</span>
                          <span className="font-mono text-purple-400 font-bold">{feat.score}%</span>
                        </div>
                        <div className="w-full bg-neutral-900 h-2 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-full" style={{ width: `${feat.score}%` }} />
                        </div>
                        <span className="text-[10px] text-neutral-500">{feat.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            // Bottom Row: Default Image Grid
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 w-full flex-grow items-stretch mt-4 sm:mt-6"
            >
              {/* Left Column (40% width -> 5 cols out of 12) */}
              <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
                {/* Left Top Image */}
                <div className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-neutral-900 border border-neutral-800 flex-shrink-0">
                  <img
                    src={project.col1Img1}
                    alt={`${project.name} preview 1`}
                    className="w-full object-cover select-none"
                    style={{ height: 'clamp(130px, 16vw, 230px)' }}
                    width="420"
                    height="230"
                    loading="lazy"
                  />
                </div>
                {/* Left Bottom Image */}
                <div className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-neutral-900 border border-neutral-800 flex-grow">
                  <img
                    src={project.col1Img2}
                    alt={`${project.name} preview 2`}
                    className="w-full h-full object-cover select-none"
                    style={{ minHeight: 'clamp(160px, 22vw, 340px)' }}
                    width="420"
                    height="340"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column (60% width -> 7 cols out of 12) */}
              <div className="lg:col-span-7 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-neutral-900 border border-neutral-800 flex">
                <img
                  src={project.col2Img}
                  alt={`${project.name} full preview`}
                  className="w-full h-full object-cover select-none min-h-[260px] sm:min-h-[350px] lg:min-h-[420px]"
                  width="640"
                  height="420"
                  loading="lazy"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 pb-32"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center mb-10 sm:mb-16">
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Projects
          </h2>
        </FadeIn>
      </div>

      {/* Sticky Cards Container */}
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - 1 - index) * 0.03;
          return (
            <Card
              key={project.number}
              project={project}
              index={index}
              totalCards={projects.length}
              progress={scrollYProgress}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};
