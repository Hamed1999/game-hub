import { List, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <List.Root unstyled={true}>
      {data.map((d) => {
        return (
          <List.Item key={d} paddingBottom={3}>
            <SkeletonText />
          </List.Item>
        );
      })}
    </List.Root>
  );
};

export default GenreListSkeleton;
