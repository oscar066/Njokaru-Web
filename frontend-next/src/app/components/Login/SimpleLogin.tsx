import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LogIn, Loader2, UserCircle2 } from 'lucide-react'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-green-50">
      <div className="w-full max-w-md px-4 py-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col space-y-2 text-center mb-6">
            <UserCircle2 className="mx-auto h-12 w-12 text-green-700" />
            <h1 className="text-2xl font-semibold tracking-tight text-green-700">Welcome to NJOKARU</h1>
            <p className="text-sm text-green-600">
              Enter your email to sign in to your account
            </p>
          </div>
          <div className="grid gap-6">
            <form onSubmit={onSubmit}>
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <Label className="sr-only text-green-700" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                    className="border-green-300 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div className="grid gap-1">
                  <Label className="sr-only text-green-700" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    id="password"
                    placeholder="Password"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="current-password"
                    autoCorrect="off"
                    disabled={isLoading}
                    className="border-green-300 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <Button disabled={isLoading} className="bg-green-700 hover:bg-green-800 text-white">
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <LogIn className="mr-2 h-4 w-4" />
                  )}
                  Sign In
                </Button>
              </div>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-green-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-green-600">
                  Or continue with
                </span>
              </div>
            </div>
            <Button variant="outline" type="button" disabled={isLoading} className="border-green-300 text-green-700 hover:bg-green-100">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                </svg>
              )}{" "}
              Google
            </Button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-green-600">
              <a
                href="/reset-password"
                className="hover:text-green-800 underline underline-offset-4"
              >
                Forgot your password?
              </a>
            </p>
            <p className="mt-2 text-sm text-green-600">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="hover:text-green-800 underline underline-offset-4"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}