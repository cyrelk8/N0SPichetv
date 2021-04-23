const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendHttpRequest = (method, url, data) => {
	return fetch(url, {
		method: method,
		body: JSON.stringify(data),
		header: data ? {'Content-Type': 'application/json'} : {}
	}).then(response => {
		// return error
		if (response.status => 400) {
			return response.json().then(errResData => {
				const error = new Error('Something went wrong!');
				error.data = errResData;
				throw error;
			});
		}
		// return body data
		return response.json();
	});
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
		title: 'Test from fetch',
		body: 'Test from fetch body',
		author: 'I am fetch',
		category_id: '2'
	}).then(responseData => {
		console.log(responseData);
	}).catch(err => {
		console.log(err, error.data);
	});
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData);
