import { PageHero } from "../components/PageHero";
import { PageShell } from "../components/PageShell";
import { brand, gradeSystems } from "../data/beef";
import type { Route } from "./+types/grades";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: `等級 Grades｜${brand.nameZh}` },
		{
			name: "description",
			content: "USDA、澳洲 MSA 與日本和牛等級的對照說明。",
		},
	];
}

export default function GradesPage() {
	return (
		<PageShell>
			<PageHero
				eyebrow="Grades"
				title="等級怎麼讀"
				titleEn="Labels that actually mean something"
				lead="不同產地的分級邏輯不同。別只看「最高級」三個字——搞清楚它在衡量什麼。"
			/>
			<section className="section" style={{ paddingTop: "1rem" }}>
				<div className="content-list">
					{gradeSystems.map((system) => (
						<article key={system.id} className="grade-block">
							<div>
								<h2 className="grade-block__name">
									{system.region}
									<span>{system.regionEn}</span>
								</h2>
								<p className="meta-line">{system.scale}</p>
							</div>
							<div>
								<p className="meta-line">{system.highlight}</p>
								<ul className="note-list">
									{system.notes.map((note) => (
										<li key={note}>{note}</li>
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
