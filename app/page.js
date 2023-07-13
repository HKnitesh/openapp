
import { getServerSession } from 'next-auth/next'
import SignIn from "@/components/SignIn";

export default async function Home() {
  // const session = await getServerSession();

  return (
    <>
      {/* {session ? (<SignIn />) : (<h1>not pass!</h1>)} */}
      <SignIn />
    </>

  );
}
