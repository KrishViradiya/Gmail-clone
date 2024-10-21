// export const saveState = (state) => {
//     try {
//         const serializableState = JSON.stringify(state);
//         localStorage.setItem("user",serializableState)
//     } catch (error) {
//         console.error("Could not save the state",error)
//     }
// };

// export const loadState = () => {
//     try {   
//         const serializableState = localStorage.getItem("user");
//         if(serializableState === null){
//             return undefined;
//         }

//         return JSON.parse(serializableState);
//     } catch (error) {
//         console.error("Could not load state",error);
//         return undefined;
//     }
// }