import GitUser from "./User";
export default interface Repo {
	id: number,
	name: string,
	full_name: string,
	owner: GitUser,
	[option: string]: any
}
