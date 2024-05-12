import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFinishTestingMutation } from "@store/services/api";
import dateFormatConverter from "@utils/dateFormatConverter";

import { HStack, Text } from "@chakra-ui/react";
import { QuestionMark, Clock } from "@icons";

function PassingHeader({ id, defaultTime, order, total }) {
  const navigate = useNavigate();
  const [finishTesting] = useFinishTestingMutation();

  const [time, setTime] = useState(defaultTime);
  const formatTime = dateFormatConverter(new Date(0).setSeconds(time), "time");

  useEffect(() => {
    let timer = setInterval(() => {
      setTime(time => {
        if (time <= 1) {
          clearInterval(timer);
          finishTesting(id)
            .unwrap()
            .then(() => {
              navigate(`/test/result/${id}`, { replace: true });
            });
        }

        return time - 1;
      });
    }, 1000);
  }, []);

  return (
    <HStack mb={4} justify="space-between">
      <HStack>
        <QuestionMark boxSize={5} />
        <Text fontSize="xl" fontWeight="bold">
          {order} / {total}
        </Text>
      </HStack>
      <HStack>
        <Clock boxSize={5} />
        <Text fontSize="xl" fontWeight="bold">
          {formatTime}
        </Text>
      </HStack>
    </HStack>
  );
}

export default PassingHeader;
