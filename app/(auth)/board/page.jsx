'use client'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '@/components/board/NavBar'
import Header from '@/components/board/Header'
import Cards from '@/components/board/Cards'
import Activities from '@/components/board/Activities'
import TopProduct from '@/components/board/TopProduct'
import TodaySchedule from '@/components/board/TodaySchedule'
import { useSession, signOut } from "next-auth/react"

export default function Board() {
    // const { data: session, status } = useSession();
    return (
        <div className="flex w-screen h-screen bg-whiteF md:p-10 p-5 md:flex-row gap-12">

            <NavBar className='hidden md:flex h-screen' />
            <div className="flex flex-col md:w-[72rem] w-full gap-5">

                <Header />
                <Cards />
                <Activities />
                <div className="flex md:flex-row flex-col w-auto justify-between">

                    <TopProduct />
                    <TodaySchedule />
                </div>
            </div>

        </div>


    )
}


{/* <>hi
    <h2>Status: {status}</h2>
    <Link href='/api/auth/signin'>go to sign in</Link>
    <pre>{JSON.stringify(session, null, 2)}</pre>
    <button onClick={() => signOut()}>signOut</button>
    {session ?
        (<>
            <h2>{session.user.name}</h2>
            <h2>{session.user.email}</h2>
            <button onClick={() => signOut()}>signOut</button>

        </>)
        : ""
    }
</> */}