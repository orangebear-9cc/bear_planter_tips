// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string; // 添加前往项目链接字段
}

export const projectsData: Project[] = [
	{
		id: "orangebear-tips",
		title: "便签",
		description:
			"一个方便快捷的工作拆解任务用的便签，旨在工作的时候方便拆分记录小任务，做到不遗漏，不放在心里一直耗费内存的记住。且记录你工作的成果，有趣、简单是我们的宗旨。",
		image: "",
		category: "desktop",
		techStack: ["便签", "工作", "有趣", ],
		status: "in-progress",
		// liveDemo: "https://blog.example.com",
		// sourceCode: "https://github.com/example/mizuki", // 更改为GitHub链接
		// visitUrl: "https://blog.example.com", // 添加前往项目链接
		startDate: "2026-03-01",
		// endDate: "2024-06-01",
		featured: true,
		// tags: ["Blog", "Theme", "Open Source"],
	},
	{
		id: "orangebear-bearplanter",
		title: "小熊盆栽",
		description:
			"一个计划类APP，拆分做计划的流程，兼顾计划和日常，做计划不再是一项孤立的立刻想出来的事情，而是融入生活和自己息息相关。收集每一个掠过的想法，积攒每一滴微小的精力，",
		image: "",
		category: "mobile",
		techStack: ["计划", "日程", "生活", "低启动"],
		status: "planned",
		// liveDemo: "https://portfolio.example.com",
		// sourceCode: "https://github.com/example/portfolio",
		// visitUrl: "https://portfolio.example.com", // 添加前往项目链接
		startDate: "2026-02-01",
		// endDate: "2023-12-01",
		featured: true,
		// tags: ["Portfolio", "React", "Animation"],
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter(
		(p) => p.status === "completed",
	).length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
