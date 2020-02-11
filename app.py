import json, requests

# get your free API key from here: http://omdbapi.com/

api_key='YOUR API KEY'

def movie_api(movie_name):
	url=f"http://omdbapi.com/?apikey={api_key}&t={movie_name}"

	response=requests.get(url)
	movie_details=response.json()

	print('Movie Name:',movie_details['Title'])
	print('Released in:', movie_details['Released'])
	print('Genre:',movie_details['Genre'])
	print('Directed by:',movie_details['Director'])
	print('IMDB rating:',movie_details['imdbRating'])
	print('Plot details:',movie_details['Plot'])


movie_name=input('Enter movie name: ')
movie_api(movie_name)
