import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export function Signup() {

    const usernameRef = useRef<any>();
    const passwordRef = useRef<any>();
    const navigate = useNavigate();

    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(BACKEND_URL + "/api/v1/signup", {
                username,
                password
        })
        navigate("/signin");
        alert("You have signed up")
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border min-w-48 p-8 rounded-xl">
            <Input reference={usernameRef} placeholder="Usermame"/>
            <Input reference={passwordRef} placeholder="Password"/>
            <div className="justify-center pt-4 flex">
                <Button onClick={signup} loading={false} variant="primary" text="Signup" fullWidth={true}/>
            </div>
            
        </div>
    </div>
}