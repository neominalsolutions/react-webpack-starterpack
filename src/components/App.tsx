import React from 'react';

import img1 from '../assets/images.png';
import './App.css';
// import * as css from './App.css';

// harici bir dosyayı react projemizde kullanabilmek .json,.jpeg,. png, .jpg,.ico

function App() {
	// console.log('css', css);

	return (
		<>
			<div className="App">
				<img src={img1} />
			</div>
		</>
	);
}

export default App;
