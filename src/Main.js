import react from "react";
import HornedBeasts from "./HornedBeasts";
import data from "./data.json";

class Main extends react.Component {
  render() {
  
    return (
      <div className="beasts">
        {data.map((item) => {
          return (
            <HornedBeasts
              title={item.title}
              imageUrl={item.image_url}
              description={item.description}
              keyword={item.keyword}
              horns={item.horns}
            />
          );
        })}
        ;
      </div>
    );
  }
}

export default Main;

// {/* <HornedBeasts title="Saiga" imageUrl="https://www.cms.int/saiga/sites/default/files/news_featured_image/saiga_antelope_andrey_giljov_wikipedia_wc.jpg" description="The saiga antelope, or saiga, is a critically endangered antelope which during antiquity inhabited a vast area of the Eurasian steppe spanning the foothills of the Carpathian Mountains in the northwest and Caucasus in the southwest into Mongolia in the northeast and Dzungaria in the southeast."/>

// <HornedBeasts title="Nubian Ibex" imageUrl="https://ca-times.brightspotcdn.com/dims4/default/d0c5862/2147483647/strip/true/crop/2048x1151+0+0/resize/840x472!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F2a%2F77%2F43fcf7aa2a47f776ae18ad0a5b9b%2Fla-1513902391-qubpkob9jt-snap-image" description="The Nubian ibex is a desert-dwelling goat species found in mountainous areas of northern and northeast Africa, and the Middle East. It was historically considered to be a subspecies of the Alpine ibex, but is now considered a distinct species. "/> */}
