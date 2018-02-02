function loadData(url, callback){
	$.getJSON(url, callback).fail(showErr);
}

function renderResults(result){
	return `
		<div>
			<h2>${result.snippet.title}</h2>
				<a href="https://www.youtube.com/watch?v=${result.id.videoId}" target="_blank">
					<img src="${result.snippet.thumbnails.high.url}" alt="Image of result">
				</a>
		</div>
		`;
}

function displayData(data){
	console.log(data);
	const results = data.items.map((item, index) => renderResults(item));
	$('.results').html(results);
}

function showErr(err) {
  const outputElem = $('.results');
  
  const errMsg = (
    `<p>We couldn't find a video with that title!`
  );
    
  outputElem
    .html(errMsg);
}

function getUrl(){
	const url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDQJ89KWNP3XkxSZayiidtVsbEEvq5bQOI&part=snippet&q='
	var searchVal = $('input');
	$('button').click(function(event){
		event.preventDefault();
		var url2 = url + searchVal.val();
		searchVal.val('');
		loadData(url2, displayData);
		console.log(url2);
	});
}

getUrl();