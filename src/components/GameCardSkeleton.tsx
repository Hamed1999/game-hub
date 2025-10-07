import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card.Root borderRadius={10} overflow="hidden"  width="390px">
      <Skeleton height="255px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card.Root>
  );
}

export default GameCardSkeleton;
