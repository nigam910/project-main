"use client";

import { useAuthStore } from '@/store/Auth'
import React from 'react'

function LoginPage() {
    const {login} = useAuthStore()
    const [isLoading, setIsloading] = React.useState(false)
    const [error, setError] = React.useState("")


    const handleSumbit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()


        //collect data
        const formData =new FormData(e.currentTarget)
        const email = formData.get("email")
        const password = formData.get("password")  

        //validate
        if (!email || !password) {
            setError(() => "Please fill all fields")
            return
        }

        //handle loading and error
        setIsloading(() => true)
        setError(() => "")

        //login store

        const loginResponse = await login(email.toString(), password.toString())

        if (loginResponse.error) {
            setError(() => loginResponse.error!.message)
        }
        setIsloading(() => false)
    }
  return (
    <div>LoginPage</div>
  )
}

export default LoginPage