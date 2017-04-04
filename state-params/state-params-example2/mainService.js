angular.module('movies')
.service('mainService', function() {

this.movies = [
  {
    title: 'Braveheart',
    id: 1,
    year: 1995,
    rating: 'R',
    gross: 75600000,
    img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNTMyNGE1ODQtYTNiNS00ZTUyLThhZjktMTgyOGZkZThlYTc3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
  },
  {
    title: 'Midnight in Paris',
    id: 2,
    year: 2011,
    rating: "PG-13",
    gross: 56816662,
    img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM4NjY1MDQwMl5BMl5BanBnXkFtZTcwNTI3Njg3NA@@._V1_UX182_CR0,0,182,268_AL_.jpg'
  },
  {
    title: 'Finding Nemo',
    id: 3,
    year: 2003,
    rating: "G",
    gross: 380838870,
    img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
  },
  {
    title: 'Field of Dreams',
    id: 4,
    year: 1989,
    rating: 'PG',
    gross: 64431625,
    img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzk5OWY0YjAtYWU3ZS00Y2Q4LWFlNjItMzgwMTQ2MjIyMDFmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg'

  }
]


})
