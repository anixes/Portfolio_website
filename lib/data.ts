export const portfolioData = {
  personalInfo: {
    name: "Animesh Dwivedi",
    domain: "anixes.in",
    role: "Data Scientist & MLOps Engineer",
    tagline: "Treating ML as a full-lifecycle discipline, from data engineering and model development to cloud deployment.",
    bio: [
      "I am a Data Scientist and MLOps Engineer who treats machine learning as a full-lifecycle discipline. I specialize in classical ML across predictive, time-series, and causal problem domains, paired with a robust production stack: schema-validated pipelines, containerized APIs, automated CI/CD, and experiment tracking.",
      "I graduated with a Bachelor's in Computer Applications (8.50 CGPA) from Chandigarh University, building a strong foundation in data structures, DBMS, and statistical modeling.",
      "I have independently built and shipped multiple production-grade ML systems as a fresher. My recent focus has been building systems like the NCR Property Intelligence engine and an Ecommerce Delivery Delay Predictor, optimizing everything from H3 geospatial indexing to deep Docker image manipulation (Slim-ML).",
      "During my time working as a Business Operations Analyst for a contracting firm, I gained extensive operational experience—managing estimates for concurrent projects and reconciling vendor invoices. This background grounds my technical work in real-world business realities, emphasizing actionable insights and cost-aware engineering."
    ],
    email: "animeshdwivedi577@gmail.com",
    github: "https://github.com/anixes",
    linkedin: "https://www.linkedin.com/in/anixes",
    twitter: "https://twitter.com/animeshdwivedi",
    phone: "+91-6392876782"
  },
  hero: {
    headline: "Data Science & MLOps Systems",
    subHeadline: "I design and build predictive modeling pipelines, automated CI/CD infrastructures, and explainable ML services.",
    splineUrl: "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode",
  },
  skills: {
    languages: ["Python", "SQL", "TypeScript", "JavaScript"],
    ml_ai: ["CatBoost", "LightGBM", "Prophet", "Optuna", "Scikit-Learn", "Statsmodels", "SHAP"],
    data_engineering: ["Pandas", "PostgreSQL", "DVC", "Pandera", "BeautifulSoup", "Playwright"],
    mlops: ["Docker", "MLflow", "GitHub Actions", "FastAPI", "AWS EC2", "Vercel"],
    core: ["Causal Inference", "Feature Engineering", "Geospatial Analysis", "Time Series"],
  },
  projects: [
    {
      id: "ncr-property-intelligence",
      title: "NCR Property Intelligence System",
      description: "Real Estate Price Prediction | Data Pipeline to Cloud-Deployed ML API. Automated ingestion of 43,000+ live NCR properties with Pandera schema validation and sub-50ms H3 spatial indexing.",
      longDescription: "Engineered a CatBoost Regressor with Luxury-Aware sample weighting, GroupKFold CV, and Bayesian HPO via Optuna; achieved 91.2% accuracy. Architected vectorised Haversine + Uber H3 hexagonal indexing. Deployed FastAPI to AWS EC2 and Next.js to Vercel, with full MLflow + DVC + DAGsHub lineage.",
      techStack: ["CatBoost", "FastAPI", "Next.js", "AWS EC2", "DVC", "MLflow"],
      year: "2026",
      links: {
        github: "https://github.com/anixes/ncr_property_price_estimation",
        live: "https://ncr-property-intelligence-system.vercel.app/",
      },
      image: "/projects/ncr_property_price.png",
      featured: true,
    },
    {
      id: "ecommerce-delay-prediction",
      title: "Ecommerce Delay Prediction",
      description: "Delivery Delay Prediction with Explainable AI | Production MLOps. Developed a delivery delay classifier on 100k+ orders; deployed via FastAPI with per-prediction SHAP values.",
      longDescription: "Designed a 'Slim-ML' Docker multi-stage build stripping heavy CUDA libraries, shrinking the container from 2.1GB to 500MB. Implemented dual CI/CD pipelines orchestrating zero-touch SSH deployments to AWS EC2.",
      techStack: ["CatBoost", "FastAPI", "Docker", "GitHub Actions", "SHAP"],
      year: "2026",
      links: {
        github: "https://github.com/anixes/ecommerce_delay_prediction",
        live: "http://13.204.212.148:8502/",
      },
      image: "/projects/ecommerce_delay_prediction_hero.png",
      featured: true,
    },
    {
      id: "retail-promo-forecasting",
      title: "Retail Promo & Demand Forecasting",
      description: "Retail Demand Forecasting & Promotional Lift Analysis | Causal ML. Quantified promotional lift using Fixed-Effects Regression; isolated causal impact at ~1,900 units/promo.",
      longDescription: "Benchmarked Naive, Prophet, and LightGBM forecasters using leakage-safe splits. Proven that at ~95% promo saturation, autocorrelation dominates signal, saving potential overinvestment. Pruned suspect periods via Data Integrity Auditing.",
      techStack: ["LightGBM", "Prophet", "Fixed-Effects", "Statsmodels"],
      year: "2026",
      links: {
        github: "https://github.com/anixes/retail-promo-forecasting",
        live: "#",
      },
      image: "https://picsum.photos/seed/analytics/800/600",
      featured: true,
    }
  ],
  notes: [
    {
      id: "deploying-ml-models-fastapi",
      title: "Deploying ML Models with FastAPI and Docker",
      date: "Oct 12, 2025",
      summary: "A practical guide to containerizing your machine learning models and serving them via a high-performance REST API.",
      link: "/notes/deploying-ml-models-fastapi"
    },
    {
      id: "optimizing-sql-queries",
      title: "Optimizing SQL Queries for Large Datasets",
      date: "Sep 28, 2025",
      summary: "Techniques and best practices for writing efficient SQL queries when dealing with millions of rows in analytical databases.",
      link: "/notes/optimizing-sql-queries"
    }
  ],
  contact: {
    message: "I'm always open to discussing new opportunities, collaborations, or just chatting about data science and machine learning. Feel free to reach out!",
  }
};
