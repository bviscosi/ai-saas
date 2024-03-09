'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
	useEffect(() => {
		Crisp.configure('c043ddcc-2e08-43b2-8621-443b59867f2b');
	}, []);

	return null;
};
