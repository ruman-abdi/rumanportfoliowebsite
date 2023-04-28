import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Moi-Girls, Mandera, Kenya
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          High School Diploma
        </h4>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Kabarak University, Nakuru, Kenya
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Business Information Technonology </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2022 - present"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Atilim University, Ankara, Turkey
        </h3>

        <h4 className="vertical-timeline-element-subtitle">
          Master Degree
        </h4>

        <p> Software Engineering </p>
      </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="sep 2020 - june 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Internship - Ascc Logistic
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Nairobi, Kenya
          </h4>
          <p> Providing technical support and Training to end-users</p>
          <p>  Implementing and Managing security measures</p>
          <p>Monitoring network performance</p>

        
        </VerticalTimelineElement>

        
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
