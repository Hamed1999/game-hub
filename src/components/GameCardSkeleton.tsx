import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card.Root>
      <Skeleton height={{ base: "280px", lg: "260px" }} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card.Root>
  );
}

export default GameCardSkeleton;
