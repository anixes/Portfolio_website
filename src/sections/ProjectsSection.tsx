import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { ModelSimulator } from '../components/ModelSimulator';
import { ModelBenchmarkChart } from '../components/ModelBenchmarkChart';
import { 
  Database, 
  ShieldCheck, 
  Cpu, 
  Server, 
  GitBranch, 
  ArrowDown, 
  BarChart3, 
  LayoutGrid, 
  CheckCircle,
  Sliders,
  Layers,
  ChevronRight
} from 'lucide-react';

interface PipelineStep {
  label: string;
  icon: React.ComponentType<any>;
  desc: string;
  deepSpec: string;
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
  simulatorType?: 'property' | 'delivery';
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
    simulatorType: 'property',
    col1Img1: '/projects/property-heatmap.jpg',
    col1Img2: '/projects/property-dashboard.jpg',
    col2Img: '/projects/property-hero.jpg',
    pipeline: [
      { 
        label: 'Async Ingestion', 
        icon: Database, 
        desc: 'Scrapes 43,000+ listings using async Playwright worker pools.',
        deepSpec: 'Constructed an asynchronous scraping worker pool with headless Playwright. Employs exponential backoff, rotating headers, and adaptive concurrency throttling to capture 43k+ dynamic DOM listings across Gurgaon, Delhi, and Noida without rate limiting.'
      },
      { 
        label: 'Pandera Schema', 
        icon: ShieldCheck, 
        desc: 'Strict validation of listings to eliminate corruption.',
        deepSpec: 'Implemented compile-time and runtime Pandera DataFrameSchema assertions. Checks nullable bounds, non-negative price assertions, and geo-coordinate bounding boxes, automatically routing malformed payloads into an isolation quarantine.'
      },
      { 
        label: 'H3 Grid Encoding', 
        icon: LayoutGrid, 
        desc: 'Groups and maps spatial listings into target encodings.',
        deepSpec: 'Utilized Uber H3 spatial indexing at Resolution 8 (hexagons ~0.7 sq km). Generated smoothed out-of-fold target encodings across spatial neighbors to eliminate arbitrary municipal boundary artifacts and avoid spatial target leakage.'
      },
      { 
        label: 'CatBoost Engine', 
        icon: Cpu, 
        desc: 'Predictive pricing model with lux-aware weighting.',
        deepSpec: 'Trained CatBoostRegressor using 150-trial Optuna Bayesian search. Optimized for symmetric oblivious decision trees with custom luxury-quantile loss, yielding 14ms inference times on CPU without GPU overhead.'
      },
      { 
        label: 'AWS EC2 API', 
        icon: Server, 
        desc: 'Docker API containerized FastAPI inference endpoint.',
        deepSpec: 'Packaged the model into a FastAPI microservice. Built a hardened multi-stage Dockerfile shrinking final image size from 2.1GB to 500MB. Configured healthcheck endpoints, automated CI/CD pushing to GHCR, and reverse-proxied with Nginx on AWS EC2.'
      },
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
    simulatorType: 'delivery',
    col1Img1: '/projects/delivery-network.jpg',
    col1Img2: '/projects/delivery-dashboard.jpg',
    col2Img: '/projects/delivery-hero.jpg',
    pipeline: [
      { 
        label: 'Query Builder', 
        icon: Database, 
        desc: 'SQL joins extract features on 100k+ orders.',
        deepSpec: 'Engineered complex PostgreSQL extraction queries with CTEs and window functions, aggregating delivery driver historical on-time ratios and transit hub bottleneck percentages over a rolling 30-day window.'
      },
      { 
        label: 'Pydantic Gate', 
        icon: ShieldCheck, 
        desc: 'Validates structure and typing of REST payload.',
        deepSpec: 'Enforces strict Pydantic v2 data models with custom field validators for coordinates, timestamps, and order weights, returning standardized RFC 7807 error responses upon invalid input.'
      },
      { 
        label: 'CatBoost Class', 
        icon: Cpu, 
        desc: 'Fitted classification trees with StratifiedKFold.',
        deepSpec: 'Evaluated binary classification trees under 5-fold Stratified cross-validation with class weighting to address delivery delay imbalance (18% positive class). Tuned threshold to optimize business precision-recall tradeoff.'
      },
      { 
        label: 'SHAP Explainer', 
        icon: BarChart3, 
        desc: 'Calculates real-time driver impacts for delivery risk.',
        deepSpec: 'Integrated SHAP TreeExplainer in the serving path to produce instantaneous waterfall attributions, identifying whether weather, transit distance, or hub congestion triggered the delay risk classification.'
      },
      { 
        label: 'GitHub CI/CD', 
        icon: GitBranch, 
        desc: 'Automated builds pushing to GHCR & AWS EC2.',
        deepSpec: 'Configured GitHub Actions workflow triggering on main branch merge: runs Pytest suites, builds multi-stage Docker image, tests container health, pushes to GitHub Container Registry, and triggers blue-green deploy on AWS EC2.'
      },
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
    simulatorType: 'property',
    col1Img1: '/projects/retail-forecast.jpg',
    col1Img2: '/projects/retail-matrix.jpg',
    col2Img: '/projects/retail-hero.jpg',
    pipeline: [
      { 
        label: 'Store Controls', 
        icon: Database, 
        desc: 'Aggregates promotional datasets from SQL databases.',
        deepSpec: 'Aggregates multi-year retail transactions across 50+ stores, standardizing holiday calendars and store cluster attributes with automated missing-value imputation.'
      },
      { 
        label: 'Fixed-Effects', 
        icon: ShieldCheck, 
        desc: 'Quantifies promotional effectiveness in regressions.',
        deepSpec: 'Employs panel fixed-effects econometrics to isolate true promotional lift from underlying macroeconomic trends and store-specific baselines.'
      },
      { 
        label: 'Prophet Predictor', 
        icon: Cpu, 
        desc: 'Fits additive time-series forecasting trends.',
        deepSpec: 'Decomposes trend, weekly/annual seasonality, and holiday shocks with Facebook Prophet, establishing strong statistical priors for baseline sales volume.'
      },
      { 
        label: 'LightGBM Pipeline', 
        icon: GitBranch, 
        desc: 'Incorporates lag variables and rolling statistics.',
        deepSpec: 'Engineered 45+ lag features (7d, 14d, 28d rolling averages, exponential moving averages) fed into an ultra-fast LightGBM regressor to predict promotional saturation curves.'
      },
      { 
        label: 'DVC Versioning', 
        icon: Server, 
        desc: 'Tracks forecasting model artifacts & datasets.',
        deepSpec: 'Configured Data Version Control (DVC) paired with AWS S3 remote storage to ensure complete reproducibility of training datasets and serialized model artifacts.'
      },
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
  const [activeTab, setActiveTab] = useState<'simulator' | 'pipeline' | 'benchmarks'>('simulator');
  const [selectedStage, setSelectedStage] = useState<number>(0);

  const range = [index / totalCards, 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[88vh] min-h-[620px] w-full flex items-center justify-center sticky top-20 md:top-28"
    >
      <motion.div
        style={{
          scale,
          top: `${index * 24}px`,
        }}
        className={`relative w-full max-w-6xl h-full max-h-full rounded-[36px] sm:rounded-[48px] border-2 bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl origin-top overflow-y-auto scrollbar-thin transition-colors ${
          isExpanded ? 'border-purple-500/60 ring-2 ring-purple-500/20' : 'border-[#D7E2EA]'
        }`}
      >
        {/* Top Row: Title + Category + Deep Dive Action */}
        <div className="flex flex-wrap justify-between items-center gap-3 sm:gap-6 w-full">
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
            <span
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
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
              className="rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider border border-purple-400/50 text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
            >
              {isExpanded ? 'Close Technical Deep Dive' : 'Explore Technical Deep Dive'}
              <ArrowDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
            {project.liveUrl && project.liveUrl !== '#' && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <LiveProjectButton label="Live App" />
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
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full mt-5 pt-5 border-t border-neutral-800/80 flex flex-col gap-6"
            >
              {/* Deep Dive Navigation Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-3 bg-neutral-950/90 p-1.5 rounded-2xl border border-neutral-800">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveTab('simulator')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                      activeTab === 'simulator'
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                    }`}
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Live Simulator</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('pipeline')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                      activeTab === 'pipeline'
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                    }`}
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>MLOps Architecture</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('benchmarks')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                      activeTab === 'benchmarks'
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                    }`}
                  >
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>Model Benchmarks</span>
                  </button>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-neutral-500 pr-2">
                  <span>Interactive Proof Mode</span>
                </div>
              </div>

              {/* Tab 1: Live Simulator */}
              {activeTab === 'simulator' && (
                <div className="w-full">
                  <ModelSimulator projectType={project.simulatorType || 'property'} />
                </div>
              )}

              {/* Tab 2: MLOps Architecture Pipeline */}
              {activeTab === 'pipeline' && (
                <div className="flex flex-col gap-6">
                  {/* Pipeline Flow Stages */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-mono font-bold uppercase text-neutral-300 tracking-wider flex items-center gap-2">
                        <GitBranch className="w-4 h-4 text-purple-400" />
                        Production Pipeline Architecture (Click stage to inspect implementation specs)
                      </h4>
                      <span className="text-[10px] text-neutral-500 font-mono">5 Stages Verified</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
                      {project.pipeline.map((step, idx) => {
                        const StepIcon = step.icon;
                        const isSelected = selectedStage === idx;

                        return (
                          <button
                            key={idx}
                            onClick={() => setSelectedStage(idx)}
                            className={`relative text-left flex flex-col p-4 rounded-2xl border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-purple-950/30 border-purple-500 shadow-md ring-1 ring-purple-500/30'
                                : 'bg-neutral-950 border-neutral-800/80 hover:border-neutral-700'
                            }`}
                          >
                            <div className="flex justify-between items-center mb-3">
                              <div className={`p-2.5 rounded-xl border ${
                                isSelected 
                                  ? 'bg-purple-500/20 border-purple-500/40 text-purple-300' 
                                  : 'bg-white/5 border-white/10 text-neutral-400'
                              }`}>
                                <StepIcon className="w-4 h-4" />
                              </div>
                              <span className="text-[10px] font-mono text-neutral-500 font-bold">STAGE 0{idx + 1}</span>
                            </div>
                            <h5 className="text-xs font-bold text-white uppercase mb-1">{step.label}</h5>
                            <p className="text-[11px] text-neutral-400 leading-normal line-clamp-2">{step.desc}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Click-to-inspect Stage Deep Dive Box */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-neutral-950 border border-purple-500/30 shadow-xl flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
                      <ChevronRight className="w-4 h-4" />
                      Stage 0{selectedStage + 1} Deep Engineering Specification: {project.pipeline[selectedStage].label}
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {project.pipeline[selectedStage].deepSpec}
                    </p>
                  </div>

                  {/* Production Accuracy & Performance Metrics Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Metrics */}
                    <div className="flex flex-col gap-3">
                      <h4 className="text-xs font-mono font-bold uppercase text-neutral-300 tracking-wider flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        Production Metrics & Telemetry
                      </h4>
                      <div className="grid grid-cols-3 gap-3">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="bg-neutral-950 border border-neutral-800/80 rounded-2xl p-3.5 text-center">
                            <div className="text-neutral-500 text-[10px] uppercase font-mono tracking-wider mb-1">{metric.label}</div>
                            <div className={`text-xl sm:text-2xl font-black ${metric.color} tracking-tight`}>{metric.value}</div>
                            <div className="text-[10px] text-neutral-400 mt-1 leading-tight">{metric.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SHAP Feature Drivers */}
                    <div className="flex flex-col gap-3">
                      <h4 className="text-xs font-mono font-bold uppercase text-neutral-300 tracking-wider flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-blue-400" />
                        Global Feature Attribution (SHAP)
                      </h4>
                      <div className="bg-neutral-950 border border-neutral-800/80 rounded-2xl p-3.5 flex flex-col gap-2.5">
                        {project.shapFeatures.map((feat, idx) => (
                          <div key={idx} className="flex flex-col gap-1">
                            <div className="flex justify-between items-center text-[11px] text-neutral-300">
                              <span className="font-bold uppercase">{feat.name}</span>
                              <span className="font-mono text-purple-400 font-bold">{feat.score}%</span>
                            </div>
                            <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-gradient-to-r from-purple-500 to-cyan-400 h-full" style={{ width: `${feat.score}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Model Benchmarks */}
              {activeTab === 'benchmarks' && (
                <div className="w-full">
                  <ModelBenchmarkChart />
                </div>
              )}
            </motion.div>
          ) : (
            // Default View: Image Preview Showcase
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 w-full flex-grow items-stretch mt-4 sm:mt-6"
            >
              {/* Left Column */}
              <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
                <div className="w-full rounded-[36px] sm:rounded-[48px] overflow-hidden bg-neutral-900 border border-neutral-800 flex-shrink-0">
                  <img
                    src={project.col1Img1}
                    alt={`${project.name} preview 1`}
                    className="w-full object-cover select-none"
                    style={{ height: 'clamp(130px, 16vw, 220px)' }}
                    width="420"
                    height="220"
                    loading="lazy"
                  />
                </div>
                <div className="w-full rounded-[36px] sm:rounded-[48px] overflow-hidden bg-neutral-900 border border-neutral-800 flex-grow">
                  <img
                    src={project.col1Img2}
                    alt={`${project.name} preview 2`}
                    className="w-full h-full object-cover select-none"
                    style={{ minHeight: 'clamp(160px, 20vw, 320px)' }}
                    width="420"
                    height="320"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-7 rounded-[36px] sm:rounded-[48px] overflow-hidden bg-neutral-900 border border-neutral-800 flex">
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5" />
            End-To-End Implementations
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
            style={{ fontSize: 'clamp(2.8rem, 10vw, 130px)' }}
          >
            Projects
          </h2>
          <p className="text-neutral-400 font-light text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Production-grade machine learning systems featuring live inference simulators, MLOps telemetry, and explainability.
          </p>
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
