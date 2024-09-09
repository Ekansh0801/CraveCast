import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    const [email,setEmail] = useState<string>("");
    const loading:boolean = false;
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
        <form className="flex flex-col gap-5 md:border w-full max-w-md rounded-lg mx-4 p-8">
            <div className="text-center">
                <h1 className="font-extrabold text-2xl mb-2">Forgot Password</h1>
                <p className="text-sm text-gray-600">Enter you email address to reset your password</p>
            </div>
            <div className="relative w-full">
                <Input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Enter our email" className="pl-10"/>
                <Mail className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none"/>
            </div>
            {
                loading ? (<Button disabled className="bg-orange hover:bg-hoverOrange"><Loader2 className="mr-2 w-4 h-4 animate-spin"/>Please wait</Button>) : (<Button className="bg-orange hover:bg-hoverOrange">Send Reset Link</Button>)
            }
            <span>Back to {" "} <Link className="text-blue-500" to="/login">Login</Link></span>
        </form>
    </div>
  )
}

export default ForgotPassword