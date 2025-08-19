import { create } from "zustand";

interface Answer {
  question_id: string;
  answer_text?: string;
  option_id?: string;
}

interface Step3Store {
  answers: Answer[];
  setAnswer: (questionId: string, value: string, optionId?: string) => void;
  clearAnswers: () => void;
}

export const useStep3Store = create<Step3Store>((set) => ({
  answers: [],
  setAnswer: (questionId, value, optionId) => {
    set((state) => {
      const exists = state.answers.find((a) => a.question_id === questionId);
      if (exists) {
        return {
          answers: state.answers.map((a) =>
            a.question_id === questionId
              ? { ...a, answer_text: value, option_id: optionId }
              : a
          ),
        };
      }
      return {
        answers: [
          ...state.answers,
          { question_id: questionId, answer_text: value, option_id: optionId },
        ],
      };
    });
  },
  clearAnswers: () => set({ answers: [] }),
}));
