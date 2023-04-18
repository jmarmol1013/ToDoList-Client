import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext';

const useLoadNote = (noteId) => {
  const [note,setNote] = useState([]);
  const {currentUser} = useAuth();

  useEffect(() => {
    const loadNote = async() => {
        const response = await fetch(`https://listify-api.onrender.com/notes/editNote/${noteId}`,{
            headers:{
                AuthToken:await currentUser.getIdToken(),
            }});

        const note = await response.json();
        setNote(note);
    }

    loadNote();
  },[]);

  return {note}
}

export default useLoadNote