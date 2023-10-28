import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
            console.log(sort)
            if (sort==="")
                return posts;
            else
                return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }, [sort, posts]
    )
    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const searchedAndSortedPosts = useMemo( () => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])

    return searchedAndSortedPosts;
}