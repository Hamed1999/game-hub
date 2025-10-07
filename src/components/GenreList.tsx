import { HStack, List, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

function GenreList() {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  // if (isLoading) return <Spinner />;
  if (isLoading) return <GenreListSkeleton />;
  return (
    <List.Root unstyled={true}>
      {data.map((genre) => {
        return (
          <List.Item key={genre.id} paddingBottom={3}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="large">{genre.name}</Text>
            </HStack>
          </List.Item>
        );
      })}
    </List.Root>
  );
}

export default GenreList;
