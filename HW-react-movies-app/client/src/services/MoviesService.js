const apiBase = '/api/movies';

const fetchMovie = async (id) => {
  const res = await fetch(`${apiBase}/${id}`);

  if (!res.ok) {
    throw new Error(`Could not fetch, received ${res.status}`);
  }
  return await res.json();
};

const fetchAllMovies = async () => {
  const res = await fetch(apiBase);

  if (!res.ok) {
    throw new Error(`Could not fetch, received ${res.status}`);
  }
  return await res.json();
};

const addMovie = async (data) => {
  const res = await fetch(apiBase, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`Could not fetch movie, received ${res.status}`);
  }
  return await res.json();
};

const updateMovie = async (data) => {
  const res = await fetch(`${apiBase}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`Could not update movie, received ${res.status}`);
  }
  return await res.json();
};

const deleteMovie = async (id) => {
  const res = await fetch(`${apiBase}/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error(`Could not delete movie, received ${res.status}`);
  }
};

const MovieService = {
  fetchAllMovies,
  fetchMovie,
  addMovie,
  updateMovie,
  deleteMovie,
};

export default MovieService;
