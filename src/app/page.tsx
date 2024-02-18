"use clinet";
import { Button } from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import { Text } from "@/components/shared/Text";
import TextField from "@/components/shared/TextField";

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
      <Input placeholder="로그인" aria-invalid={true} />
      <TextField label="id" />
      <TextField label="password" hasError={true} helpMessage={"하ㅣㅇ"} />
    </>
  );
};

export default Home;
