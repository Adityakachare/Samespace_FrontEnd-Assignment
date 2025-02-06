import axios from "axios";

const API_URL = "https://cms.samespace.com/items/songs";

export const fetchSongs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data?.data || []; // Ensure we return an array
  } catch (error) {
    console.error("Error fetching songs:", error);
    return [];
  }
};
