export interface List {
  id: number;
  theme: string;
  phrases: string[];
  questions?: string[];
}

export interface FeelingItem {
  name: string;
  description: string;
}

export interface AppState {
  phrases: string[];
  currentQuestions: string[];
  currentListId: number;
  phraseIndex: number;
  questionIndex: number;
  phraseIndexInput: string;
  feelingIndex: number;
  isActiveFeeling: boolean;
  customListsActivated: boolean;
}