import { HStack, List, Image, Spinner, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

function GenreList({ onSelectGenre }: Props) {
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
              <Button
                fontSize="large"
                variant="ghost"
                maxWidth="full"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        );
      })}
    </List.Root>
  );
}

export default GenreList;
