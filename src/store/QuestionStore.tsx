import { create } from "zustand";

// Javoblarni array shaklida saqlash uchun store
interface QuestionStore {
  answers: { [key: string]: string }; // Savolga berilgan javoblar
  setAnswer: (questionId: string, answer: string) => void; // Javobni saqlash
}

export const useQuestionStore = create<QuestionStore>((set) => ({
  answers: {}, // Boshlang‘ich javoblar bo‘sh
  setAnswer: (questionId, answer) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [questionId]: answer, // Javobni saqlash
      },
    })),
}));
