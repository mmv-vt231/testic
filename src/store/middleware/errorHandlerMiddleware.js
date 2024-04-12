import { createStandaloneToast } from "@chakra-ui/react";
import { isRejectedWithValue } from "@reduxjs/toolkit";

const errorHandlerMiddleware = () => next => action => {
  if (isRejectedWithValue(action)) {
    const { toast } = createStandaloneToast();
    const status = action?.payload?.status;
    const data = action?.payload?.data;
    let description;

    if (status == "FETCH_ERROR" || status == "ERR_NETWORK") {
      description = "Невдалося з'єднатися з сервером";
    } else if (data) {
      description = action.payload.data.title;
    } else {
      description = "Сталася неочікувана помилка";
    }

    console.log(action);

    toast({
      title: "Помилка",
      description,
      status: "error",
      position: "bottom-right",
      isClosable: true,
    });
  }

  return next(action);
};

export default errorHandlerMiddleware;
