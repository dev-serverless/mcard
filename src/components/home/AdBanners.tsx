import { styled } from "styled-components";
import { Text } from "../shared/Text";
import { colors } from "@/styles/colorPalette";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";
import getAddBanenrs from "@/remote/adBanner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const AdBanners = () => {
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["adBasnners"],
    queryFn: () => getAddBanenrs(),
  });

  return (
    <Container>
      <Swiper spaceBetween={8}>
        {data?.map((banner) => (
          <SwiperSlide key={banner.id}>
            <StyledAdBanners
              onClick={() => {
                router.push(`/${banner.link}`);
              }}
            >
              <Text bold={true}>{banner.title}</Text>
              <Text typography="t7">{banner.description}</Text>
            </StyledAdBanners>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default AdBanners;

const Container = styled.div`
  padding: 24px;
  cursor: pointer;
`;

const StyledAdBanners = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: ${colors.gray};
  border-radius: 4px;
  margin-bottom: 8px;
`;
