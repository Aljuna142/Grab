// ContextMenu.js
import React from 'react';

const ContextMenu = ({ contextMenu, handleContextMenuOption }) => {
    if (!contextMenu.visible) return null;

    return (
        <div
            className="context-menu"
            style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }}
        >
            <div onClick={() => handleContextMenuOption('rename')}>Rename</div>
            <div onClick={() => handleContextMenuOption('delete')}>Delete</div>
        </div>
    );
};

export default ContextMenu;
