// data.js - Data storage and management for Garbage Management System

// Initialize data arrays from localStorage
let reports = JSON.parse(localStorage.getItem('reports')) || [];
let users = JSON.parse(localStorage.getItem('users')) || [];
let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

// Functions to save data to localStorage
function saveReports() {
    localStorage.setItem('reports', JSON.stringify(reports));
}

function saveUsers() {
    // Ensure admin flag is set for admin users
    users = users.map(user => ({ ...user, isAdmin: user.username === 'admin' || user.username === 'Ganeshog' }));
    localStorage.setItem('users', JSON.stringify(users));
}

function saveContacts() {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

// Function to save current user session
function saveCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

// Function to get current user
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

// Function to clear current user
function clearCurrentUser() {
    localStorage.removeItem('currentUser');
}
