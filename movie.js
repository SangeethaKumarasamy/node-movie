import express from "express";
import {
  updateMovieByName,
  getMovieByName,
  getMovies,
  getMovieById,
  createMovie,
  deleteMovieById,
} from "./helper.js";

//router in express

const router = express.Router();

//movies
router
  .route("/")
  .get(async (request, response) => {
    const filter = request.query;
    if (filter.rating) {
      filter.rating = parseInt(filter.rating);
    }
    const movies = await getMovies(filter);
    response.send(movies);
  })
  .put(async (request, response) => {
    const { name } = request.query;
    const movie = await updateMovieByName(name, request);

    await updateMovieByName(name, request);
    const movie = await getMovieByName(name);

    response.send(movie);
  })
  .post(async (request, response) => {
    const data = request.body;
    const result = await createMovie(data);
    response.send(result);
  });

router
  .route("/:id")
  .get(async (request, response) => {
    const { id } = request.params;
    const movie = await getMovieById(id);
    response.send(movie || { message: "No matching movies" });
  })
  .delete(async (request, response) => {
    const { id } = request.params;
    const movie = await deleteMovieById(id);
    response.send(movie || { message: "the matched is deleted" });
  });

export const movieRouter = router;
