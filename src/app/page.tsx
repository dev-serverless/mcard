"use clinet";
import { Button } from "@/components/shared/Button";
import { Text } from "@/components/shared/Text";

const Home = () => {
  return (
    <>
      <Text typography="t1" color="red">
        t1
      </Text>
      <Button size="medium" color="success">
        클릭
      </Button>
      <Button size="large" color="primary">
        클릭
      </Button>
      <Button weak={true} size="small" color="error">
        클릭
      </Button>
      <Button weak={true} full={true} size="small" color="error">
        클릭
      </Button>
      <Button
        weak={true}
        disabled={true}
        full={true}
        size="small"
        color="error"
      >
        클릭
      </Button>
    </>
  );
};

export default Home;
