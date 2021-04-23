const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url, data) => {

};

const getData = () => {
	axios.get('http://localhost/php-restful-api/api/post/read.php').then(response => {
		console.log(response);
	});
}

const postData = () => {
	axios.post('http://localhost/php-restful-api/api/post/create.php', {
		title: 'Test from axios',
		body: 'Test from axios body',
		author: 'I am axios',
		category_id: '2'
	}, {
		// custom header
		// header: {
		// 	'Content-Type': 'application/json'
		// }
	}).then(response => {
		console.log(response);
	}).catch(err => {
		console.log(err);
	});
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData);
