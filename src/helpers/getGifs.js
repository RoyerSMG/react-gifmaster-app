export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=pea0Z1ANwj0uYaa2WGc4796Aln1ep9vG&q=${category}&limit=20`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
    }));

    return gifs;
};
