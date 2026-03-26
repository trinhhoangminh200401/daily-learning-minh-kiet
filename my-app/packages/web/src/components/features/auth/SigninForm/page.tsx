'use client'

import { SigninDto } from "@/types/auth.dto"
import { signinAction } from "@/actions/auth.action"
import { useForm } from "react-hook-form"
import Link from "next/link"

export default function SigninForm() {
    const { register, handleSubmit, reset } = useForm<SigninDto>();
    const onSubmit = (data: SigninDto) => {
        signinAction(data)
    }
    const handleCancel = () => {
        reset()
        console.log('cancel')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email" id="email">Email</label>
            <input className="border border-gray-300 rounded-md px-4 py-2" type="email" {...register("email")} />
            <br />
            <label htmlFor="password" id="password">Password</label>
            <input className="border border-gray-300 rounded-md px-4 py-2" type="password" {...register("password")} />
            <br />
            <button className="border border-gray-300 rounded-md px-4 py-2" type="button" onClick={handleCancel}>Cancel</button>
            <button className="border border-gray-300 rounded-md px-4 py-2" type="submit">Login</button>
            <br />
            don't have an account? <Link href="/signup">Register</Link>
        </form>
    )

}