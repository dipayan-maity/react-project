import React, { useState } from 'react';
import { FaChevronDown, FaHeadset } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const faqData = [
    { question: "What materials are used in your products?", answer: "Our products are made from premium, sustainable materials including organic cotton, recycled polyester, and responsibly sourced wood. All materials are carefully selected for durability, comfort, and environmental impact.", category: "product" },
    { question: "How long does shipping take?", answer: "Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business days. International shipping times vary by location but typically range from 7-14 business days. You'll receive a tracking number as soon as your order ships.", category: "shipping" },
    { question: "Are your products eco-friendly?", answer: "Yes! Sustainability is at the core of our business. We use recycled and biodegradable materials, minimize packaging waste, and partner with carbon-neutral shipping providers. Each product comes with information about its environmental impact.", category: "product" },
    { question: "What is your return policy?", answer: "We offer a 30-day hassle-free return policy. If you're not completely satisfied with your purchase, you can return it for a full refund or exchange. Items must be in original condition with tags attached. Return shipping is free for US customers.", category: "returns" },
    { question: "How can I contact customer support?", answer: "Our customer support team is available 24/7 through live chat, email at support@example.com, or phone at 1-800-123-4567. We typically respond to emails within 2 hours and resolve most issues during the first contact.", category: "support" },
    { question: "Do you offer product warranties?", answer: "Yes, all our products come with a minimum 1-year warranty against manufacturing defects. Some premium products have extended warranties of 2-3 years. Warranty details are included with your product documentation.", category: "product" },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredFAQs = faqData.filter(faq => activeCategory === 'all' || faq.category === activeCategory);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <div className="faq-container">
            <SectionTitle
                title="Frequently Asked Questions"
                subtitle="Find answers to the most common questions about our products and services"
                alignment="center"
                showLine={true}
            />

            <div className="faq-categories">
                {['all','product','shipping','returns','support'].map(cat => (
                    <button 
                        key={cat} 
                        className={`category-btn ${activeCategory === cat ? 'active' : ''}`} 
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ')}
                    </button>
                ))}
            </div>

            <div className="faq-list">
                {filteredFAQs.map((faq, index) => (
                    <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            <h3>{faq.question}</h3>
                            <div className="faq-icon"><FaChevronDown /></div>
                        </div>
                        <div className="faq-answer">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="contact-prompt">
                <h3>Still have questions?</h3>
                <p>Can't find the answer you're looking for? Please chat with our friendly team.</p>
                <button className="btn">Contact Support <FaHeadset /></button>
            </div>
        </div>
    );
};

export default FAQ;
