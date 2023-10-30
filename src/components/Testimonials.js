import star from '../assets/icons/star-icon.svg';

const Testimonials = (props) => {
    return (
        <section className="testimonials">
            <h2 className="section-title testimonials-title">Testimonials</h2>
            <div className="testimonials-container">
                <article className="testimonials-card">
                    <div className="card-rating">
                        <img src={star} alt="Star icon" className="card-rating__star" />
                        <img src={star} alt="Star icon" className="card-rating__star" />
                        <img src={star} alt="Star icon" className="card-rating__star" />
                        <img src={star} alt="Star icon" className="card-rating__star" />
                        <img src={star} alt="Star icon" className="card-rating__star" />
                    </div>
                    <img src={require('../assets/images/customer-1.jpg')} className="testimonials-card-img" alt="Customer" />
                    <div className="card-body">
                        <p className='card-curstomer-name'>John Doe</p>
                        <p className='card-curstomer-review'>
                            The food is always delicious and the service is top-notch.
                        </p>
                    </div>
                </article>

                <article className="testimonials-card">
                    <div className="card-rating">
                        <img src={star} alt="Star icon" className="card-rating__star" />
                        <img src={star} alt="Star icon" className="card-rating__star" />
                        <img src={star} alt="Star icon" className="card-rating__star" />
                        <img src={star} alt="Star icon" className="card-rating__star" />
                        <img src={star} alt="Star icon" className="card-rating__star" />
                    </div>
                    <img src={require('../assets/images/customer-1.jpg')} className="testimonials-card-img" alt="Customer" />
                    <div className="card-body">
                        <p className='card-curstomer-name'>John Doe</p>
                        <p className='card-curstomer-review'>
                            The food is always delicious and the service is top-notch.
                        </p>
                    </div>
                </article>

                <article className="testimonials-card">
                    <div className="card-rating">
                        <img src={star} alt="Star icon" className="card-rating__star" />
                        <img src={star} alt="Star icon" className="card-rating__star" />
                        <img src={star} alt="Star icon" className="card-rating__star" />
                        <img src={star} alt="Star icon" className="card-rating__star" />
                        <img src={star} alt="Star icon" className="card-rating__star" />
                    </div>
                    <img src={require('../assets/images/customer-1.jpg')} className="testimonials-card-img" alt="Customer" />
                    <div className="card-body">
                        <p className='card-curstomer-name'>John Doe</p>
                        <p className='card-curstomer-review'>
                            The food is always delicious and the service is top-notch.
                        </p>
                    </div>
                </article>

                <article className="testimonials-card">
                    <div className="card-rating">
                        <img src={star} alt="Star icon" className="card-rating__star" />
                        <img src={star} alt="Star icon" className="card-rating__star" />
                        <img src={star} alt="Star icon" className="card-rating__star" />
                        <img src={star} alt="Star icon" className="card-rating__star" />
                        <img src={star} alt="Star icon" className="card-rating__star" />
                    </div>
                    <img src={require('../assets/images/customer-1.jpg')} className="testimonials-card-img" alt="Customer" />
                    <div className="card-body">
                        <p className='card-curstomer-name'>John Doe</p>
                        <p className='card-curstomer-review'>
                            The food is always delicious and the service is top-notch.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export { Testimonials };