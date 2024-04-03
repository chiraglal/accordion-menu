import React from 'react';
import Accordion from './Accordion'
const FAQ = () => {
    return (
        <div className='p-4 bg-gray-200 rounded-lg'>
            <Accordion title='What are the benefits of accordion menus?' answer='Saves space, neat organization, user-friendly, visually appealing, easy navigation.' />
            <Accordion title='What color is the sky?' answer='The sky is blue.' />
            <Accordion title='How many fingers do I have?' answer='You have ten fingers.' />
            <Accordion title='Where does the sun rise?' answer='The sun rises in the east' />
            <Accordion title='Who wrote "Romeo and Juliet"?' answer='William Shakespeare wrote it.' />
        </div>
    )
}

export default FAQ;