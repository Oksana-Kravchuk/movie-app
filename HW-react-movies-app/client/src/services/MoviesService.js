const getApiBase = (query) => {
  const apiBase = query
    ? `api/movies?search=${query}&searchBy=title`
    : 'api/movies';

  return apiBase;
};

const fetchMovie = async (id) => {
  const res = await fetch(`${getApiBase()}/${id}`);

  if (!res.ok) {
    throw new Error(`Could not fetch, received ${res.status}`);
  }
  return await res.json();
};

const addMovie = async (data) => {
  const res = await fetch(getApiBase(), {
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
  const res = await fetch(`${getApiBase()}`, {
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
  const res = await fetch(`${getApiBase()}/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error(`Could not delete movie, received ${res.status}`);
  }
};

const sortBy = async (params, searchQuery) => {
  const res = await fetch(`${getApiBase(searchQuery)}&${params}`, {
    method: 'GET',
  });

  if (!res.ok) {
    throw new Error(`Could not sort movie, received ${res.status}`);
  }

  return await res.json();
};

const filter = async (params, searchQuery) => {
  const res = await fetch(`${getApiBase(searchQuery)}&${params}`, {
    method: 'GET',
  });

  if (!res.ok) {
    throw new Error(`Could not filter movie, received ${res.status}`);
  }

  return await res.json();
};

const search = async (query) => {
  const res = await fetch(`${getApiBase()}?search=${query}&searchBy=title`, {
    method: 'GET',
  });

  if (!res.ok) {
    throw new Error(`Could not search movie, received ${res.status}`);
  }

  return await res.json();
};

const MovieService = {
  fetchMovie,
  addMovie,
  updateMovie,
  deleteMovie,
  sortBy,
  filter,
  search,
};

export default MovieService;
