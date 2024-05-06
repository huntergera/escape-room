import create from "zustand";
import {IQuest} from "@/interfaces/interfaces";
import {QUESTS_API_URL} from "@/helpers/constants/api";

interface QuestsState {
  quests: IQuest[];
  questTypeFilter: string | null;
  setQuestTypeFilter: (type: string | null) => void;
  setQuests: (quests: IQuest[]) => void;
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