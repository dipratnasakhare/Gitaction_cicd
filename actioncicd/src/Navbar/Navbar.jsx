import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import React from "react";

export const Navbar = () => {
  return (
    <div>
      <Flex minWidth="max-content"  alignItems="center" p="25px"bg="green" justifyContent="space-around">
        <Box>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "white",
            })}
          >
            All
          </NavLink>
        </Box>
        <Box>
          <NavLink
            to="/html"
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "white",
            })}
          >
            HTML
          </NavLink>
        </Box>
        <Box>
          <NavLink
            to="/css"
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "white",
            })}
          >
            CSS
          </NavLink>
        </Box>
        <Box>
          <NavLink
            to="/javascript"
            style={({ isActive }) => ({
              color: isActive ? "greenyellow" : "white",
            })}
          >
            Javascript
          </NavLink>
        </Box>
      </Flex>
    </div>
  );
};
