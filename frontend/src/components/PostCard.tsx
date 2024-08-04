import { Card, Typography } from '@mui/material';
import Post from '../models/Post';

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  return (
    <Card sx={{
      paddingX: 3,
      paddingY: 2,
      maxWidth: 400,
      minWidth: 300,
      boxShadow: 4
    }}>
      <Typography fontSize={16}>{post.title}</Typography>
      <Typography>{post.content}</Typography>
    </Card>
  )
}

export default PostCard;