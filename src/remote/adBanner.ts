import { collection, getDocs } from "firebase/firestore";
import { store } from "./firebase";
import { COLLECTIONS } from "@/constants";
import { AdBanner, Card } from "@/models/card";

const getAddBanenrs = async () => {
  const addBannerSnapshot = await getDocs(
    collection(store, COLLECTIONS.ADDBANNER)
  );

  return addBannerSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as AdBanner),
  }));
};

export default getAddBanenrs;
