import { useState, FormEvent } from "react"
import { toast, ToastContainer } from "react-toastify"
import { useRouter } from "next/router"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { loginWithEmailAndPassword } from "../../services/firebase"

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailIsInvalid, setEmailIsInvalid] = useState(false)
  const [passwordIsInvalid, setPasswordIsInvalid] = useState(false)

  const router = useRouter()

  async function handleSubmitFormLogin(e: FormEvent) {
    e.preventDefault()

    if (email.trim() === '') {
      setEmailIsInvalid(true)
      return;
    } else {
      setEmailIsInvalid(false)
    }

    if (password.trim() === '') {
      setPasswordIsInvalid(true)
      return;
    } else {
      setPasswordIsInvalid(false)
    }

    const logged = await loginWithEmailAndPassword(email, password)
    if (!logged) {
      toast.error('Email ou senha incorretos')
      return;
    }
    router.push('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmitFormLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="mb-4 text-gray-600 text-3xl">Login</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              E-mail
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Insira seu e-mail de login"
              value={email}
              invalid={emailIsInvalid}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Senha
            </label>
            <Input
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              invalid={passwordIsInvalid}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <Button type="submit">
              Entrar
            </Button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2021 F-Soft Tecnologia. All rights reserved.
        </p>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}