import React from "react";
import axios from 'axios';
import Movie from "./Movie";
import './App.css';


class App extends React.Component{

  state={
    isLoading: true,
    movies: []
  }

 getMovie = async () => {
   const {data:{data:{movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
   this.setState({
    movies: movies,
    isLoading: false
   })
 }

  componentDidMount(){
    this.getMovie();
  }
  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading 
        ? 
        <div className="loader">
          <span className="loader_text">Loading...</span> 
        </div>
        
        : movies.map(movie => {
          return (
           <div className="movies" key={movie.id}>
            <Movie 
              genres={movie.genres}
              id={movie.id}
              title={movie.title}
              year={movie.year}
              summary={movie.summary}
              poster={movie.medium_cover_image}
            />
            </div>

          )
        }) }
      </section>
    )
  }
}

export default App;
