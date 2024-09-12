import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PaintingList from '../components/PaintingList.js';
import { Link } from 'react-router-dom';
import { RiImageAddFill } from "react-icons/ri";

function PaintingsPage({ setPainting }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [paintings, setPaintings] = useState([]);

    // RETRIEVE the entire list of paintings
    const loadPaintings = async () => {
        const response = await fetch('/paintings');
        const paintings = await response.json();
        setPaintings(paintings);
    } 
    
    // ADD a single painting
    const onAddPainting = async painting => {
        setPainting(painting);
        redirect("/AddPaintingPageForm");
    }

    // UPDATE a single painting
    const onEditPainting = async painting => {
        setPainting(painting);
        redirect("/EditPaintingPageForm");
    }


    // DELETE a single painting  
    const onDeletePainting = async _id => {
        const response = await fetch(`/paintings/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/paintings');
            const paintings = await getResponse.json();
            setPaintings(paintings);
        } else {
            console.error(`Painting not deleted, try again. = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the paintings
    useEffect(() => {
        loadPaintings();
    }, []);

    // DISPLAY the paintings
    return (
        <>
            <h2>Painting Portfolio</h2>
            <p>Log of completed paintings or works in progress. Includes the title, completion date,
                the primary medium used, and its width and height (assume inches). Click the icon or link below to add 
                a painting, and the icons in each row below to edit or delete a painting.
            </p>
            <RiImageAddFill className="custom-icon" onClick={() => onAddPainting(paintings)}/>
            <label for="addButton">
                    <button
                        type="submit"
                        onClick={onAddPainting}
                        id="addButton"
                    >Add Painting</button></label>
            <PaintingList 
                paintings={paintings} 
                onEdit={onEditPainting} 
                onDelete={onDeletePainting} 
            />
        </>
    );
}

export default PaintingsPage;