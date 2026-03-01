import React, { useEffect } from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

function HomePage() {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // ── All theme values at the top ──
  const pageBg         = useColorModeValue("linear-gradient(to bottom right, #faf5ff, #fce7f3, #eff6ff)", "linear-gradient(to bottom right, #0f0c29, #302b63, #24243e)");
  const cardBg         = useColorModeValue("rgba(255,255,255,0.8)", "rgba(255,255,255,0.03)");
  const cardBorder     = useColorModeValue("purple.100", "whiteAlpha.100");
  const cardShadow     = useColorModeValue("0 20px 60px rgba(121,40,202,0.1)", "0 20px 60px rgba(0,0,0,0.4)");
  const subtitleColor  = useColorModeValue("purple.400", "whiteAlpha.500");
  const emptyTextColor = useColorModeValue("gray.500", "whiteAlpha.400");
  const footerColor    = useColorModeValue("purple.300", "whiteAlpha.200");
  const orbRight       = useColorModeValue("radial-gradient(circle, rgba(121,40,202,0.06), transparent)", "radial-gradient(circle, rgba(121,40,202,0.12), transparent)");
  const orbLeft        = useColorModeValue("radial-gradient(circle, rgba(255,0,128,0.05), transparent)", "radial-gradient(circle, rgba(255,0,128,0.1), transparent)");
  const glowOrb        = useColorModeValue("radial-gradient(circle, rgba(121,40,202,0.08), transparent)", "radial-gradient(circle, rgba(121,40,202,0.15), transparent)");
  const iconBg         = useColorModeValue("purple.50", "whiteAlpha.50");
  const iconBorder     = useColorModeValue("purple.100", "whiteAlpha.100");
  const iconShadow     = useColorModeValue("0 0 20px rgba(121,40,202,0.15)", "0 0 20px rgba(121,40,202,0.3)");

  return (
    <Box minH="100vh" bgGradient={pageBg} py={12} position="relative" overflow="hidden">

      {/* Background orbs */}
      <Box
        position="absolute" top="-10%" right="-5%"
        w="400px" h="400px" borderRadius="full"
        background={orbRight} filter="blur(60px)" pointerEvents="none"
      />
      <Box
        position="absolute" bottom="-10%" left="-5%"
        w="400px" h="400px" borderRadius="full"
        background={orbLeft} filter="blur(60px)" pointerEvents="none"
      />

      <Container maxW="container.xl" position="relative">
        <VStack spacing={12}>

          {/* Header */}
          <VStack spacing={4} textAlign="center">
            <Badge
              px={4} py={1} borderRadius="full"
              bgGradient="linear(to-r, #7928CA, #FF0080)"
              color="white" fontSize="xs"
              letterSpacing="widest" textTransform="uppercase"
              shadow="0 0 20px rgba(255,0,128,0.3)"
            >
              ✦ Product Collection
            </Badge>

            <Text
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="900"
              bgGradient="linear(to-r, #7928CA, #FF0080, #FF6B6B)"
              bgClip="text"
              letterSpacing="tight"
              lineHeight="1.1"
            >
              Current Products
            </Text>

            <Text color={subtitleColor} fontSize="sm" letterSpacing="widest" textTransform="uppercase">
              {products.length} {products.length === 1 ? "item" : "items"} in your collection
            </Text>

            <HStack spacing={2} justify="center">
              <Box w="40px" h="1px" borderRadius="full" bgGradient="linear(to-r, transparent, #7928CA)" />
              <Box w="6px" h="6px" borderRadius="full" bgGradient="linear(to-r, #7928CA, #FF0080)" shadow="0 0 8px rgba(255,0,128,0.5)" />
              <Box w="40px" h="1px" borderRadius="full" bgGradient="linear(to-l, transparent, #FF0080)" />
            </HStack>
          </VStack>

          {/* Products Grid */}
          {products.length > 0 ? (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </SimpleGrid>
          ) : (

            /* Empty State */
            <VStack
              spacing={6} py={20} px={8} textAlign="center"
              bg={cardBg} backdropFilter="blur(20px)"
              borderRadius="3xl" border="1px solid" borderColor={cardBorder}
              w="full" maxW="md" mx="auto"
              position="relative" overflow="hidden"
              shadow={cardShadow}
            >
              {/* Glow orb */}
              <Box
                position="absolute" top="-50%" left="50%"
                transform="translateX(-50%)"
                w="200px" h="200px"
                background={glowOrb}
                borderRadius="full" filter="blur(40px)" pointerEvents="none"
              />

              {/* Icon */}
              <Box
                w={20} h={20} borderRadius="2xl"
                bg={iconBg}
                border="1px solid" borderColor={iconBorder}
                display="flex" alignItems="center" justifyContent="center"
                fontSize="3xl" shadow={iconShadow}
              >
                📦
              </Box>

              <VStack spacing={2}>
                <Text fontSize="2xl" fontWeight="800" bgGradient="linear(to-r, #7928CA, #FF0080)" bgClip="text">
                  No Products Yet
                </Text>
                <Text color={emptyTextColor} fontSize="sm" maxW="xs" lineHeight="tall">
                  Your collection is empty. Start by adding your first product.
                </Text>
              </VStack>

              <HStack spacing={2}>
                <Box w={1.5} h={1.5} borderRadius="full" bg="purple.400" opacity={0.5} />
                <Box w={2} h={2} borderRadius="full" bgGradient="linear(to-r, #7928CA, #FF0080)" />
                <Box w={1.5} h={1.5} borderRadius="full" bg="pink.400" opacity={0.5} />
              </HStack>

              <Link to="/create">
                <Box
                  as="span" px={8} py={3} borderRadius="xl"
                  bgGradient="linear(to-r, #7928CA, #FF0080)"
                  color="white" fontWeight="bold" fontSize="sm"
                  letterSpacing="wider" textTransform="uppercase"
                  cursor="pointer" display="inline-block"
                  transition="all 0.3s"
                  shadow="0 0 30px rgba(255,0,128,0.3)"
                  _hover={{ shadow: "0 0 40px rgba(255,0,128,0.5)", transform: "translateY(-2px)" }}
                >
                  ✦ Create Product
                </Box>
              </Link>
            </VStack>
          )}

          {/* Footer */}
          <Text color={footerColor} fontSize="xs" letterSpacing="widest" textTransform="uppercase">
            ✦ Product Hub ✦
          </Text>

        </VStack>
      </Container>
    </Box>
  );
}

export default HomePage;