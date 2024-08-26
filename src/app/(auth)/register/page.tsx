"use client";

import { useAuthStore } from '@/store/Auth'
import React from 'react'

function RegisterPage() {
    const {createAccount, login} = useAuthStore();
    const [isLoading, setIsloading] = React.useState(false)
    const [error, setError] = React.useState("")


    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // collect data
        const formData = new FormData(e.currentTarget)
        const firstname = formData.get("firstname")
        const lastname = formData.get("lastname")
        const email = formData.get("email")
        const password = formData.get("password")

        // validate
        if (!firstname || !lastname || !email || !password) {
            setError(() => "Please fill out all the fields")
            return
        }

        // call the store
        setIsloading(true)
        setError("")

        const response = await createAccount(
            `${firstname} ${lastname}`,
            email?.toString(),
            password?.toString()
        )
        if (response.error){
            setError(() => response.error!.message)
        }else {
         const loginResponse = await login(email.toString(), password.toString())
          if (loginResponse){
            setError(() => loginResponse.error!.message)
          }
        }

        setIsloading(() => false)

    }

  return (
    <div>
        {error && (
            <p>{error}</p>
        )}

        <form onSubmit={handleSubmit}>

        </form>
    </div>
  )
}

export default RegisterPage