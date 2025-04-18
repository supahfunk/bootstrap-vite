/* eslint-disable no-unused-vars */
import { create } from 'zustand'

export type GeneralStore = {
  firstTime: boolean
  setFirstTime: (firstTime: boolean) => void
}

const useGeneralStore = create<GeneralStore>((set) => ({
  firstTime: true,
  setFirstTime: (firstTime) => {
    set(() => ({ firstTime }))
  }
}))

export default useGeneralStore
