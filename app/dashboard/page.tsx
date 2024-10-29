import { auth } from "@/auth";
import { signOut } from "@/auth";

const page = async () => {
    const session = await auth()
    return (
        <div>
            {
                JSON.stringify(session)
            }
            <form action={async () => {
                "use server"
                await signOut({ redirectTo: "/auth/login" })
            }}>
                <button type='submit'>
                    Log out
                </button>
            </form>
            
        </div>
    )
}

export default page