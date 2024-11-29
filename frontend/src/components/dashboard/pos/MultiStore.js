/*import React from 'react';
import './MultiStore.css'; // Ensure this CSS file is in the same directory

const MultiStore = () => {
    return (
        <div className="multi-store-container">
            <div className="store-circle crown-excel">
                <span className="store-label">Crown Excel</span>
            </div>
            <div className="store-circle aljasara">
                <span className="store-label">Aljasara</span>
            </div>
            <div className="store-circle shared-product">
                <span className="store-label">Shared Product</span>
            </div>
        </div>
    );
};

export default MultiStore;*/


/*import React from 'react';
import './MultiStore.css'; // Ensure this CSS file is in the same directory

const MultiStore = () => {
    return (
        <div className="multi-store-container">
            <div className="store-circle crown-excel">
                <span className="store-label">Crown Excel</span>
            </div>
            <div className="store-circle aljasara">
                <span className="store-label">Aljasara</span>
            </div>
            <div className="store-circle shared-product">
                <span className="store-label">Shared Product</span>
            </div>
        </div>
    );
};

export default MultiStore;*/

/*import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import DashboardSidebar from '../DashboardSidebar'; // Import your sidebar
import './MultiStore.css'; // Ensure this CSS file is in the same directory

const MultiStore = () => {
    return (
        <div className="dashboard-layout">
            <DashboardSidebar /> {/* Include the sidebar }
            <div className="multi-store-content"> {/* Main content area }
                <div className="multi-store-container">
                    <Link to="/pos/crown-excel" className="store-circle crown-excel">
                        <span className="store-label">CROWN EXCEL</span>
                    </Link>
                    <Link to="/pos/aljasara" className="store-circle aljasara">
                        <span className="store-label">AL-JASARA</span>
                    </Link>
                    <Link to="/pos/store-1" className="store-circle shared-product">
                        <span className="store-label">STORE 1</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MultiStore;*/

/*WITH ADD NEW BUTTON import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'; // Import icon for adding stores
import DashboardSidebar from '../DashboardSidebar';
import './MultiStore.css';

const MultiStore = () => {
    // State to hold the list of stores
    const [stores, setStores] = useState([
        { name: 'CROWN EXCEL', path: '/pos/crown-excel', color: '#e20707' },
        { name: 'AL-JASARA', path: '/pos/aljasara', color: '#09447e' },
        { name: 'STORE 1', path: '/pos/store-1', color: '#468f46' }
    ]);

    // Function to add a new store
    const addStore = () => {
        const newStoreName = prompt('Enter the name of the new store:');
        const newStoreColor = prompt('Enter the color of the new store (hex code):');
        const newStore = {
            name: newStoreName,
            path: `/pos/${newStoreName.toLowerCase().replace(/\s/g, '-')}`, // Dynamic path generation
            color: newStoreColor
        };
        setStores([...stores, newStore]); // Update state with the new store
    };

    return (
        <div className="dashboard-layout">
            <DashboardSidebar />
            <div className="multi-store-content">
                <div className="multi-store-container">
                    {stores.map((store, index) => (
                        <Link to={store.path} key={index} className="store-circle" style={{ backgroundColor: store.color }}>
                            <span className="store-label">{store.name}</span>
                        </Link>
                    ))}
                    {/* Add Store Button }
                    <div className="add-store-circle" onClick={addStore}>
                        <FaPlus size={30} color="white" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultiStore;*/


/*GOOD LOOK import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import DashboardSidebar from '../DashboardSidebar'; // Import your sidebar
import './MultiStore.css'; // Ensure this CSS file is in the same directory

const MultiStore = () => {
    const [stores, setStores] = useState([
        { name: 'CROWN EXCEL', path: '/pos/crown-excel', color: '#e20707' },
        { name: 'AL-JASARA', path: '/pos/aljasara', color: '#09447e' },
        { name: 'STORE 1', path: '/pos/store-1', color: '#468f46' }
    ]);

    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const addNewStore = () => {
        const newStoreName = `Store ${stores.length + 1}`;
        const newStorePath = `/pos/store-${stores.length + 1}`;
        const newStoreColor = generateRandomColor();

        setStores([...stores, { name: newStoreName, path: newStorePath, color: newStoreColor }]);
    };

    return (
        <div className="dashboard-layout">
            <DashboardSidebar /> {/* Include the sidebar }
            <div className="multi-store-content"> {/* Main content area }
                <div className="multi-store-container">
                    {stores.map((store, index) => (
                        <Link
                            key={index}
                            to={store.path}
                            className="store-circle"
                            style={{ backgroundColor: store.color }}
                        >
                            <span className="store-label">{store.name}</span>
                        </Link>
                    ))}
                </div>
                <button className="add-store-button" onClick={addNewStore}>
                    + Add Store
                </button>
            </div>
        </div>
    );
};

export default MultiStore;GOOD LOOKINHG*/



