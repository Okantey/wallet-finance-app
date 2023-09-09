import { Octicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import behance from "../../assets/logos/behance.png";
import btc from "../../assets/logos/ether.jpeg";
import skrill from "../../assets/logos/download.png";
import uber from "../../assets/logos/uber.jpg";

export const transactions = [
  {
    id: 1,
    logo: behance,
    title: "Behance project",
    date: "23rd march 2021",
    amount: "$230",
  },
  {
    id: 2,
    logo: uber,
    title: "Uber monthly",
    date: "17th april 2021",
    amount: "$230",
  },
  {
    id: 3,
    logo: btc,
    title: "Ethereum withdraws",
    date: "BDT account",
    amount: "$230",
  },
  {
    id: 4,
    logo: skrill,
    title: "Transfer money",
    date: "Skrill account",
    amount: "$230",
  },
];

export const tabItems = [
  {
    id: 1,
    name: "Transfer",
    icon: <Octicons name="arrow-switch" size={23} color="black" />,
  },
  {
    id: 2,
    name: "Sent",
    icon: <FontAwesome name="send-o" size={23} color="black" />,
  },
  {
    id: 3,
    name: "Shopping",
    icon: <Feather name="shopping-bag" size={23} color="black" />,
  },
  {
    id: 4,
    name: "Bill",
    icon: <Ionicons name="md-newspaper-outline" size={23} color="black" />,
  },
  {
    id: 5,
    name: "Voucher",
    icon: <Ionicons name="card-outline" size={23} color="black" />,
  },
];
