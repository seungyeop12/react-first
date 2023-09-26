import { useEffect } from 'react';
import { useState } from 'react';

function Popup() {
	console.log('팝업재호출');

	const [Num, setNum] = useState(0);
	useEffect(() => {
		console.log('popup생성');
		console.log('무거운 유튜브 데이타 fetching');

		return () => {
			console.log('popup소멸');
		};
	}, []);

	useEffect(() => {
		console.log('popup의 Num 상태변화');
	}, [Num]);

	return (
		<aside>
			<h1>{Num}</h1>
			<button onClick={() => setNum(Num - 1)}>minus</button>
			<button onClick={() => setNum(Num + 1)}>plus</button>
		</aside>
	);
}

export default Popup;
