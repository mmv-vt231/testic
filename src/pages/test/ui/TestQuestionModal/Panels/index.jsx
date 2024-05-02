import {
  Single as SingleIcon,
  Multiple as MultipleIcon,
  Relation as RelationIcon,
  Order as OrderIcon,
} from "@icons";

import Single from "./SingleOrMultiple/Single";
import Multiple from "./SingleOrMultiple/Multiple";
import Relation from "./Relation";
import Order from "./Order/Order";

const baseValidation = {
  title: { required: true },
  image: {
    extensions: ["png", "jpg", "jpeg", "svg"],
  },
  points: {
    required: true,
    min: 0,
    max: 100,
  },
};
const inputValidation = {
  type: "objectArray",
  rules: {
    text: {
      optional: true,
    },
    image: {
      extensions: ["png", "jpg", "jpeg", "svg"],
    },
  },
};

export const singleAndMultipleValidation = {
  ...baseValidation,
  data: {
    type: "object",
    rules: {
      answers: inputValidation,
    },
  },
  keys: {
    answerRequired: true,
  },
};
const relationValidation = {
  ...baseValidation,
  data: {
    type: "object",
    rules: {
      questions: inputValidation,
      answers: inputValidation,
    },
  },
  keys: {
    relativeKeysRequired: true,
  },
};
const orderValidation = {
  ...baseValidation,
  data: {
    type: "object",
    rules: {
      answers: inputValidation,
    },
  },
};

const types = [
  {
    title: "Одна",
    type: "single",
    Icon: SingleIcon,
    Panel: Single,
    validation: singleAndMultipleValidation,
    data: {
      answers: [],
    },
  },
  {
    title: "Декілька",
    type: "multiple",
    Icon: MultipleIcon,
    Panel: Multiple,
    validation: singleAndMultipleValidation,
    data: {
      answers: [],
    },
  },
  {
    title: "Відповідність",
    type: "relation",
    Icon: RelationIcon,
    Panel: Relation,
    validation: relationValidation,
    data: {
      questions: [],
      answers: [],
    },
  },
  {
    title: "Порядок",
    type: "order",
    Icon: OrderIcon,
    Panel: Order,
    validation: orderValidation,
    data: {
      answers: [],
    },
  },
];

export default types;
