import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {ReactComponent as JobIcon} from "../../../data/imgs/svgs/job.svg";

const Timeline = (props) => {
    let jobIconStyles = {background: "#f53c3c"}
    return (
        <VerticalTimeline>
            {props.info.map((element) => {
                let style;
                let icon;
                if (element.icon === "job") {
                    style = jobIconStyles
                    icon = <JobIcon/>
                }
                return (
                    <VerticalTimelineElement
                        key={element.id}
                        date={element.date}
                        dateClassName="date"
                        iconStyle={style}
                        icon={icon}
                    >
                        <h3 className="vertical-timeline-element-title">
                            {element.title}
                        </h3>
                        <p id="description">{element.description}</p>
                    </VerticalTimelineElement>
                );
            })}
        </VerticalTimeline>
    );
};

export default Timeline;