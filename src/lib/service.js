import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

/**
 * Kullanıcı id'ye göre ilgili postları getirecek fonksiyon
 * @param {number} id Kullanıcı id
 * @returns {Promise} İstek yerine getirildiğinde kullanıcı ve kullanıcıya ait post bilgileri içerir
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
