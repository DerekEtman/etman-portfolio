import React from "react";
import { useParams } from "react-router-dom";


export default function ProjectPage(props){

    const { id } = useParams();

    console.log("Project Page", id)
    return (
        <div>
            Project Page
        </div>
    )
}