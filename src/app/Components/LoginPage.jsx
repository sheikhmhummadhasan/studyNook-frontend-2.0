"use client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Input } from "@heroui/react";
import { createAuthClient } from "better-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const LoginPage = () => {

  const authClient = createAuthClient();

  const signIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const handelLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const Data = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
      email: Data.email,
      password: Data.password,
    });
    if (data) {
      toast.success(`Login Successfull ${data.user.name}`);
    }
    if (error) {
      toast.error("Somthing is wrong Try again Later...");
    }
    redirect("/");
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-">
        <div className="w-full max-w-md rounded-2xl border border-slate-50 bg-white p-6 shadow-lg sm:p-8">
          <div className="mb-7 text-center">
            <h1 className="text-3xl font-bold text-cyan-600">Login</h1>
          </div>

          <form onSubmit={handelLogin} className="flex flex-col space-y-4">
            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="Enter your email"
              isRequired
              variant="bordered"
            />

            <Input
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              isRequired
              variant="bordered"
              endContent={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-slate-500"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <EyeSlash className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </button>
              }
            />

            <Button
              type="submit"
              className="w-full bg-cyan-600 font-semibold text-white hover:bg-cyan-700"
            >
              Login
            </Button>
          </form>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs text-slate-400">OR</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <Button
            type="button"
            variant="bordered"
            className="w-full border border-slate-200 bg-white font-medium text-slate-700"
            onClick={signIn}
          >
            <span className="text-lg font-bold text-blue-500">G</span>
            Sign in with Google
          </Button>

          <p className="mt-6 text-center text-sm text-slate-500">
            Dont have an account?{" "}
            <a
              href="/signup"
              className="font-semibold text-cyan-600 hover:text-cyan-700"
            >
              Create Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;