'use client'

import { useForm } from "react-hook-form"
import { signupAction } from "@/actions/auth.action"
import Link from "next/link"
import { SignupDto } from "@/types/auth.dto"

export default function RegisterForm() {
    const { register, handleSubmit, reset } = useForm<SignupDto>();
    const onSubmit = (data: SignupDto) => {
        signupAction(data)
    }
    const handleCancel = () => {
        reset()
        console.log('cancel')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstName" id="firstname">First Name</label>
            <input className="border border-gray-300 rounded-md px-4 py-2" type="text" {...register("firstName")} />
            <br />
            <label htmlFor="lastName" id="lastname">Last Name</label>
            <input className="border border-gray-300 rounded-md px-4 py-2" type="text" {...register("lastName")} />
            <br />
            <label htmlFor="email" id="email">Email</label>
            <input className="border border-gray-300 rounded-md px-4 py-2" type="email" {...register("email")} />
            <br />
            <label htmlFor="password" id="password">Password</label>
            <input className="border border-gray-300 rounded-md px-4 py-2" type="password" {...register("password")} />
            <br />
            <label htmlFor="confirmPassword" id="confirmPassword">Confirm Password</label>
            <input className="border border-gray-300 rounded-md px-4 py-2" type="password" {...register("confirmPassword")} />
            <br />
            already have an account? <Link href="/signin">Login</Link>
            <button className="border border-gray-300 rounded-md px-4 py-2" type="button" onClick={handleCancel}>Cancel</button>
            <button className="border border-gray-300 rounded-md px-4 py-2" type="submit">Register</button>
        </form>
    )

}