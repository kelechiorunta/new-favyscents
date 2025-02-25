import { addSubscriber } from "../apis/indexedDB.js";

const addNewSubscriber = async (initialData, formData) => {
    const firstname = formData['firstname'];
    const lastname = formData['lastname'];
    const email = formData['email'];
    const password = formData['password'];
    const agree = formData['agree'];
    const subscribe = formData['subscribe'];

    try{
        
        // if (firstname !== '' || lastname !== '' || email !== '' || password !== '' || agree || subscribe) {
            if (agree === 'on'){
                agree = true
            }
            if (subscribe === 'on'){
                subscribe = true
            }
            const response = await addSubscriber(firstname, lastname, email, password, agree, subscribe);
            return {success: true, message: response}
        // }
        
    }
    catch(err){
        return {success: false, message: err}
    }
}

export {addNewSubscriber}