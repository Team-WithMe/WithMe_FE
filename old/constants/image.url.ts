const URI_PREFIX = '/images/' as const;

export const IMG_URL = {
	MAIN_INTRO_IMG_URI: `${URI_PREFIX}main_intro.png`,
	MAIN_PREVIEW_IMG_URI: `${URI_PREFIX}main_preview.png`,
	SELECT_HOST_IMG_URI: `${URI_PREFIX}select_host.png`,
	SELECT_MEMBER_IMG_URI: `${URI_PREFIX}select_member.png`,
	TEAM_GOAL_PROJECT_IMG_URI: `${URI_PREFIX}team_goal_project.png`,
	TEAM_GOAL_STUDY_IMG_URI: `${URI_PREFIX}team_goal_study.png`,
	DEFAULT_USER_IMG_URI: `${URI_PREFIX}default_user.png`
} as const;
