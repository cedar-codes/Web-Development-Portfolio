import React from 'react';
import Painting from './Painting';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function PaintingList({ paintings, onDelete, onEdit }) {
    return (
        <table id="paintings">
            <caption>Log of Paintings:</caption>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Medium</th>
                    <th>Width</th>
                    <th>Height</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {paintings.map((painting, i) => 
                    <Painting
                        painting={painting} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default PaintingList;
