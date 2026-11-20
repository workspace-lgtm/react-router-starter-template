export type NavItem = {
	to: string;
	label: string;
	en: string;
};

export const brand = {
	nameZh: "焰切",
	nameEn: "Yanqie",
	tagline: "把一塊好牛肉讀懂",
	taglineEn: "Read beef with clarity",
	demoNote: "DEMO · 為 Alan Chu 製作的牛肉資訊示範站",
} as const;

export const navItems: NavItem[] = [
	{ to: "/", label: "首頁", en: "Home" },
	{ to: "/cuts", label: "部位", en: "Cuts" },
	{ to: "/grades", label: "等級", en: "Grades" },
	{ to: "/cooking", label: "料理", en: "Cooking" },
	{ to: "/origin", label: "產地", en: "Origin" },
];

export type BeefCut = {
	id: string;
	nameZh: string;
	nameEn: string;
	primal: string;
	texture: string;
	bestFor: string[];
	tip: string;
};

export const cuts: BeefCut[] = [
	{
		id: "ribeye",
		nameZh: "肋眼",
		nameEn: "Ribeye",
		primal: "肋脊 Rib primal",
		texture: "脂肪紋路豐富、多汁",
		bestFor: ["炭火", "乾煎", "厚切"],
		tip: "中火封邊後轉中低火，讓油脂慢慢滲出。",
	},
	{
		id: "striploin",
		nameZh: "西冷",
		nameEn: "Striploin / NY Strip",
		primal: "腰脊 Short loin",
		texture: "纖維分明、口感扎實",
		bestFor: ["煎烤", "薄片", "鹽烤"],
		tip: "表面乾燥再下鍋，容易形成漂亮焦殼。",
	},
	{
		id: "tenderloin",
		nameZh: "菲力",
		nameEn: "Tenderloin / Filet",
		primal: "里脊 Tenderloin",
		texture: "極嫩、脂肪較少",
		bestFor: ["快煎", "低溫烹調", "塔塔"],
		tip: "別烤太熟；搭配醬汁或油脂補足風味。",
	},
	{
		id: "brisket",
		nameZh: "牛腩／胸肉",
		nameEn: "Brisket",
		primal: "胸腹 Brisket",
		texture: "結締組織多、需長時間",
		bestFor: ["煙燻", "燉煮", "火鍋"],
		tip: "低溫慢煮讓膠原轉化，才會入口即化。",
	},
	{
		id: "chuck",
		nameZh: "肩胛",
		nameEn: "Chuck",
		primal: "肩 Chuck",
		texture: "風味濃、價位親民",
		bestFor: ["燉煮", "絞肉", "壽喜燒"],
		tip: "選有明顯油花的肩胛心做壽喜燒切片。",
	},
	{
		id: "short-rib",
		nameZh: "短肋",
		nameEn: "Short Rib",
		primal: "肋排 Plate / Rib",
		texture: "骨邊肉、油脂豐厚",
		bestFor: ["韓式烤", "紅酒燉", "炭烤"],
		tip: "帶骨慢燉或薄切快烤，兩種完全不同風味。",
	},
];

export type GradeSystem = {
	id: string;
	region: string;
	regionEn: string;
	scale: string;
	highlight: string;
	notes: string[];
};

export const gradeSystems: GradeSystem[] = [
	{
		id: "usda",
		region: "美國",
		regionEn: "USDA",
		scale: "Prime → Choice → Select",
		highlight: "以大理石紋（marbling）與成熟度為主。",
		notes: [
			"Prime 油花最豐富，適合高溫快烤。",
			"Choice 是餐廳與家庭最常見的平衡選擇。",
			"Select 較瘦，適合醃漬或醬汁料理。",
		],
	},
	{
		id: "aus",
		region: "澳洲",
		regionEn: "MSA / AUS-MEAT",
		scale: "MSA 分數與大理石紋 0–9+",
		highlight: "強調食用品質預測與供應鏈溯源。",
		notes: [
			"MSA 分數愈高，嫩度與多汁性預期愈佳。",
			"草飼與穀飼標示會影響風味輪廓。",
			"注意屠體成熟（aging）天數對口感的影響。",
		],
	},
	{
		id: "wagyu",
		region: "日本和牛",
		regionEn: "JMGA",
		scale: "A5–C1（產量等級 × 品質等級）",
		highlight: "品質等級看大理石紋、色澤、脂肪質地與緊實度。",
		notes: [
			"A5 是產量與品質雙高的指標，不代表「一定最好吃」。",
			"BMS（霜降指數）常用來溝通油花程度。",
			"不同產地（神戶、松阪、近江等）風味差異明顯。",
		],
	},
];

