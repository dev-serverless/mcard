import css from "styled-jsx/css";
import Flex from "./Flex";
import { Text } from "./Text";

type TopProps = {
  title: string;
  subTitle: string;
};

const Top = ({ title, subTitle }: TopProps) => {
  return (
    <Flex direction="column" style={{ padding: "24px" }}>
      <Text typography="t4" bold={true}>
        {title}
      </Text>
      <Text typography="t7">{subTitle}</Text>
    </Flex>
  );
};

export default Top;
