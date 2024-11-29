// StoreItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const StoreItem = ({ store, isRenaming, newName, setNewName, renameStore, handleRightClick }) => {
    return (
        <div
            className="store-circle"
            style={{ backgroundColor: store.color }}
            onContextMenu={(e) => handleRightClick(e, store.id)} // Right-click event
        >
            {isRenaming ? (
                <>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        placeholder={store.name}
                        className="rename-input"
                    />
                    <button className="save-button" onClick={renameStore}>Save</button>
                </>
            ) : (
                <Link to={store.path} className="store-link">
                    <span className="store-label">{store.name}</span>
                </Link>
            )}
        </div>
    );
};

export default StoreItem;
