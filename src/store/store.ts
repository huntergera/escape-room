import create from "zustand";
import {IQuests} from "@/interfaces/interfaces";
import {QUESTS_API_URL} from "@/helpers/constants/api";

interface QuestsState {
  quests: IQuests[];
  questTypeFilter: string | null;
  setQuestTypeFilter: (type: string | null) => void;
  setQuests: (quests: IQuests[]) => void;
}

export const useQuestsStore = create<QuestsState>((set) => ({
  quests: [],
  questTypeFilter: 'all',
  setQuestTypeFilter: (type) => set({ questTypeFilter: type }),
  setQuests: (quests) => {
    set(state => ({
      quests: quests
    }));
  },
}));