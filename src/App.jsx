import Popup from './components/Popup';
import './style.scss';
import { useState } from 'react';

function App() {
	const [Open, setOpen] = useState(false);
	return (
		<>
			<button onClick={() => setOpen(true)}>팝업 열기</button>
			<button onClick={() => setOpen(false)}>팝업 닫기</button>
			{Open && <Popup />}
		</>
	);
}

export default App;
