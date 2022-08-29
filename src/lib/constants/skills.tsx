import type { FC, SVGProps } from 'react';
import * as icons from '@with-me/icons';
import type { SkillNameType } from '@typings/common';

interface SkillsType {
	id: number;
	name: SkillNameType;
	Icon: FC<SVGProps<SVGSVGElement>>;
}

export const SKILLS: SkillsType[] = [
	{ id: 1, name: 'android', Icon: icons.Android },
	{ id: 2, name: 'angular', Icon: icons.Angular },
	{ id: 3, name: 'aws', Icon: icons.Aws },
	{ id: 4, name: 'c', Icon: icons.C },
	{ id: 5, name: 'cpp', Icon: icons.Cpp },
	{ id: 6, name: 'cs', Icon: icons.Cs },
	{ id: 7, name: 'css', Icon: icons.Css },
	{ id: 8, name: 'deno', Icon: icons.Deno },
	{ id: 9, name: 'django', Icon: icons.Django },
	{ id: 10, name: 'docker', Icon: icons.Docker },
	{ id: 11, name: 'flutter', Icon: icons.Flutter },
	{ id: 12, name: 'go', Icon: icons.Go },
	{ id: 13, name: 'html', Icon: icons.Html },
	{ id: 14, name: 'java', Icon: icons.Java },
	{ id: 15, name: 'javascript', Icon: icons.Javascript },
	{ id: 16, name: 'kotlin', Icon: icons.Kotlin },
	{ id: 17, name: 'kubernetes', Icon: icons.Kubernetes },
	{ id: 18, name: 'linux', Icon: icons.Linux },
	{ id: 19, name: 'nodejs', Icon: icons.Nodejs },
	{ id: 20, name: 'python', Icon: icons.Python },
	{ id: 21, name: 'r', Icon: icons.R },
	{ id: 22, name: 'react', Icon: icons.React },
	{ id: 23, name: 'ruby', Icon: icons.Ruby },
	{ id: 24, name: 'sass', Icon: icons.Sass },
	{ id: 25, name: 'spring', Icon: icons.Spring },
	{ id: 26, name: 'sql', Icon: icons.Sql },
	{ id: 27, name: 'svelte', Icon: icons.Svelte },
	{ id: 28, name: 'swift', Icon: icons.Swift },
	{ id: 29, name: 'typescript', Icon: icons.Typescript },
	{ id: 30, name: 'ubuntu', Icon: icons.Ubuntu },
	{ id: 31, name: 'vue', Icon: icons.Vue }
];
