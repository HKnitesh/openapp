import Link from "next/link";

export default function SignIn() {

    return (
        <div className="flex md:flex-row w-screen h-screen ">
            <div className="hidden bg-black md:w-1/3 md:flex items-center justify-center shrink-0">
                <h1 className="text-whiteF font-bold text-7xl font-Montserrat ">Board.</h1>
            </div>
            {/* sign in start */}
            <div className="bg-whiteF md:w-2/3 w-full flex flex-col items-center justify-center shrink-0 text-black">
                
                    <div className="flex flex-col items-start gap-5 md:w-96 w-80">
                        <div className="flex flex-col">
                            <h2 className=" font-Montserrat text-4xl font-bold">Register</h2>
                            <p className="flex font-Lato text-base font-normal">Register your account</p>
                        </div>

                        <div className="flex items-center justify-center w-full shrink-0 bg-white rounded-[1.25rem]">
                            <form action="#" method="post" className="flex flex-col w-full p-7 gap-5" >

                                <div className="flex flex-col w-full">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" name="username" id="username" placeholder="Username" required
                                        className="form-input"
                                    />
                                </div>
                                <div className="flex flex-col w-full">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" name="email" id="email" placeholder="Enter your email" required
                                        className="form-input"
                                    />
                                </div>
                                <div className="flex flex-col w-full">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Password" required
                                        className="form-input"
                                    />
                                </div>
                                <div className="flex flex-col w-full">
                                    <label htmlFor="cnf-password" className="form-label">Confirm Password</label>
                                    <input type="password" name="cnf-password" id="cnf-password" placeholder="Confirm Password" required
                                        className="form-input"
                                    />
                                </div>

                                <button className="h-10 shrink-0 bg-black rounded-2lg text-white text-base font-Montserrat font-bold " type="submit">Register</button>

                            </form>

                        </div>

                    </div>

                <div className="flex text-gray-new text-center text-base font-Lato font-normal">
                    <p>have an account?&nbsp;</p>
                    <Link href='/' className="text-new-blue" >Sign In</Link>
                </div>
            </div>
        </div>
    )
}