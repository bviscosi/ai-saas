'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet } from '@/components/ui/sheet';

const MobileSidebar = () => {
	return (
		<Sheet>
			<Button variant='ghost' size='icon' className='md:hidden'>
				<Menu />
			</Button>
		</Sheet>
	);
};

export default MobileSidebar;
