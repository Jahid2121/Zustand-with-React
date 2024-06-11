import { produce } from "immer";
import create from "zustand";

const initialState = {
    user: {
        id: "user123",
        friends: ["Jack", "John", "Peter"],
        profile: {
            name: "John Doe",
            email: "john@example.com",
            address: {
            street: "123 Main St",
            city: "London",
            zipCode: "123",
            }
        },  
    },
}



// export const useStore = create((set) => ({
//     ...initialState,
//     updateAddressStreet: (street) => {
//         set((state) => ({
//             user: {
//                 ...state.user,
//             profile: {
//                 ...state.user.profile,
//                 address: {
//                     ...state.user.profile.address,
//                     street: street
//                 },
//             },

//             }
//         }))
//     }
// }))
// This above code is really so hassle to write, thus we are gonna use a small package immer, which allows us to easily modifying the current tree

// magic of immer 

export const useStore = create((set) => ({
    ...initialState, 
    updateStreetAddress: (street) => 
        set(
            produce((state) => {
                state.user.profile.address.street = street;
            })
        )
}))