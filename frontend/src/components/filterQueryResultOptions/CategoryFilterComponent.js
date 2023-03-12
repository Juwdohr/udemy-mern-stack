import { Form } from "react-bootstrap";

const CategoryFilterComponent = () => {
    const categories = [
        'Tablets',
        'Monitors',
        'Games',
        "Printers",
        "Software",
        "Cameras",
        "Books",
        "Videos",
    ];

    return (
        <>
            <span className="fw-bold">Category</span>
            <Form>
                {Array.from({ length: 5 }).map((_, idx) => (
                    <div key={idx}>
                        <Form.Check type="checkbox" id={`check-api-${idx}2`}>
                            <Form.Check.Input type="checkbox" isValid />
                            <Form.Check.Label style={{ cursor: 'pointer' }}>Category - {idx}</Form.Check.Label>
                        </Form.Check>
                    </div>
                ))}
            </Form>
        </>
    );
};

export default CategoryFilterComponent;
