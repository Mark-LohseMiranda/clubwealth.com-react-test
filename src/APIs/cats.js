import axios from "axios";

//documentation @https://docs.thecatapi.com/
//feel free to add more functions!

const cats = {
  get10Cats: () => {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://api.thecatapi.com/v1/images/search?limit=10`, {
          headers: {
            "x-api-key": process.env.REACT_APP_CATS,
          },
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  get10CatsByBreed: (breed) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `https://api.thecatapi.com/v1/images/search?limit=10&breed_id=${breed}`,
          {
            headers: {
              "x-api-key": process.env.REACT_APP_CATS,
            },
          }
        )
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getBreeds: () => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://api.thecatapi.com/v1/breeds")
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default cats;
