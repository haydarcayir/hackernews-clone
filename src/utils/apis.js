import axios from "axios";
import { BASE_URL } from "./constant";

export const getStory = async (id) => {
  try {
    const { data: story } = await axios.get(`${BASE_URL}/item/${id}.json`);
    return story;
  } catch (err) {
    console.log("Error occurring when a story is getting.");
  }
};

export const getStories = async (type) => {
  try {
    const { data: storyIds } = await axios.get(`${BASE_URL}/${type}/.json`);
    return await Promise.all(storyIds.slice(0, 50).map((id) => getStory(id)));
  } catch (err) {
    console.log("Error occurring, when get all stories.");
  }
};
