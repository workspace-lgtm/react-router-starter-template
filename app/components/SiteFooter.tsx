import { Link } from "react-router";
import { brand, navItems } from "../data/beef";

export function SiteFooter() {
	return (
		<footer className="site-footer">
			<div className="site-footer__inner">
				<div>
					<p className="site-footer__brand">
						{brand.nameZh}{" "}
						<span className="site-footer__brand-en">{brand.nameEn}</span>
					</p>
					<p className="site-footer__note">{brand.demoNote}</p>
				</div>
				<ul className="site-footer__links">
					{navItems.map((item) => (
						<li key={item.to}>
							<Link to={item.to}>
								{item.label}
								<span>{item.en}</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
}
