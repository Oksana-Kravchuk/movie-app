import * as Yup from 'yup';

const MovieFormValidation = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  release_date: Yup.string().required('Release date is required'),
  poster_path: Yup.string()
    .matches(/(www|http:|https:)+[^\s]+[\w]/, 'Path is not valid')
    .required('Movie url is required'),
  genres: Yup.array()
    .of(Yup.string())
    .min(1, 'Genres does not contain 1 required value(s)')
    .required('Cenre is required'),
  overview: Yup.string().required('Overview is required'),
  runtime: Yup.number('Runtime is a number').required('Runtime is required'),
});

export default MovieFormValidation;
