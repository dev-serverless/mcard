import { colors } from "@/styles/colorPalette";
import { styled } from "styled-components";
import { Text } from "./Text";

type BadgeProps = {
  label: string;
};

const Badge = ({ label }: BadgeProps) => {
  return (
    <Container>
      <Text typography="t7" color="white">
        {label}{" "}
      </Text>
    </Container>
  );
};

export default Badge;

const Container = styled.div`
  border-radius: 12px;
  background-color: ${colors.blue};
  padding: 2px 8px;
`;