/*import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import DashboardSidebar from '../DashboardSidebar'; // Import your sidebar
import './MultiStore.css'; // Ensure this CSS file is in the same directory

const MultiStore = () => {
    const [stores, setStores] = useState([
        { id: 1, name: 'CROWN EXCEL', path: '/pos/crown-excel', color: '#e20707' },
        { id: 2, name: 'AL-JASARA', path: '/pos/aljasara', color: '#09447e' },
        { id: 3, name: 'STORE 1', path: '/pos/store-1', color: '#468f46' }
    ]);
    const [isEditing, setIsEditing] = useState(null); // Track which store is being renamed
    const [newName, setNewName] = useState(''); // New store name during rename

    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const addNewStore = () => {
        const newStoreName = `Store ${stores.length + 1}`;
        const newStorePath = `/pos/store-${stores.length + 1}`;
        const newStoreColor = generateRandomColor();

        setStores([...stores, { id: stores.length + 1, name: newStoreName, path: newStorePath, color: newStoreColor }]);
    };

    const renameStore = (id) => {
        const updatedStores = stores.map((store) =>
            store.id === id ? { ...store, name: newName || store.name } : store
        );
        setStores(updatedStores);
        setIsEditing(null); // Exit editing mode after renaming
    };

    return (
        <div className="dashboard-layout">
            <DashboardSidebar /> {/* Include the sidebar }
            <div className="multi-store-content"> {/* Main content area }
                <div className="multi-store-container">
                    {stores.map((store) => (
                        <div
                            key={store.id}
                            className="store-circle"
                            style={{ backgroundColor: store.color }}
                        >
                            {isEditing === store.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={newName}
                                        onChange={(e) => setNewName(e.target.value)}
                                        placeholder={store.name}
                                        className="rename-input"
                                    />
                                    <button onClick={() => renameStore(store.id)}>Save</button>
                                </>
                            ) : (
                                <Link
                                    to={store.path}
                                    className="store-link"
                                    onDoubleClick={() => {
                                        setIsEditing(store.id);
                                        setNewName(store.name); // Set current name in input
                                    }}
                                >
                                    <span className="store-label">{store.name}</span>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
                <button className="add-store-button" onClick={addNewStore}>
                    + Add Store
                </button>
            </div>
        </div>
    );
};

export default MultiStore;*/

/*PERFECT WITHOIT APIimport React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import DashboardSidebar from '../DashboardSidebar'; // Import your sidebar
import './MultiStore.css'; // Ensure this CSS file is in the same directory

const MultiStore = () => {
    const [stores, setStores] = useState([
        { id: 1, name: 'CROWN EXCEL', path: '/pos/crown-excel', color: '#e20707' },
        { id: 2, name: 'AL-JASARA', path: '/pos/aljasara', color: '#09447e' },
        { id: 3, name: 'STORE 1', path: '/pos/store-1', color: '#468f46' }
    ]);
    const [contextMenu, setContextMenu] = useState({ visible: false, storeId: null, x: 0, y: 0 });
    const [isRenaming, setIsRenaming] = useState(null);
    const [newName, setNewName] = useState('');

    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const addNewStore = () => {
        const newStoreName = `Store ${stores.length + 1}`;
        const newStorePath = `/pos/store-${stores.length + 1}`;
        const newStoreColor = generateRandomColor();

        setStores([...stores, { id: stores.length + 1, name: newStoreName, path: newStorePath, color: newStoreColor }]);
    };

    const handleRightClick = (e, storeId) => {
        e.preventDefault();
        setContextMenu({
            visible: true,
            storeId: storeId,
            x: e.pageX,
            y: e.pageY
        });
    };

    const renameStore = () => {
        const updatedStores = stores.map((store) =>
            store.id === contextMenu.storeId ? { ...store, name: newName || store.name } : store
        );
        setStores(updatedStores);
        setContextMenu({ visible: false, storeId: null });
        setIsRenaming(null); // Exit renaming mode
    };

    const deleteStore = () => {
        const updatedStores = stores.filter((store) => store.id !== contextMenu.storeId);
        setStores(updatedStores);
        setContextMenu({ visible: false, storeId: null });
    };

    const handleContextMenuOption = (option) => {
        if (option === 'rename') {
            setIsRenaming(contextMenu.storeId);
        } else if (option === 'delete') {
            deleteStore();
        }
    };

    return (
        <div className="dashboard-layout">
            <DashboardSidebar /> {/* Include the sidebar }
            <div className="multi-store-content"> {/* Main content area}
                <div className="multi-store-container">
                    {stores.map((store) => (
                        <div
                            key={store.id}
                            className="store-circle"
                            style={{ backgroundColor: store.color }}
                            onContextMenu={(e) => handleRightClick(e, store.id)} // Right-click event
                        >
                            {isRenaming === store.id ? (
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
                                <Link
                                    to={store.path}
                                    className="store-link"
                                >
                                    <span className="store-label">{store.name}</span>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
                <button className="add-store-button" onClick={addNewStore}>
                    + Add Store
                </button>

                {contextMenu.visible && (
                    <div
                        className="context-menu"
                        style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }}
                    >
                        <div onClick={() => handleContextMenuOption('rename')}>Rename</div>
                        <div onClick={() => handleContextMenuOption('delete')}>Delete</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MultiStore;PERFECT WITHOUT API
*/


