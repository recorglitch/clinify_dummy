import { Edit, LocationOn } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  Chip,
  Divider,
  IconButton,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";

type Props = {};

const CustomCard = ({}: Props) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <Card>
      <Box sx={{ p: 2, display: "flex" }}>
        <Avatar variant="rounded" src="avatar.jpg" />
        <Stack spacing={0.5}>
          <Typography fontWeight="bold">Lucas Smith</Typography>
          <Typography variant="body2" color="text.secondary">
            <LocationOn sx={{ color: grey[500] }} /> Scranton, PA, United States
          </Typography>
        </Stack>
        <IconButton size="small">
          <Edit fontSize="small" />
        </IconButton>
      </Box>
      <Divider />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 2, py: 1, bgcolor: "background.default" }}
      >
        <Chip
          label={active ? "Active account" : "Inactive account"}
          color={active ? "success" : "default"}
          size="small"
        />
        <Switch />
      </Stack>
    </Card>
  );
};

export default CustomCard;
