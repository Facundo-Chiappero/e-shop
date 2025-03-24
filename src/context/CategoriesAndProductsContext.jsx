import useGetProductsToAndCategoriesUse from '@hooks/useGetProductsToUseAndCategories'
import { createContext } from 'react'
const CategoriesAndProductsContext = createContext()

export function CategoriesAndProductsProvider({ children }) {
  const { productsToUse, categories } = useGetProductsToAndCategoriesUse()
  return (
    <CategoriesAndProductsContext.Provider value={{ productsToUse, categories }}>
      {children}
    </CategoriesAndProductsContext.Provider>
  )
}


export default CategoriesAndProductsContext