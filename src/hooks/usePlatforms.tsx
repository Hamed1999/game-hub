import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// useData<Platform>("/platforms/lists/parents");
const usePlatforms = () => ({
  data: platforms,
  isLoading: false,
  error: false,
});
export default usePlatforms;
