import { useEffect, useState } from 'react';
import { feelings } from '../../data/feelings';
import { phrases } from '../../data/lists/lists';
import styles from './Main.module.css';



export const Main = () => {
	const randomIndex = Math.floor(Math.random() * phrases.length);
	
	const [phraseIndex, setPhraseIndex] = useState<number>(0);
	const [feelingIndex, setFeelingIndex] = useState<number>(Math.floor(Math.random() * feelings.length));
	const handleClick = () => {
		setPhraseIndex(value => value === phrases.length ? 0 : value + 1);
		setFeelingIndex(value => value === phrases.length ? 0 : value + 1);
	};

	useEffect(()=> {
		console.log(randomIndex);
	}, []);
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.h1}>Вспомните момент, когда:</h1>
			<h2 className={styles.h2}>{phrases[phraseIndex]}</h2>
			<h3 className={styles.h3}>{feelings[feelingIndex]}</h3>
			<button onClick={handleClick}>Следущий момент</button>
		</div>
	);
};