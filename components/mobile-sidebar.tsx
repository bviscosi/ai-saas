'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';

const MobileSidebar = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<Button variant='ghost' size='icon' className='md:hidden'>
					<Menu />
				</Button>
			</SheetTrigger>
		</Sheet>
	);
};

export default MobileSidebar;
