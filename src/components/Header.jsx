import React, { useEffect, useState } from 'react'
import logo from '../assets/video-camera.png'
import play from '../assets/play.png'
import search from '../assets/search-interface-symbol.png'



export default function Header() {

    const [index,setIndex] = useState(0)
    const [data,setData] = useState([])
    const [filmName,setFilmName] = useState("")
    const [filmIndex,setFilmIndex] = useState(-1)
    const [searchSec,setSearchSec] = useState(false)
    const [films,setFilms] = useState(false)

    const moviePosters = [
      "https://image.tmdb.org/t/p/original/lcq8dVxeeOqHvvgcte707K0KVx5.jpg", // ეს მუშობდა
      "https://image.tmdb.org/t/p/original/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
      "https://image.tmdb.org/t/p/original/aO9Nnv9GdwiPdkNO79TISlQ5bbG.jpg",
      "https://image.tmdb.org/t/p/original/3n2TjKw3HrwDqgVgcynvantOfS3.jpg",
      "https://image.tmdb.org/t/p/original/q719jXXEzOoYaps6babgKnONONX.jpg"
    ];


    const moviePostersName = [
      'spider-man',
      'chang-chi',
      'dont know',
      'india',
      'your name'
    ]

    // api motxovna da inputis motokva
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(filmName)
        searchFilm()
      }
      const api = 'https://freetestapi.com/api/v1/movies'
      useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(api);
          const result = await response.json();
          setData(result);
        };
        fetchData();
      }, []);


      console.log(data)


      // inputis mixedvit edzebs films da filmis obieqtis indeqss
      const searchFilm = () => {
        const foundIndex = data.findIndex((item) => 
          item.title.toLowerCase() === filmName.toLowerCase()
        );
        
        if (foundIndex !== -1) {
          console.log(`Film found at index: ${foundIndex}`);
          console.log('Film details:', data[foundIndex]);
          setFilmIndex(foundIndex);
        } else {
          console.log('Film not found');
          setFilmIndex(-1);
        }
      }


      // icvleba hero photoebi

      useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % moviePosters.length)
        }, 4000);

        return () => clearInterval(interval)
      },[moviePosters.length])

      // icvleba hero photoebis teqsti
      useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % moviePostersName.length)
        }, 4000);

        return () => clearInterval(interval)
      },[moviePostersName.length])

      

      const handleSearch = () => {
        setSearchSec(!searchSec)
      }

      const filmsSection = () => {
        if(filmIndex >= 0){
          setFilms(true)
        }
        else{
          setFilms(false)
        }
      }

      const twoFunction = () => {
        handleSearch()
        filmsSection()
      }


      
     
      
      return (
        <div className='relative h-[900px]'>
          <div className={`absolute top-0 left-0 w-full z-10 overflow-hidden transitio-[max-height] duration-500 ease-in-out ${searchSec ? "max-h-20 shadow-[0_10px_10px_-5px_rgba(0,0,0,0.5)]" : "max-h-0"}`}>
            <form onSubmit={handleSubmit} className='relative'>
                <input type="text" name="films" placeholder='Search film' value={filmName} onChange={(e) => setFilmName(e.target.value)} className='pb-[20px] pl-[20px] pt-[20px] text-left w-full bg-[rgb(30,35,41)]' />
                <button type='submit' className='absolute right-[10px] top-[50%] transform -translate-y-1/2 bg-black text-white w-[80px] h-[30px] rounded-[5px]'>search</button>
            </form>
          </div>
          
          <img src={logo} className='w-[50px] absolute' />
          <img src={moviePosters[index]} className='h-[900px] w-full absolute' />
          <img src={play} className='w-[80px] absolute top-[550px] left-[400px] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] rounded-[50%]' />
          <button className='w-[50px] bg-gray-400 p-[10px] rounded-[10px] absolute top-[10px] left-[90%] z-20' onClick={twoFunction}>
          <img src={search} />
          </button>
          <p className='absolute top-[550px] left-[500px] text-white font-bold text-[35px]'>{moviePostersName[index]}</p>
    
          {(films && searchSec && filmIndex >= 0) &&
            <div className='absolute top-[65px] w-full bg-[rgb(30,35,41)]'>
              <div className=' ml-[10px] mt-[10px]'>
                <img src={data[filmIndex].poster}  className='h-[250px] w-[210px] rounded-[10px]'/>
                <div className='flex gap-[10px] max-w-[20px]'>
                  <p className='text-white'>{data[filmIndex].year}</p>
                  <p className='text-white'>|</p>
                  <p className='text-white'>{data[filmIndex].language}</p>
                  <p className='text-white'>|</p>
                  <p className='text-white'>{data[filmIndex].rating}</p>

                </div>
                <p className='text-white'>{data[filmIndex].title}</p>

              </div>
            </div>
          }
        </div>
    );
    
}
