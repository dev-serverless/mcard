import Flex from "./Flex";
import { Text } from "./Text";

type ListRowProps = {
  left?: React.ReactNode;
  contents: React.ReactNode;
  right?: React.ReactNode;
  withArrow?: boolean;
  onClick?: () => void;
};

const ListRow = ({
  left,
  contents,
  right,
  withArrow,
  onClick,
}: ListRowProps) => {
  return (
    <Flex
      as="li"
      style={{ padding: "8px 24px" }}
      onClick={onClick}
      align="center"
    >
      <Flex style={{ marginRight: "14px" }}></Flex>
      <Flex style={{ flex: 1 }}>{contents}</Flex>
      <Flex>{right}</Flex>
      {withArrow && <IconArrowRight />}
    </Flex>
  );
};

const ListRowTexts = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <Flex direction="column" align="flex-start">
      <Text bold={true}>{title}</Text>
      <Text typography="t7">{subTitle}</Text>
    </Flex>
  );
};

ListRow.Texts = ListRowTexts;

export default ListRow;

const IconArrowRight = () => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
};
