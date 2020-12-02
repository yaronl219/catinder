import React from 'react'
import { useLocalStore } from 'mobx-react'
import { createCardStore } from './cardStore'


const StoreContext = React.createContext(null)

export const StoreProvider = ({ children }) => {
    const cardStore = useLocalStore(createCardStore)


    const stores = {
        cardStore
        
    }

    return <StoreContext.Provider value={stores}>
        {children}
    </StoreContext.Provider>
}

export const useStore = () => React.useContext(StoreContext)
