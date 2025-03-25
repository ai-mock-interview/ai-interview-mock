"use client";

import { SignUp } from '@clerk/nextjs'

export default function AuthForm() {
  return (
    <section className="bg-gray-200">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-6 lg:h-full">
          <img
            src="https://as1.ftcdn.net/v2/jpg/05/88/10/28/1000_F_588102895_AxkhLTjt3pQasSnaH3oxKyhpJIC7d0ib.jpg"
            alt="Background"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />
        </section>

        <div className="flex items-center justify-center p-8 sm:p-12 lg:col-span-6">
          <div className="w-full max-w-md">
            <SignUp/>
          </div>
        </div>
      </div>
    </section>
  );
}

