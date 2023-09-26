import { useEffect } from 'react';
import { useState } from 'react';

function Popup() {
	const [Num, setNum] = useState(0);
	useEffect(() => {
		console.log('popup생성');

		return () => {
			console.log('popup소멸');
		};
	}, []);
	return (
		<aside>
			<h1>0</h1>
			<button onClick={() => setNum(Num - 1)}>minus</button>
			<button onClick={() => setNum(Num + 1)}>plus</button>
		</aside>
	);
}

export default Popup;
