import { useEffect } from "react"

const dynamicTitle = title=>{
    useEffect(()=>{
        document.title = `GearUP Sports Academy | ${title}`;
    },[title])
}

export default dynamicTitle;