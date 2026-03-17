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
      id: "ncr-property-price-estimator",
      title: "NCR Property Price Estimator",
      description: "A complete end-to-end Machine Learning web application for predicting real estate prices in the National Capital Region (Delhi-NCR) of India.",
      longDescription: "This comprehensive MLOps project features a decoupled architecture with a scikit-learn modeling pipeline (using custom Log/Winsorizer/Geo-Median transformers), a high-performance FastAPI backend for model serving with Pydantic validation, and a polished Streamlit frontend. The lifecycle includes DVC for data/model versioning, GitHub Actions for CI/CD, and Docker orchestration for seamless deployment. Future versions will incorporate a property recommender system and enhanced real-time data scraping.",
      techStack: ["Scikit-learn", "FastAPI", "Streamlit", "Docker", "DVC", "MLflow", "GitHub Actions", "XGBoost", "Pytest"],
      year: "2026",
      links: {
        github: "https://github.com/anixes/ncr_property_price_estimation",
        live: "#",
      },
      image: "/projects/ncr_property_price.png",
      featured: true,
    },
    {
      id: "ecommerce-delay-prediction",
      title: "Ecommerce Delivery Delay Prediction",
      description: "A complete end-to-end Machine Learning system for predicting delivery delays in the Olist Brazilian E-Commerce marketplace.",
      longDescription: "This project demonstrates a full-lifecycle 'Push-to-Deploy' pipeline, integrating advanced machine learning with CatBoost and Optuna tuning, data engineering with DVC and DAGsHub, and automated cloud infrastructure. It features a high-performance FastAPI backend and an interactive Streamlit dashboard for real-time risk assessment, all orchestrated with Docker and CI/CD via GitHub Actions.",
      techStack: ["CatBoost", "Optuna", "FastAPI", "Streamlit", "Docker", "DVC", "MLflow", "GitHub Actions", "Pytest"],
      year: "2026",
      links: {
        github: "https://github.com/anixes/ecommerce_delay_prediction",
        live: "#",
      },
      image: "/projects/ecommerce_delay_prediction_hero.png",
      featured: true,
    },
    {
      id: "customer-churn-prediction",
      title: "Customer Churn Prediction & Retention Strategy",
      description: "A predictive model designed to identify at-risk customers in a subscription-based business, providing actionable insights to improve retention rates.",
      techStack: ["Python", "XGBoost", "Pandas", "Streamlit", "MLflow"],
      year: "2025",
      links: {
        github: "https://github.com/animeshdwivedi/churn-prediction",
        live: "#",
      },
      image: "https://picsum.photos/seed/analytics/800/600",
      featured: true,
    },
    {
      id: "nlp-sentiment-analysis",
      title: "Real-Time Financial News Sentiment Analysis",
      description: "An NLP-powered application that scrapes financial news in real-time, analyzes sentiment using transformer models, and correlates it with stock market trends.",
      techStack: ["Python", "Hugging Face", "Kafka", "React", "GCP"],
      year: "2025",
      links: {
        github: "https://github.com/animeshdwivedi/financial-sentiment",
        live: "#",
      },
      image: "https://picsum.photos/seed/document/800/600",
      featured: false,
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
