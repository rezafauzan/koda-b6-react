import { AiFillEyeInvisible } from "react-icons/ai"; 
const Input = ({name="name", type="text", icon="", placeholder="", label = true, ...attr}) => {
    return (
        <>
            {(label ? <label htmlFor={name.toLowerCase().replaceAll(" ", "")} className="font-bold text-black">{name}</label> : "")}
            <label className="flex items-center gap-4 p-4 border rounded border-black/40">
                {(icon ? <img src={icon} alt={name+"_Icon"} /> : "")}
                <input type={type} name={name.toLowerCase().replaceAll(" ", "")} id={name.toLowerCase().replaceAll(" ", "")} placeholder={placeholder} className="flex-1 outline-0" {...attr}/>
                {(type === "password" ? <button type="button" className="cursor-pointer"><AiFillEyeInvisible /></button> : "")}
            </label>
        </>
    )
}
export default Input