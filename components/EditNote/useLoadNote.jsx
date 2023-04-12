import { useEffect, useState } from 'react'
import { useAuth } from '../../context/AuthContext';

const useLoadNote = (noteId) => {
  const [note,setNote] = useState([]);
  const {currentUser} = useAuth();

  useEffect(() => {
    const loadNote = async() => {
        const response = await fetch(`http://localhost:8080/notes/editNote/${noteId}`,{
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