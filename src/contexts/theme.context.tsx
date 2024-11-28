import React, { createContext, useState } from 'react';

// UI componentlerden bu context erişmem lazım
export const ThemeContext = createContext<any>({});

// Provider ile tüm child componentlre ilgili state geçişleri yapıcaz

export const ThemeProvider = ({ children }: any) => {
	const [theme, setTheme] = useState({ textColor: 'black', bgColor: 'white' });

	const values = {
		theme, // güncel değeri almamızı sağlar.
		setTheme, // değeri günceller
	};

	return (
		<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
	);
};
