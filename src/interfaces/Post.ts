interface Post {
    id: number;
    title: string;
    content: string;
    image: string | null;
    tags: string | null;
    ownerId: number;
}

export default Post