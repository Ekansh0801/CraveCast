import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { LoginInputState, userLoginSchema } from "@/schema/userSchema"
import { Loader2, LockKeyhole, Mail } from "lucide-react" 
import { ChangeEvent, FormEvent, useState } from "react"
import { Link } from "react-router-dom"

//defining type of variables using typescript
//method - 1
// interface LoginInputState{
//     email:"string",
//     password:"string"
// }
//method - 2
// type LoginInputState = {
//     email:string,
//     password:string,    
// }
const Login = () => {
    const [input,setInput] = useState<LoginInputState>({
        email:"",
        password:"",
    });

    const [error,setError] = useState<Partial<LoginInputState>>({})
    const changeEventHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target;
        setInput({...input,[name]:value});
    };
    const loginSubmitHandler = (e:FormEvent) => {
        e.preventDefault();
        //form validation check start
        const result = userLoginSchema.safeParse(input);
        if(!result.success){
            const fieldErrors = result.error.formErrors.fieldErrors;
            setError(fieldErrors as Partial<LoginInputState>);
            return;
        }
        //Login api implementation starts
        console.log(input);
    }
    const loading = false;
  return (
    <div className="flex justify-center items-center min-h-screen">
        <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4">
            <div className="mb-4">
                <h1 className="font-bold text-2xl">CRAVECAST</h1>
            </div>
            <div className="mb-4">
            <div className="relative">
            <Input type="email" name="email" value={input.email} onChange={changeEventHandler} placeholder="Enter your email" className="pl-10 focus-visible:ring-1"/>
            <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"/>
            {
                error && <span className="text-sm text-red-500">{error.email}</span>
            }
            </div>
            </div>
            <div className="mb-4">
            <div className="relative">
            <Input type="password" name="password" value={input.password} onChange={changeEventHandler} placeholder="Enter your password" className="pl-10 focus-visible:ring-1"/>
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"/>
            {
                error && <span className="text-sm text-red-500">{error.password}</span>
            }
            </div>
            </div>
            <div className="mb-10">
                {
                    loading ? (<Button disabled className="w-full bg-orange hover:bg-hoverOrange"><Loader2 className="animate-spin mr-2 h-4 w-4"/>Please Wait</Button>) : (<Button type="submit" className="w-full bg-orange hover:bg-hoverOrange">Login</Button>)
                }
                <div className="mt-4">    
                <Link to="/forgot-password" className="hover:text-blue-500 hover:underline">Forgot Password?</Link>
                </div>
            </div>
            <Separator/>
            <p className="mt-2">Don't have an account?{" "}<Link to="/signup" className="text-blue-500">Signup</Link></p>
        </form>
    </div>
  )
}

export default Login