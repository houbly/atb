import DeleteIcon from '@mui/icons-material/ClearOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
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
    <>
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
          primary={`${name} x ${quantity}`}
          secondary={
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {price}
            </Typography>
          }
        />
      </ListItem>
      <Divider />
    </>
  );
};

export default ProductSummary;
