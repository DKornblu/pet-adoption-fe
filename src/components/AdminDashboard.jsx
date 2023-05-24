import React, { useEffect, useContext } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { PetsContextInstance } from '../context/PetsContext';
import { UsersContextInstance } from '../context/UsersContext';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {

    const { fetchPets, petList } = useContext(PetsContextInstance);
    const { fetchUsers, usersList } = useContext(UsersContextInstance);

    const navigate = useNavigate();

    useEffect(() => {
        console.log("admin", usersList)
        console.log("admin", petList)
    }, [])

    return (
        <div className="adminDashContainer">
            <h1>Admin Dashboard</h1>
            <div className="mainContainer">
                <div className="adminList">
                <h3>User List</h3>
                    <ul>
                        {usersList.map((user) =>
                            <li key={user.id}>
                                <div style={{ marginRight: '.5rem' }}>{`${user.first_name} ${user.last_name} |`}</div>
                                <div>{`User id: ${user.id} |`}
                                    <button onClick={() => navigate(`/users/${user.id}`)}><AiOutlineInfoCircle /></button>
                                </div>
                            </li>)}
                    </ul>
                </div>
                <div className="adminList">
                <h3>Pet List</h3>
                    <ul>
                        {petList.map((pet) =>
                            <li key={pet.id}>
                                <div style={{ marginRight: '.5rem' }}>{`${pet.name} (${pet.type}) |`}</div>
                                <div>{`Pet id: ${pet.id} |`}
                                    <button onClick={() => navigate(`/pets/${pet.id}`)}><AiOutlineInfoCircle /></button>
                                </div>
                            </li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard