import Marquee from "react-fast-marquee";
import { Navbar } from "./components/bars";
import { Carousel } from "./components/carousels";
import { Container, Emphasis, Footer, Header, Video } from "./styles";

function App() {

	return (
		<Container>
			<Navbar/>
			<Header>
				<h1>República de Moçambique</h1>
				<h2>Ministerio da indústria e comério</h2>
			</Header>
			<Emphasis>
				<Carousel/>
				<Video>
					<video controls={true} src={"/video/react.mp4"}/>
				</Video>
			</Emphasis>
			<Footer>
				<Marquee gradient={false}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lectus purus, finibus eu
					consectetur ac, eleifend vitae mi.
				</Marquee>
			</Footer>
		</Container>
	)
}

export default App
