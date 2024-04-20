import {
  Single as SingleIcon,
  Multiple as MultipleIcon,
  Relation as RelationIcon,
  Order as OrderIcon,
} from "@icons";

import Single from "./Single";
import Multiple from "./Multiple";
import Relation from "./Relation";
import Order from "./Order";

const types = [
  {
    title: "Одна",
    Icon: SingleIcon,
    Panel: Single,
  },
  {
    title: "Декілька",
    Icon: MultipleIcon,
    Panel: Multiple,
  },
  {
    title: "Відповідність",
    Icon: RelationIcon,
    Panel: Relation,
  },
  {
    title: "Порядок",
    Icon: OrderIcon,
    Panel: Order,
  },
];

export default types;
