import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { brand, cuts } from "../data/beef";
import type { Route } from "./+types/cuts";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: `部位 Cuts｜${brand.nameZh}` },
		{
			name: "description",
			content: "常見牛肉部位的質地、用途與料理提示。",
		},
	];
}

export default function CutsPage() {
	return (
		<PageShell>
			<PageHero
				eyebrow="Cuts"
				title="牛肉部位"
				titleEn="Know the cut before the heat"
				lead="先對部位，再選火候。纖維走向與脂肪分布，決定你該煎、烤，還是慢燉。"
			/>
			<section className="section" style={{ paddingTop: "1rem" }}>
				<div className="content-list">
					{cuts.map((cut) => (
						<article key={cut.id} className="cut-row">
							<div>
								<h2 className="cut-row__name">
									{cut.nameZh}
									<span>{cut.nameEn}</span>
								</h2>
								<p className="meta-line">{cut.primal}</p>
							</div>
							<div>
								<p className="meta-line">{cut.texture}</p>
								<ul className="chip-row">
									{cut.bestFor.map((use) => (
										<li key={use}>{use}</li>
									))}
								</ul>
							</div>
							<p className="meta-line">{cut.tip}</p>
						</article>
					))}
				</div>
			</section>
		</PageShell>
	);
}
