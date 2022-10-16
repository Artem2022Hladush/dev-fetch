const options = {
	headers: {
		Authorization: '9fd172dab60c47a383ba2b9bfa1e1068'
	}
}


fetch('https://newsapi.org/v2/everything?q=bitcoin&pageSize=20', options).then(response => response.data).then(comsole.log)