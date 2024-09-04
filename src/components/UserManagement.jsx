import React, { useState } from 'react';
import './UserManagement.css';

const UserManagement = () => {
  // Sample data for users (this would typically come from an API)
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', role: 'Farmer', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', role: 'Supplier', email: 'jane@example.com' },
    { id: 3, name: 'Mike Johnson', role: 'Admin', email: 'mike@example.com' },
    { id: 4, name: 'Emily White', role: 'Farmer', email: 'emily@example.com' },
  ]);

  // State to handle editing
  const [editingUser, setEditingUser] = useState(null);
  const [newUserData, setNewUserData] = useState({ name: '', role: '', email: '' });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUserData({ ...newUserData, [name]: value });
  };

  // Function to delete a user
  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  // Function to save edited user data
  const saveUser = () => {
    setUsers(users.map(user => (user.id === editingUser ? { ...user, ...newUserData } : user)));
    setEditingUser(null);
    setNewUserData({ name: '', role: '', email: '' });
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.email}</td>
              <td>
                <button className="edit-button" onClick={() => setEditingUser(user.id)}>Edit</button>
                <button className="delete-button" onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingUser !== null && (
        <div className="edit-user-form">
          <h3>Edit User</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newUserData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={newUserData.role}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newUserData.email}
            onChange={handleInputChange}
          />
          <button className="save-button" onClick={saveUser}>Save</button>
          <button className="cancel-button" onClick={() => setEditingUser(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
