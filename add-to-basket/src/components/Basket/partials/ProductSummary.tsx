import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const ProductSummary = ({
  name,
  price,
  thumbnail,
  quantity,
  onDelete,
}: {
  name: string;
  price: string;
  thumbnail: string;
  quantity: number;
  onDelete: () => void;
}) => {
  return (
    <ListItem
      alignItems="flex-start"
      secondaryAction={
        <IconButton onClick={onDelete} edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar alt={name} src={thumbnail} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {price}
            </Typography>
            <Box>{quantity}</Box>
          </>
        }
      />
    </ListItem>
  );
};

export default ProductSummary;
