"use client";

import { getCard } from "@/remote/card";
import { useParams } from "next/navigation";
import { useQuery } from "react-query";

const CardPage = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["card", id],
    queryFn: () => {
      getCard(String(id));
    },
  });

  console.log(data);

  return <div>{id}</div>;
};

export default CardPage;
