import React, { useState } from 'react';

const Idea = () => {
    const [title, setTitle] = useState({
        name: '',
        description: '',
    });
    const [filters, setFilters] = useState([]);
    const [steps, setSteps] = useState([]);

    return (
        <h1>This may be the start of something...</h1>
    );
};

export default Idea;
