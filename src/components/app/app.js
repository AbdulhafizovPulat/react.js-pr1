import AppInfo from "../app-Info/app-Info"
import Searchpanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import MovieList from "../movie-list/movie-list"
import MoviesAddForm from "../movies-add-form/movies-add-form"
import "./app.css"

const App = () => {
  const data = [
    {name: "The Lord of the Rings", viewers: 256, favourite: true, id:1},
    {name: "Hobbit", viewers: 723, favourite: false, id:2},
    {name: "The Idol", viewers: 998, favourite: true, id:3}
  ];
  return (
    <div className="app font-monospace">
        <div className="content">
            <AppInfo/>
            <div className="search-panel">
                <Searchpanel/>
                <AppFilter/>
            </div>
            <MovieList data={data}/>
            <MoviesAddForm/>
        </div>
    </div>
  )
}

export default App