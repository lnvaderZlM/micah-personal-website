import Image from "next/image";


type ProfileImageProps = {
	imgSrc: string;
	altText: string;
}

export default function ProfileImage({imgSrc, altText}:ProfileImageProps) {
	return (
		<div className="relative w-90 h-90 md:w-100 md:h-100 mx-auto">
			<Image
				src={imgSrc}
      			alt={altText}
      			fill
      			className="rounded-full object-cover border-2 border-white shadow-lg mx-auto"
			/>
		</div>
	)
}