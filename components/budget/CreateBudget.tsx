"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,

} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const CreateBudget = () => {
    return (
        <div className="p-4">
            <Dialog>
                <DialogTrigger asChild><Button className="text-black" variant={"outline"}>Create new Budget</Button></DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            <p className="text-black">Create a Budget</p>
                        </DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default CreateBudget