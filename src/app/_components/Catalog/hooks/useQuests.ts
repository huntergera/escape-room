import {useEffect, useState} from "react";

import {getAllQuests} from "@/actions/quests";

export const useQuests = () => {
  const [quests, setQuests] = useState([]);
  const [pending, setPending] = useState(false);

  const fetchQuests = async () => {
    try {
      setPending(true);
      const data = await getAllQuests();
      setQuests(data);
    } catch (error) {
      console.error("Error fetching currencies:", error);
    } finally {
      setPending(false);
    }
  };

  useEffect(() => {
    fetchQuests();
  }, []);

  return { quests, pending, fetchQuests };
};