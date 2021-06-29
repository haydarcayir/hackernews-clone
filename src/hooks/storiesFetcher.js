import { useState, useEffect } from "react";
import { getStories } from "../utils/apis";

const useStoriesFetcher = (type) => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getStories(type)
      .then((stories) => {
        setIsLoading(false);
        setStories(stories);
      })
      .catch((err) => setIsLoading(false));
  }, [type]);

  return { isLoading, stories: stories.filter((story) => story) };
};

export default useStoriesFetcher;
