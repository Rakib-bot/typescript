import React, {type ReactNode,useState, createContext,useContext ,FC} from 'react';
interface myContextType{
    value:number,
    increment:()=>void,
    decrement:()=>void
}
interface MyContextProviderProps{
    children:ReactNode
}
export const MyContext = createContext<myContextType|undefined>(undefined);
export const MyContextProvider:FC<MyContextProviderProps> = ({children})=>{
    const [value,setValue] = useState<number>(0);
    const increment = ()=> setValue(value+1)
    const decrement = () => setValue(value-1<0?0:value-1)
    const myContextData:myContextType ={
        value,
        increment,
        decrement
    }
    return(
        <MyContext.Provider value={myContextData}>
            {children}
        </MyContext.Provider>

    )

}
export const useValue =()=>{
    const context = useContext(MyContext);
    if(!context)
    {
        throw new Error('useVlaue must be used within a MyContextProvider')
    }
    return context;
}