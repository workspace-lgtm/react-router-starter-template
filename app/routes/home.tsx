import { Link } from "react-router";
import { PageShell } from "../components/PageShell";
import { brand, homeHighlights } from "../data/beef";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: `${brand.nameZh} ${brand.nameEn}｜牛肉資訊網 DEMO` },
		{
			name: "description",
			content:
				"焰切 Yanqie——把一塊好牛肉讀懂。部位、等級、料理與產地的示範資訊站。",
		},
	];
}

export default function Home() {
	return (
		<PageShell bleed>
			<section className="hero" aria-label="焰切首頁主視覺">
				<div className="hero__media" aria-hidden="true" />
				<div className="hero__glow" aria-hidden="true" />
				<div className="hero__content">
					<p className="hero__brand">
						{brand.nameZh}
						<span>{brand.nameEn}</span>
					</p>
					<h1 className="hero__headline">{brand.tagline}</h1>
					<p className="hero__support">
						{brand.taglineEn}
						。從部位到等級、從火候到產地——給想把牛肉買對、煮對的人。
					</p>
					<div className="hero__cta">
						<Link className="btn btn--primary" to="/cuts">
							開始看部位
						</Link>
						<Link className="btn btn--ghost" to="/grades">
							等級怎麼讀
						</Link>
					</div>
				</div>
			</section>

			<section className="section">
				<div className="section__head">
					<p className="section__eyebrow">Guide rails</p>
					<h2 className="section__title">四條清楚的入口</h2>
					<p className="section__lead">
						這是給 Alan Chu 的 DEMO
						站：內容精簡、可導覽、可部署到 Cloudflare Workers。
					</p>
				</div>
				<div className="highlight-rail">
					{homeHighlights.map((item) => (
						<Link key={item.to} to={item.to} className="highlight-link">
							<div className="highlight-link__label">
								{item.label}
								<em>{item.en}</em>
							</div>
							<p>{item.copy}</p>
						</Link>
					))}
				</div>
				<div className="manifesto">
					<p>
						好牛肉不靠玄學。看纖維、看油花、看標示，再用對的火候把它做對。
					</p>
					<p className="manifesto__aside">
						視覺以炭火與焰光為基調：深炭底、焰橘與鋼藍微光——不是奶油紙本風，也不是紫漸層範本。
					</p>
				</div>
			</section>
		</PageShell>
	);
}
