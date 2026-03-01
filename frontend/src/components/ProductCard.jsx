import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  Badge,
  useToast,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  VStack,
  Input,
  FormLabel,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";

function ProductCard({ product }) {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { deleteProduct, updateProduct } = useProductStore();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // ── Theme values ──
  const modalBg     = useColorModeValue("rgba(255,255,255,0.95)", "rgba(15,12,41,0.97)");
  const modalBorder = useColorModeValue("purple.100",             "whiteAlpha.100");
  const labelColor  = useColorModeValue("purple.500",             "whiteAlpha.500");
  const inputBg     = useColorModeValue("white",                  "whiteAlpha.50");
  const inputBorder = useColorModeValue("purple.200",             "whiteAlpha.100");
  const inputColor  = useColorModeValue("gray.700",               "white");
  const inputFocus  = useColorModeValue("purple.400",             "#FF0080");

  const handleDeleteProduct = async (id) => {
    const { success, message } = await deleteProduct(id);
    toast({
      title: success ? "✦ Deleted" : "Error",
      description: message,
      status: success ? "success" : "error",
      duration: 4000,
      isClosable: true,
      position: "top-right",
    });
  };

  const handleUpdateProduct = async (id, updatedProduct) => {
    const { success, message } = await updateProduct(id, updatedProduct);
    onClose();
    toast({
      title: success ? "✦ Updated" : "Error",
      description: message,
      status: success ? "success" : "error",
      duration: 4000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <Box
      position="relative"
      rounded="2xl"
      overflow="hidden"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-8px)",
        shadow: "0 20px 60px rgba(121,40,202,0.25)",
      }}
      bg="gray.900"
      border="1px solid"
      borderColor="whiteAlpha.100"
      shadow="lg"
      role="group"
    >
      {/* Image */}
      <Box position="relative" overflow="hidden">
        <Image
          src={product.image}
          alt={product.name}
          h={52}
          w="full"
          objectFit="cover"
          transition="transform 0.5s ease"
          _groupHover={{ transform: "scale(1.05)" }}
        />

        {/* Overlay */}
        <Box
          position="absolute" inset={0}
          bgGradient="linear(to-t, gray.900, transparent)"
          opacity={0.6}
        />

        {/* Price badge */}
        <Badge
          position="absolute" top={3} right={3}
          px={3} py={1} borderRadius="xl"
          fontSize="sm" fontWeight="bold"
          bg="blackAlpha.700" color="white"
          backdropFilter="blur(10px)"
          border="1px solid" borderColor="whiteAlpha.200"
        >
          LKR {product.price}
        </Badge>
      </Box>

      {/* Content */}
      <Box p={5}>
        <Heading
          as="h3" size="md" mb={1}
          color="white" fontWeight="700"
          letterSpacing="wide" noOfLines={1}
        >
          {product.name}
        </Heading>

        {/* Gradient divider */}
        <Box w="40px" h="2px" mb={3} borderRadius="full"
          bgGradient="linear(to-r, #7928CA, #FF0080)" />

        <HStack justify="space-between" align="center" mb={4}>
          <Text fontWeight="bold" fontSize="xl"
            bgGradient="linear(to-r, #7928CA, #FF0080)" bgClip="text">
            LKR {product.price}
          </Text>
          <Badge
            px={2} py={0.5} borderRadius="lg"
            bgGradient="linear(to-r, #7928CA20, #FF008020)"
            border="1px solid" borderColor="whiteAlpha.100"
            color="whiteAlpha.500" fontSize="9px"
            letterSpacing="widest" textTransform="uppercase"
          >
            In Stock
          </Badge>
        </HStack>

        <Box w="full" h="1px" bg="whiteAlpha.100" mb={4} />

        {/* Action buttons */}
        <HStack spacing={3}>
          <IconButton
            icon={<EditIcon />}
            flex={1} size="sm"
            variant="outline"
            borderColor="purple.500"
            color="purple.300"
            _hover={{
              bg: "purple.500", color: "white",
              borderColor: "purple.500",
              shadow: "0 0 20px rgba(121,40,202,0.4)",
            }}
            transition="all 0.2s"
            borderRadius="xl"
            aria-label="Edit product"
            onClick={onOpen}
          />
          <IconButton
            icon={<DeleteIcon />}
            flex={1} size="sm"
            variant="outline"
            borderColor="red.500"
            color="red.300"
            _hover={{
              bg: "red.500", color: "white",
              borderColor: "red.500",
              shadow: "0 0 20px rgba(239,68,68,0.4)",
            }}
            transition="all 0.2s"
            borderRadius="xl"
            aria-label="Delete product"
            onClick={() => handleDeleteProduct(product._id)}
          />
        </HStack>
      </Box>

      {/* Bottom glow line */}
      <Box
        position="absolute" bottom={0}
        left="50%" transform="translateX(-50%)"
        w="0" h="2px"
        bgGradient="linear(to-r, #7928CA, #FF0080)"
        transition="width 0.4s ease"
        _groupHover={{ w: "80%" }}
        borderRadius="full"
      />

      {/* ── Edit Modal ── */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
        <ModalOverlay backdropFilter="blur(12px)" bg="blackAlpha.600" />

        <ModalContent
          bg={modalBg}
          backdropFilter="blur(24px)"
          border="1px solid"
          borderColor={modalBorder}
          borderRadius="3xl"
          shadow="0 25px 80px rgba(0,0,0,0.5)"
          overflow="hidden"
        >
          {/* Modal top glow line */}
          <Box
            h="2px"
            bgGradient="linear(to-r, transparent, #7928CA, #FF0080, transparent)"
            opacity={0.6}
          />

          <ModalHeader pt={6} pb={2}>
            <VStack spacing={1} align="center">
              {/* Badge */}
              <Badge
                px={3} py={0.5} borderRadius="full"
                bgGradient="linear(to-r, #7928CA, #FF0080)"
                color="white" fontSize="9px"
                letterSpacing="widest" textTransform="uppercase"
                shadow="0 0 15px rgba(255,0,128,0.3)"
              >
                ✦ Edit Product
              </Badge>

              <Text
                fontSize="xl" fontWeight="900"
                bgGradient="linear(to-r, #7928CA, #FF0080)"
                bgClip="text" letterSpacing="tight"
              >
                Update Product
              </Text>

              {/* Decorative line */}
              <HStack spacing={2}>
                <Box w="30px" h="1px" borderRadius="full"
                  bgGradient="linear(to-r, transparent, #7928CA)" />
                <Box w="5px" h="5px" borderRadius="full"
                  bgGradient="linear(to-r, #7928CA, #FF0080)" />
                <Box w="30px" h="1px" borderRadius="full"
                  bgGradient="linear(to-l, transparent, #FF0080)" />
              </HStack>
            </VStack>
          </ModalHeader>

          <ModalCloseButton
            top={4} right={4}
            borderRadius="xl"
            color={labelColor}
            _hover={{ bg: "whiteAlpha.100", color: "white" }}
          />

          <ModalBody px={8} py={4}>
            <VStack spacing={5}>

              {/* Name */}
              <Box w="full">
                <FormLabel
                  fontSize="10px" letterSpacing="widest"
                  textTransform="uppercase" color={labelColor}
                  fontWeight="700" mb={2}
                >
                  ✦ Product Name
                </FormLabel>
                <InputGroup>
                  <InputLeftElement color={labelColor} fontSize="sm">
                    🏷️
                  </InputLeftElement>
                  <Input
                    placeholder="Enter product name..."
                    value={updatedProduct.name}
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                    bg={inputBg}
                    border="1px solid" borderColor={inputBorder}
                    color={inputColor} borderRadius="xl"
                    _placeholder={{ color: "whiteAlpha.300" }}
                    _focus={{ borderColor: inputFocus, boxShadow: `0 0 0 1px ${inputFocus}` }}
                    _hover={{ borderColor: "purple.300" }}
                    transition="all 0.2s"
                  />
                </InputGroup>
              </Box>

              {/* Price */}
              <Box w="full">
                <FormLabel
                  fontSize="10px" letterSpacing="widest"
                  textTransform="uppercase" color={labelColor}
                  fontWeight="700" mb={2}
                >
                  ✦ Price (LKR)
                </FormLabel>
                <InputGroup>
                  <InputLeftElement color={labelColor} fontWeight="bold" fontSize="sm">
                    LKR 
                  </InputLeftElement>
                  <Input
                    placeholder="0.00"
                    type="number"
                    value={updatedProduct.price}
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                    bg={inputBg}
                    border="1px solid" borderColor={inputBorder}
                    color={inputColor} borderRadius="xl"
                    _placeholder={{ color: "whiteAlpha.300" }}
                    _focus={{ borderColor: inputFocus, boxShadow: `0 0 0 1px ${inputFocus}` }}
                    _hover={{ borderColor: "purple.300" }}
                    transition="all 0.2s"
                  />
                </InputGroup>
              </Box>

              {/* Image URL */}
              <Box w="full">
                <FormLabel
                  fontSize="10px" letterSpacing="widest"
                  textTransform="uppercase" color={labelColor}
                  fontWeight="700" mb={2}
                >
                  ✦ Image URL
                </FormLabel>
                <InputGroup>
                  <InputLeftElement color={labelColor} fontSize="sm">
                    🖼️
                  </InputLeftElement>
                  <Input
                    placeholder="https://example.com/image.jpg"
                    value={updatedProduct.image}
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                    bg={inputBg}
                    border="1px solid" borderColor={inputBorder}
                    color={inputColor} borderRadius="xl"
                    _placeholder={{ color: "whiteAlpha.300" }}
                    _focus={{ borderColor: inputFocus, boxShadow: `0 0 0 1px ${inputFocus}` }}
                    _hover={{ borderColor: "purple.300" }}
                    transition="all 0.2s"
                  />
                </InputGroup>
              </Box>

              {/* Divider */}
              <Box w="full" h="1px"
                bgGradient="linear(to-r, transparent, #7928CA30, #FF008030, transparent)" />

            </VStack>
          </ModalBody>

          <ModalFooter px={8} pb={7} pt={3} gap={3}>
            {/* Cancel */}
            <Button
              flex={1}
              variant="outline"
              borderColor={modalBorder}
              color={labelColor}
              borderRadius="xl"
              fontSize="xs"
              letterSpacing="widest"
              textTransform="uppercase"
              _hover={{ bg: "whiteAlpha.100", borderColor: "whiteAlpha.200" }}
              transition="all 0.2s"
              onClick={onClose}
            >
              Cancel
            </Button>

            {/* Update */}
            <Button
              flex={1}
              bgGradient="linear(to-r, #7928CA, #FF0080)"
              color="white"
              fontWeight="bold"
              fontSize="xs"
              letterSpacing="widest"
              textTransform="uppercase"
              borderRadius="xl"
              shadow="0 0 20px rgba(121,40,202,0.35)"
              _hover={{
                bgGradient: "linear(to-r, #FF0080, #7928CA)",
                shadow: "0 0 30px rgba(255,0,128,0.5)",
                transform: "translateY(-2px)",
              }}
              _active={{ transform: "translateY(0)" }}
              transition="all 0.2s"
              onClick={() => handleUpdateProduct(product._id, updatedProduct)}
            >
              ✦ Update
            </Button>
          </ModalFooter>

          {/* Modal bottom glow */}
          <Box
            h="1px"
            bgGradient="linear(to-r, transparent, #FF008030, transparent)"
          />
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default ProductCard;