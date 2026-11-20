import { NavLink } from "react-router";
import { brand, navItems } from "../data/beef";

export function SiteHeader() {
	return (
		<header className="site-header">
			<div className="site-header__inner">
				<NavLink to="/" className="brand-mark" end>
					<span className="brand-mark__zh">{brand.nameZh}</span>
					<span className="brand-mark__en">{brand.nameEn}</span>
				</NavLink>
				<nav className="site-nav" aria-label="主要導覽">
					{navItems.map((item) => (
						<NavLink
							key={item.to}
							to={item.to}
							end={item.to === "/"}
							className={({ isActive }) =>
								`site-nav__link${isActive ? " is-active" : ""}`
							}
						>
							<span>{item.label}</span>
							<em>{item.en}</em>
						</NavLink>
					))}
				</nav>
			</div>
		</header>
	);
}
