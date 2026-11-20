import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { brand, cookingTips } from "../data/beef";
import type { Route } from "./+types/cooking";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: `料理 Cooking｜${brand.nameZh}` },
		{
			name: "description",
			content: "牛排與牛肉料理的關鍵技巧：封邊、溫度、靜置與用鹽。",
		},
	];
}

export default function CookingPage() {
	return (
		<PageShell>
			<PageHero
				eyebrow="Cooking"
				title="料理要點"
				titleEn="A few moves that change everything"
				lead="不必堆砌技巧。把表面做乾、把鍋燒熱、相信溫度計，再給肉一點靜置時間。"
			/>
			<section className="section" style={{ paddingTop: "1rem" }}>
				<div className="content-list">
					{cookingTips.map((tip) => (
						<article key={tip.id} className="tip-block">
							<div>
								<h2 className="tip-block__name">
									{tip.title}
									<span>{tip.titleEn}</span>
								</h2>
								<p className="meta-line">{tip.summary}</p>
							</div>
							<ol className="tip-list">
								{tip.steps.map((step) => (
									<li key={step}>{step}</li>
								))}
							</ol>
						</article>
					))}
				</div>
			</section>
		</PageShell>
	);
}
