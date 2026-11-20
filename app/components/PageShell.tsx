import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type PageShellProps = {
	children: ReactNode;
	bleed?: boolean;
};

export function PageShell({ children, bleed = false }: PageShellProps) {
	return (
		<div className={`page-shell${bleed ? " page-shell--bleed" : ""}`}>
			<SiteHeader />
			{children}
			<SiteFooter />
		</div>
	);
}
