import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext';

const useNotes = () => {
    const [isLoading,setIsLoading] = useState(true);
    const [notes,setNotes] = useState([]);
    const {currentUser} = useAuth();

    useEffect(() => {
        const loadNotes = async () => {
            if (!currentUser){
                setNotes([]);
                setIsLoading(false);
                return;
            }

            const response = await fetch(`https://listify-api.onrender.com/user/${currentUser.uid}/notes`,{
                headers:{
                    AuthToken:await currentUser.getIdToken(),
                },
            });

            const notes = await response.json();
            setNotes(notes);
            setIsLoading(false);
        }

        loadNotes();
    },[]);

    return {isLoading,notes,setNotes}
}

export default useNotes