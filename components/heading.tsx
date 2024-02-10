import { LucideIcon } from 'lucide-react';
import { STRING_LITERAL_DROP_BUNDLE } from 'next/dist/shared/lib/constants';

interface HeadingProps {
	title: string;
	description: string;
	icon: LucideIcon;
	iconColor?: string;
	bgColor?: string;
}

export const Heading = ({ title, description, icon, iconColor, bgColor }: HeadingProps) => {
	return <div>Heading Component</div>;
};
