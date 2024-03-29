import { SyntheticEvent, useEffect, useState } from "react";
import {
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";
import LoadingSpinner from "../../features/system/LoadingSpinner";
import agent from "../../app/api/agent";
import NotFound from "../system/NotFound";
import GuitarPlaceholder from "../../app/images/guitar-stock-default.png";
import KeyboardPlaceholder from "../../app/images/keyboard-stock-default.png";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      setLoading(true);

      agent.Catalog.details(parseInt(id))
        .then(setProduct)
        .catch(console.log)
        .finally(() => setLoading(false));
    }
  }, [id]);

  // if image fails to load set default in it's place
  function addDefaultSrc(e: SyntheticEvent<HTMLImageElement, Event>) {
    e.currentTarget.src =
      product?.type.toLowerCase() === "guitar"
        ? GuitarPlaceholder
        : KeyboardPlaceholder;
  }

  if (loading) return <LoadingSpinner />;
  if (!product) return <NotFound />;

  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <img
          src={product.pictureUrl}
          alt={product.name}
          style={{ width: "100%" }}
          onError={addDefaultSrc}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h3">{product.name}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h4" color="secondary">
          £{product.price}
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>{product.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>{product.description}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>{product.type}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Brand</TableCell>
                <TableCell>{product.brand}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>In Stock</TableCell>
                <TableCell>{product.quantityInStock}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
