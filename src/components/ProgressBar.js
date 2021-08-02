import React from "react";
import "./ProgressBar.css";

export const ProgressBar = ({percent}) => {
    return (
        <div class="ap-progress-bar">
            <div class="ap-progress-content" style={{width: percent + "%"}}></div>
        </div>
    );
}