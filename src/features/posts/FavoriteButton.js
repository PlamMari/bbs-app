import { useDispatch } from "react-redux";
import { toggleFavorite } from "./postsSlice";

const FavoriteButton = ({ post }) => {
    const dispatch = useDispatch()

    const onFavoriteClicked = () => {
        dispatch(toggleFavorite(post.id))
    }

    return (
        <button onClick={onFavoriteClicked}>
            {post.isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
    )
}

export default FavoriteButton