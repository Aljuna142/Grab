// StoreForm.js
import React from 'react';

const StoreForm = ({ newName, setNewName, saveStore }) => {
    return (
        <div>
            <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Enter store name"
                className="store-form-input"
            />
            <button className="save-button" onClick={saveStore}>Save</button>
        </div>
    );
};

export default StoreForm;