/*pakka with url import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardSidebar from '../DashboardSidebar';
import './MultiStore.css';
import axios from 'axios';

const MultiStore = () => {
    const [stores, setStores] = useState([]);
    const [contextMenu, setContextMenu] = useState({ visible: false, storeId: null, x: 0, y: 0 });
    const [isRenaming, setIsRenaming] = useState(null); // Store ID being renamed
    const [newName, setNewName] = useState('');

    useEffect(() => {
        // Fetch stores from API when component mounts
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                setStores(response.data);
            } catch (error) {
                console.error('Error fetching stores:', error);
            }
        };
        fetchStores();
    }, []);

    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const addNewStore = async () => {
        const newStoreName = `Store ${stores.length + 1}`;
        const newStorePath = `/pos/store-${stores.length + 1}`;
        const newStoreColor = generateRandomColor();

        try {
            const response = await axios.post('http://localhost:5000/api/v1/stores', {
                name: newStoreName,
                path: newStorePath,
                color: newStoreColor,
            });
            setStores([...stores, response.data]);
        } catch (error) {
            console.error('Error creating store:', error);
        }
    };

    const handleRightClick = (e, storeId) => {
        e.preventDefault();
        setContextMenu({
            visible: true,
            storeId: storeId,
            x: e.pageX,
            y: e.pageY
        });
    };

    const renameStore = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/v1/stores/${isRenaming}`, {
                name: newName || stores.find(store => store._id === isRenaming).name,
            });
            const updatedStores = stores.map(store =>
                store._id === isRenaming ? response.data : store
            );
            setStores(updatedStores);
            setIsRenaming(null); // Close all rename inputs
            setNewName(''); // Reset the new name input
        } catch (error) {
            console.error('Error updating store:', error);
        }
    };

    const deleteStore = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/v1/stores/${contextMenu.storeId}`);
            const updatedStores = stores.filter(store => store._id !== contextMenu.storeId);
            setStores(updatedStores);
            setContextMenu({ visible: false, storeId: null });
        } catch (error) {
            console.error('Error deleting store:', error);
        }
    };

    const handleContextMenuOption = (option) => {
        if (option === 'rename') {
            setIsRenaming(contextMenu.storeId); // Set the store ID for renaming
            setContextMenu({ visible: false, storeId: null }); // Hide context menu after choosing rename
        } else if (option === 'delete') {
            deleteStore();
        }
    };

    return (
        <div className="dashboard-layout">
            <DashboardSidebar />
            <div className="multi-store-content">
                <div className="multi-store-container">
                    {stores.map((store) => (
                        <div
                            key={store._id}
                            className="store-circle"
                            style={{ backgroundColor: store.color }}
                            onContextMenu={(e) => handleRightClick(e, store._id)}
                        >
                            {isRenaming === store._id ? (
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
                    ))}
                </div>
                <button className="add-store-button" onClick={addNewStore}>
                    + Add Store
                </button>

                {contextMenu.visible && (
                    <div
                        className="context-menu"
                        style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }}
                    >
                        <div onClick={() => handleContextMenuOption('rename')}>Rename</div>
                        <div onClick={() => handleContextMenuOption('delete')}>Delete</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MultiStore;pakka with url */

