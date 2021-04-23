const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url, data) => {
	const promise = new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();

		xhr.open(method, url);

		xhr.responseType = 'json';

		xhr.setRequestHeader('Content-Type', 'application/json');

		xhr.onload = () => {
			if (xhr.status >= 400) {
				reject(xhr.response);
			}
			else {
				resolve(xhr.response);
			}
		};

		xhr.onerror = () => {
			reject('Something went wrong!')
		};

		xhr.send(JSON.stringify(data));
	});
	return promise;
};

const getData = () => {
	// real api for test
	// url = 'https://reqres.in/api/users';

	// my own api for test
	// url = 'http://localhost/php-restful-api/api/post/read.php';
	sendHttpRequest('GET', 'http://localhost/php-restful-api/api/post/read.php').then(responseData => {
		console.log(responseData);
	});
}

const postData = () => {
	// real api for test
	// sendHttpRequest('POST', 'https://reqres.in/api/register', {
	// 	email: 'eve.holt@reqres.in',
	// 	password: 'pistol'
	// }).then(responseData => {
	// 	console.log(responseData);
	// });

	// my own api for test
	// url = 'http://localhost/php-restful-api/api/post/create.php';
	sendHttpRequest('POST', 'http://localhost/php-restful-api/api/post/create.php', {
		title: 'Test from XMLHttpRequest',
		body: 'Test from XMLHttpRequest body',
		author: 'I am',
		category_id: '1'
	}).then(responseData => {
		console.log(responseData);
	}).catch(err => {
		console.log(err);
	});
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData);
