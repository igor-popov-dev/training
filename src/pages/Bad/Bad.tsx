import { useNavigate } from 'react-router-dom';
import Accordion from '../../components/Accordion/Accordion';
import Button from '../../components/Button/Button';
import styles from './Bad.module.css';

export const Bad = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.h1}>Вспомните все эти случаи еще раз со всеми доступными вам ощущениями.</h1>
			<div className={styles.content}>
				<Accordion />
			</div>
			<Button  onClick={() => navigate('/training/')}>На главную</Button>
		</div>
	);
};