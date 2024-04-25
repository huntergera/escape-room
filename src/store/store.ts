import create from "zustand";
import {IQuests} from "@/interfaces/interfaces";
import {QUESTS_API_URL} from "@/helpers/constants/api";

interface QuestsState {
  quests: IQuests[];
  questTypeFilter: string | null;
  setQuestTypeFilter: (type: string | null) => void;
  fetchQuests: () => Promise<void>;
}

export const useQuestsStore = create<QuestsState>((set) => ({
  quests: [],
  questTypeFilter: 'all',
  setQuestTypeFilter: (type) => set({ questTypeFilter: type }),
  fetchQuests: async () => {
    try {
      const response = await fetch(QUESTS_API_URL);
      const questsData = await response.json();
      set({ quests: questsData });
    } catch (error) {
      console.error("Error fetching quests:", error);
    }
  },
}));