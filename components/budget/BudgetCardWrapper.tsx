"use client"

import Link from "next/link"
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import useNeonColorGenerator from "@/lib/useColorGenerator"
import { BudgetCardType } from "@/types"

const BudgetCardWrapper: React.FC<BudgetCardType> = ({
    id,
    name,
    amount
}) => {

    const generateColor = useNeonColorGenerator()

    return (
        <Link
        className="h-fit"
            href={`/budget/${id}`}
        >
            <Card
                className="sm:w-[450px] h-[130px] sm:h-[143px] bg-black text-white flex flex-col -space-y-3 border border-white" 
                >
                <CardHeader className="p-6 ">
                    <p className="text-xl sm:text-3xl font-semibold ">{name}</p>
                </CardHeader>
                <CardContent>
                    <Progress indicatorClassName="bg-green-500 " max={100} value={20} />
                    <p className="text-sm float-right ">{amount} left</p>
                </CardContent>
                <CardFooter className="text-white text-xs pb-4">
                    click to see expenses
                </CardFooter>
            </Card>

        </Link>
    )
}

export default BudgetCardWrapper