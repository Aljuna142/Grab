import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdministratorDetail } from '../../store/slices/administratorsSlice';
import { useParams } from 'react-router-dom';

const AdministratorDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const administrator = useSelector(state => state.administrators.detail);

    useEffect(() => {
        dispatch(fetchAdministratorDetail(id));
    }, [dispatch, id]);

    if (!administrator) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Administrator Details</h2>
            <p>Name: {administrator.name}</p>
            <p>Email: {administrator.email}</p>
        </div>
    );
};

export default AdministratorDetail;
