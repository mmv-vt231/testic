import React from "react";
import { useContext, useRef, useState } from "react";
import { FormControl, Input, Button, Flex } from "@chakra-ui/react";
import { AddImage, DeleteImage } from "@icons";

import { FormContext } from "./Form";

function ImageField({
  name,
  defaultImage = null,
  handleChange: customHandleChange,
  handleDelete: customHandleDelete,
}) {
  const { setData, setErrors } = useContext(FormContext);
  const [image, setImage] = useState(defaultImage);

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = e => {
    const file = e.target.files[0];

    if (file) {
      setImage(true);

      if (customHandleChange) {
        customHandleChange({ file });
      } else {
        setData(data => ({ ...data, [name]: file }));
      }
    }
  };

  const handleDelete = () => {
    setImage(false);
    inputRef.current.value = null;

    if (customHandleDelete) {
      customHandleDelete();
    } else {
      setData(data => ({ ...data, [name]: null }));
      setErrors(errors => {
        delete errors.image;
        return errors;
      });
    }
  };

  return (
    <FormControl as={Flex} w="fit-content">
      {image ? (
        <Button variant="ghost" size="small" onClick={handleDelete} title="Видалити зображення">
          <DeleteImage boxSize={5} />
        </Button>
      ) : (
        <Button variant="ghost" size="small" onClick={handleClick} title="Додати зображення">
          <AddImage boxSize={5} />
        </Button>
      )}
      <Input
        name={name}
        type="file"
        ref={inputRef}
        autoComplete="off"
        onChange={handleChange}
        hidden
      />
    </FormControl>
  );
}

export default ImageField;
