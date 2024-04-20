import { useContext, useRef, useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  Input,
  Button,
  Image as ImageBase,
  Tooltip,
  Flex,
} from "@chakra-ui/react";
import { AddImage, DeleteImage } from "@icons";

import { FormContext } from "./Form";

function ImageField({ name, handleChange: customHandleChange, handleDelete: customHandleDelete }) {
  const { setData, errors } = useContext(FormContext);
  const [image, setImage] = useState(null);

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = e => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));

      if (customHandleChange) {
        customHandleChange({ setData, file });
      } else {
        setData(data => ({ ...data, [name]: file }));
      }
    }
  };

  const handleDelete = () => {
    setImage(null);
    inputRef.current.value = null;

    if (customHandleDelete) {
      customHandleDelete(setData);
    } else {
      setData(data => ({ ...data, [name]: null }));
    }
  };

  const Image = () => <ImageBase src={image} alt="Картинка" boxSize={100} />;

  return (
    <FormControl as={Flex} isInvalid={!!errors[name]} w="fit-content">
      {image ? (
        <Tooltip label={<Image />} placement="top">
          <Button variant="ghost" size="small" onClick={handleDelete} title="Видалити зображення">
            <DeleteImage boxSize={5} />
          </Button>
        </Tooltip>
      ) : (
        <Button variant="ghost" size="small" onClick={handleClick} title="Додати зображення">
          <AddImage boxSize={5} />
        </Button>
      )}
      <Input type="file" ref={inputRef} autoComplete="off" onChange={handleChange} hidden />
      <FormErrorMessage>{errors[name]}</FormErrorMessage>
    </FormControl>
  );
}

export default ImageField;
