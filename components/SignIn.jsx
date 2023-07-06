'use client';
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";
import Link from "next/link";
import { signIn } from 'next-auth/react';
import SigninButton from "./SigninButton";

export default function SignIn() {
    async function googleSignIn() {
        signIn("google", { callbackUrl: "/board" });
    }

    return (
        <div className="flex md:flex-row w-screen h-screen ">
            <div className="hidden bg-black md:w-1/3 md:flex items-center justify-center shrink-0">
                <h1 className="text-whiteF font-bold text-7xl font-Montserrat ">Board.</h1>
            </div>
            {/* sign in start */}
            <div className="bg-whiteF md:w-2/3 w-full flex flex-col items-center justify-center shrink-0 text-black">

                <div className="flex flex-col items-start gap-5 md:w-96 w-80">
                    <div className="flex flex-col">
                        <h2 className=" font-Montserrat text-4xl font-bold">Sign In</h2>
                        <p className="flex font-Lato text-base font-normal">Sign in to your account</p>
                    </div>

                    <div className="flex flex-row justify-between font-Montserrat font-normal w-full ">
                        {/* <SigninButton /> */}
                        <button className="auth-btn" onClick={googleSignIn}>
                            <div>
                                <FcGoogle className="auth-icon" />
                                <p className="auth-p">Sign in with Google</p>
                            </div>
                        </button>
                        <button className="auth-btn">
                            <div>
                                <DiApple className="auth-icon text-gray-new01 " />
                                <p className="auth-p">Sign in with Apple</p>
                            </div>
                        </button>
                    </div>

                    <div className="flex items-center justify-center w-full shrink-0 bg-white rounded-[1.25rem]">
                        <form action="#" method="post" className="flex flex-col w-full p-7 gap-5" >

                            <div className="flex flex-col w-full">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="Enter your email" required
                                    className="form-input"
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" name="password" id="password" placeholder="Enter your password" required
                                    className="form-input"
                                />
                            </div>
                            <Link href='/resetPassword' className=" text-new-blue text-base font-normal font-Lato">Forgot password?</Link>

                            <button className="h-10 shrink-0 bg-black rounded-2lg text-white text-base font-Montserrat font-bold " type="submit">Sign In</button>

                        </form>

                    </div>

                </div>


                <div className="flex text-gray-new text-center text-base font-Lato font-normal">
                    <p>Don't have an account?&nbsp;</p>
                    <Link href='/register' className="text-new-blue" >Register here</Link>
                </div>
            </div>
        </div>
    )
}