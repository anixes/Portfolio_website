import React from 'react';
import { FadeIn } from '../components/FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    number: '01',
    name: 'Machine Learning & AI Modeling',
    description: 'Developing high-performance regression, classification, and forecasting models with CatBoost, LightGBM, and XGBoost, featuring hyperparameter optimization via Optuna and model interpretability with SHAP.',
  },
  {
    number: '02',
    name: 'MLOps & ML Engineering',
    description: 'Architecting robust model-serving infrastructure using FastAPI, containerizing applications with Docker, establishing automated CI/CD pipelines with GitHub Actions, and tracking experiments with MLflow and DVC.',
  },
  {
    number: '03',
    name: 'Data Analytics & Advanced SQL',
    description: 'Writing complex PostgreSQL/MySQL queries with window functions for operational KPI analytics, data preprocessing with Pandas/NumPy, and creating interactive visualization dashboards.',
  },
  {
    number: '04',
    name: 'Full-Stack Data Products',
    description: 'Building end-to-end data applications from scratch using FastAPI, React, Next.js, and Streamlit, deployed securely on AWS EC2 and Vercel cloud infrastructures.',
  },
  {
    number: '05',
    name: 'Pipeline Automation',
    description: 'Constructing robust data ingestion pipelines with asynchronous scraping, data integrity cleaning workflows, schema validation using Pandera, and thorough unit testing with Pytest.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="w-full bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2
            className="font-black uppercase text-[#0C0C0C] tracking-tight leading-none mb-16 sm:mb-20 md:mb-28 select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Skills
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="w-full flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {servicesData.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={30}
              className="w-full border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12">
                {/* Left Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none tracking-tight select-none shrink-0"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.number}
                </div>

                {/* Right Name + Description Stack */}
                <div className="flex flex-col gap-2 md:gap-3 flex-grow">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light text-[#0C0C0C] leading-relaxed max-w-2xl opacity-60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
