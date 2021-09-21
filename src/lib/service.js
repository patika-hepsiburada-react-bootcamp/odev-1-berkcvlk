import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

/**
 * Function that returns related posts by user id
 * @param {number} id User id
 * @returns {Promise} Contains the user and the user's post when request fullfilled.
 */
const getData = async (id) => {
  try {
    const { data: user } = await fetcher(`/users/${id}`);
    const { data: posts } = await fetcher(`/posts?${user.id}`);

    return { ...user, posts };
  } catch (err) {
    return err.message;
  }
};

export default getData;
