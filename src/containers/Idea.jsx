import React, { useState } from 'react';

const Idea = () => {
    const [title, setTitle] = useState({
        name: '',
        description: '',
    });
    const [filters, setFilters] = useState([]);
    const [steps, setSteps] = useState([]);

    return (
        <div id="idea-div">
            <div id="title-div">
                <input
                    type="text"
                    placeholder="Enter project name"
                    onChange={(e) => {
                        setTitle({
                            ...title,
                            name: e.target.value,
                        });
                    }} />
                <input
                    type="text"
                    placeholder="Enter project description"
                    onChange={(e) => {
                        setTitle({
                            ...title,
                            description: e.target.value,
                        });
                    }} />
            </div>
            <div id="filters-div">
                <input
                    type="text"
                    placeholder="Enter new filter"
                    onChange={(e) => {  // add map index value for dynamic value
                        const currentFilters = filters;
                        currentFilters[0].name = e.target.value;
                        setFilters([
                            ...currentFilters,
                        ]);
                    }} />
                <input
                    type="text"
                    placeholder="Enter filter abbreviation"
                    onChange={(e) => {  // add map index value for dynamic value
                        const currentFilters = filters;
                        currentFilters[0].abbreviation = e.target.value;
                        setFilters([
                            ...currentFilters,
                        ]);
                    }} />
            </div>
            <div id="steps-div">
                <input
                    type="text"
                    placeholder="Enter new step"
                    onChange={(e) => {  // add map index value for dynamic value
                        const currentSteps = steps;
                        currentSteps[0] = e.target.value;
                        setSteps([
                            ...currentSteps,
                        ]);
                    }} />
            </div>
        </div>
    );
};

export default Idea;
