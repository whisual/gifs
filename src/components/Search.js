import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [gifs, setGifs] = useState([]);
    const apiKey = 'qfj07Dq5H4c5K27AP1pTb2JRCDU6YnI9';

    const searchGIFs = async () => {
        try {
            const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=10`;
            const response = await axios.get(apiUrl);
            setGifs(response.data.data);
        } catch (error) {
            console.error('Error fetching GIFs:', error);
        }
    };
    return (
        <>
            <div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for GIFs"
                />
                <button onClick={searchGIFs}>Search</button>
                <div>
                    {gifs.map((gif) => (
                        <img
                            key={gif.id}
                            src={gif.images.fixed_height.url}
                            alt={gif.title}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
export default Search
