export const portfolioData = {
  personalInfo: {
    name: "Animesh Dwivedi",
    domain: "anixes.in",
    role: "Data Scientist & Machine Learning Engineer",
    tagline: "Building intelligent systems and extracting actionable insights from complex data.",
    bio: [
      "I’m Animesh Dwivedi, a data science student focused on building practical machine learning systems rather than isolated notebook experiments. My work centers on understanding problems end-to-end — from data exploration and feature engineering to model evaluation and deployment considerations.",
      "Most of my recent projects explore how machine learning models behave in real environments. I spend time experimenting with validation strategies, comparing model families such as gradient boosting methods, and tracking experiments using tools like MLflow. I’m particularly interested in building pipelines that are reproducible, observable, and deployable.",
      "Alongside machine learning, I’ve been learning the infrastructure side of applied ML — containerization with Docker, serving models through APIs, and deploying systems to cloud environments. This has pushed me toward an MLOps-oriented mindset where models are treated as production systems rather than research artifacts.",
      "I document what I learn through projects and technical notes, both to refine my thinking and to share the lessons that come from building things end to end. Currently, I’m continuing to deepen my understanding of model development, system design, and deployment workflows while building projects that move closer to real-world machine learning applications."
    ],
    email: "animeshdwivedi577@gmail.com",
    github: "https://github.com/anixes",
    linkedin: "https://www.linkedin.com/in/anixes",
    twitter: "https://twitter.com/animeshdwivedi",
  },
  hero: {
    headline: "Building Scalable, Data-Driven Solutions",
    subHeadline: "I design and build machine learning systems, data pipelines, and practical experiments.",
    splineUrl: "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode",
  },
  skills: {
    languages: ["Python", "SQL", "JavaScript", "TypeScript"],
    ml_ai: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "TensorFlow", "PyTorch", "Scikit-Learn"],
    data_engineering: ["Pandas", "NumPy", "Spark", "Airflow", "dbt"],
    mlops: ["Docker", "Kubernetes", "MLflow", "AWS", "GCP", "CI/CD"],
    core: ["Data Structures & Algorithms (DSA)", "System Design", "Statistical Modeling"],
  },
  projects: [
    {
      id: "ncr-property-intelligence",
      title: "NCR Property Intelligence System",
      description: "Institutional-grade real estate valuation platform for the National Capital Region leveraging ultra-fast spatial search.",
      longDescription: "A high-performance intelligence engine handling extreme high-cardinality features via CatBoost and Bayesian optimization. Uses Uber's H3 indexing for sub-second O(1) proximity calculation to Metro stations across 43,000 assets, served by a FastAPI layer to a state-aware Next.js AppRouter frontend.",
      techStack: ["CatBoost", "Optuna", "H3 Spatial", "FastAPI", "Next.js", "Python", "Docker"],
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
      description: "Production-grade delivery delay prediction system with end-to-end MLOps and local explainability.",
      longDescription: "A full-lifecycle 'Push-to-Deploy' pipeline predicting multiclass delays with feature-level accountability via SHAP. The pipeline integrates data engineering, a rapid inference service, and Streamlit observability, enabling actionable insights into why specific features (e.g. package weight) cause delays.",
      techStack: ["RandomForest", "SHAP", "Docker", "Streamlit", "MLflow", "GitHub Actions", "Python"],
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
      description: "Causal impact analysis and failure-mode diagnostics for high-saturation retail promotional data.",
      longDescription: "Analyzed Domonick's retail dataset to demonstrate that data-generating conditions determine model performance. Used Fixed-Effects Regression to isolate a 1,900-unit promo lift while controlling for store/time heterogeneity. Exhaustively benchmarked persistence models against LightGBM and Prophet to prove ML signal collapse in 95%-saturated promotional environments.",
      techStack: ["Statsmodels", "LightGBM", "Prophet", "Fixed-Effects", "Causal Inference", "Python"],
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
