'use server'

import { SigninDto, SignupDto } from "@/types/auth.dto"

export async function signupAction(formData: SignupDto) {
    const firstName = formData.firstName
    const lastName = formData.lastName
    const email = formData.email
    const password = formData.password
    const confirmPassword = formData.confirmPassword
    console.log('signupAction', firstName, lastName, email, password, confirmPassword)
}

export async function signinAction(formData: SigninDto) {
    const email = formData.email
    const password = formData.password
    console.log('signinAction', email, password)
}

export async function logoutAction() {
    console.log('logoutAction')
}
