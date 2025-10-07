import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let bgColor =
    score > 75
      ? "rgba(45, 149, 37, 0.2)"
      : score > 60
      ? "rgba(255, 255, 2, 0.2)"
      : "";

  return (
    <Badge
      fontSize="15px"
      paddingY={2}
      paddingX={3}
      borderRadius="6px"
      bgColor={bgColor}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
