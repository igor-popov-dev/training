import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { feelingsItems } from '../data/feelings';
import { AppState, List } from './app.type';

const randomizeFeeling = () => Math.floor(Math.random() * feelingsItems.length);

const loadState = (): Partial<AppState> => {
	try {
		const serializedState = localStorage.getItem('appState');
		return serializedState ? JSON.parse(serializedState) : {};
	} catch {
		return {};
	}
};

const initialState: AppState = {
	phrases: [],
	currentQuestions: [],
	lists: [],
	feelings: [],
	currentListId: 1,
	phraseIndex: 0,
	questionIndex: 0,
	phraseIndexInput: '1',
	feelingIndex: 0,
	isListDone: false,
	isActiveFeeling: true,
	customListsActivated: false,
	...loadState()
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setLists: (state, action: PayloadAction<List[]>) => {
			state.lists = action.payload;
			state.currentQuestions = state.lists.find(item => item.id === state.currentListId)?.questions || [];
			state.questionIndex = 0;
		},
		setFeelings: (state, action: PayloadAction<string[]>) => {
			state.feelings = action.payload;
		},
		setPhrases: (state, action: PayloadAction<string[]>) => {
			state.phrases = action.payload;
		},
		setCurrentListId: (state, action: PayloadAction<number>) => {
			state.currentListId = action.payload;
			state.currentQuestions = state.lists.find(item => item.id === state.currentListId)?.questions || [];
			state.phrases = state.lists.find(item => item.id === state.currentListId)?.phrases ?? [];
			state.questionIndex = 0;
			state.phraseIndex = 0;
			state.phraseIndexInput = '1';
			
		},
		setPhraseIndex: (state, action: PayloadAction<number>) => {
			state.phraseIndex = action.payload;
			state.questionIndex = 0;
		},
		nextPhraseIndex: (state) => {
			let value = state.phraseIndex;
			value++;
			if (value >= state.phrases.length) {
				state.isListDone = true;
			}
			state.phraseIndex = value === state.phrases.length ? 0 : value;
		},
		setQuestionIndex: (state, action: PayloadAction<number>) => {
			state.questionIndex = action.payload;
		},
		nextQuestionIndex: (state) => {
			state.questionIndex = state.questionIndex + 1;
		},
		setFeelingIndex: (state, action: PayloadAction<number>) => {
			state.feelingIndex = action.payload;
		},
		nextFeelingIndex: (state) => {
			let value = state.feelingIndex;
			value++;
			state.feelingIndex =  value === state.feelings.length ? 0 : value;
		},
		setPhraseIndexInput: (state, action: PayloadAction<string>) => {
			state.phraseIndexInput = action.payload;
		},
		setIsListDone: (state, action: PayloadAction<boolean>) => {
			state.isListDone = action.payload;
		},
		toggleActiveFeeling: (state, action: PayloadAction<boolean>) => {
			state.isActiveFeeling = action.payload;
		},
		activateCustomLists: (state) => {
			state.customListsActivated = true;
		},
		toggleActivateCustomLists: (state) => {
			state.customListsActivated = !state.customListsActivated;
		},
		goToStartList: (state) => {
			state.phraseIndex = 0;
			state.phraseIndexInput = '1';
			state.feelingIndex = randomizeFeeling();
			state.isListDone = false;
		},
		goToNextPhrase: (state) => {
			appSlice.caseReducers.nextPhraseIndex(state);
			appSlice.caseReducers.nextFeelingIndex(state);
			state.phraseIndexInput = state.phraseIndex + 1 + '';
			state.questionIndex = 0;
		}
	}
});

export const {
	setLists,
	setFeelings,
	setPhrases,
	setCurrentListId,
	setPhraseIndex,
	setQuestionIndex,
	nextQuestionIndex,
	setFeelingIndex,
	nextFeelingIndex,
	setPhraseIndexInput,
	setIsListDone,
	toggleActiveFeeling,
	activateCustomLists,
	toggleActivateCustomLists,
	nextPhraseIndex,
	goToStartList,
	goToNextPhrase
} = appSlice.actions;

export default appSlice.reducer;