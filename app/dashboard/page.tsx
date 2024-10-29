import { auth } from "@/auth";
import { Progress } from "@/components/ui/progress";
import { signOut } from "@/auth";

const page = async () => {
    const budget = 10000
    const spent = 3400
    const percentage = (spent/budget)*100
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
            <Progress indicatorClassName="bg-blue-600" value={percentage} className="bg-white w-64" />
        </div>
    )
}

export default page