import type { ElementModels } from '@kontent-ai/delivery-sdk';

export const getHeightAndWidth = ({
	image,
	height,
	width
}: {
	image: ElementModels.AssetModel;
	height?: number;
	width?: number;
}) => {
	if (height) {
		const width = (Number(image.width) / Number(image.height)) * height;
		return { height, width };
	} else if (width) {
		const height = (Number(image.height) / Number(image.width)) * width;
		return { height, width };
	}
	return {};
};
