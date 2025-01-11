import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { feelingsItems } from '../../data/feelings';
import { lists } from '../../data/lists/lists';
import styles from './Main.module.css';



export const Main = () => {
	const randomizeFeeling = () => Math.floor(Math.random() * feelings.length);
	const navigate = useNavigate();
	const [phrases, setPhrases] = useState<string[]>([]);
	const [feelings, setFeelings] = useState<string[]>([]);
	const [currentListId, setCurrentListId] = useState<number>(1);
	const [phraseIndex, setPhraseIndex] = useState<number>(0);
	const [questionIndex, setQuestionIndex] = useState<number>(0);
	const [phraseIndexInput, setPhraseIndexInput] = useState<string>('1');
	const [feelingIndex, setFeelingIndex] = useState<number>(randomizeFeeling());
	const [isListDone, setIsListDone] = useState<boolean>(false);
	const [isActiveFeeling, setIsActiveFeeling] = useState<boolean>(true);
	
	const goToStartList = () => {
		setPhraseIndex(0);
		setPhraseIndexInput('1');
		setFeelingIndex(randomizeFeeling());
		setIsListDone(false);
	};

	const handleClick = () => {
		setIsActiveFeeling(false);
		setPhraseIndex(value => {
			value++;
			if (value >= phrases.length) {
				setIsListDone(true);
			}
			return value === phrases.length ? 0 : value;
		});
		setFeelingIndex(value => {
			value++;
			return value === feelings.length ? 0 : value;
		});
		setPhraseIndexInput(phraseIndex + 2 + '');
		setTimeout(()=>{
			setIsActiveFeeling(true);
		},100);
	};

	const handleSelectChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;
		if (!value) {
			return;
		}
		setCurrentListId(+value);
	};
	const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target?.value;
		if (!+value && value !== '') {
			return;
		}

		if (+value > phrases.length || value === '0') {
			return;
		}
		setPhraseIndexInput(value);
		if (!value) {
			return;
		}
		setPhraseIndex(+value - 1);
		setFeelingIndex(value => {
			value++;
			return value === feelings.length ? 0 : value;
		});
	};

	useEffect(()=> {
		setPhrases(lists.find(item => item.id === currentListId)?.phrases as string[]);
		setFeelings(feelingsItems.map(item => item.name));
		goToStartList();
	}, [currentListId]);

	useEffect(()=> {
		setQuestionIndex(0);
	}, [phraseIndex]);

	const setRandomFeeling = () => {
		setFeelingIndex(randomizeFeeling());
	};

	const currentQuestions = lists.find(item => item.id === currentListId)?.questions;
	const currentPhrase =  phrases[phraseIndex] ? `${phraseIndex + 1}. ${phrases[phraseIndex]}` : 'тут будет описан момент';
	const currentTitle = currentQuestions?.[questionIndex] ?? 'Вопрос';

	const yes = () => {
		setQuestionIndex( value => {
			value++;
			if (value === currentQuestions?.length) {
				handleClick();
				return 0;
			}
			return value;
		});
	};

	const no = () => {
		handleClick();
		setQuestionIndex(0);
	};
	return (<>
		<Header title={'Выбор списка вопросов'}>
			<div className={styles.theme}>
				<select className={styles.select} onChange={handleSelectChange}>
					{lists.map(item => <option value={item.id}>{item.theme}</option>)}
				</select>
				<div className={styles.text}>всего карточек в списке: {phrases.length}</div>
				<input className={styles.input} type="number" pattern="[0-9]*" min="1" max={phrases.length} value={phraseIndexInput} onChange={handleChange}/>
			</div>
		</Header>
		<div className={styles.wrapper}>
			{isListDone && <div style={{display: 'block', textAlign: 'center'}}>
				<h1 className={styles.text}>DONE!</h1>
				<Button onClick={goToStartList}>Начать заново</Button>
				<br />
				<br />
				<Button  onClick={() => navigate('/training/final')}>Закончить</Button>
			</div>}
			{!isListDone &&<>
				{/* <select className={styles.select} onChange={handleSelectChange}>
					{lists.map(item => <option value={item.id}>{item.theme}</option>)}
				</select>
				<div className={styles.text}>всего карточек в списке: {phrases.length}</div>
				<input className={styles.input} type="number" pattern="[0-9]*" min="1" max={phrases.length} value={phraseIndexInput} onChange={handleChange}/> */}
				<button className={styles.donat} onClick={() => navigate('/training/donat')}>
					{/* <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16 6.27975C16 6.88118 15.7625 7.45883 15.3383 7.88611C14.3619 8.87007 13.415 9.89605 12.4021 10.8443C12.17 11.0585 11.8017 11.0507 11.5795 10.8268L8.6615 7.88611C7.7795 6.99725 7.7795 5.56225 8.6615 4.67339C9.55218 3.77579 11.0032 3.77579 11.8938 4.67339L11.9999 4.78027L12.1059 4.67345C12.533 4.24286 13.1146 4 13.7221 4C14.3297 4 14.9113 4.24284 15.3383 4.67339C15.7625 5.10073 16 5.67835 16 6.27975Z" stroke="#ffffff" stroke-width="1.5" stroke-linejoin="round"/>
						<path d="M18 20L21.8243 16.1757C21.9368 16.0632 22 15.9106 22 15.7515V10.5C22 9.67157 21.3284 9 20.5 9V9C19.6716 9 19 9.67157 19 10.5V15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M18 16L18.8581 15.1419C18.949 15.051 19 14.9278 19 14.7994V14.7994C19 14.6159 18.8963 14.4482 18.7322 14.3661L18.2893 14.1447C17.5194 13.7597 16.5894 13.9106 15.9807 14.5193L15.0858 15.4142C14.7107 15.7893 14.5 16.298 14.5 16.8284V20" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M6 20L2.17574 16.1757C2.06321 16.0632 2 15.9106 2 15.7515V10.5C2 9.67157 2.67157 9 3.5 9V9C4.32843 9 5 9.67157 5 10.5V15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M6 16L5.14187 15.1419C5.05103 15.051 5 14.9278 5 14.7994V14.7994C5 14.6159 5.10366 14.4482 5.26776 14.3661L5.71067 14.1447C6.48064 13.7597 7.41059 13.9106 8.01931 14.5193L8.91421 15.4142C9.28929 15.7893 9.5 16.298 9.5 16.8284V20" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg> */}
					{/* <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#ffffff"/>
					</svg> */}
					<svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#750000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					 Сделай донат</button>
				<input className={styles.input} type="range" min="1" max={phrases.length} step="1" value={phraseIndexInput || 0} onChange={handleChange}></input>
				{/* <h1 className={styles.h1} dangerouslySetInnerHTML={{ __html: currentTitle }}>{currentTitle}</h1> */}
				<h1 className={styles.h1} dangerouslySetInnerHTML={{ __html: currentTitle }} />
				<h2 className={styles.h2}>{currentPhrase}</h2>
				<h3 className={cn(styles.h3, {[styles.activeFeeling]: isActiveFeeling})}>{feelings[feelingIndex]} <span className={styles.randomize} onClick={setRandomFeeling}>🎲</span></h3>
				<p className={styles.defenition}>{feelingsItems[feelingIndex].description}</p>
				{/* <Button appearence="big" onClick={handleClick}>Следущий</Button> */}
				<div className={styles.buttons}>
					<Button appearence="big" onClick={yes}>Да (Что это было?)</Button>
					<Button appearence="big" onClick={no}>Нет</Button>
				</div>
			</>}
			{!isListDone && <div className="footer" style={{marginTop: 'auto', padding: '20px'}}>
				<Button  onClick={() => navigate('/training/final')}>Закончить</Button>
			</div>}
		</div>
	</>
	);
};