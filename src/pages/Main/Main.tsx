import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { feelingsItems } from '../../data/feelings';
import { customLists } from '../../data/lists/customList';
import { lists as defaultList } from '../../data/lists/lists';
import styles from './Main.module.css';



export const Main = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	const randomizeFeeling = () => Math.floor(Math.random() * feelingsItems.length);

	const navigate = useNavigate();
	const [phrases, setPhrases] = useState<string[]>([]);
	const [lists, setLists] = useState(defaultList);
	const [feelings, setFeelings] = useState<string[]>([]);
	const [currentListId, setCurrentListId] = useState<number>(1);
	const [phraseIndex, setPhraseIndex] = useState<number>(0);
	const [questionIndex, setQuestionIndex] = useState<number>(0);
	const [phraseIndexInput, setPhraseIndexInput] = useState<string>('1');
	const [feelingIndex, setFeelingIndex] = useState<number>(randomizeFeeling());
	const [isListDone, setIsListDone] = useState<boolean>(false);
	const [isActiveFeeling, setIsActiveFeeling] = useState<boolean>(true);
	
	useEffect(()=>{
		setPhrases(lists.find(item => item.id === currentListId)?.phrases as string[]);
		currentQuestions = lists.find(item => item.id === currentListId)?.questions;
	},[lists, currentListId]);

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

	let currentQuestions = lists.find(item => item.id === currentListId)?.questions;
	const currentPhrase =  phrases[phraseIndex] ? `${phraseIndex + 1}. ${phrases[phraseIndex]}` : 'тут будет описан момент';
	const currentTitle = currentQuestions?.[questionIndex] ?? 'Вопрос';
	const animateThx = async (fn: ()=>void): Promise<void> => {
		setShowThx(true);
		setShowFadeIn(true);

		return new Promise((resolve) => {

			setTimeout(() => {
				fn();
				setShowFadeOut(true);
				scrollToTop(); 
			}, 1000);
			
			setTimeout(() => {
				setShowThx(false); 
				setShowFadeIn(false);
				setShowFadeOut(false);
				resolve(); 
			}, 2000);
		});
	};
	const yes = async () => {
		await animateThx(() => {
			setQuestionIndex( value => {
				value++;
				if (value === currentQuestions?.length) {
					handleClick();
					return 0;
				}
				return value;
			});
		});
		
	};

	const no = async () => {
		await animateThx(() => {
			handleClick();
			setQuestionIndex(0);
		});
	};

	const goToDonat = () => {
		const url = 'https://www.donationalerts.com/r/devforsoul';
		window.open(url, '_blank');
	};
	const [showThx, setShowThx] = useState<boolean>(false);
	const [showFadeIn, setShowFadeIn] = useState<boolean>(false);
	const [showFadeOut, setShowFadeOut] = useState<boolean>(false);



	const [clickCount, setClickCount] = useState(0);
	const [isActivated, setIsActivated] = useState(false);

	const handleHiddenClick = () => {
		if (!isActivated) {
			setClickCount((prev) => prev + 1);
		}
	};

	useEffect(() => {
		let timer: NodeJS.Timeout;

		if (clickCount > 0) {
			// Устанавливаем таймер для сброса счётчика
			timer = setTimeout(() => {
				setClickCount(0);
			}, 1000); // Сброс через 1 секунду
		}

		if (clickCount >= 5) {
			alert('секретный список вопросов активирован!');
			setLists(customLists);
			setIsActivated(true);
			setClickCount(0);
		}

		return () => clearTimeout(timer); // Чистим таймер при размонтировании
	}, [clickCount]);
	return (<>
		<div className={cn(styles.thxWrapper, {[styles.displayFlex]: showThx}, {[styles.fadeIn]: showFadeIn}, {[styles.fadeOut]: showFadeOut})}>
			<h2 className={styles.thxText}>Спасибо!</h2>
		</div>
		<Header title={'Выбор списка вопросов'}>
			<div className={styles.theme}>
				<select className={styles.select} onChange={handleSelectChange}>
					{lists.map(item => <option value={item.id}>{item.theme}</option>)}
				</select>
				<div className={styles.text}>всего карточек в списке: {phrases.length}</div>
				<input className={styles.input} type="number" pattern="[0-9]*" min="1" max={phrases.length} value={phraseIndexInput} onChange={handleChange}/>
				<button className={styles.shuffleButton} onClick={()=>navigate('/training/bad')}>Если вспоминание некоторых вещей вызвало у вас неприятные ощущения</button>
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
				<button className={styles.donat} onClick={goToDonat}>
					<svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#750000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					 Сделай донат</button>
				<input className={styles.input} type="range" min="1" max={phrases.length} step="1" value={phraseIndexInput || 0} onChange={handleChange}></input>
				<h1 className={styles.h1} dangerouslySetInnerHTML={{ __html: currentTitle }} />
				<h2 className={styles.h2}>{currentPhrase}</h2>
				<h3 className={cn(styles.h3, {[styles.activeFeeling]: isActiveFeeling})}>{feelings[feelingIndex]} <span className={styles.randomize} onClick={setRandomFeeling}>🎲</span></h3>
				<p className={styles.defenition}>{feelingsItems[feelingIndex].description}</p>
				<div className={styles.buttons}>
					<Button appearence="big" onClick={yes}>Да (Что это было?)</Button>
					<Button appearence="big" onClick={no}>Нет</Button>
				</div>
			</>}
			{!isListDone && <div className="footer" style={{marginTop: 'auto', padding: '20px'}}>
				<Button  onClick={() => navigate('/training/final')}>Закончить</Button>
			</div>}
		</div>
		<div className={styles.secret} onClick={handleHiddenClick}/>
	</>
	);
};