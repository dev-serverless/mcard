import { useInfiniteQuery } from "react-query";
import { flatten } from "lodash";
import ListRow from "../shared/ListRow";
import InfiniteScroll from "react-infinite-scroll-component";
import { useCallback } from "react";
import Badge from "../shared/Badge";
import { useRouter } from "next/navigation";
import { getCards } from "@/remote/card";

const CardList = () => {
  const {
    data,
    hasNextPage = false,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["cards"],
    queryFn: ({ pageParam }) => {
      return getCards(pageParam); // 호출
    },
    getNextPageParam: (snapshot) => {
      // 호출된거 저장
      return snapshot.lastVisible;
    },
  });

  const cards = flatten(data?.pages.map(({ items }) => items));
  const router = useRouter();

  const loadMore = useCallback(() => {
    if (hasNextPage === false || isFetching) {
      return;
    }
    fetchNextPage();
  }, [fetchNextPage, hasNextPage, isFetching]);

  if (data == null) {
    return null;
  }

  return (
    <div>
      <InfiniteScroll
        dataLength={cards.length}
        hasMore={hasNextPage}
        loader={<>Loading...</>}
        next={loadMore}
        scrollThreshold="100px"
      >
        <ul>
          {cards.map((card, i) => (
            <ListRow
              key={card.id}
              left={<div>left</div>}
              contents={
                <ListRow.Texts title={`${i + 1}위`} subTitle={card.name} />
              }
              right={card.payback != null && <Badge label={card.payback} />}
              withArrow={true}
              onClick={() => {
                router.push(`/card/${card.id}`);
              }}
            />
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
};

export default CardList;
