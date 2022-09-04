export interface ModalProps {
	onCloseModal: () => void;
}

export interface NavItemType {
	active: boolean;
	key: string;
	label: string;
	toPage: string;
}

export type SkillNameType =
	| 'android'
	| 'angular'
	| 'aws'
	| 'c'
	| 'cpp'
	| 'cs'
	| 'css'
	| 'deno'
	| 'django'
	| 'docker'
	| 'flutter'
	| 'go'
	| 'html'
	| 'java'
	| 'javascript'
	| 'kotlin'
	| 'kubernetes'
	| 'linux'
	| 'nodejs'
	| 'python'
	| 'r'
	| 'react'
	| 'ruby'
	| 'sass'
	| 'spring'
	| 'sql'
	| 'svelte'
	| 'swift'
	| 'typescript'
	| 'ubuntu'
	| 'vue';
