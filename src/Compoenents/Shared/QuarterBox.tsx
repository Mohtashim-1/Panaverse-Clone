import React, { FC } from "react"
interface IProps {
    header: string,
    description: string,
    number: number,
    haveBorder?: boolean
}

const QuarterBox: FC<IProps> = ({ header, description, number, haveBorder = true }) => {
    return (
        <div className=
            {
                `relative flex-1 px-8 flex flex-col rounded-md justify-center xl: py-20 ${haveBorder && "border"
                }`
            }
        >
            <h4 className="font-lg font-bold">{header}  </h4>
            <p className="mt-2 text-slate-600 z-0"> {description}</p>
            <span className="absolute -top-8 font-bold text-gray-200 -z-10 right-10 text-[170px] ">{number}
            </span>
        </div >

    )
}

export default QuarterBox