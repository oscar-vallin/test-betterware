import { collection, getDocs,  } from 'firebase/firestore';
import { firestore } from './firebase';
import { CartProduct } from "../redux/types/state";

export const shoppingCartProducts = async () => {
  const carsCollectionRef = collection(firestore, 'shoppingCart');
  const querySnapshot = await getDocs(carsCollectionRef);
  const products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as CartProduct[];
  return products;
};