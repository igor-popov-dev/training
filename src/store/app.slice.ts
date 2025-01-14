import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { feelingsItems } from '../data/feelings';
import { lists } from '../data/lists/lists';
import { AppState } from './app.type';

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
	phrases: ( loadState().phrases?.length && loadState().phrases )|| lists[0].phrases ,
	currentQuestions: (loadState().currentQuestions?.length && loadState().currentQuestions) || lists[0].questions,
	currentListId: loadState().currentListId || 1,
	phraseIndex: loadState().phraseIndex || 0,
	questionIndex: loadState().questionIndex || 0,
	phraseIndexInput: loadState().phraseIndexInput || '1',
	feelingIndex: loadState().feelingIndex || 0,
	isActiveFeeling: loadState().isActiveFeeling || true,
	customListsActivated: loadState().customListsActivated || false
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setPhrases: (state, action: PayloadAction<string[]>) => {
			state.phrases = action.payload;
		},
		setCurrentListId: (state, action: PayloadAction<number>) => {
			const newId = action.payload;
			if (!lists.some(item => item.id === newId)) {
				state.currentListId = 1;
				return;
			}
			state.currentListId = newId;
			const currentList = lists.find(item => item.id === newId);
			state.phrases = currentList?.phrases || [];
			state.currentQuestions = currentList?.questions || [];
			state.phraseIndex = 0;
			state.questionIndex = 0;
			state.phraseIndexInput = '1';
		},
		setPhraseIndex: (state, action: PayloadAction<number>) => {
			state.phraseIndex = action.payload;
			state.questionIndex = 0;
		},
		nextPhraseIndex: (state) => {
			const nextIndex = state.phraseIndex + 1;
			const isEndOfList = nextIndex >= state.phrases.length;

			if (isEndOfList) {
				state.currentListId += 1;
				const nextList = lists.find(item => item.id === state.currentListId);
				state.phrases = nextList?.phrases || [];
				state.currentQuestions = nextList?.questions || [];
				state.phraseIndex = 0;
			} else {
				state.phraseIndex = nextIndex;
			}

			state.phraseIndexInput = (state.phraseIndex + 1).toString();
			state.feelingIndex = randomizeFeeling();
			state.questionIndex = 0;
		},
		setQuestionIndex: (state, action: PayloadAction<number>) => {
			state.questionIndex = action.payload;
		},
		nextQuestionIndex: (state) => {
			state.questionIndex += 1;
		},
		setFeelingIndex: (state, action: PayloadAction<number>) => {
			state.feelingIndex = action.payload;
		},
		nextFeelingIndex: (state) => {
			state.feelingIndex = (state.feelingIndex + 1) % feelingsItems.length;
		},
		setPhraseIndexInput: (state, action: PayloadAction<string>) => {
			state.phraseIndexInput = action.payload;
		},
		toggleActiveFeeling: (state, action: PayloadAction<boolean>) => {
			state.isActiveFeeling = action.payload;
		},
		toggleActivateCustomLists: (state) => {
			state.customListsActivated = !state.customListsActivated;
		},
		goToStartList: (state) => {
			state.phraseIndex = 0;
			state.phraseIndexInput = '1';
			state.feelingIndex = randomizeFeeling();
			state.questionIndex = 0;
		},
		goToNextPhrase: (state) => {
			const isEndOfList = state.phraseIndex + 1 >= state.phrases.length;

			if (isEndOfList) {
				state.currentListId += 1;
				const nextList = lists.find(item => item.id === state.currentListId);
				state.phrases = nextList?.phrases || [];
				state.currentQuestions = nextList?.questions || [];
				state.phraseIndex = 0;
			} else {
				state.phraseIndex += 1;
			}

			state.phraseIndexInput = (state.phraseIndex + 1).toString();
			state.feelingIndex = randomizeFeeling();
			state.questionIndex = 0;
		}
	}
});

export const {
	setPhrases,
	setCurrentListId,
	setPhraseIndex,
	setQuestionIndex,
	nextQuestionIndex,
	setFeelingIndex,
	nextFeelingIndex,
	setPhraseIndexInput,
	toggleActiveFeeling,
	toggleActivateCustomLists,
	nextPhraseIndex,
	goToStartList,
	goToNextPhrase
} = appSlice.actions;

export default appSlice.reducer;