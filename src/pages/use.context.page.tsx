import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from '../contexts/theme.context';

function UseContextPage() {
	const { theme, setTheme } = useContext<any>(ThemeContext);

	return (
		<>
			<ThemeProvider>
				<p
					style={{
						backgroundColor: theme.bgColor,
						color: theme.textColor,
						width: '100vw',
						height: '100px',
					}}
				>
					Theme Provider
				</p>

				<button
					onClick={() => {
						setTheme({ bgColor: 'red', textColor: 'white' });
					}}
				>
					Theme Change
				</button>
			</ThemeProvider>
		</>
	);
}

export default UseContextPage;
