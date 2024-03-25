import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllFavorites, getFavoritesError, getFavoritesStatus } from "./favoritesSlice";
import PostsExcerpt from "./PostsExcerpt";

const FavoritePostsList = () => {

    const posts = useSelector(selectAllFavorites);
    const postStatus = useSelector(getFavoritesStatus);
    const error = useSelector(getFavoritesError);

  return (
    <div>FavoritePostsList</div>
  )
}

export default FavoritePostsList