export type CookingTip = {
	id: string;
	title: string;
	titleEn: string;
	summary: string;
	steps: string[];
};

export const cookingTips: CookingTip[] = [
	{
		id: "rest",
		title: "靜置很重要",
		titleEn: "Rest the meat",
		summary: "下鍋前後都給肉時間，汁水才不會在切盤時流失。",
		steps: [
			"冷藏取出後回溫 20–40 分鐘（視厚度）。",
			"煎烤完成後靜置約厚度每公分 1–2 分鐘。",
			"斜切對纖維，口感更細緻。",
		],
	},
	{
		id: "sear",
		title: "高溫封邊",
		titleEn: "Hard sear",
		summary: "乾表面 + 熱鍋，才能做出牛排的焦香外殼。",
		steps: [
			"用紙巾徹底吸乾表面水分。",
			"鍋熱到幾乎冒煙再下油與肉。",
			"少翻動，讓美拉德反應完整發生。",
		],
	},
	{
		id: "temp",
		title: "溫度比時間準",
		titleEn: "Trust the thermometer",
		summary: "中心溫度比「每面幾分鐘」更可靠。",
		steps: [
			"三分熟約 52–54°C，五分熟約 57–60°C（下鍋後會續升）。",
			"厚切可用烤箱或低溫法補溫。",
			"菲力等瘦肉建議偏三分，避免乾柴。",
		],
	},
	{
		id: "salt",
		title: "鹽的時機",
		titleEn: "Salt timing",
		summary: "提前乾鹽或即時下鹽，兩種策略都能成立。",
		steps: [
			"厚切可提前 40 分鐘乾鹽，促進表面乾燥。",
			"薄片火鍋肉則出鍋前或沾醬即可。",
			"最後再加一撮煙燻鹽或海鹽提香。",
		],
	},
];

export type OriginNote = {
	id: string;
	nameZh: string;
	nameEn: string;
	profile: string;
	lookFor: string[];
};

export const origins: OriginNote[] = [
	{
		id: "us",
		nameZh: "美國",
		nameEn: "United States",
		profile: "穀飼為主，油花明顯，烤香濃郁。",
		lookFor: ["USDA 等級", "穀飼天數", "乾式熟成標示"],
	},
	{
		id: "au",
		nameZh: "澳洲",
		nameEn: "Australia",
		profile: "草飼清爽或穀飼補飼，風味層次廣。",
		lookFor: ["MSA", "草飼／穀飼", "牧場溯源"],
	},
	{
		id: "jp",
		nameZh: "日本",
		nameEn: "Japan",
		profile: "和牛霜降細緻，脂肪熔點低、入口即化。",
		lookFor: ["產地證明", "BMS", "血統與牧場"],
	},
	{
		id: "tw",
		nameZh: "台灣選購提醒",
		nameEn: "Buying in Taiwan",
		profile: "進口冷藏與冷凍並存，標示與保存條件是關鍵。",
		lookFor: ["冷藏／冷凍狀態", "解凍方式", "屠宰與包裝日期"],
	},
];

export const homeHighlights = [
	{
		to: "/cuts",
		label: "部位地圖",
		en: "Cuts map",
		copy: "從肋眼到短肋，先搞懂纖維與用途。",
	},
	{
		to: "/grades",
		label: "等級解讀",
		en: "Grades decoded",
		copy: "USDA、MSA、和牛標示一次對照。",
	},
	{
		to: "/cooking",
		label: "料理要點",
		en: "Cooking cues",
		copy: "封邊、溫度、靜置——少踩雷。",
	},
	{
		to: "/origin",
		label: "產地與選購",
		en: "Origin & sourcing",
		copy: "看標示、問來源，買得更有把握。",
	},
] as const;
