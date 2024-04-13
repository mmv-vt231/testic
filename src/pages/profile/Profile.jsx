import { useSelector } from "react-redux";

import Header from "@components/layout/Header";
import { Box, Center, HStack } from "@chakra-ui/react";
import ProfileHeader from "./ui/ProfileHeader";
import ProfileEditData from "./ui/ProfileEditData";
import ProfileEditPassword from "./ui/ProfileEditPassword";

function Profile() {
  const { userData } = useSelector(state => state.auth);

  return (
    <Box>
      <Header title="Профіль" />
      <Center>
        <Box flex="0 1 800px">
          <ProfileHeader userData={userData} />
          <HStack alignItems="start" flexWrap="wrap" mt={2} spacing={2}>
            <ProfileEditData userData={userData} />
            <ProfileEditPassword />
          </HStack>
        </Box>
      </Center>
    </Box>
  );
}

export default Profile;
