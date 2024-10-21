export default function getProjects() {
	return fetch('https://endoflife.date/api/all.json').then(x => x.json());
};
