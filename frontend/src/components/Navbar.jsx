import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { LuSun, LuMoon } from "react-icons/lu";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  // ── Theme values matching HomePage ──
  const navBg       = useColorModeValue("rgba(250,245,255,0.85)", "rgba(15,12,41,0.90)");
  const borderColor = useColorModeValue("purple.100",             "whiteAlpha.100");
  const shadow      = useColorModeValue("0 4px 30px rgba(121,40,202,0.08)", "0 4px 30px rgba(121,40,202,0.25)");
  const btnBg       = useColorModeValue("purple.50",              "whiteAlpha.100");
  const btnHover    = useColorModeValue("purple.100",             "whiteAlpha.200");
  const btnColor    = useColorModeValue("purple.600",             "white");
  const tagBg       = useColorModeValue("purple.50",              "whiteAlpha.50");
  const tagColor    = useColorModeValue("purple.400",             "whiteAlpha.400");
  const topGlow     = useColorModeValue(0.3,                      0.6);
  const bottomGlow  = useColorModeValue(
    "linear(to-r, transparent, #7928CA20, #FF008020, transparent)",
    "linear(to-r, transparent, #7928CA40, #FF008040, transparent)"
  );

  return (
    <Box
      position="sticky"
      top={0}
      zIndex={100}
      bg={navBg}
      backdropFilter="blur(24px)"
      borderBottom="1px solid"
      borderColor={borderColor}
      shadow={shadow}
    >
      {/* Top glow line */}
      <Box
        h="2px"
        bgGradient="linear(to-r, transparent, #7928CA, #FF0080, transparent)"
        opacity={topGlow}
      />

      <Container maxW="container.xl" px={6}>
        <Flex
          h={16}
          align="center"
          justify="space-between"
          flexDir={{ base: "column", sm: "row" }}
          gap={{ base: 2, sm: 0 }}
        >

          {/* Logo */}
          <Link to="/">
            <HStack spacing={3} role="group">

              {/* Icon box */}
              <Box
                w={10}
                h={10}
                borderRadius="xl"
                bgGradient="linear(to-br, #7928CA, #FF0080)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                shadow="0 0 15px rgba(121,40,202,0.4)"
                transition="all 0.3s"
                _groupHover={{
                  shadow: "0 0 30px rgba(255,0,128,0.6)",
                  transform: "rotate(10deg) scale(1.1)",
                }}
              >
                <Text fontSize="lg">🛒</Text>
              </Box>

              <Box>
                <Text
                  fontSize={{ base: "18", sm: "22" }}
                  fontWeight="900"
                  bgGradient="linear(to-r, #7928CA, #FF0080, #FF6B6B)"
                  bgClip="text"
                  letterSpacing="tight"
                  lineHeight="1"
                  textTransform="uppercase"
                >
                  Product Hub
                </Text>
                <Text
                  fontSize="8px"
                  letterSpacing="widest"
                  textTransform="uppercase"
                  color={tagColor}
                  lineHeight="1"
                  mt={0.5}
                >
                  ✦ manage your store
                </Text>
              </Box>
            </HStack>
          </Link>

          {/* Right side */}
          <HStack spacing={3}>

            {/* Live Store badge */}
            <Box
              display={{ base: "none", md: "flex" }}
              alignItems="center"
              gap={2}
              px={3}
              py={1.5}
              borderRadius="xl"
              bg={tagBg}
              border="1px solid"
              borderColor={borderColor}
            >
              <Box
                w={1.5}
                h={1.5}
                borderRadius="full"
                bgGradient="linear(to-r, #7928CA, #FF0080)"
                shadow="0 0 6px rgba(255,0,128,0.6)"
                sx={{
                  animation: "pulse 2s infinite",
                  "@keyframes pulse": {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0.3 },
                  },
                }}
              />
              <Text
                fontSize="10px"
                letterSpacing="widest"
                textTransform="uppercase"
                color={tagColor}
                fontWeight="600"
              >
                Live Store
              </Text>
            </Box>

            {/* New Product Button */}
            <Tooltip label="Add new product" placement="bottom" hasArrow>
              <Link to="/create">
                <Button
                  size="sm"
                  bgGradient="linear(to-r, #7928CA, #FF0080)"
                  color="white"
                  fontWeight="bold"
                  fontSize="xs"
                  letterSpacing="wider"
                  textTransform="uppercase"
                  borderRadius="xl"
                  px={5}
                  leftIcon={<PlusSquareIcon />}
                  shadow="0 0 20px rgba(121,40,202,0.3)"
                  _hover={{
                    bgGradient: "linear(to-r, #FF0080, #7928CA)",
                    shadow: "0 0 30px rgba(255,0,128,0.5)",
                    transform: "translateY(-2px)",
                  }}
                  _active={{ transform: "translateY(0)" }}
                  transition="all 0.2s"
                >
                  New Product
                </Button>
              </Link>
            </Tooltip>

            {/* Theme Toggle */}
            <Tooltip
              label={colorMode === "light" ? "Switch to Dark" : "Switch to Light"}
              placement="bottom"
              hasArrow
            >
              <Button
                size="sm"
                bg={btnBg}
                color={btnColor}
                border="1px solid"
                borderColor={borderColor}
                borderRadius="xl"
                px={3}
                _hover={{
                  bg: btnHover,
                  shadow: "0 0 15px rgba(121,40,202,0.25)",
                  transform: "translateY(-2px)",
                }}
                _active={{ transform: "translateY(0)" }}
                transition="all 0.2s"
                onClick={toggleColorMode}
              >
                {colorMode === "light" ? (
                  <LuMoon size={16} />
                ) : (
                  <LuSun size={16} color="#FF0080" />
                )}
              </Button>
            </Tooltip>

          </HStack>
        </Flex>
      </Container>

      {/* Bottom glow line */}
      <Box h="1px" bgGradient={bottomGlow} />
    </Box>
  );
}

export default Navbar;