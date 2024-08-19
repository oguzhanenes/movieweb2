import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HorizontalSlider from './HorizontalSlider';
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';




const Card = styled.div`
position: relative;
width: 128px;
height: 219px;
overflow: hidden;
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
transition: transform 0.2s ease-in-out;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
text-decoration: none;
scroll-snap-align: center;
user-select: none;
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit:cover;
`;

const Overlay = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0, 0, 0, 0.6);
color: #fff;
opacity: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0.5rem;
transition: opacity 0.3s ease;
text-align: center;


  ${Card}: hover & {
  opacity: 1;
}
  `;

const Title = styled.h3`
margin: 0;
font-size: 1rem;
font-weight: bold;
color: #F9DBBA
`;

const Description = styled.p`
margin: 0.5rem 0 0;
font-size: 0.875rem;
`;

const SectionTitle = styled.h2`
margin: 1rem 0;
font-size: 1.5rem;
font-weight: bold;
font-family: Arial, sans-serif;
padding: 1rem;
color: #F9DBBA
`;



const MovieDetails: React.FC = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('useContext must be used within a GlobalProvider');
  }

  const { movies } = context;


  const newMovies = movies.filter(movie => movie.category === 'new');
  const popularMovies = movies.filter(movie => movie.category === 'popular');
  const recommendMovies = movies.filter(movie => movie.category === 'recommend');



  const renderMovies = (moviesList: typeof movies) => (
    moviesList.map(movie => (
      <Link to={`/movie/${movie.id}`} key={movie.id} style={{ textDecoration: 'none' }}>
        <Card>
          <Image src={movie.imageSrc} alt={movie.title} />
          <Overlay>
            <Title>{movie.title}</Title>
            <Description>{movie.description}</Description>
          </Overlay>
        </Card>
      </Link>
    ))
  );

  return (
    <>
      <SectionTitle>New Movies</SectionTitle>
      <HorizontalSlider items={renderMovies(newMovies)} />

      <SectionTitle>Most Popular</SectionTitle>
      <HorizontalSlider items={renderMovies(popularMovies)} />

      <SectionTitle>Top Rated</SectionTitle>
      <HorizontalSlider items={renderMovies(recommendMovies)} />
    </>
  );
};

export default MovieDetails;
