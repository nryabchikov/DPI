import React from 'react';

const Video = (props) => {
    const embedLink = props.link.replace("watch?v=", "embed/");
    return (
        <div className="ratio ratio-16x9">
            <iframe src={embedLink} title="YouTube video" allowFullScreen> </iframe>
        </div>
    );
};

export default Video;