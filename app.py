import json, requests

# get your free API key from here: http://omdbapi.com/

movie_name=input('Enter movie name: ')

api_key='YOUR API KEY'
url=f"http://omdbapi.com/?apikey={api_key}&t={movie_name}"

response=requests.get(url)
movie_details=response.json()

print('Movie Name:',movie_details['Title'])
print('Released in:', movie_details['Released'])
print('Genre:',movie_details['Genre'])
print('Directed by:',movie_details['Director'])
print('IMDB rating:',movie_details['imdbRating'])
print('Plot:',movie_details['Plot'])

