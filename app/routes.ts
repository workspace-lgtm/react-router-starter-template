import {
	type RouteConfig,
	index,
	route,
} from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("cuts", "routes/cuts.tsx"),
	route("grades", "routes/grades.tsx"),
	route("cooking", "routes/cooking.tsx"),
	route("origin", "routes/origin.tsx"),
] satisfies RouteConfig;
