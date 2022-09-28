export const exerciseOptions = {

  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {

    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '8bc9ab9e30mshcb25afcd6c37bf3p1231a7jsn2e229c3d0c0d',
  }
};



export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
