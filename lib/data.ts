export const portfolioData = {
  personalInfo: {
    name: "Animesh Dwivedi",
    domain: "anixes.in",
    role: "Data Scientist & Machine Learning Engineer",
    tagline: "Building intelligent systems and extracting actionable insights from complex data.",
    bio: "I am a Data Scientist and Machine Learning Engineer focused on building scalable, data-driven solutions. With a strong foundation in Python, SQL, and MLOps, I specialize in translating complex datasets into actionable insights. I am currently developing a portfolio of end-to-end machine learning applications, including a real estate price prediction and recommendation engine.",
    email: "animesh@anixes.in",
    github: "https://github.com/animeshdwivedi",
    linkedin: "https://linkedin.com/in/animeshdwivedi",
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
      id: "gurgaon-real-estate",
      title: "Gurgaon Real Estate Price Prediction & Recommendation Engine",
      description: "An end-to-end machine learning pipeline that predicts real estate prices in Gurgaon based on various property features and recommends similar properties to users.",
      longDescription: "This project implements a full MLOps lifecycle, from data scraping and cleaning to model deployment using FastAPI and Docker. It features a custom recommendation engine that uses collaborative filtering and content-based approaches to suggest properties to users.",
      techStack: ["Python", "Scikit-Learn", "FastAPI", "PostgreSQL", "Docker", "AWS"],
      year: "2026",
      links: {
        github: "https://github.com/animeshdwivedi/gurgaon-real-estate",
        live: "#",
      },
      image: "https://picsum.photos/seed/realestate/800/600",
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
