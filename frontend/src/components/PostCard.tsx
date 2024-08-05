import { Box, Typography } from '@mui/material';
import Post from '../models/Post';

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  return (
    <Box sx={{
      paddingX: 3,
      paddingY: 2,
      width: 500,
      minWidth: 300,
      borderRadius: 2,
      border: 'solid 1px #ccc'
    }}>
      <Typography fontSize={24} marginBottom={2}>{post.title}</Typography>
      <Typography color={'#616161'} sx={{whiteSpace: 'wrap', wordBreak: 'break-all'}}>{post.content}</Typography>
    </Box>
  )
}

export default PostCard;