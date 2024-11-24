import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"

export interface TimerContextType {
    duration: number
    setDuration: Dispatch<SetStateAction<Number>>

}

export const TimerContext = createContext<TimerContextType>({
    duration: 10,
    setDuration: () => {}
})

interface TimerProviderProps {
    children: ReactNode
}

const TimerProvider = ({children}: TimerProviderProps) => {
    const [duration, setDuration] = useState<Number>(10);

    return (
        <TimerContext.Provider value={{duration, setDuration}}>
            {children}
        </TimerContext.Provider>
    )
}

export default TimerProvider