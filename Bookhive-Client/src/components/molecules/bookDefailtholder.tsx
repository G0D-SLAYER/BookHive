"use client";
import React, { Fragment } from "react";
import { Box, Badge, Text } from "@chakra-ui/react";
import { FcPackage } from "react-icons/fc";
import NoDataFound from "../atom/errors/noDataFound";

const BookDetailHolder = () => {
  return (
    <Box
      h={["383.242px"]}
      borderRadius={"10px"}
      w={["90%", "90%", "300px"]}
      bg={"#212121"}
      p={"1em"}
      mx={["auto", "", "0"]}>
      <Box borderRadius={"8px"} h={"201.134px"} w={"100%"} bg={"black"}></Box>
      <Badge
        my={"1em"}
        px={"0.6em"}
        py={"0.5em"}
        bg={"brand.primary"}
        color={"#fff"}
        borderRadius={"md"}>
        Fiction
      </Badge>
      <Text
        fontSize={["18px"]}
        fontWeight={600}
        color={"rgba(255, 255, 255, 0.70)"}>
        The Crying Book
      </Text>

      <Text color={"brand.grayed"}>Lieather Christel</Text>

      <Box display={"flex"} gap=".5em">
        {[1, 1, 1].map((_) => {
          return (
            <Fragment key={_}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none">
                <path
                  d="M5.18537 16.9019L6.3926 11.6829L2.34375 8.1727L7.69269 7.70839L9.77283 2.78662L11.853 7.70839L17.2019 8.1727L13.1531 11.6829L14.3603 16.9019L9.77283 14.1345L5.18537 16.9019Z"
                  fill="#D59F16"
                />
              </svg>
            </Fragment>
          );
        })}
        <Text color={"brand.200"}>(5.5k)</Text>
      </Box>
    </Box>
  );
};

export default BookDetailHolder;
