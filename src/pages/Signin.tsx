import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useRef } from "react";

export function Signin() {
    const usernameRef = useRef<any>();
    const passwordRef = useRef<any>();
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
                username,
                password
        })
        const jwt = response.data.token;
        localStorage.setItem("token", jwt)
        navigate("/dashboard")
    }
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border min-w-48 p-8 rounded-xl">
            <Input reference={usernameRef} placeholder="Usermame"/>
            <Input reference={passwordRef} placeholder="Password"/>
            <div className="justify-center pt-4 flex">
                <Button onClick={signin} loading={false} variant="primary" text="Signin" fullWidth={true}/>
            </div>
            
        </div>
    </div>
}