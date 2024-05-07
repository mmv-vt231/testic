import React, { useContext } from "react";
import { FormContext } from "@components/shared/form/Form";
import { useGetGroupsQuery } from "@store/services/api";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";

function SelectField() {
  const { data, setData, errors } = useContext(FormContext);
  const selectedGroups = data.groups;
  const placeholder = selectedGroups.length
    ? selectedGroups.map(el => el.name).join(", ")
    : "Виберіть групу";
  const error = errors.groups;

  const { isOpen, onToggle, onClose } = useDisclosure();
  const { data: groups = [], isLoading } = useGetGroupsQuery();

  const handleChange = (id, name) => {
    const exist = !!selectedGroups.find(el => el.id == id);

    setData(prevData => ({
      ...prevData,
      groups: exist
        ? prevData.groups.filter(el => el.id != id)
        : [...prevData.groups, { id, name }],
    }));
  };

  return (
    <FormControl w="auto" zIndex={1} isInvalid={!!error}>
      <FormLabel>Групи</FormLabel>
      <InputGroup gap={2} alignItems="center">
        <Popover isLazy isOpen={isOpen} onClose={onClose}>
          <PopoverTrigger>
            <Input
              autoComplete="off"
              onClick={onToggle}
              cursor="pointer"
              value={placeholder}
              readOnly
            />
          </PopoverTrigger>
          <PopoverContent w="md" maxH={32} overflowY="auto" sx={{ scrollbarWidth: "thin" }}>
            {isLoading ? (
              <Spinner />
            ) : (
              groups.map(({ id, name }) => (
                <Button
                  key={id}
                  variant="ghost"
                  p={2}
                  minH={10}
                  isActive={!!selectedGroups.find(el => el.id == id)}
                  onClick={() => handleChange(id, name)}
                  _active={{
                    bg: "blue.50",
                    color: "primary.500",
                  }}
                >
                  {name}
                </Button>
              ))
            )}
          </PopoverContent>
        </Popover>
      </InputGroup>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
}

export default SelectField;
