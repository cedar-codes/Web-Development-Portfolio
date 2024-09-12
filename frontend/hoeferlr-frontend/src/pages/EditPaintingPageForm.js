import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditPaintingPageForm = ({ paintingToEdit }) => {
 
    const [artTitle, setTitle]       = useState(paintingToEdit.artTitle);
    const [day, setDay]         = useState(paintingToEdit.day);
    const [medium, setMedium] = useState(paintingToEdit.medium);
    const [width, setWidth] = useState(paintingToEdit.width);
    const [height, setHeight] = useState(paintingToEdit.height);
  
    
    const redirect = useNavigate();

    const editPainting = async () => {
        const response = await fetch(`/paintings/${paintingToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                artTitle: artTitle, 
                day: day, 
                medium: medium,
                width: width,
                height: height
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Painting successfully updated!`);
        } else {
            const errMessage = await response.json();
            alert(`Painting not updated, double check values ${response.status}. ${errMessage.Error}`);
        }
        redirect("/PaintingsPage");
    }

    return (
        <>
        <article>
            <h2>Edit a painting</h2>
            <p>Update the painting's details here, changing its title, date, mediums used, or its dimensions (assume inches).</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which painting are you editing?</legend>
                    <label for="artTitle">Painting title</label>
                    <input
                        type="text"
                        value={artTitle}
                        required placeholder="Title of the painting"
                        autofocus
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
                        value={medium}
                        required placeholder="Acrylic, Oil, ..."
                        onChange={e => setMedium(e.target.value)} 
                        id="medium" />
                    
                    <label for="width">Width</label>
                    <input
                        type="number"
                        value={width}
                        required placeholder="Width (in)"
                        onChange={e => setWidth(e.target.value)} 
                        id="width" />
                   

                    <label for="height">Height</label>
                    <input
                        type="number"
                        value={height}
                        required placeholder="Height (in)"
                        onChange={e => setHeight(e.target.value)} 
                        id="height" />
                    
                    <label for="submit">
                    <button
                        onClick={editPainting}
                        id="submit"
                    >Save updates to the collection</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditPaintingPageForm;