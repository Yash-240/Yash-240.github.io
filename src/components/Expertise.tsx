import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python Dataframes",
    "SQL",
    "Snowflake",
    "Apache Kafka",
    "Microsoft SQL Server",
    "PostgreSQL",
    "Tableau"
];

const labelsSecond = [
    "AWS",
    "Bitbucket",
    "Docker",
    "Linux",
    "Apache Airflow", 
    "Automic (Broadcom Inc.)"
];

const labelsThird = [
    "OpenAI",
    "Ollama",
    "Qdrant",
    "RAG",
    "Hugging Face",
    "n8n Agents"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Data Engineering and BI</h3>
                    <p>I have designed robust ETL pipelines, data models, and analytical systems that are scalable and power decision-making across enterprises.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cloud & Automation</h3>
                    <p>Once the design is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live on cloud platforms and on-Premise environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Stay relevant in the market by leveraging the latest AI models in the projects. I create intelligent AI solutions by integrating RAG framework, vector databases, and LLM agents for real-time knowledge interaction.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;