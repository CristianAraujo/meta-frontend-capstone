import RatingCard from './RatingCard';

const Testimonials = (props) => {
    return (
        <section className="testimonials">
            <h2 className="section-title testimonials-title">Testimonials</h2>
            <div className="testimonials-container">
                <RatingCard 
                    rating={5}
                    image={require('../assets/images/customer_1.jpg')}
                    customerName="John Dofe"
                    customerReview="The food is always delicious and the service is top-notch."
                />

                <RatingCard 
                    rating={4}
                    image={require('../assets/images/customer_2.jpg')}
                    customerName="Margot Daw"
                    customerReview="I really like the food here. The service is always quick and friendly."
                />

                <RatingCard 
                    rating={4}
                    image={require('../assets/images/customer_3.jpg')}
                    customerName="Matthew Jones"
                    customerReview="I usually order from here and it's always fresh and delicious."
                />

                <RatingCard 
                    rating={4}
                    image={require('../assets/images/customer_4.jpg')}
                    customerName="Chris Smith"
                    customerReview="Greek Salad is my favorite dish. I share time with my family here."
                />
            </div>
        </section>
    )
}

export default Testimonials;