/*defaultimport React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardSidebar from '../DashboardSidebar';
import './MultiStore.css';
import axios from 'axios';

const MultiStore = () => {
    const [stores, setStores] = useState([
        { _id: '1', name: 'Crown Excel', path: '/pos/crown-excel', color: 'red' },
        { _id: '2', name: 'Al-Jasara', path: '/pos/al-jasara', color: 'blue' },
        { _id: '3', name: 'WH1', path: '/pos/wh1', color: 'black' },
    ]);
    const [contextMenu, setContextMenu] = useState({ visible: false, storeId: null, x: 0, y: 0 });
    const [isRenaming, setIsRenaming] = useState(null);
    const [newName, setNewName] = useState('');

    useEffect(() => {
        // Fetch additional stores from API when component mounts
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                setStores((prevStores) => [...prevStores, ...response.data]); // Append fetched stores
            } catch (error) {
                console.error('Error fetching stores:', error);
            }
        };
        fetchStores();
    }, []);

    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const addNewStore = async () => {
        const newStoreName = `Store ${stores.length + 1}`;
        const newStorePath = `/pos/store-${stores.length + 1}`;
        const newStoreColor = generateRandomColor();

        try {
            const response = await axios.post('http://localhost:5000/api/v1/stores', {
                name: newStoreName,
                path: newStorePath,
                color: newStoreColor,
            });
            setStores([...stores, response.data]);
        } catch (error) {
            console.error('Error creating store:', error);
        }
    };

    const handleRightClick = (e, storeId) => {
        e.preventDefault();
        setContextMenu({
            visible: true,
            storeId: storeId,
            x: e.pageX,
            y: e.pageY
        });
    };

    const renameStore = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/v1/stores/${isRenaming}`, {
                name: newName || stores.find(store => store._id === isRenaming).name,
            });
            const updatedStores = stores.map(store =>
                store._id === isRenaming ? response.data : store
            );
            setStores(updatedStores);
            setIsRenaming(null);
            setNewName('');
        } catch (error) {
            console.error('Error updating store:', error);
        }
    };

    const deleteStore = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/v1/stores/${contextMenu.storeId}`);
            const updatedStores = stores.filter(store => store._id !== contextMenu.storeId);
            setStores(updatedStores);
            setContextMenu({ visible: false, storeId: null });
        } catch (error) {
            console.error('Error deleting store:', error);
        }
    };

    const handleContextMenuOption = (option) => {
        if (option === 'rename') {
            setIsRenaming(contextMenu.storeId);
            setContextMenu({ visible: false, storeId: null });
        } else if (option === 'delete') {
            deleteStore();
        }
    };

    return (
        <div className="dashboard-layout">
            <DashboardSidebar />
            <div className="multi-store-content">
                <div className="multi-store-container">
                    {stores.map((store) => (
                        <div
                            key={store._id}
                            className="store-circle"
                            style={{ backgroundColor: store.color }}
                            onContextMenu={(e) => handleRightClick(e, store._id)}
                        >
                            {isRenaming === store._id ? (
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
                    ))}
                </div>
                <button className="add-store-button" onClick={addNewStore}>
                    + Add Store
                </button>

                {contextMenu.visible && (
                    <div
                        className="context-menu"
                        style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }}
                    >
                        <div onClick={() => handleContextMenuOption('rename')}>Rename</div>
                        <div onClick={() => handleContextMenuOption('delete')}>Delete</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MultiStore;default*/


/*double time occurs import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardSidebar from '../DashboardSidebar';
import './MultiStore.css';
import axios from 'axios';

const MultiStore = () => {
    const [stores, setStores] = useState([
        { _id: '1', name: 'Crown Excel', path: '/pos/crown-excel', color: 'red' },
        { _id: '2', name: 'Al-Jasara', path: '/pos/al-jasara', color: 'blue' },
        { _id: '3', name: 'WH1', path: '/pos/wh1', color: 'black' },
    ]);
    const [contextMenu, setContextMenu] = useState({ visible: false, storeId: null, x: 0, y: 0 });
    const [isRenaming, setIsRenaming] = useState(null);
    const [newName, setNewName] = useState('');

    useEffect(() => {
        // Fetch additional stores from API when component mounts
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                console.log('Fetched stores from API:', response.data); // Debug log
                setStores((prevStores) => [...prevStores, ...response.data]); // Append fetched stores
            } catch (error) {
                console.error('Error fetching stores:', error);
            }
        };
        fetchStores();
    }, []);

    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };





    return store;
    add newStore
    lengthy stop 

    const addNewStore = async () => {
        const newStoreName = `Store ${stores.length + 1}`;
        const newStorePath = `/pos/store-${stores.length + 1}`;
        const newStoreColor = generateRandomColor();

        try {
            const response = await axios.post('http://localhost:5000/api/v1/stores', {
                name: newStoreName,
                path: newStorePath,
                color: newStoreColor,
            });
            console.log('New store created:', response.data); // Debug log
            setStores((prevStores) => [...prevStores, response.data]); // Update the stores state
        } catch (error) {
            console.error('Error creating store:', error);
        }
    };

    const handleRightClick = (e, storeId) => {
        e.preventDefault();
        setContextMenu({
            visible: true,
            storeId: storeId,
            x: e.pageX,
            y: e.pageY
        });
    };

    const renameStore = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/v1/stores/${isRenaming}`, {
                name: newName || stores.find(store => store._id === isRenaming).name,
            });
            const updatedStores = stores.map(store =>
                store._id === isRenaming ? response.data : store
            );
            console.log('Store renamed:', response.data); // Debug log
            setStores(updatedStores);
            setIsRenaming(null);
            setNewName('');
        } catch (error) {
            console.error('Error updating store:', error);
        }
    };

    const deleteStore = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/v1/stores/${contextMenu.storeId}`);
            const updatedStores = stores.filter(store => store._id !== contextMenu.storeId);
            console.log('Store deleted:', contextMenu.storeId); // Debug log
            setStores(updatedStores);
            setContextMenu({ visible: false, storeId: null });
        } catch (error) {
            console.error('Error deleting store:', error);
        }
    };

    const handleContextMenuOption = (option) => {
        if (option === 'rename') {
            setIsRenaming(contextMenu.storeId);
            setContextMenu({ visible: false, storeId: null });
        } else if (option === 'delete') {
            deleteStore();
        }
    };

    return (
        <div className="dashboard-layout">
            <DashboardSidebar />
            <div className="multi-store-content">
                <div className="multi-store-container">
                    {stores.map((store) => (
                        <div
                            key={store._id}
                            className="store-circle"
                            style={{ backgroundColor: store.color }}
                            onContextMenu={(e) => handleRightClick(e, store._id)}
                        >
                            {isRenaming === store._id ? (
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
                    ))}
                </div>
                <button className="add-store-button" onClick={addNewStore}>
                    + Add Store
                </button>

                {contextMenu.visible && (
                    <div
                        className="context-menu"
                        style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }}
                    >
                        <div onClick={() => handleContextMenuOption('rename')}>Rename</div>
                        <div onClick={() => handleContextMenuOption('delete')}>Delete</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MultiStore;*/



