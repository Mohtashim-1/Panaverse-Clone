import React, { FC } from "react"
interface IProps {
    header: string,
    description: string,
    number: string
}

const QuarterBox: FC<IProps> = ({ header, description, number }) => {
    return (
        <div className="flex flex-1 my-20">
            <div className="relative px-8 py-12 border rounded-md ">
                <h4 className="font-lg">{header}</h4>
                <p className="mt-2 text-slate-600">{description}</p>
                <span className="absolute top-0 font-bold text-gray-200 -z-10 right-10 text-7xl ">
                    {number}
                </span>
            </div>
        </div>

    )
}

export default QuarterBox