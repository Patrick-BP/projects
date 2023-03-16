import "../../App.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";
function ShowmovieTable() {
  const imgPath = "http://localhost:3001";
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    (async function fetch() {
      const resp = await axios.get("/movies");
      setmovies(resp.data);
    })();
  }, [movies]);
  
function delfunc(id){
axios.put(`/movies/del/${id}`, {isDeleted:true})
    
}

  return (
    <div className="card card-showmovie">
      <div className="card-body mx-auto" >
        <h4 className="card-title mt-3 text-center">All Movie</h4>

        <table className="table align-middle mb-0  ">
          <thead className="bg-light">
            <tr>
              <th>Poster</th>
              <th>Title</th>
              <th>overview</th>
              <th>Genre</th>
              <th>Language</th>
              <th>Type</th>
              <th>Country</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { movies.length >0 && movies.map((movie, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={`${imgPath}/images/${movie.smallimg}`}
                        alt=""
                        style={{ width: "70px", height: "100px" }}
                        className="rounded"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="ms-3">
                        <p className="fw-bold mb-1">{movie.title}</p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <p className="fw-normal mb-1">
                      { movie.overview && movie.overview.substring(0,50) + "..."}
                    </p>
                  </td>
                  
                  <td>{movie.genre}</td>
                  <td>{movie.language}</td>
                  <td>{movie.type}</td>
                  <td>{movie.country}</td>
                  
                  <td>
                    <span  className="cursor-del badge badge-success rounded-pill d-inline">
                      Edit
                    </span>
                  </td>
                  <td>
                    <span  onClick= {()=>delfunc(movie._id)} className=" cursor-del badge badge-danger rounded-pill d-inline">
                      Delete
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowmovieTable;
