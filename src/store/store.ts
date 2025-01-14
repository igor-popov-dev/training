import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app.slice';
import { AppState } from './app.type';

const saveState = (state: AppState) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('appState', serializedState);
	} catch {
		// Игнорируем ошибки
	}
};

const store = configureStore({
	reducer: {
		app: appReducer
	}
});

store.subscribe(() => {
	saveState(store.getState().app);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;