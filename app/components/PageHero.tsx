type PageHeroProps = {
	eyebrow: string;
	title: string;
	titleEn: string;
	lead: string;
};

export function PageHero({ eyebrow, title, titleEn, lead }: PageHeroProps) {
	return (
		<section className="page-hero">
			<p className="page-hero__eyebrow">{eyebrow}</p>
			<h1 className="page-hero__title">
				{title}
				<span>{titleEn}</span>
			</h1>
			<p className="page-hero__lead">{lead}</p>
		</section>
	);
}
