const movie = {
    title: "American Psycho",
    director: "Mary Harron",
    year: 2000,
    rating: 8.1,
    movieRating() {
        if(this.rating >= 8) {
            return true
        } else {
            return false
        }
    }
}

console.log("Title:", movie.title, "Director:", movie.director, "Year:", movie.year, "Rating:", movie.rating)