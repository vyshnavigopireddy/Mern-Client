import React from 'react';
import { MyProvider } from "./Mycontext"; // Ensure the correct path
import Register from './component/Register';
import Login from './component/Login';

export default function Example() {
    return (
        <MyProvider>
            <Register />
            <Login />
        </MyProvider>
    );
}
