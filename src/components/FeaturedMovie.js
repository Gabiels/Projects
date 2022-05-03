import React from 'react'
import './FeaturedMovie.css'

export default ({item}) => {
    console.log(item);

    let firstDate = new Date(item.release_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    
    let description = item.overview;
    if(description.length > 300) {
        description = description.substring(0, 300)+'...';
    }

    const converter = (minutos) => {
        const horas = Math.floor(minutos/ 60);          
        const min = minutos % 60;
        const textoHoras = (`${horas}`).slice(-2);
        const textoMinutos = (`00${min}`).slice(-2);
        
        return (`${textoHoras + "h" } ${textoMinutos + "m"}`);
      };

    return(
        <section className='featured' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className='featured--vertical'>
                <div className='featured--horizontal'>
                    <div className='featured--name'>{item.title}</div>
                    <div className='featured--info'>
                        <div className='featured--points'>{item.vote_average} pontos</div>
                        <div className='featured--year'>{firstDate.getFullYear()}</div>
                        <div className='featured--runtime'>{converter(item.runtime)}</div>
                    </div>
                    <div className='featured--description'>{description}</div>
                    <div className='featured--buttons'>
                        <a href={`/watch/${item.id}`} className="featured--watchbutton">► Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featured--mylistbutton">+ Minha Lista</a>
                    </div>
                    <div className='featured--genres'><strong>Gêneros:</strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    );
}   