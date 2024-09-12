import React from 'react';

// *** Change the icons, function names, and parameters 
// to fit your portfolio topic and schema. ***

import { RiDeleteBin2Fill} from 'react-icons/ri';
import { RiEditFill } from "react-icons/ri";

function Painting({ painting, onEdit, onDelete }) {
    return (
        <tr>
            <td>{painting.artTitle}</td>
            <td>{painting.day.slice(0,10)}</td>
            <td>{painting.medium}</td>
            <td>{painting.width}</td>
            <td>{painting.height}</td>
            {/* Update these icons to something that matches your style. */}
            <td><RiDeleteBin2Fill onClick={() => onDelete(painting._id)} /></td>
            <td><RiEditFill  onClick={() => onEdit(painting)} /></td>
        </tr>
    );
}

export default Painting;