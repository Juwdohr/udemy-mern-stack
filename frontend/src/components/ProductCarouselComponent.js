import { Carousel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ProductCarouselComponent = () => {
    const cursorPointer = {
        cursor: 'pointer'
    }

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    crossorigin='anonymous'
                    style={{ height: "300px", objectFit: "cover" }}
                    src="/images/carousel/carousel-1.png"
                    alt="First slide"
                />

                <Carousel.Caption>
                    <LinkContainer style={cursorPointer} to="/product-details">
                        <h3>Best Seller in Laptops Category</h3>
                    </LinkContainer>
                    <p>Dell Inspiron 15 3000 Laptop, 15.6 inch HD</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: "300px", objectFit: "cover" }}
                    src="/images/carousel/carousel-2.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <LinkContainer style={cursorPointer} to="/product-details">
                        <h3>Best Seller in Books Category</h3>
                    </LinkContainer>
                    <p>World of Eric Carle, Hear Bear Roar 30-button Animal Sound Book</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: "300px", objectFit: "cover" }}
                    src="/images/carousel/carousel-3.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <LinkContainer style={cursorPointer} to="/product-details">
                        <h3>Best Seller in Cameras Category</h3>
                    </LinkContainer>
                    <p>
                        4k Camcorder Camera 60FPS 48MP Vlogging Camera for YouTube WiFi 16x Digital Camera
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ProductCarouselComponent;