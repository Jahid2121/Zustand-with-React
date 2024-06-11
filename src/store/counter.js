// import create from "zustand";
// import { createSelector } from "./create-selector";


// // const countSelector  = (state) => state.count; 
// // const incrementSelector = (state) => state.increment; 
// // const decrementSelector = (state) => state.decrement;
// // I don't need these as create-selector will auto create selector

// const useCountStore = create((set) => ({
//     count: 0,
//     increment: () => set((state) => ({count: state.count + 1})),
//     decrement: () => set((state) => ({count: state.count - 1}))
// }))

// export const useStoreSelectors = createSelector(useCountStore)

// export default useCountStore;