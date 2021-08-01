import react from 'react';
import HornedBeasts from './HornedBeasts';
class Main extends react.Component {

  render() {
    let animals = [
      {
        "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
        "title": "UniWhal",
        "description": "A unicorn and a narwhal nuzzling their horns",
        "keyword": "narwhal",
        "horns": 1
      },
    
      {
        "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
        "title": "Rhino Family",
        "description": "Mother (or father) rhino with two babies",
        "keyword": "rhino",
        "horns": 2
      },
      
      {
        "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
        "title": "Unicorn Head",
        "description": "Someone wearing a creepy unicorn head mask",
        "keyword": "unicorn", 
        "horns": 1
    },
      {
        "title": "Saiga",
        "image_url": "https://www.cms.int/saiga/sites/default/files/news_featured_image/saiga_antelope_andrey_giljov_wikipedia_wc.jpg",
        "description": "The saiga antelope, or saiga, is a critically endangered antelope which during antiquity inhabited a vast area of the Eurasian steppe spanning the foothills of the Carpathian Mountains in the northwest and Caucasus in the southwest into Mongolia in the northeast and Dzungaria in the southeast.",
        "keyword": "Saiga",
        "horns": 2
      
      },
      {
        "title": "Nubian Ibex",
        "image_url": "https://ca-times.brightspotcdn.com/dims4/default/d0c5862/2147483647/strip/true/crop/2048x1151+0+0/resize/840x472!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F2a%2F77%2F43fcf7aa2a47f776ae18ad0a5b9b%2Fla-1513902391-qubpkob9jt-snap-image",
        "description": "The Nubian ibex is a desert-dwelling goat species found in mountainous areas of northern and northeast Africa, and the Middle East. It was historically considered to be a subspecies of the Alpine ibex, but is now considered a distinct species. ",
        "keyword": "Nubian Ibex",
        "horns": 2
      }
    ];

    return(
    <div className='beasts'>
      {animals.map(item => {
        return(
          <HornedBeasts 
          title = {item.title}
          imageUrl = {item.image_url}
          description = {item.description}
          keyword = {item.keyword}
          horns = {item.horns}
          />
        )
      })};
    </div>);
  }
}

export default Main;

// {/* <HornedBeasts title="Saiga" imageUrl="https://www.cms.int/saiga/sites/default/files/news_featured_image/saiga_antelope_andrey_giljov_wikipedia_wc.jpg" description="The saiga antelope, or saiga, is a critically endangered antelope which during antiquity inhabited a vast area of the Eurasian steppe spanning the foothills of the Carpathian Mountains in the northwest and Caucasus in the southwest into Mongolia in the northeast and Dzungaria in the southeast."/>

// <HornedBeasts title="Nubian Ibex" imageUrl="https://ca-times.brightspotcdn.com/dims4/default/d0c5862/2147483647/strip/true/crop/2048x1151+0+0/resize/840x472!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F2a%2F77%2F43fcf7aa2a47f776ae18ad0a5b9b%2Fla-1513902391-qubpkob9jt-snap-image" description="The Nubian ibex is a desert-dwelling goat species found in mountainous areas of northern and northeast Africa, and the Middle East. It was historically considered to be a subspecies of the Alpine ibex, but is now considered a distinct species. "/> */}