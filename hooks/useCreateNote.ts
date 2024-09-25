import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
interface Note {
  id: string;
  note: string;
}

const useCreateNote = () =>
  useMutation({
    mutationFn: async (newNote: String) => {
      const { data } = await axios.post('http://localhost:3000/notes', newNote);
      return data;
    },
    onSuccess: (res: Note) => {
      console.log({ res });
    },
    onError: (err) => {
      console.log(err);
    },
  });
export default useCreateNote;
