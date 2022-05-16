import { createContext, useState } from "react";

const DataContext = createContext()

const db = {
   active:false
}

const DataProvider = ({children})=> {

    const [data, setData] = useState(db)

    const changeState = (el)=>{

        el===data.layout 
        ? setData({active:!data.active}) 
        : setData({active:true, layout:el})
    }

    return(

        <DataContext.Provider value={{data,changeState, setData}} >
            { children }
        </DataContext.Provider>
    )
}

export{
    DataContext,
    DataProvider
}