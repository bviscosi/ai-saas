import { auth } from '@clerk/nextjs';

import { MAX_FREE_COUNTS } from '@/contants';
import prismadb from '@/lib/prismadb';

export const increaseApiLimit = async () => {
	const { userId } = auth();

	if (!userId) return;

	const userApiLimit = await prismadb.userApiLimit.findUnique({
		where: {
			userId: userId,
		},
	});

	if (userApiLimit) {
		await prismadb.userApiLimit.update({
			where: { userId: userId },
			data: { count: userApiLimit.count + 1 },
		});
	} else {
		await prismadb.userApiLimit.create({
			data: { userId: userId, count: 1 },
		});
	}
};

export const checkApiLimit = async () => {
	const { userId } = auth();

	if (!userId) return false;

	const userApiLimit = await prismadb.userApiLimit.findUnique({
		where: {
			userId: userId,
		},
	});

	if (!userApiLimit || userApiLimit < MAX_FREE_COUNTS) {
		return true;
	}
};