/*good with api import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardSidebar from '../DashboardSidebar';
import './MultiStore.css';
import axios from 'axios';

const MultiStore = () => {
    const [stores, setStores] = useState([]); // Initially empty

    const [contextMenu, setContextMenu] = useState({ visible: false, storeId: null, x: 0, y: 0 });
    const [isRenaming, setIsRenaming] = useState(null);
    const [newName, setNewName] = useState('');

    useEffect(() => {
        // Fetch all stores from the API including the default ones
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                console.log('Fetched stores from API:', response.data);
                setStores(response.data); // Set fetched stores from backend
            } catch (error) {
                console.error('Error fetching stores:', error);
            }
        };
        fetchStores();
    }, []);

    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const addNewStore = async () => {
        const newStoreName = `Store ${stores.length + 1}`;
        const newStorePath = `/pos/store-${stores.length + 1}`;
        const newStoreColor = generateRandomColor();

        try {
            const response = await axios.post('http://localhost:5000/api/v1/stores', {
                name: newStoreName,
                path: newStorePath,
                color: newStoreColor,
            });
            console.log('New store created:', response.data);
            setStores((prevStores) => [...prevStores, response.data]); // Add new store to the list
        } catch (error) {
            console.error('Error creating store:', error);
        }
    };

    const handleRightClick = (e, storeId) => {
        e.preventDefault();
        setContextMenu({
            visible: true,
            storeId: storeId,
            x: e.pageX,
            y: e.pageY
        });
    };

    const renameStore = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/v1/stores/${isRenaming}`, {
                name: newName || stores.find(store => store._id === isRenaming).name,
            });
            const updatedStores = stores.map(store =>
                store._id === isRenaming ? response.data : store
            );
            console.log('Store renamed:', response.data);
            setStores(updatedStores);
            setIsRenaming(null);
            setNewName('');
        } catch (error) {
            console.error('Error updating store:', error);
        }
    };

    const deleteStore = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/v1/stores/${contextMenu.storeId}`);
            const updatedStores = stores.filter(store => store._id !== contextMenu.storeId);
            console.log('Store deleted:', contextMenu.storeId);
            setStores(updatedStores);
            setContextMenu({ visible: false, storeId: null });
        } catch (error) {
            console.error('Error deleting store:', error);
        }
    };

    const handleContextMenuOption = (option) => {
        if (option === 'rename') {
            setIsRenaming(contextMenu.storeId);
            setContextMenu({ visible: false, storeId: null });
        } else if (option === 'delete') {
            deleteStore();
        }
    };

    return (
        <div className="dashboard-layout">
            <DashboardSidebar />
            <div className="multi-store-content">
                <div className="multi-store-container">
                    {stores.map((store) => (
                        <div
                            key={store._id}
                            className="store-circle"
                            style={{ backgroundColor: store.color }}
                            onContextMenu={(e) => handleRightClick(e, store._id)}
                        >
                            {isRenaming === store._id ? (
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
                    ))}
                </div>
                <button className="add-store-button" onClick={addNewStore}>
                    + Add Store
                </button>

                {contextMenu.visible && (
                    <div
                        className="context-menu"
                        style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }}
                    >
                        <div onClick={() => handleContextMenuOption('rename')}>Rename</div>
                        <div onClick={() => handleContextMenuOption('delete')}>Delete</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MultiStore;*/


