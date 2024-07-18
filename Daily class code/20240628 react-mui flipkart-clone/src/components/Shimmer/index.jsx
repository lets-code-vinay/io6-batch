import React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export const HomepageShimmer = () => {
  return (
    <>
      <Box sx={{ gap: 2 }}>
        <Skeleton variant="rectangular" width={"100%"} height={"70px"} />

        <Box sx={{ width: "80%", margin: "auto", gap: 2 }}>
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={"154px"}
            sx={{ margin: "10px 0" }}
          />
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={"400px"}
            sx={{ margin: "10px 0" }}
          />
          <Box sx={{ margin: "10px 0", pt: 0.5 }}>
            <Skeleton variant="rectangular" width={"150px"} height={"32px"} />

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              {[1, 2, 3, 4, 5, 6].map((e, i) => {
                return (
                  <Box sx={{ height: "210px" }}>
                    <Skeleton height={"140px"} width={"200px"} />
                    <Skeleton
                      width={"100px"}
                      height={"32px"}
                      sx={{ marginTop: "-10px" }}
                    />
                    <Skeleton width={"100px"} height={"32px"} />
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export const ProductsShimmer = () => {
  return (
    <>
      <Box sx={{ gap: 2 }}>
        <Skeleton variant="rectangular" width={"100%"} height={"70px"} />
      </Box>
    </>
  );
};
