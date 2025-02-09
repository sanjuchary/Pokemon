import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Ability = {
  ability: {
    name: string;
  };
};
type Indices = {
  version: {
    name: string;
  };
};
type Moves = {
  move: {
    name: string;
  };
};
// type Sprites = {
//   other: {
//     showdown: {
//       front_shiny: string;
//     };
//   };
// };
type Form = {
  name: string;
};

const ById = () => {
  const location = useLocation();
  console.log("Location", location);
  const params = new URLSearchParams(location.search);
  const url = params.get("url");
  console.log("paramsUrl", url);

  const fetchData = async () => {
    if (!url) {
      throw new Error("No URL provided");
    }

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error("Error fetching data: " + error.message);
      } else {
        throw new Error("Error fetching data");
      }
    }
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["dataById", url],
    queryFn: fetchData,
    enabled: !!url,
  });

  if (isLoading) {
    return (
      <Box>
        <Typography variant="h6">Loading...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        <Typography variant="h6" color="error">
          Error fetching data
        </Typography>
      </Box>
    );
  }

  console.log("ByIdData", data);

  const abilityNames = data?.abilities
    ?.map((ability: Ability) => ability.ability.name)
    .join(", ");
  const indicesNames = data?.game_indices
    ?.map((indice: Indices) => indice.version.name)
    .join(", ");
  const movesNames = data?.moves
    ?.map((move: Moves) => move.move.name)
    .join(", ");
  //   const Images = data?.sprites
  //     ?.map((sprite: Sprites) => sprite.other.showdown.front_shiny)
  //     .join(", ");

  const images = Object.values(data?.sprites?.other?.showdown);
  const image2 = Object.values(data?.sprites?.other?.dream_world);

  const formsName = data?.forms?.map((form: Form) => form.name).join(", ");

  const backgroundImageUrl = "https://wallpaper.dog/large/20603722.png";

  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 3,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9,
          zIndex: -1,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#db0823",
          }}
        >
          Details of{" "}
          <span style={{ color: "#fff", textTransform: "uppercase" }}>
            {data?.name}
          </span>
        </Typography>
        <img
          height="5%"
          width="5%"
          src={typeof images[6] === "string" ? images[6] : undefined}
          alt="Not Found"
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          //   background: "#F5D4FF",
          padding: 3,
          borderRadius: 2,
          // overflow: "hidden",
          overflowY: "auto",
          scrollbarWidth: "none",
          cursor: "pointer",
          gap: 2,
          width: "100%",
          textAlign: "left",
          position: "relative",
        }}
      >
        <img
          height="20%"
          width="20%"
          src={typeof image2[0] === "string" ? image2[0] : undefined}
          alt="Not Found"
          style={{
            position: "absolute",
            right: 0,
            transform: "scaleX(-1)", // This flips the image horizontally
          }}
        />
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "500",
            textTransform: "capitalize",
            color: "#fff",
          }}
        >
          Name:{" "}
          <span style={{ fontWeight: "600", color: "#db0823" }}>
            {data?.name}
          </span>
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "500",
            textTransform: "capitalize",
            color: "#4971D7",
          }}
        >
          Weight:{" "}
          <span style={{ fontWeight: "600", color: "#fff" }}>
            {data?.height}
          </span>
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "500",
            textTransform: "capitalize",
            color: "#4971D7",
          }}
        >
          Height:{" "}
          <span style={{ fontWeight: "600", color: "#fff" }}>
            {data?.weight}
          </span>
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "600",
            textTransform: "capitalize",
            color: "#4971D7",
          }}
        >
          Abilities:{" "}
          <span style={{ fontWeight: "500", color: "#fff" }}>
            {abilityNames}
          </span>
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "600",
            textTransform: "capitalize",
            color: "#4971D7",
          }}
        >
          Base Experience:{" "}
          <span style={{ fontWeight: "500", color: "#fff" }}>
            {data?.base_experience}
          </span>
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "600",
            textTransform: "capitalize",
            color: "#4971D7",
          }}
        >
          Forms:{" "}
          <span style={{ fontWeight: "500", color: "#fff" }}>{formsName}</span>
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "600",
            textTransform: "capitalize",
            color: "#4971D7",
          }}
        >
          Game Indices:{" "}
          <span style={{ fontWeight: "500", color: "#fff" }}>
            {indicesNames}
          </span>
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "600",
            textTransform: "capitalize",
            color: "#fff",
          }}
        >
          Moves:{" "}
          <span style={{ fontWeight: "500", color: "#4971D7" }}>
            {movesNames}
          </span>
        </Typography>
      </Box>

      <Typography></Typography>
    </Box>
  );
};

export default ById;
