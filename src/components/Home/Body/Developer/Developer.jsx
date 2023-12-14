import React from "react";
import "./Developer.css";
import { useTranslation } from "react-i18next";

const Developer = (props) => {
    const { t } = useTranslation();
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-btn wow animate__animated  animate__bounceIn">
            <a href={props.info.github_link}><img src={props.info.profile_picture} alt=""/></a>
                <p>{props.info.name}</p>
            </div>

        </div>
    );
};

export default Developer;


