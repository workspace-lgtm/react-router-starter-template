import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { brand, origins } from "../data/beef";
import type { Route } from "./+types/origin";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: `產地 Origin｜${brand.nameZh}` },
		{
			name: "description",
			content: "美國、澳洲、日本與台灣選購牛肉時該留意的標示與來源資訊。",
		},
	];
}

export default function OriginPage() {
	return (
		<PageShell>
			<PageHero
				eyebrow="Origin"
				title="產地與選購"
				titleEn="Where it came from, and what to ask"
				lead="風味來自飼養與品種，可靠感來自標示與保存。買肉時多問一句，通常就夠用了。"
			/>
			<section className="section" style={{ paddingTop: "1rem" }}>
				<div className="content-list">
					{origins.map((origin) => (
						<article key={origin.id} className="origin-row">
							<div>
								<h2 className="origin-row__name">
									{origin.nameZh}
									<span>{origin.nameEn}</span>
								</h2>
								<p className="meta-line">{origin.profile}</p>
							</div>
							<div>
								<p className="meta-line">選購時可留意：</p>
								<ul className="chip-row">
									{origin.lookFor.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</div>
						</article>
					))}
				</div>
			</section>
		</PageShell>
	);
}
