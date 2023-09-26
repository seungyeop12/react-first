import './style.scss';
import { useRef } from 'react';

function App() {
	console.log('re-render');
	let Num = useRef(0);
	let Box = useRef(null);
	console.log(Num);

	const prev = () => {
		Box.current.style.transform = `rotate(${--Num.current * 45}deg)`;
	};

	const next = () => {
		Box.current.style.transform = `rotate(${++Num.current * 45}deg)`;
	};
	//const [Num, setNum] = useState(0);
	return (
		<>
			<button onClick={prev}>prev</button>
			<button onClick={next}>next</button>

			<article ref={Box}></article>
		</>
	);
}

export default App;
