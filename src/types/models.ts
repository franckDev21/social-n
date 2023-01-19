export type RoleType = 'user' | 'admin' | 'editor';

export interface User {
	id: number;
	email: string;
	roles: {
		name: RoleType;
	}[];
}
