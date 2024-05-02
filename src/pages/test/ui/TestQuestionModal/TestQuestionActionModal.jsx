import React from "react";
import { useParams } from "react-router-dom";
import { singleAndMultipleValidation } from "./Panels";
import {
  useAddQuestionMutation,
  useEditQuestionMutation,
  useUploadImageMutation,
} from "@store/services/api";

import ModalForm from "@components/shared/Modal/ModalForm";
import Answers from "./Answers";
import QuestionField from "./QuestionField";

function TestQuestionActionModal({ data, title, type, children }) {
  const { id } = useParams();
  const [addQuestion] = useAddQuestionMutation();
  const [editQuestion] = useEditQuestionMutation();
  const [uploadImage] = useUploadImageMutation();

  const initialData = data || {
    title: "",
    image: null,
    type: "single",
    points: 1,
    data: {
      answers: [],
    },
    keys: [],
  };

  const handleSubmit = async formData => {
    const newformData = JSON.parse(JSON.stringify(formData));

    newformData.image = await uploadImg(formData.image, data?.image);

    for (const arr in newformData.data) {
      await Promise.all(
        formData.data[arr].map(async ({ image }, i) => {
          newformData.data[arr][i].image = await uploadImg(image, data?.data?.[arr]?.[i].image);
        })
      );
    }

    if (type == "edit") {
      editQuestion({
        id: newformData.id,
        body: newformData,
      });
    } else {
      addQuestion({
        id,
        body: newformData,
      });
    }
  };

  const uploadImg = async (image, replaceFile = null) => {
    if (image instanceof File) {
      const form = new FormData();
      form.append("image", image);
      form.append("replaceFile", replaceFile);

      const response = await uploadImage(form)
        .unwrap()
        .then(({ path }) => {
          return path || null;
        });

      return response;
    }

    return null;
  };

  return (
    <ModalForm
      title={title}
      size="3xl"
      initialData={initialData}
      validation={singleAndMultipleValidation}
      handleSubmit={handleSubmit}
      triggerButton={children}
      type={type}
      encType="multipart/form-data"
    >
      <QuestionField />
      <Answers />
    </ModalForm>
  );
}

export default TestQuestionActionModal;
