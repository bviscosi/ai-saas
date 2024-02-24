import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { useProModal } from '@/hooks/use-pro-modal';

export const ProModal = () => {
	const proModal = useProModal();

	return (
		<Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className='flex justify-center items-center flex-col gap-y-4 pb-2'>
						<div className='flex items-center gap-x-2 font-bold py-1'>
							Upgrade to Genius
							<Badge className='uppercase text-sm py-1' variant='premium'>
								Pro
							</Badge>
						</div>
					</DialogTitle>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};
