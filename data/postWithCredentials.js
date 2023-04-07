import firebase from "firebase/compat/app";
import 'firebase/auth';

export const postWithCredentials = async (url,bodyData,currentUser) => {

    if(!currentUser){
        console.log("Error!")
        return;
    }

    const response = await fetch(url,{
        method:'POST',
        body:JSON.stringify(bodyData),
        headers:{
            AuthToken: await currentUser.getIdToken(),
            'Content-Type':'application/json',
        },
    });

    return response;
        
}