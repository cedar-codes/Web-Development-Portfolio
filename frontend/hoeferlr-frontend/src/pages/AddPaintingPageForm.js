import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddPaintingPageForm = () => {

    const [artTitle, setTitle]       = useState('');
    const [day, setDay]         = useState('');
    const [medium, setMedium] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');

    
    const redirect = useNavigate();

    const addPainting = async () => {
        const newPainting = { artTitle, day, medium, width, height };
        const response = await fetch('/paintings', {
            method: 'post',
            body: JSON.stringify(newPainting),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Painting successfully added to collection!`);
            redirect("/PaintingsPage");
        } else {
            alert(`Painting not added, all values are required. = ${response.status}`);
            redirect("/PaintingsPage");
        }
    };


    return (
        <>
        <article>
            <h2>Add a painting</h2>
            <p>Create a listing for each painting completed, with its title, completion day, primary medium used and its width and height in inches.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which painting are you adding?</legend>
                    <label for="artTitle">Painting title</label>
                    <input
                        type="text"
                        required placeholder="Title of the painting"
                        autofocus
                        value={artTitle}
                        onChange={e => setTitle(e.target.value)} 
                        id="artTitle" />
                    
                    <label for="day">Completion Date</label>
                    <input
                        type="date"
                        value={day}
                        required placeholder="Completion Date"
                        onChange={e => setDay(e.target.value)} 
                        id="day" />

                    <label for="medium">Medium</label>
                    <input
                        type="text"
                        required placeholder="Acrylic, Oil, ..."
                        value={medium}
                        onChange={e => setMedium(e.target.value)} 
                        id="medium" />
                    
                    <label for="width">Width</label>
                    <input
                        type="number"
                        required placeholder="Width (in)"
                        value={width}
                        onChange={e => setWidth(e.target.value)} 
                        id="width" />


                    <label for="height">Height</label>
                    <input
                        type="number"
                        required placeholder="Height (in)"
                        value={height}
                        onChange={e => setHeight(e.target.value)} 
                        id="height" />
                 

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addPainting}
                        id="submit"
                    >Add to the collection</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddPaintingPageForm;