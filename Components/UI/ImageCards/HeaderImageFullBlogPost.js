import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";

const HeaderImageFullBlogPost = (props) => {
  const { alt, image } = props;
  return (
    <>
      <Box
        // width={990}
        height={450}
        bgcolor="#ECECEC"
        mt={2}
        mb={2}
        textAlign="center"
        position="relative"
        sx={{
          display: { xs: "none", sm: "none", md: "block", lg: "block" },
        }}
      >
        <Image alt={alt} src={image} fill />
      </Box>
    </>
  );
};

export default HeaderImageFullBlogPost;
