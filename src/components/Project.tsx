import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import '../assets/styles/Project.scss';

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">

        {/* 1️⃣ Retrieval-Augmented Generation (RAG) Framework */}
        <div className="project">
          <a href="https://github.com/Yash-240" target="_blank" rel="noreferrer">
            <img src={mock01} className="zoom" alt="RAG Framework" width="100%" />
          </a>
          <a href="https://github.com/Yash-240" target="_blank" rel="noreferrer">
            <h2>Retrieval-Augmented Generation (RAG) Framework</h2>
          </a>
          <p>
            Built an intelligent RAG pipeline integrating <strong>Ollama</strong>, 
            <strong> Qdrant</strong>, and <strong>n8n</strong> to enable context-aware, 
            real-time interaction with enterprise data.
          </p>
          <p><b>Tech stack:</b> Ollama · Qdrant · n8n · Python · REST API · LLMs</p>
        </div>

        {/* 2️⃣ Real-time Event Streaming with Kafka & AWS */}
        <div className="project">
          <a href="https://github.com/Yash-240/taxi-rides-kafka-data-engineering-project" target="_blank" rel="noreferrer">
            <img src={mock02} className="zoom" alt="Kafka Project" width="100%" />
          </a>
          <a href="https://github.com/Yash-240/taxi-rides-kafka-data-engineering-project" target="_blank" rel="noreferrer">
            <h2>Real-time Event Streaming with Apache Kafka & AWS</h2>
          </a>
          <p>
            Implemented a scalable streaming pipeline using <strong>Apache Kafka</strong> on 
            <strong> AWS EC2</strong> to transport data between producers and consumers, 
            and stored events in <strong>AWS S3</strong> for analytics.
          </p>
          <p><b>Tech stack:</b> Apache Kafka · AWS EC2 · S3 · Python · Streaming</p>
        </div>

        {/* 3️⃣ Real-time Data Pipeline & Analytical Processing */}
        <div className="project">
          <a href="https://github.com/Yash-240/data-pipeline" target="_blank" rel="noreferrer">
            <img src={mock03} className="zoom" alt="Data Pipeline" width="100%" />
          </a>
          <a href="https://github.com/Yash-240/data-pipeline" target="_blank" rel="noreferrer">
            <h2>Real-time Data Pipeline & Analytical Processing</h2>
          </a>
          <p>
            Developed an automated ETL pipeline that monitors directories for new data files, 
            processes them dynamically, and loads the transformed data into a relational database 
            for real-time analytics and reporting.
          </p>
          <p><b>Tech stack:</b> Python · SQL · CRON Jobs · File watcher</p>
        </div>

        {/* 4️⃣ Machine Learning Research Lab */}
        <div className="project">
          <a href="https://github.com/Yash-240/Detection_of_Missing_Lab_Tests_for_Diagnosis.git" target="_blank" rel="noreferrer">
            <img src={mock04} className="zoom" alt="ML Research" width="100%" />
          </a>
          <a href="https://github.com/Yash-240/Detection_of_Missing_Lab_Tests_for_Diagnosis.git" target="_blank" rel="noreferrer">
            <h2>Machine Learning Research Lab</h2>
          </a>
          <p>
            Conducted ML-based research to identify missing epidemiological factors from 
            clinical records using ML model, data preprocessing, and explainability techniques.
          </p>
          <p><b>Tech stack:</b> Python · Pandas · SparQL · Scikit-learn · Knowledge graphs</p>
        </div>

      </div>
    </div>
  );
}

export default Project;
