const defaultQustions = [
	'Ты можешь вспомнить случай, когда:',
	'Ты можешь вспомнить другой случай, когда:',
	'Вспомни самый ранний случай который только можешь, когда:'
];

export const lists = [
	{
		id: 1,
		theme: 'Общие случаи',
		questions: defaultQustions,
		title: 'Вспомните момент, когда:',
		phrases: [
			'Вы были счастливы.',
			'Вы только что закончили собирать, строить что-то.',
			'Жизнь была радостной.',
			'Кто-то вам что-то дал.',
			'Вы съели что-то хорошее.',
			'У вас был друг.',
			'Вы чувствовали себя энергичным.',
			'Кто-то ждал вас.',
			'Вы быстро ехали.',
			'Вы увидели что-то, что вам понравилось.',
			'Вы приобрели что-то хорошее.',
			'Вы выбросили что-то плохое.',
			'Вы поцеловали кого-то, кто вам нравился.',
			'Вы смеялись над шуткой.',
			'Вы получили деньги.',
			'Вы чувствовали себя молодым.',
			'Вам нравилась жизнь.',
			'Вы играли в какую-то игру.',
			'Вы одержали победу над чем-то опасным.',
			'Вы приобрели животное.',
			'Кто-то считал вас важным.',
			'Вы прогнали что-то плохое.',
			'Вы были полны энтузиазма.',
			'Вы владели чем-то.',
			'Вы наслаждались жизнью.',
			'Вы шли быстро.',
			'Вы с удовольствием бездельничали.',
			'Вы чувствовали себя сильным.',
			'Кто-то, кто вам не нравился, ушел.',
			'Кто-то помог вам.',
			'Вы набрали чего-то хорошего.',
			'Вы что-то измерили.',
			'У вас было приятное путешествие.',
			'Вы включили свет.',
			'Вы услышали хорошую музыку.',
			'Вы управляли чем-то.',
			'Вы разрушили что-то.',
			'Вы освоили что-то.',
			'Вам повезло.',
			'Вы ощущали покой.',
			'Вам открылся красивый вид.',
			'Вы наливали что-то хорошее.',
			'Вы приобрели редкую вещь.',
			'Вы заставили врага кричать.',
			'Вы сидели на чем-то очень удобном.',
			'Вы что-то хорошо сделали руками.',
			'Вы что-то передвинули.',
			'Вы наблюдали за быстродвижущимся объектом.',
			'Вы были вместе с друзьями.',
			'Вы заняли хорошее место.',
			'Кто-то любил вас.',
			'Вам было очень приятно с кем-то.',
			'Вы что-то изобрели.',
			'Вы подчинили себе какую-то энергию.',
			'Вы убили вредное насекомое.',
			'Вы положили что-то в карман.',
			'Вы добились прогресса.',
			'Вы прогулялись.',
			'Вы сберегли что-то.',
			'Вы остановили какую-то машину.',
			'Вы запустили какую-то машину.',
			'Вы хорошо выспались.',
			'Вы остановили вора.',
			'Вы стояли под чем-то.',
			'Вы разожгли огонь.',
			'Вы поднимались по лестнице.',
			'Вам было тепло.',
			'Вы ехали верхом.',
			'Вы проявили изобретательность.',
			'Вы плавали.',
			'Вы стояли на своем.',
			'Ваша жизнь шла хорошо.',
			'Вас уважали.',
			'Вы победили в соревновании.',
			'Вы хорошо поели.'
		]
	},{
		id: 2,
		theme: 'Ориентация во времени №1',
		title: 'Вспомните случай, который произошёл:',
		questions: [
			'Ты можешь вспомнить случай, который произошёл:',
			'Ты можешь вспомнить другой случай, который произошёл:',
			'Вспомни самый ранний случай который только можешь, который произошёл:'
		],
		phrases: [
			'Давно (год? месяц? число? час?).',
			'Вчера (час? число?).',
			'В прошлом месяце (положение солнца?).',
			'Когда вы были очень маленьким (одежда, которую носили люди? положение солнца?).',
			'Когда вы были в два раза меньше ростом, чем сейчас (рост других в то время?).',
			'Когда вы весили в три раза меньше, чем сейчас (положение солнца?).',
			'Когда ваша мать выглядела моложе (ее одежда? положение солнца?).',
			'Когда вы чувствовали себя очень подвижным (год? час?).',
			'В прошлый Новый год (время дня?).',
			'На Новый год, когда вам было пять лет (одежда других?).',
			'В день рождения, когда вам исполнилось восемь лет (мебель?).',
			'В один из ваших дней рождения (внешний вид других? год? положение солнца?).',
			'В этот день в прошлом году (дом, в котором вы жили? число? время года?).',
			'Сегодня в полдень.',
			'На каком-то банкете (одежда присутствующих людей?).',
			'На свадьбе (год? время года?).',
			'На праздновании по случаю рождения ребенка (время года?).',
			'На свидании с кем-то (прическа?).',
			'С часами (положение солнца?).',
			'С наручными часами (движение секундной стрелки?).',
			'С животным (когда оно было моложе).'
		]
	}
	// {
	// 	id: 3,
	// 	theme: 'Ориентация во времени №2',
	// 	title: 'Вспомните случаи, по которым можно сравнить:',
	// 	phrases: [
	// 		'Современную одежду и одежду того времени, когда вы были маленьким.',
	// 		'Современные прически и прически того времени, когда вы были подростком.',
	// 		'Что-то, что сейчас старое, с этим же, когда оно было новым.',
	// 		'Что-то или кого-то, что было маленьким, с этим же, когда оно стало большим.',
	// 		'Что-то или кого-то, что сейчас старое, с этим же, когда оно было молодым.',
	// 		'Как солнце светит утром и как оно светит в полдень.',
	// 		'Зиму и лето.',
	// 		'Весну и зиму.',
	// 		'Осень и весну.',
	// 		'Восход и закат.',
	// 		'Тень утром и тень вечером.',
	// 		'Одежду, которая сейчас старая, с этой же одеждой, когда она была новой.',
	// 		'Дом, стоящий сейчас там, где дома не было.',
	// 		'Открытое пространство, которое сейчас разделено на части.',
	// 		'Длинный отрезок времени и короткий отрезок времени.',
	// 		'Сигарету в тот момент, когда её закурили, и в тот момент, когда она была потушена.',
	// 		'Начало и конец соревнований.',
	// 		'Время, когда ложатся спать, с тем временем, когда встают.',
	// 		'Школу утром и той же школой, когда вы её покидали днём.',
	// 		'Ваше тело с его размером, когда вы были маленьким.',
	// 		'Облачный день и солнечный день.',
	// 		'Грозу и просто дождливую погоду.',
	// 		'Что-то горячее с этим же, когда оно остыло.',
	// 		'Что-то молодое и что-то старое.',
	// 		'Частое сердцебиение и медленное сердцебиение.',
	// 		'Когда вы перегрелись и когда вы замёрзли.',
	// 		'Когда у вас было большое пространство и когда у вас было маленькое пространство.',
	// 		'Когда день был ярким и когда он был тусклым.',
	// 		'Когда огонь горел ярко и когда он потух.',
	// 		'Наполовину построенный объект и тот же объект в начале его строительства.',
	// 		'Одного и того же человека, когда он был большим и когда он был маленьким.',
	// 		'Когда вы чувствовали себя маленьким и когда вы чувствовали себя повзрослевшим.',
	// 		'Вчерашнее утро и сегодняшнее.',
	// 		'Новый отрывной календарь и тот же календарь, когда от него были оторваны листки.',
	// 		'Часы, которые остановились, и часы, которые идут.',
	// 		'Движение солнца и движение луны.',
	// 		'Когда вы чувствовали себя уставшим и когда вы чувствовали себя энергичным.',
	// 		'Автомобили в прошлом и автомобили в настоящем.',
	// 		'Момент, когда вы начали работать с этим списком, и момент, когда вы начали работать с этим вопросом.'
	// 	]
	// },{
	// 	id: 4,
	// 	theme: 'Методы улучшения памяти',
	// 	title: 'Вспомните момент, когда:',
	// 	phrases: [
	// 		'Вы приобрели что-то, что было вам нужно.',
	// 		'Вы выбросили что-то ненужное.',
	// 		'Вы отказались иметь что-то, что, как вы знали, вам полагалось иметь.',
	// 		'Вы распорядились временем иначе, чем это было запланировано кем-то другим.',
	// 		'Вы вошли в пространство, в котором вам не полагалось находиться.',
	// 		'Вы покинули пространство, в котором вам полагалось находиться.',
	// 		'Вы были рады, что приобрели что-то, чего вы не могли себе позволить.',
	// 		'Вы с удовольствием отказывались повиноваться указаниям, которые были вам даны.',
	// 		'Вас куда-то отправили, а вы предпочли пойти в другое место.',
	// 		'Вы сами выбрали, во что одеться.',
	// 		'Вы носили какую-то одежду вопреки тому, что о вас могли подумать люди.',
	// 		'Вы избавились от чего-то, что вам наскучило.',
	// 		'Вы были рады, что могли выбрать один предмет из двух.',
	// 		'Вы не пили больше, чем вам хотелось.',
	// 		'Вам удалось отказаться от еды.',
	// 		'Вы распоряжались собой.',
	// 		'Вы делали что хотели с кем-то, кто был меньше вас.',
	// 		'Вы были правы, не приняв чего-то.',
	// 		'Вы отдали кому-то подарок, который вы получили.',
	// 		'Вы уничтожили предмет, который был вам навязан.',
	// 		'У вас было что-то, что было нужно вам, и вы содержали это в хорошем состоянии.',
	// 		'Вас назло кому-то шаркали подошвами.',
	// 		'Вы не стали читать книгу, которую вам дали.',
	// 		'Вы не согласились быть чьей-то собственностью.',
	// 		'Вы изменили чьи-то приказы.',
	// 		'Вы спали там, где вам нравилось.',
	// 		'Вы отказались принять ванну.',
	// 		'Вы испортили какую-то одежду, и это вас развеселило.',
	// 		'Вы получили то, что хотели.',
	// 		'Вы нашли то, что потеряли.',
	// 		'Вы застали человека, который был вам нужен.',
	// 		'Вы отказали партнёру.',
	// 		'Вы сбросили одеяло с кровати.',
	// 		'Вы поступили по-своему.',
	// 		'Вы обнаружили, что были правы, от чего-то отказавшись.'
	// 	]
	// }
];