/*import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardSidebar from '../DashboardSidebar';
import './MultiStore.css';
import axios from 'axios';
import SalesEntry from './SalesEntry'; // Import SalesEntry component

const MultiStore = () => {
    const [stores, setStores] = useState([]); // Initially empty
    const [contextMenu, setContextMenu] = useState({ visible: false, storeId: null, x: 0, y: 0 });
    const [isRenaming, setIsRenaming] = useState(null);
    const [newName, setNewName] = useState('');
    const [showSalesEntry, setShowSalesEntry] = useState(false); // State to control Sales Entry visibility

    // Fetch stores from API
    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                console.log('Fetched stores from API:', response.data);
                setStores(response.data);
            } catch (error) {
                console.error('Error fetching stores:', error);
            }
        };
        fetchStores();
    }, []);

    // Generate random color for store circles
    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Add a new store
    const addNewStore = async () => {
        const newStoreName = `Store ${stores.length + 1}`;
        const newStorePath = `/pos/store-${stores.length + 1}`;
        const newStoreColor = generateRandomColor();

        try {
            const response = await axios.post('http://localhost:5000/api/v1/stores', {
                name: newStoreName,
                path: newStorePath,
                color: newStoreColor,
            });
            console.log('New store created:', response.data);
            setStores((prevStores) => [...prevStores, response.data]);
        } catch (error) {
            console.error('Error creating store:', error);
        }
    };

    // Handle right-click context menu
    const handleRightClick = (e, storeId) => {
        e.preventDefault();
        setContextMenu({
            visible: true,
            storeId: storeId,
            x: e.pageX,
            y: e.pageY
        });
    };

    // Rename a store
    const renameStore = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/v1/stores/${isRenaming}`, {
                name: newName || stores.find(store => store._id === isRenaming).name,
            });
            const updatedStores = stores.map(store =>
                store._id === isRenaming ? response.data : store
            );
            console.log('Store renamed:', response.data);
            setStores(updatedStores);
            setIsRenaming(null);
            setNewName('');
        } catch (error) {
            console.error('Error updating store:', error);
        }
    };

    // Delete a store
    const deleteStore = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/v1/stores/${contextMenu.storeId}`);
            const updatedStores = stores.filter(store => store._id !== contextMenu.storeId);
            console.log('Store deleted:', contextMenu.storeId);
            setStores(updatedStores);
            setContextMenu({ visible: false, storeId: null });
        } catch (error) {
            console.error('Error deleting store:', error);
        }
    };

    // Handle context menu options
    const handleContextMenuOption = (option) => {
        if (option === 'rename') {
            setIsRenaming(contextMenu.storeId);
            setContextMenu({ visible: false, storeId: null });
        } else if (option === 'delete') {
            deleteStore();
        }
    };

    return (
        <div className="dashboard-layout">
            <DashboardSidebar />
            <div className="multi-store-content">
                <div className="multi-store-container">
                    {stores.map((store) => (
                        <div
                            key={store._id}
                            className="store-circle"
                            style={{ backgroundColor: store.color }}
                            onContextMenu={(e) => handleRightClick(e, store._id)}
                        >
                            {isRenaming === store._id ? (
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
                    ))}
                </div>
                <button className="add-store-button" onClick={addNewStore}>
                    + Add Store
                </button>
                <button className="add-store-button" onClick={() => setShowSalesEntry(!showSalesEntry)}>
                    {showSalesEntry ? 'Hide Sales Entry' : 'Show Sales Entry'}
                </button>

                {contextMenu.visible && (
                    <div
                        className="context-menu"
                        style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }}
                    >
                        <div onClick={() => handleContextMenuOption('rename')}>Rename</div>
                        <div onClick={() => handleContextMenuOption('delete')}>Delete</div>
                    </div>
                )}
            </div>
            {showSalesEntry && <SalesEntry />} {/* Render SalesEntry component conditionally }
        </div>
    );
};




export default  mulitistire ;


export default MultiStore;sales entry */





