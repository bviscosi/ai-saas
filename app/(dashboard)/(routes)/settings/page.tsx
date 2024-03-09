import { Heading } from '@/components/heading';
import { Settings } from 'lucide-react';

const SettingsPage = () => {
	return (
		<div>
			<Heading
				title='Settings'
				description='Manage account settings.'
				icon={Settings}
				iconColor='text-gray-700'
				bgColor='bg-gray-700/10'
			/>
		</div>
	);
};
