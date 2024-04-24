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

function ImageField({
  name,
  error,
  handleChange: customHandleChange,
  handleDelete: customHandleDelete,
}) {
  const { setData, errors, setErrors } = useContext(FormContext);
  const [image, setImage] = useState(null);
  const isError = !!error || !!errors[name];

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = e => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));

      if (customHandleChange) {
        customHandleChange({ file });
      } else {
        setData(data => ({ ...data, [name]: file }));
      }
    }
  };

  const handleDelete = () => {
    setImage(null);
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

  const Image = () => <ImageBase src={image} alt="Картинка" boxSize={100} />;

  const ErrorMessage = () => (
    <FormErrorMessage p={1} color="white" mt={0}>
      {error || errors[name]}
    </FormErrorMessage>
  );

  return (
    <FormControl as={Flex} isInvalid={isError} w="fit-content">
      {image ? (
        <Tooltip
          label={isError ? <ErrorMessage /> : <Image />}
          aria-invalid={isError}
          isOpen={isError || undefined}
          placement="top"
          hasArrow
        >
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
    </FormControl>
  );
}

export default ImageField;