/*last tdy import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardSidebar from '../DashboardSidebar';
import './MultiStore.css';
import axios from 'axios';

const MultiStore = () => {
    const [stores, setStores] = useState([]); // Initially empty
    const [contextMenu, setContextMenu] = useState({ visible: false, storeId: null, x: 0, y: 0 });
    const [isRenaming, setIsRenaming] = useState(null);
    const [newName, setNewName] = useState('');

    // Fetch stores from API
    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                console.log('Fetched stores from API:', response.data);
                setStores(response.data);
            } catch (error) {
                console.error('Error fetching stores:', error);
            }
        };
        fetchStores();
    }, []);

    // Generate random color for store circles
    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Add a new store
    const addNewStore = async () => {
        const newStoreName = `Store ${stores.length + 1}`;
        const newStorePath = `/pos/store-${stores.length + 1}`;
        const newStoreColor = generateRandomColor();

        try {
            const response = await axios.post('http://localhost:5000/api/v1/stores', {
                name: newStoreName,
                path: newStorePath,
                color: newStoreColor,
            });
            console.log('New store created:', response.data);
            setStores((prevStores) => [...prevStores, response.data]);
        } catch (error) {
            console.error('Error creating store:', error);
        }
    };

    // Handle right-click context menu
    const handleRightClick = (e, storeId) => {
        e.preventDefault();
        setContextMenu({
            visible: true,
            storeId: storeId,
            x: e.pageX,
            y: e.pageY
        });
    };

    // Rename a store
    const renameStore = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/v1/stores/${isRenaming}`, {
                name: newName || stores.find(store => store._id === isRenaming).name,
            });
            const updatedStores = stores.map(store =>
                store._id === isRenaming ? response.data : store
            );
            console.log('Store renamed:', response.data);
            setStores(updatedStores);
            setIsRenaming(null);
            setNewName('');
        } catch (error) {
            console.error('Error updating store:', error);
        }
    };

    // Delete a store
    const deleteStore = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/v1/stores/${contextMenu.storeId}`);
            const updatedStores = stores.filter(store => store._id !== contextMenu.storeId);
            console.log('Store deleted:', contextMenu.storeId);
            setStores(updatedStores);
            setContextMenu({ visible: false, storeId: null });
        } catch (error) {
            console.error('Error deleting store:', error);
        }
    };

    // Handle context menu options
    const handleContextMenuOption = (option) => {
        if (option === 'rename') {
            setIsRenaming(contextMenu.storeId);
            setContextMenu({ visible: false, storeId: null });
        } else if (option === 'delete') {
            deleteStore();
        }
    };

    return (
        <div className="dashboard-layout">
            <DashboardSidebar />
            <div className="multi-store-content">
                <div className="multi-store-container">
                    {stores.map((store) => (
                        <div
                            key={store._id}
                            className="store-circle"
                            style={{ backgroundColor: store.color }}
                            onContextMenu={(e) => handleRightClick(e, store._id)}
                        >
                            {isRenaming === store._id ? (
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
                    ))}
                </div>
                <button className="add-store-button" onClick={addNewStore}>
                    + Add Store
                </button>

                {contextMenu.visible && (
                    <div
                        className="context-menu"
                        style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }}
                    >
                        <div onClick={() => handleContextMenuOption('rename')}>Rename</div>
                        <div onClick={() => handleContextMenuOption('delete')}>Delete</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MultiStore ;  last try */

/*good import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardSidebar from '../DashboardSidebar';
import './MultiStore.css';
import axios from 'axios';

const MultiStore = () => {
    const [stores, setStores] = useState([]);
    const [contextMenu, setContextMenu] = useState({ visible: false, storeId: null, x: 0, y: 0 });
    const [isRenaming, setIsRenaming] = useState(null);
    const [newName, setNewName] = useState('');

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                console.log('Fetched stores from API:', response.data);
                setStores(response.data);
            } catch (error) {
                console.error('Error fetching stores:', error.response ? error.response.data : error.message);
            }
        };
        fetchStores();
    }, []);

    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const addNewStore = async () => {
        const newStoreName = `Store ${stores.length + 1}`;
        // Add the "/dashboard" prefix to the path
        const newStorePath = `/pos/store-${stores.length + 1}`; // Store path without dashboard
        const newStoreColor = generateRandomColor();

        try {
            const response = await axios.post('http://localhost:5000/api/v1/stores', {
                name: newStoreName,
                path: newStorePath,  // Store path without dashboard
                color: newStoreColor,
            });
            console.log('New store created:', response.data);
            setStores((prevStores) => [...prevStores, response.data]);
        } catch (error) {
            console.error('Error creating store:', error.response ? error.response.data : error.message);
        }
    };

    const handleRightClick = (e, storeId) => {
        e.preventDefault();
        setContextMenu({
            visible: true,
            storeId: storeId,
            x: e.pageX,
            y: e.pageY
        });
    };

    const renameStore = async () => {
        try {
            const storeToRename = stores.find(store => store._id === isRenaming);
            const response = await axios.put(`http://localhost:5000/api/v1/stores/${isRenaming}`, {
                name: newName || storeToRename.name,
            });
            const updatedStores = stores.map(store =>
                store._id === isRenaming ? response.data : store
            );
            console.log('Store renamed:', response.data);
            setStores(updatedStores);
            setIsRenaming(null);
            setNewName('');
        } catch (error) {
            console.error('Error updating store:', error.response ? error.response.data : error.message);
        }
    };

    const deleteStore = async () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this store?');
        if (!confirmDelete) return;

        try {
            await axios.delete(`http://localhost:5000/api/v1/stores/${contextMenu.storeId}`);
            const updatedStores = stores.filter(store => store._id !== contextMenu.storeId);
            console.log('Store deleted:', contextMenu.storeId);
            setStores(updatedStores);
            setContextMenu({ visible: false, storeId: null });
        } catch (error) {
            console.error('Error deleting store:', error.response ? error.response.data : error.message);
        }
    };

    const handleContextMenuOption = (option) => {
        if (option === 'rename') {
            setIsRenaming(contextMenu.storeId);
            setContextMenu({ visible: false, storeId: null });
        } else if (option === 'delete') {
            deleteStore();
        }
    };

    return (
        <div className="dashboard-layout">
            <DashboardSidebar />
            <div className="multi-store-content">
                <div className="multi-store-container">
                    {stores.map((store) => (
                        <div
                            key={store._id}
                            className="store-circle"
                            style={{ backgroundColor: store.color }}
                            onContextMenu={(e) => handleRightClick(e, store._id)}
                        >
                            {isRenaming === store._id ? (
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
                                // Link now points to the path with "/dashboard"
                                <Link to={`/dashboard${store.path}`} className="store-link">
                                    <span className="store-label">{store.name}</span>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
                <button className="add-store-button" onClick={addNewStore}>
                    + Add Store
                </button>

                {contextMenu.visible && (
                    <div
                        className="context-menu"
                        style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }}
                    >
                        <div onClick={() => handleContextMenuOption('rename')}>Rename</div>
                        <div onClick={() => handleContextMenuOption('delete')}>Delete</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MultiStore;good redirection*/


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DashboardSidebar from '../DashboardSidebar';
import './MultiStore.css';
import axios from 'axios';

