import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";

function Card(props) {
    return (
        <div className="gpt3__blog-container_article">
            <div className="gpt3__blog-container_article-image">
                <NavLink to={props.figure.url}>
                    <img alt="" src={props.figure.main_photo} />
                </NavLink>
            </div>
            <div className="gpt3__blog-container_article-content">
                <div>
                    <h3>{props.figure.full_name}</h3>
                </div>
            </div>
        </div>
    );
}

export default Card;
