import { AiFillEyeInvisible } from "react-icons/ai"; 
const Input = ({labelName="labelName", type="text", icon="", placeholder="", label = true, ...attr}, ref) => {
    return (
        <>
            {(label ? <label htmlFor={labelName.toLowerCase().replaceAll(" ", "")} className="font-bold text-black">{labelName}</label> : "")}
            <label className="flex items-center gap-4 p-4 border rounded border-black/40">
                {(icon ? <img src={icon} alt={labelName+"_Icon"} /> : "")}
                <input ref={ref} type={type} id={labelName.toLowerCase().replaceAll(" ", "")} placeholder={placeholder} className="flex-1 outline-0" {...attr}/>
                {(type === "password" ? <button type="button" className="cursor-pointer"><AiFillEyeInvisible /></button> : "")}
            </label>
        </>
    )
}
export default Input