const MultiStore = () => {
    const [stores, setStores] = useState([]);
    const [contextMenu, setContextMenu] = useState({ visible: false, storeId: null, x: 0, y: 0 });
    const [isRenaming, setIsRenaming] = useState(null);
    const [newName, setNewName] = useState('');

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/v1/stores');
                console.log('Fetched stores from API:', response.data);
                setStores(response.data);
            } catch (error) {
                console.error('Error fetching stores:', error.response ? error.response.data : error.message);
            }
        };
        fetchStores();
    }, []);

    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const addNewStore = async () => {
        const newStoreName = `Store ${stores.length + 1}`;
        const newStorePath = `/pos/store-${stores.length + 1}`; 
        const newStoreColor = generateRandomColor();

        try {
            const response = await axios.post('http://localhost:5000/api/v1/stores', {
                name: newStoreName,
                path: newStorePath,  
                color: newStoreColor,
            });
            console.log('New store created:', response.data);
            setStores((prevStores) => [...prevStores, response.data]);
        } catch (error) {
            console.error('Error creating store:', error.response ? error.response.data : error.message);
        }
    };

    const handleRightClick = (e, storeId) => {
        e.preventDefault();
        setContextMenu({
            visible: true,
            storeId: storeId,
            x: e.pageX,
            y: e.pageY
        });
    };

    const renameStore = async () => {
        try {
            const storeToRename = stores.find(store => store._id === isRenaming);
            const response = await axios.put(`http://localhost:5000/api/v1/stores/${isRenaming}`, {
                name: newName || storeToRename.name,
            });
            const updatedStores = stores.map(store =>
                store._id === isRenaming ? response.data : store
            );
            console.log('Store renamed:', response.data);
            setStores(updatedStores);
            setIsRenaming(null);
            setNewName('');
        } catch (error) {
            console.error('Error updating store:', error.response ? error.response.data : error.message);
        }
    };

    const deleteStore = async () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this store?');
        if (!confirmDelete) return;

        try {
            await axios.delete(`http://localhost:5000/api/v1/stores/${contextMenu.storeId}`);
            const updatedStores = stores.filter(store => store._id !== contextMenu.storeId);
            console.log('Store deleted:', contextMenu.storeId);
            setStores(updatedStores);
            setContextMenu({ visible: false, storeId: null });
        } catch (error) {
            console.error('Error deleting store:', error.response ? error.response.data : error.message);
        }
    };

    const handleContextMenuOption = (option) => {
        if (option === 'rename') {
            setIsRenaming(contextMenu.storeId);
            setContextMenu({ visible: false, storeId: null });
        } else if (option === 'delete') {
            deleteStore();
        }
    };

    return (
        <div className="dashboard-layout">
            <DashboardSidebar />
            <div className="multi-store-content">
                <div className="multi-store-container">
                    {stores.map((store) => (
                        <div
                            key={store._id}
                            className="store-circle"
                            style={{ backgroundColor: store.color }}
                            onContextMenu={(e) => handleRightClick(e, store._id)}
                        >
                            {isRenaming === store._id ? (
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
                                <Link to={`/dashboard${store.path}`} className="store-link">
                                    <span className="store-label">{store.name}</span>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
                <button className="add-store-button" onClick={addNewStore}>
                    + Add Store
                </button>

                {contextMenu.visible && (
                    <div
                        className="context-menu"
                        style={{ top: `${contextMenu.y}px`, left: `${contextMenu.x}px` }}
                    >
                        <div onClick={() => handleContextMenuOption('rename')}>Rename</div>
                        <div onClick={() => handleContextMenuOption('delete')}>Delete</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MultiStore;

