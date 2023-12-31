import { useAuth } from "@/app/context/AuthContext";
import Button from '@mui/material/Button';
import { useEffect } from "react";

export default function Conponent1() {
    const { user, login, logout } = useAuth();

    useEffect(()=>{
        console.log(user)
    },[user])

    return (
        <div>
            <h1 className="font-bold text-xl text-red-600">Component 1</h1>
            <h2 className="text-3xl">User: {user ? "login" : "logout"}</h2>
            <div>
                <Button variant="contained" onClick={login}>Login</Button>
                {" "}
                <Button variant="contained" onClick={logout}>Logout</Button>
            </div>
        </div>
    );
}