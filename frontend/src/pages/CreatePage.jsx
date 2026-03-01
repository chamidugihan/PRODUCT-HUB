import {
  Box,
  Button,
  Container,
  FormLabel,
  Input,
  Text,
  VStack,
  HStack,
  Badge,
  useColorModeValue,
  useToast,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { useProductStore } from "../store/product";
import { useNavigate } from "react-router-dom";

function CreatePage() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const toast = useToast();
  const { createProduct } = useProductStore();

  // ── Theme values ──
  const pageBg = useColorModeValue(
    "linear-gradient(to bottom right, #faf5ff, #fce7f3, #eff6ff)",
    "linear-gradient(to bottom right, #0f0c29, #302b63, #24243e)",
  );
  const cardBg = useColorModeValue(
    "rgba(255,255,255,0.85)",
    "rgba(255,255,255,0.03)",
  );
  const cardBorder = useColorModeValue("purple.100", "whiteAlpha.100");
  const cardShadow = useColorModeValue(
    "0 20px 60px rgba(121,40,202,0.1)",
    "0 20px 60px rgba(0,0,0,0.5)",
  );
  const labelColor = useColorModeValue("purple.500", "whiteAlpha.500");
  const inputBg = useColorModeValue("white", "whiteAlpha.50");
  const inputBorder = useColorModeValue("purple.200", "whiteAlpha.100");
  const inputFocus = useColorModeValue("purple.400", "#FF0080");
  const inputColor = useColorModeValue("gray.700", "white");
  const orbRight = useColorModeValue(
    "radial-gradient(circle, rgba(121,40,202,0.06), transparent)",
    "radial-gradient(circle, rgba(121,40,202,0.12), transparent)",
  );
  const orbLeft = useColorModeValue(
    "radial-gradient(circle, rgba(255,0,128,0.05), transparent)",
    "radial-gradient(circle, rgba(255,0,128,0.1), transparent)",
  );
  const navigate = useNavigate();
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    toast({
      title: success ? "✦ Success" : "Error",
      description: message,
      status: success ? "success" : "error",
      duration: 4000,
      isClosable: true,
      position: "top-right",
    });
    if (success) setNewProduct({ name: "", price: "", image: "" });
    navigate("/");
  };

  return (
    <Box
      minH="100vh"
      bgGradient={pageBg}
      py={16}
      position="relative"
      overflow="hidden"
    >
      {/* Background orbs */}
      <Box
        position="absolute"
        top="-10%"
        right="-5%"
        w="400px"
        h="400px"
        borderRadius="full"
        background={orbRight}
        filter="blur(60px)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-10%"
        left="-5%"
        w="400px"
        h="400px"
        borderRadius="full"
        background={orbLeft}
        filter="blur(60px)"
        pointerEvents="none"
      />

      <Container maxW="container.sm" position="relative">
        <VStack spacing={10}>
          {/* Header */}
          <VStack spacing={3} textAlign="center">
            <Badge
              px={4}
              py={1}
              borderRadius="full"
              bgGradient="linear(to-r, #7928CA, #FF0080)"
              color="white"
              fontSize="xs"
              letterSpacing="widest"
              textTransform="uppercase"
              shadow="0 0 20px rgba(255,0,128,0.3)"
            >
              ✦ New Entry
            </Badge>

            <Text
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="900"
              bgGradient="linear(to-r, #7928CA, #FF0080, #FF6B6B)"
              bgClip="text"
              letterSpacing="tight"
              lineHeight="1.1"
            >
              Create Product
            </Text>

            <Text
              color={labelColor}
              fontSize="sm"
              letterSpacing="widest"
              textTransform="uppercase"
            >
              Add a new item to your store
            </Text>

            {/* Decorative divider */}
            <HStack spacing={2} justify="center">
              <Box
                w="40px"
                h="1px"
                borderRadius="full"
                bgGradient="linear(to-r, transparent, #7928CA)"
              />
              <Box
                w="6px"
                h="6px"
                borderRadius="full"
                bgGradient="linear(to-r, #7928CA, #FF0080)"
                shadow="0 0 8px rgba(255,0,128,0.5)"
              />
              <Box
                w="40px"
                h="1px"
                borderRadius="full"
                bgGradient="linear(to-l, transparent, #FF0080)"
              />
            </HStack>
          </VStack>

          {/* Form Card */}
          <Box
            w="full"
            bg={cardBg}
            backdropFilter="blur(20px)"
            border="1px solid"
            borderColor={cardBorder}
            borderRadius="3xl"
            p={8}
            shadow={cardShadow}
            position="relative"
            overflow="hidden"
          >
            {/* Card top glow */}
            <Box
              position="absolute"
              top={0}
              left="50%"
              transform="translateX(-50%)"
              w="60%"
              h="1px"
              bgGradient="linear(to-r, transparent, #7928CA, #FF0080, transparent)"
              opacity={0.5}
            />

            {/* Card bg orb */}
            <Box
              position="absolute"
              top="-40%"
              right="-20%"
              w="200px"
              h="200px"
              borderRadius="full"
              background="radial-gradient(circle, rgba(121,40,202,0.08), transparent)"
              filter="blur(30px)"
              pointerEvents="none"
            />

            <VStack spacing={6} position="relative">
              {/* Product Name */}
              <Box w="full">
                <FormLabel
                  fontSize="10px"
                  letterSpacing="widest"
                  textTransform="uppercase"
                  color={labelColor}
                  fontWeight="700"
                  mb={2}
                >
                  ✦ Product Name
                </FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color={labelColor}
                    fontSize="sm"
                  >
                    🏷️
                  </InputLeftElement>
                  <Input
                    placeholder="Enter product name..."
                    name="name"
                    value={newProduct.name}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, name: e.target.value })
                    }
                    bg={inputBg}
                    border="1px solid"
                    borderColor={inputBorder}
                    color={inputColor}
                    borderRadius="xl"
                    _placeholder={{ color: "whiteAlpha.300" }}
                    _focus={{
                      borderColor: inputFocus,
                      boxShadow: `0 0 0 1px ${inputFocus}`,
                    }}
                    _hover={{ borderColor: "purple.300" }}
                    transition="all 0.2s"
                  />
                </InputGroup>
              </Box>

              {/* Price */}
              <Box w="full">
                <FormLabel
                  fontSize="10px"
                  letterSpacing="widest"
                  textTransform="uppercase"
                  color={labelColor}
                  fontWeight="700"
                  mb={2}
                >
                  ✦ Price
                </FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color={labelColor}
                    fontWeight="bold"
                  >
                    LKR 
                  </InputLeftElement>
                  <Input
                    placeholder="0.00"
                    name="price"
                    type="number"
                    value={newProduct.price}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, price: e.target.value })
                    }
                    bg={inputBg}
                    border="1px solid"
                    borderColor={inputBorder}
                    color={inputColor}
                    borderRadius="xl"
                    _placeholder={{ color: "whiteAlpha.300" }}
                    _focus={{
                      borderColor: inputFocus,
                      boxShadow: `0 0 0 1px ${inputFocus}`,
                    }}
                    _hover={{ borderColor: "purple.300" }}
                    transition="all 0.2s"
                  />
                </InputGroup>
              </Box>

              {/* Image URL */}
              <Box w="full">
                <FormLabel
                  fontSize="10px"
                  letterSpacing="widest"
                  textTransform="uppercase"
                  color={labelColor}
                  fontWeight="700"
                  mb={2}
                >
                  ✦ Image URL
                </FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color={labelColor}
                    fontSize="sm"
                  >
                    🖼️
                  </InputLeftElement>
                  <Input
                    placeholder="https://example.com/image.jpg"
                    name="image"
                    value={newProduct.image}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, image: e.target.value })
                    }
                    bg={inputBg}
                    border="1px solid"
                    borderColor={inputBorder}
                    color={inputColor}
                    borderRadius="xl"
                    _placeholder={{ color: "whiteAlpha.300" }}
                    _focus={{
                      borderColor: inputFocus,
                      boxShadow: `0 0 0 1px ${inputFocus}`,
                    }}
                    _hover={{ borderColor: "purple.300" }}
                    transition="all 0.2s"
                  />
                </InputGroup>
              </Box>

              {/* Divider */}
              <Box
                w="full"
                h="1px"
                bgGradient="linear(to-r, transparent, #7928CA30, #FF008030, transparent)"
              />

              {/* Submit Button */}
              <Button
                w="full"
                size="lg"
                bgGradient="linear(to-r, #7928CA, #FF0080)"
                color="white"
                fontWeight="bold"
                fontSize="sm"
                letterSpacing="widest"
                textTransform="uppercase"
                borderRadius="xl"
                leftIcon={<PlusSquareIcon />}
                shadow="0 0 25px rgba(121,40,202,0.35)"
                _hover={{
                  bgGradient: "linear(to-r, #FF0080, #7928CA)",
                  shadow: "0 0 40px rgba(255,0,128,0.5)",
                  transform: "translateY(-2px)",
                }}
                _active={{ transform: "translateY(0)" }}
                transition="all 0.2s"
                onClick={handleAddProduct}
              >
                ✦ Add Product
              </Button>
            </VStack>

            {/* Card bottom glow */}
            <Box
              position="absolute"
              bottom={0}
              left="50%"
              transform="translateX(-50%)"
              w="40%"
              h="1px"
              bgGradient="linear(to-r, transparent, #FF008030, transparent)"
            />
          </Box>

          {/* Footer */}
          <Text
            color={useColorModeValue("purple.200", "whiteAlpha.200")}
            fontSize="xs"
            letterSpacing="widest"
            textTransform="uppercase"
          >
            ✦ Product Hub ✦
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}

export default CreatePage;
