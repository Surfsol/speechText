import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Note {
  id: string;
  note: string;
}
const fetchNotes = async (): Promise<Note[]> => {
  const { data } = await axios.get("http://localhost:3000/notes");
  console.log('in fetchNoates', {data})
  return data.notes;
};
const useNotes = () => useQuery<Note[]>({
  queryKey: ["notes"],
  queryFn: fetchNotes,
});
export default useNotes;