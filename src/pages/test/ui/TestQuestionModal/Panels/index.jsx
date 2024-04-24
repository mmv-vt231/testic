import React from "react";
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
      required: true,
    },
    image: {
      extensions: ["png", "jpg", "jpeg", "svg"],
    },
  },
};

const singleAndMultipleValidation = {
  ...baseValidation,
  answers: inputValidation,
  keys: {
    answerRequired: true,
  },
};
const relationValidation = {
  ...baseValidation,
  questions: inputValidation,
  answers: inputValidation,
  keys: {
    type: "objectArray",
    rules: {
      answer: {
        required: true,
      },
    },
  },
};
const orderValidation = {
  answers: inputValidation,
};

const types = [
  {
    title: "Одна",
    type: "single",
    Icon: SingleIcon,
    Panel: Single,
    validation: singleAndMultipleValidation,
  },
  {
    title: "Декілька",
    type: "multiple",
    Icon: MultipleIcon,
    Panel: Multiple,
    validation: singleAndMultipleValidation,
  },
  {
    title: "Відповідність",
    type: "relative",
    Icon: RelationIcon,
    Panel: Relation,
    validation: relationValidation,
  },
  {
    title: "Порядок",
    type: "order",
    Icon: OrderIcon,
    Panel: Order,
    validation: orderValidation,
  },
];

export default types;
