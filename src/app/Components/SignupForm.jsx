"use client";
import { useState } from "react";
import { Button, Input } from "@heroui/react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { createAuthClient } from "better-auth/react";
import { signUp } from "../lib/auth-client";


const SignupForm = () => {

  const authClient = createAuthClient();
  const signIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const handelSignup = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const Data = Object.fromEntries(formData.entries());

    const { data, error } = await signUp.email({
      name: Data.name,
      email: Data.email,
      phone: Data.phone,
      image:
        typeof Data.image === "string" && Data.image ? Data.image : undefined,
      password: Data.password,
    });
    console.log(data);
    if (data) {
      toast.success("Singup Successfull");
    }
    if (error) {
      toast.error("Please Try Agin Later...!");
    }
    redirect("/login");
  };
  const [showPassword, setShowPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
        <div className="mb-7 text-center">
          <h1 className="text-3xl font-bold text-cyan-600">Create Account</h1>
          <p className="mt-2 text-sm text-slate-500">Sign up to get started</p>
        </div>

        <form onSubmit={handelSignup} className="space-y-4">
          <Input
            label="Full Name"
            name="name"
            placeholder="Enter your full name"
            isRequired
            variant="bordered"
          />

          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="Enter your email"
            isRequired
            variant="bordered"
          />

          <Input
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            isRequired
            variant="bordered"
          />

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Profile Image
            </label>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setImagePreview(URL.createObjectURL(file));
                }
              }}
              className="w-full rounded-xl border border-slate-200 p-3 text-sm file:mr-3 file:rounded-lg file:border-0 file:bg-cyan-50 file:px-3 file:py-2 file:text-cyan-700"
            />

            {imagePreview && (
              <img
                src={imagePreview}
                alt="Profile preview"
                className="mt-3 h-20 w-20 rounded-full border border-slate-200 object-cover"
              />
            )}
          </div>

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
            Create Account
          </Button>
        </form>

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs text-slate-400">OR CONTINUE WITH</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <Button onClick={signIn} type="button" className="w-full" variant="tertiary">
          <span className="font-bold text-lg text-blue-500">G</span>
          Sign in with Google
        </Button>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-semibold text-cyan-600 hover:text-cyan-700"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;