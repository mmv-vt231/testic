import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "@store/features/auth/authSlice";

import { Stack } from "@chakra-ui/react";
import { Exam, Peoples, PersonSolid, Exit } from "@components/shared/Icons";
import NavbarButton from "./NavbarButton";
import NavbarLink from "./NavbarLink";

const links = [
  {
    href: "/panel/topics",
    paths: ["/panel/topics", "/panel/tests", "/panel/tasks"],
    label: "Тести",
    Icon: Exam,
  },
  {
    href: "/panel/groups",
    label: "Групи",
    Icon: Peoples,
  },
  {
    href: "/panel/profile",
    label: "Профіль",
    Icon: PersonSolid,
  },
];

function NavbarLinks() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Stack spacing={2} h="full">
      {links.map((props, i) => (
        <NavbarLink key={i} {...props} />
      ))}

      <NavbarButton onClick={handleLogout} Icon={Exit} label="Вихід" mt="auto" />
    </Stack>
  );
}

export default NavbarLinks;
