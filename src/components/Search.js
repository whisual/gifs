import React from 'react'

const Search = () => {
    return (
        <>
            <div>
                <h1>GIF Search App</h1>
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
