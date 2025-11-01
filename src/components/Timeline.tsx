import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          {/* 1️⃣ Business Intelligence Engineer – 1&1 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2022 – Sep 2024"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            contentStyle={{ background: "white", color: "rgb(39,40,34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
          >
            <h3 className="vertical-timeline-element-title">
              Business Intelligence Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              1&amp;1 Telecommunication SE, Germany
            </h4>
            <p>
              ETL pipelines for Enterprise BI Team, Automated processing 10 M+ daily transactions.
            </p>
          </VerticalTimelineElement>

          {/* 2️⃣ Machine Learning Research Lab – University of Koblenz */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2023 – Jul 2023"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Machine Learning Research
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of Koblenz, Germany
            </h4>
            <p>
              Utilized BERT NER, Knowledge graphs and quantitative evaluations.
            </p>
          </VerticalTimelineElement>

          {/* 3️⃣ Master of Science – University of Koblenz */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Oct 2021 – Sep 2024"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              MSc Data Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of Koblenz, Germany
            </h4>
            <p>
              Data Science, Machine Learning, and BI.
              Thesis: Sentiment Analysis using Hierarchical Attention Networks (HAN).
            </p>
          </VerticalTimelineElement>

          {/* 4️⃣ Data Engineer – Infosys */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2019 – Jul 2021"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Infosys Ltd, India <br /> (Client: Intel Corporation)
            </h4>
            <p>
              ETL pipelines for global supply chain analytics, 
              Migrated historical data to Snowflake DW.
            </p>
          </VerticalTimelineElement>

          {/* 5️⃣ Intern – Infosys */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2018 – Apr 2019"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Infosys Ltd, India</h4>
            <p>
              Training in Python, RDBMS, Big Data &amp; Reporting.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
